let image_upload_containers = document.querySelectorAll('.image-upload-container')

image_upload_containers.forEach((image_upload_container)=>{
    let image_upload_button = image_upload_container.children[1].children[0];
    image_upload_button.addEventListener('change',(event)=>{
        let chosen_image = image_upload_container.children[0].children[0].children[1];
        let image_name = image_upload_container.children[0].children[0].children[2];
        let image_parent = chosen_image.parentElement
        let iamge_cross_button = image_parent.children[0];
        let reader = new FileReader();
        console.log(typeof image_upload_button.files[0]);
        if(image_upload_button.files[0]){
            reader.readAsDataURL(image_upload_button.files[0]);
            reader.addEventListener('load',(e)=>{
                chosen_image.setAttribute("src",reader.result);
            })
            iamge_cross_button.style.display = 'flex';
            let full_image_name = image_upload_button.files[0].name;
            let shortify_iamge_name = '';
            if(full_image_name.length>45){
                shortify_iamge_name = full_image_name.slice(0,30)+'......'+full_image_name.slice((full_image_name.length-10));
            }else{
                shortify_iamge_name=full_image_name
            }
            image_name.textContent = shortify_iamge_name;
        }
        iamge_cross_button.addEventListener('click',(e)=>{
            let image_upload_button = image_upload_container.children[1].children[0];
            let chosen_image = image_upload_container.children[0].children[0].children[1];
            let image_name = image_upload_container.children[0].children[0].children[2];
            image_upload_button.value = '';
            chosen_image.removeAttribute('src');
            image_name.textContent = '';
            iamge_cross_button.style.display = 'none';
        })
    })
})