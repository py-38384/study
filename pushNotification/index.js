import express from 'express'
import webpush from 'web-push'
import bodyParser from 'body-parser'
import path from 'path'

const app = express()

app.use(express.static(path.resolve("client")))

app.use(bodyParser.json())

const publicVapidKey = 'BF9RP4vI8aN_aXSmtHfh_Bs4m96rfSH2f86HxP5uzbHg8Mdg5BXGhtRk71x66Yjfmi0FKElAyQBx7yAAb1ZJ9Jk'
const privateVapidkey = 'nX806SINz_9rf0Mdhk0H0q9cwyoS7VXhdYGvMSBs4Zk'

webpush.setVapidDetails('mailto:test@test.com', publicVapidKey, privateVapidkey)

app.post('/subscribe', (req, res) => {
    const subscription = req.body
    res.status(201).json({})
    const payload = JSON.stringify({ 'title': 'Push Test' })
    webpush.sendNotification(subscription, payload).catch(err => console.log(err))
})

const port = 500

app.listen(port, () => console.log(`Server started at http://127.0.0.1:${port}`))