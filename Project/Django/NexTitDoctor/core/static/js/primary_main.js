
let sidebar_wrapper = document.querySelector('.sidebar-wrapper');
let sidebar = document.querySelector('.sidebar-wrapper .sidebar');
let sidebar_elements = document.querySelectorAll(`
    .sidebar-wrapper .sidebar  .sidebar-container .top-container .band,
    .sidebar-wrapper .sidebar  .sidebar-container .sidebar-main-container .side-bar-item span,
    .sidebar-wrapper .sidebar  .sidebar-container .sidebar-main-container .side-bar-item-div .left-section span,
    .sidebar-wrapper .sidebar  .sidebar-container .sidebar-main-container .side-bar-item-div .right-section img,
    .sidebar-wrapper .sidebar .sidebar-primary-contents-container
    `);
let toggle_sidebar_button = document.querySelector('.sidebar-wrapper .sidebar .sidebar-primary-contents-container .toggle-sidebar-button');
let toggle_sidebar_button_edge_bars = document.querySelectorAll(`
.sidebar-wrapper .sidebar .sidebar-primary-contents-container .toggle-sidebar-button span:nth-child(1),
.sidebar-wrapper .sidebar .sidebar-primary-contents-container .toggle-sidebar-button span:nth-child(3)
`);
let main_container = document.querySelector('.main-container');
let sidebar_toggle_flag = true;
toggle_sidebar_button.addEventListener('click',(e)=>{
    if(sidebar_toggle_flag){
        main_container.style.marginLeft = '350px';
        sidebar_toggle_flag = false;
        toggle_sidebar_button_edge_bars.forEach((e)=>{
            e.style.width = '50%';
        })
    }else{
        sidebar_toggle_flag = true;
        toggle_sidebar_button_edge_bars.forEach((e)=>{
            e.style.width = '100%';
        })
        main_container.style.marginLeft = '80px';
    }
})
sidebar_wrapper.addEventListener('mouseenter',(e)=>{
    sidebar.style.width = '350px';
    setTimeout(()=>{
        sidebar_elements.forEach((element)=>{
            element.style.display = 'block';
        });
    },150)
})
sidebar_wrapper.addEventListener('mouseleave',(e)=>{
    if(sidebar_toggle_flag){
        sidebar_elements.forEach((element)=>{
            element.style.display = 'none';
        })
        setTimeout(()=>{
            sidebar.style.width = '80px';
        },190)
    }
})

// post-job-wizard

let post_job_zones = document.querySelectorAll('.post-job-wizard .location-container .zone .zone-item-div input[type=radio]');
post_job_zones.forEach((element)=>{
    element.addEventListener('click',(e)=>{
        let all_zone_countries = document.querySelectorAll('.post-job-wizard .location-container .countries');
        all_zone_countries.forEach((countries_div)=>{
            countries_div.style.display = 'none'
        })
        if(element.value === "International"){
            let zone_international = document.querySelector('.post-job-wizard .location-container .zone-international');
            zone_international.style.display = 'flex';
        }else if(element.value === "Asia"){
            let zone_asia = document.querySelector('.post-job-wizard .location-container .zone-asia');
            zone_asia.style.display = 'flex';
        }else if(element.value === "USA & Western"){
            let zone_USA_and_western = document.querySelector('.post-job-wizard .location-container .zone-USA-and-western');
            zone_USA_and_western.style.display = 'flex';
        }else if(element.value === "Africa"){
            let zone_africa = document.querySelector('.post-job-wizard .location-container .zone-africa');
            zone_africa.style.display = 'flex';
        }else if(element.value === "Muslim Countries"){
            let zone_muslim_countries = document.querySelector('.post-job-wizard .location-container .zone-muslim-countries');
            zone_muslim_countries.style.display = 'flex';
        }else if(element.value === "Europe West"){
            let zone_europe_west = document.querySelector('.post-job-wizard .location-container .zone-europe-west');
            zone_europe_west.style.display = 'flex';
        }else if(element.value === "Europe East"){
            let zone_europe_east = document.querySelector('.post-job-wizard .location-container .zone-europe-east');
            zone_europe_east.style.display = 'flex';
        }else{
            let zone_latin_america = document.querySelector('.post-job-wizard .location-container .zone-latin-america');
            zone_latin_america.style.display = 'flex';
        }
    })
})

