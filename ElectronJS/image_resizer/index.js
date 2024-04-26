const fs = require('fs')
const { app, BrowserWindow, Menu, ipcMain, shell } = require('electron')
const path = require('path')
const ResizeImg = require('resize-img')

const isMac = process.platform === 'darwin'
let mainWindow
//function to create main window
function createMainWindow() {
    mainWindow = new BrowserWindow({
        title: 'Image Resizer',
        width: 500,
        height: 600,
        webPreferences: {
            contextIsolation: true,
            nodeIntegration: true,
            preload: path.join(__dirname, 'preload.js')
        }
    })
    // Open devtools if need - to open just uncomment next line
    // mainWindow.webContents.openDevTools();

    mainWindow.loadFile('./render/index.html')
}
// create about window 

function createAboutWindow() {
    const aboutWindow = new BrowserWindow({
        title: 'About Image Resizer',
        width: 300,
        height: 300
    })
    // Open devtools if in dev mode
    aboutWindow.loadFile('./render/about.html')
}

// const menu = [
//     {
//         label: 'File',
//         submenu: [
//             {
//                 label: 'Quit',
//                 click: () => app.quit(),
//                 accelerator: 'CmdOrCtrl+W'
//             }
//         ]
//     }
// ]
const menu = [
    ...(isMac ? [
        {
            label: app.name,
            submenu: [
                {
                    label: 'About',
                    click: () => createAboutWindow()
                }
            ]
        }
    ]:[]),
    {
       role: 'fileMenu',
    },
    ...(!isMac?[{
        label: 'Help',
        submenu: [
            {
                label: 'About',
                click: () => createAboutWindow()
            }
        ]
    }]:[])
]

//responce to ipc renderer resize

ipcMain.on('image:resize',(e, options) => {
    resizeImage(options)
})
//Resize the image
async function resizeImage({imgPath, width, height, outPath}){
    try {
        const newPath = await ResizeImg(fs.readFileSync(imgPath),{
            width: +width,
            height: +height
        })
        const filename = path.basename(imgPath)

        // create dest folder if not exists
        if(!fs.existsSync(outPath)){
            fs.mkdirSync(outPath)
        }

        // write file to the destination
        fs.writeFileSync(path.join(outPath, filename), newPath)

        //send success to render
        mainWindow.webContents.send('image:done')
        //Open dest folder
        shell.openPath(outPath)
    } catch (error) {
        console.log(error);
        
    }
}
//App is ready
app.whenReady().then(()=>{
    createMainWindow()
    //implementing menu
    const mainMenu = Menu.buildFromTemplate(menu)
    Menu.setApplicationMenu(mainMenu)
    //Remove mainWindow from memory on close
    mainWindow.on('closed',() => (mainWindow == null))
    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().length === 0){
            createMainWindow()
        }
    })
})
.catch(()=>{})
.finally(()=>{})

app.on('window-all-closed', () => {
    if(!isMac){
        app.quit()
    }
})