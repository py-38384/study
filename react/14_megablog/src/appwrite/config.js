import { Client, ID, Databases, Storage, Query } from "appwrite";
import conf from "../config/conf";

export class Service{
    constructor(){
        this.client = new Client()
        this.client.setEndpoint(conf.appwrite_url)
                   .setProject(conf.appwrite_project_ID)
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }
    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appwrite_database_ID,
                conf.appwrite_collection_ID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log(`Appwrite service :: create Post ERROR. ${error}`)
        }
    }
    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwrite_database_ID,
                conf.appwrite_collection_ID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log(`Appwrite service :: update Post ERROR. ${error}`)
        }
    }
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwrite_database_ID,
                conf.appwrite_collection_ID,
                slug,
            )
            return true
        } catch (error) {
            console.log(`Appwrite service :: delete Post ERROR. ${error}`)
            return false
        }
    }
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwrite_database_ID,
                conf.appwrite_collection_ID,
                slug,
            )
        } catch (error) {
            console.log(`Appwrite service :: get Post ERROR. ${error}`)
        }
    }
    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.getDocument(
                conf.appwrite_database_ID,
                conf.appwrite_collection_ID,
            )
        } catch (error) {
            console.log(`Appwrite service :: get Posts ERROR. ${error}`)
            return false
        }
    }
}

const service_obj = new Service()
export default service_obj