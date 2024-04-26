const form = document.querySelector('#img-form')
const img = document.querySelector('#img')
const outputPath = document.querySelector('#output-path')
const filename = document.querySelector('#filename')
const heightInput = document.querySelector('#height')
const widthInput = document.querySelector('#width')

const loadImage = (e) => {
  const file = e.target.files[0]
  if(!isFileImage(file)){
    alertNotify('Please select an image',true)
    return;
  }
  // Get original dimansions
  const img = new Image()
  img.src = file.path
  img.onload = function (){
    widthInput.value = this.width
    heightInput.value = this.height
  }
  form.style.display = 'block'
  filename.innerHTML = file.name
  outputPath.innerHTML = path.join(os.homedir(), 'imageresizer')
}
//Sending image date to main proccess
function sendImage(e){
 e.preventDefault()
 const width = widthInput.value
 const height = heightInput.value
 const imgPath = img.files[0].path
 const outPath = path.join(os.homedir(), 'imageresizer')
 if(width === '' || height === ''){
  alertNotify('Please fill both height and width',true)
  return
 }
 if(!img.files[0]){
  alertNotify('Please upload image',true)
  return
 }
 ipcRenderer.send('image:resize',{
  imgPath,
  width,
  height,
  outPath,
 })
}

//Catch the image:done event
ipcRenderer.on('image:done',() => {
  alertNotify(`Image resized to ${widthInput.value} x ${heightInput.value}`)
})

function alertNotify(message,error = false) {
  Toastify.toast({
    text: message,
    duration: 5000,
    close: false,
    style: {
      background: error ? 'red':'green',
      color: 'white',
      textAlign: 'center'
    }
  })
}

//making sure file is image

const isFileImage = (file) => {
  const acceptedImageTypes = ['image/gif', 'image/png', 'image/jpeg']
  return file && acceptedImageTypes.includes(file['type'])
}

img.addEventListener('change',loadImage)
form.addEventListener('submit',sendImage)