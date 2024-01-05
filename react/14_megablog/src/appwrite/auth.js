import { Client, Account, ID } from "appwrite";
import conf from "../config/conf";

class AuthService{
    constructor(){
        this.client = new Client()
        this.client.setEndpoint(conf.appwrite_url)
                   .setProject(conf.appwrite_project_ID)
        this.account = new Account(this.client)
    }
    async createAccount({email, password, name}){
        try{
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if (userAccount) {
                return this.login({email, password})
            } else {
                return userAccount
            }
        }catch(error){
            console.log(`Appwrite service :: create Account ERROR. ${error}`)
        }
    }

    async login({email, password}){
        try{
            return await this.account.createEmailSession(email, password)
        }catch(error){
            console.log(`Appwrite service :: login ERROR. ${error}`)
        }
    }

    async getCurrentUser(){
        try{
             return await this.account.get()
        } catch (error) {
            console.log(`Appwrite service :: getCurrentUser ERROR. ${error}`)
        }
        return null
    }
    
    async logout(){
        try {
            await this.account.deleteSessions()
        } catch (error) {
            console.log(`Appwrite service :: logout ERROR. ${error}`)
        }
    }
}

const auth_service_obj = new AuthService()

export default auth_service_obj