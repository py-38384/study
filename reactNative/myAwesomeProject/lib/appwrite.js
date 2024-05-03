import { Client, Account, ID, Avatars, Databases, Query } from 'react-native-appwrite'
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
        const avatarURL = avatars.getInitials()
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
            [Query.equal('accountId', currentAccount.$id)]
        )
        if(!currentUser) throw Error
        return currentUser.documents[0]
    } catch (error) {
        console.log(`Debug: ${error}`);
        throw new Error(error)
    }
}