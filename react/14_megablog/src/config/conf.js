const conf = {
    appwrite_url: String(import.meta.env.VITE_APPWRITE_URL),
    appwrite_project_ID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwrite_database_ID: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwrite_collection_ID: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwrite_bucket_ID: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}

export default conf