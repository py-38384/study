import { Client, Account, ID, Avatars, Databases, Storage, Query } from 'react-native-appwrite'
export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    plateform: 'com.opinc.Aora',
    projectId: '6634faee002caa06ae15',
    databaseId: '6635007b0014d403f242',
    userCollectionId: '663500a400304cdb9890',
    videoCollectionId: '663500ee003cfd792719',
    bucketId: '6635027900349fe996da',
}

// Init your react-native SDK
const client = new Client()

client
    .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwriteConfig.projectId) // Your project ID
    .setPlatform(appwriteConfig.plateform) // Your application ID or bundle ID.

const account = new Account(client);
const avatars = new Avatars(client)
const databases = new Databases(client)
const storage = new Storage(client)

// Register User
export const createUser = async (email, password, username) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        )
        if(!newAccount) throw Error
        const avatarURL = avatars.getInitials(username)
        await signIn(email, password)
        const newUser = await databases.createDocument(
             appwriteConfig.databaseId,
             appwriteConfig.userCollectionId,
              ID.unique(),
              {
                  username,
                  email,
                  avatar: avatarURL,
                  accountId: newAccount.$id,
              }
        )
        return newUser
    } catch (error) {
        console.log(`Debug: ${error}`);
        throw new Error(error)
    }
}

export const signIn = async (email, password) => {
    try {
        return await account.createEmailSession(email, password)
    } catch (error) {
        console.log(`Debug: ${error}`);
        throw new Error(error)
    }
} 

export const getCurrentUser = async () => {
    try {
        const currentAccount = await account.get()
        if(!currentAccount) throw Error
        const currentUser = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            [Query.equal('accountId', currentAccount.$id), Query.orderDesc('$createdAt')]
        )
        if(!currentUser) throw Error
        return currentUser.documents[0]
    } catch (error) {
        console.log(`Debug: ${error}`);
        throw new Error(error)
    }
}

export const getAllPosts = async () => {
    try {
        const posts = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.videoCollectionId,
            [Query.orderDesc('$createdAt')]
        )
        return posts
    } catch (error) {
        console.log("Debug: "+error);
        throw new Error(error)
    }
}

export const getLatestPosts = async () => {
    try {
        const posts = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.videoCollectionId,
            [Query.orderDesc('$createdAt',Query.limit(7))]
        )
        return posts
    } catch (error) {
        console.log("Debug: "+error);
        throw new Error(error)
    }
}

export const serachPosts = async (query) => {
    try {
        const posts = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.videoCollectionId,
            [Query.search('title',query.query)]
        )
        return posts
    } catch (error) {
        console.log("Debug: "+error);
        throw new Error(error)
    }
}

export const getUserPosts = async (userId) => {
    try {
        const posts = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.videoCollectionId,
            [Query.equal('users',userId)]
        )
        return posts
    } catch (error) {
        console.log("Debug: "+error);
        throw new Error(error)
    }
}

export const signout = async () => {
    try {
        const session = await account.deleteSession('current')
        return session
    } catch (error) {
        console.log(error);
        throw new Error(error)
    }
}

export const getFilePreview = async (fileId, type) => {
    let fileUrl
    try {
        if (type === 'video'){
            fileUrl = storage.getFileView(appwriteConfig.bucketId, fileId)
        } else if(type === 'image'){
            fileUrl = storage.getFilePreview(appwriteConfig.bucketId, fileId, 2000, 2000, 'top', 100)
        } else {
            throw new Error('Invalid file type')
        }
        if(!fileUrl) throw Error
        return fileUrl
    } catch (error) {
        throw new Error(error)
    }
}

export const uploadFile = async (file, type) => {
    if(!file) return
    const asset = {
        name: file.fileName,
        type: file.mimeType,
        size: file.filesize,
        uri: file.uri
    }
    

    try {
        const uploadFile = await storage.createFile(
            appwriteConfig.bucketId,
            ID.unique(),
            asset
        )
        console.log(uploadFile);
        
        const fileUrl = await getFilePreview(uploadFile.$id, type)
        return fileUrl
    } catch (error) {
        throw new Error(error)
    }
}

export const createVideo = async (form) => {
    try {
        const thumnailUrl = await uploadFile(form.thumbnail, 'image')
        const videoUrl = await uploadFile(form.video, 'video')
        console.log(thumnailUrl);
        console.log(videoUrl);
        const newPost = await databases.createDocument(appwriteConfig.databaseId, appwriteConfig.videoCollectionId,ID.unique(), {
            title: form.title,
            thumbnail: thumnailUrl,
            video: videoUrl,
            prompt: form.prompt,
            users: form.userId
        })
        return newPost
    } catch (error) {
        throw new Error(error)
    }
}