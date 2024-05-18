import express from 'express'
import path from 'path'
// import dotenv from 'dotenv'
// dotenv.config()

const app = express()
const port = process.env.PORT || 5000

app.use(express.static(path.resolve('public')))

app.get('/',(req,res) => {
    res.send("Hallo world piyal")
})

app.get('/about',(req,res) => {
    res.send("Hallo world About")
})

app.get('/api/:slug',(req,res) => {
    console.log(req.params.slug);
    res.redirect('/')
})
app.get('/api/',(req,res) => {
    console.log(req.query.name);
    res.redirect('/')
})

app.use((req, res, next)=>{
    const error = new Error('Not found')
    next(error)
})

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`))