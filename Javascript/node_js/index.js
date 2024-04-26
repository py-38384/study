import http from 'http'

const PORT = 5000

const server = http.createServer((req, res)=>{
    res.setHeader('Content-Type','text/html')
    res.end('<h1>Hello world</h1>')
})

server.listen(PORT, ()=>{
    const url = `http://127.0.0.1:${PORT}`
    console.log(`Server running on ${url}`)
})