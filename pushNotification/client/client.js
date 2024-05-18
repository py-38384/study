const publicVapidKey = 'BF9RP4vI8aN_aXSmtHfh_Bs4m96rfSH2f86HxP5uzbHg8Mdg5BXGhtRk71x66Yjfmi0FKElAyQBx7yAAb1ZJ9Jk'

if('serviceWorker' in navigator){
    send().catch(err => console.error(err))
}

async function send (){
    console.log('Registering service worker...');
    const register = await navigator.serviceWorker.register('/worker.js', {
        scope: '/'
    })
    console.log('Service worker registered...');
    console.log('Registering Push...');
    const subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
    })
    console.log('Push Registered');
    console.log('Sending Push');
    await fetch('/subscribe', {
        method: 'POST',
        body: JSON.stringify(subscription),
        'headers': {
            'content-type': 'application/json'
        }
    })
    console.log('Push Sent.');
}

function urlBase64ToUint8Array(base64String){
    const padding = '='.repeat((4- base64String.length % 4) % 4)
    const base64 = (base64String + padding).replace(/\-/g,'+').replace(/_/g,'/')
    const rowData = window.atob(base64)
    const outputArray = new Uint8Array(rowData.length)
    for (let i = 0; i < rowData.length; i++) {
        outputArray[i] = rowData.charCodeAt(i) 
    }
    return outputArray
}