
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
let post_job_zone = document.querySelector('.post-job-wizard .location-container .zone .zone-item-div input[name=zone]:checked');