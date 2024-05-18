console.log('Service Worker Loaded')

self.addEventListener('push', e => {
    const data = e.data.json()
    console.log('Push Received')
    self.registration.showNotification(data.title, {
        body: 'Notified by Piyal Hossein',
        icon: 'https://lh3.googleusercontent.com/a/ACg8ocLSMRtHNkT0yCNvX1LCHXJTh3FL5e1PurglSZwmJQMHh-ExZyk7=s317-c-no'
    })
})