let job_categories = document.querySelectorAll('.post-job-wizard .category-section .job-categories .category-item-div input[type=radio]');
job_categories.forEach((category)=>{
    category.addEventListener('click',(event)=>{
        let all_job_subcategories = document.querySelectorAll('.post-job-wizard .category-section .subcategories');
        all_job_subcategories.forEach((subcategory)=>{
            subcategory.style.display = 'none';
        })
        if(category.value === "Ads Click"){
            let selected_subcategoris = document.querySelector('.post-job-wizard .category-section .Ads-Click-subcategoris');
            selected_subcategoris.style.display = 'flex';
        }
        else if(category.value === "Answers"){
            let selected_subcategoris = document.querySelector('.post-job-wizard .category-section .Answers-subcategoris');
            selected_subcategoris.style.display = 'flex';
        }
        else if(category.value === "Assigenment"){
            let Assigenment_subcategoris = document.querySelector('.post-job-wizard .category-section .Assigenment-subcategoris');
            Assigenment_subcategoris.style.display = 'flex';

        }else if(category.value === "Blog"){
            let Blog_subcategoris = document.querySelector('.post-job-wizard .category-section .Blog-subcategoris');
            Blog_subcategoris.style.display = 'flex';
            
        }else if(category.value === "Comment"){
            let Comment_subcategoris = document.querySelector('.post-job-wizard .category-section .Comment-subcategoris');
            Comment_subcategoris.style.display = 'flex';
        }
        else if(category.value === "Computer Programs"){
            let Computer_Programs_subcategoris = document.querySelector('.post-job-wizard .category-section .Computer-Programs-subcategoris');
            Computer_Programs_subcategoris.style.display = 'flex';
        }
        else if(category.value === "Discord"){
            let Discord_subcategoris = document.querySelector('.post-job-wizard .category-section .Discord-subcategoris');
            Discord_subcategoris.style.display = 'flex';
        }
        else if(category.value === "Edit"){
            let Edit_subcategoris = document.querySelector('.post-job-wizard .category-section .Edit-subcategoris');
            Edit_subcategoris.style.display = 'flex';
        }
        else if(category.value === "Facebook"){
            let Facebook_subcategoris = document.querySelector('.post-job-wizard .category-section .Facebook-subcategoris');
            Facebook_subcategoris.style.display = 'flex';
        }
        else if(category.value === "Facebook Invite"){
            let Facebook_Invite_subcategoris = document.querySelector('.post-job-wizard .category-section .Facebook-Invite-subcategoris');
            Facebook_Invite_subcategoris.style.display = 'flex';
        }
        else if(category.value === "Gmail Account"){
            let Gmail_Account_subcategoris = document.querySelector('.post-job-wizard .category-section .Gmail-Account-subcategoris');
            Gmail_Account_subcategoris.style.display = 'flex';
        }
        else if(category.value === "Graphics Design"){
            let Graphics_Design_subcategoris = document.querySelector('.post-job-wizard .category-section .Graphics-Design-subcategoris');
            Graphics_Design_subcategoris.style.display = 'flex';
        }
        else if(category.value === "Instagram"){
            let Instagram_subcategoris = document.querySelector('.post-job-wizard .category-section .Instagram-subcategoris');
            Instagram_subcategoris.style.display = 'flex';
        }
        else if(category.value === "Kyc Submit"){
            let Kyc_Submit_subcategoris = document.querySelector('.post-job-wizard .category-section .Kyc-Submit-subcategoris');
            Kyc_Submit_subcategoris.style.display = 'flex';
        }
        else if(category.value === "Linkedin"){
            let Linkedin_subcategoris = document.querySelector('.post-job-wizard .category-section .Linkedin-subcategoris');
            Linkedin_subcategoris.style.display = 'flex';
        }
        else if(category.value === "Medium"){
            let Medium_subcategoris = document.querySelector('.post-job-wizard .category-section .Medium-subcategoris');
            Medium_subcategoris.style.display = 'flex';
        }
        else if(category.value === "Mobile Application"){
            let Mobile_Application_subcategoris = document.querySelector('.post-job-wizard .category-section .Mobile-Application-subcategoris');
            Mobile_Application_subcategoris.style.display = 'flex';
        }
        else if(category.value === "Others"){
            let Others_subcategoris = document.querySelector('.post-job-wizard .category-section .Others-subcategoris');
            Others_subcategoris.style.display = 'flex';
        }
        else if(category.value === "Promotion"){
            let Promotion_subcategoris = document.querySelector('.post-job-wizard .category-section .Promotion-subcategoris');
            Promotion_subcategoris.style.display = 'flex';
        }
        else if(category.value === "Reddit"){
            let Reddit_subcategoris = document.querySelector('.post-job-wizard .category-section .Reddit-subcategoris');
            Reddit_subcategoris.style.display = 'flex';
        }
        else if(category.value === "Reel-/-Short"){
            let Reel_Short_subcategoris = document.querySelector('.post-job-wizard .category-section .Reel-Short-subcategoris');
            Reel_Short_subcategoris.style.display = 'flex';
        }
        else if(category.value === "Refer Program"){
            let Refer_Program_subcategoris = document.querySelector('.post-job-wizard .category-section .Refer-Program-subcategoris');
            Refer_Program_subcategoris.style.display = 'flex';
        }
        else if(category.value === "Review"){
            let Review_subcategoris = document.querySelector('.post-job-wizard .category-section .Review-subcategoris');
            Review_subcategoris.style.display = 'flex';
        }
        else if(category.value === "Search / Click"){
            let Search_Click_subcategoris = document.querySelector('.post-job-wizard .category-section .Search-Click-subcategoris');
            Search_Click_subcategoris.style.display = 'flex';
        }
        else if(category.value === "Share"){
            let Share_subcategoris = document.querySelector('.post-job-wizard .category-section .Share-subcategoris');
            Share_subcategoris.style.display = 'flex';
        }
        else if(category.value === "Sign Up"){
            let Sign_Up_subcategoris = document.querySelector('.post-job-wizard .category-section .Sign-Up-subcategoris');
            Sign_Up_subcategoris.style.display = 'flex';
        }
        else if(category.value === "Story"){
            let Story_subcategoris = document.querySelector('.post-job-wizard .category-section .Story-subcategoris');
            Story_subcategoris.style.display = 'flex';
        }
        else if(category.value === "Survey"){
            let Survey_subcategoris = document.querySelector('.post-job-wizard .category-section .Survey-subcategoris');
            Survey_subcategoris.style.display = 'flex';
        }
        else if(category.value === "Telegram"){
            let Telegram_subcategoris = document.querySelector('.post-job-wizard .category-section .Telegram-subcategoris');
            Telegram_subcategoris.style.display = 'flex';
        }
        else if(category.value === "Tik-tok"){
            let Tik_tok_subcategoris = document.querySelector('.post-job-wizard .category-section .Tik-tok-subcategoris');
            Tik_tok_subcategoris.style.display = 'flex';
        }
        else if(category.value === "Twitter"){
            let Twitter_subcategoris = document.querySelector('.post-job-wizard .category-section .Twitter-subcategoris');
            Twitter_subcategoris.style.display = 'flex';
        }
        else if(category.value === "Typing"){
            let Typing_subcategoris = document.querySelector('.post-job-wizard .category-section .Typing-subcategoris');
            Typing_subcategoris.style.display = 'flex';
        }
        else if(category.value === "Views"){
            let Views_subcategoris = document.querySelector('.post-job-wizard .category-section .Views_subcategoris');
            Views_subcategoris.style.display = 'flex';
        }
        else if(category.value === "Visitor"){
            let Visitor_subcategoris = document.querySelector('.post-job-wizard .category-section .Visitor-subcategoris');
            Visitor_subcategoris.style.display = 'flex';
        }
        else if(category.value === "Website"){
            let Website_subcategoris = document.querySelector('.post-job-wizard .category-section .Website-subcategoris');
            Website_subcategoris.style.display = 'flex';
        }
        else if(category.value === "Write an Article"){
            let Write_an_Article_subcategoris = document.querySelector('.post-job-wizard .category-section .Write-an-Article-subcategoris');
            Write_an_Article_subcategoris.style.display = 'flex';
        }
        else{
            let YouTube_Toffe_subcategoris = document.querySelector('.post-job-wizard .category-section .YouTube-Toffe-subcategoris');
            YouTube_Toffe_subcategoris.style.display = 'flex';
        }
    })
})

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