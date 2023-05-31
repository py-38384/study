let searchBar = document.querySelector(".search input");
let userList = document.querySelector(".user .userlist");
searchBar.onkeyup = () => {
    if(searchBar.value == ""){
        searchBar.classList.remove("searching");
    }else{
        searchBar.classList.add("searching");
    }
    let searchTerm = searchBar.value;
    let param = "SearchTerm=" + searchTerm;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "dynamic/dynamicSearch.php", true);
    xhr.onload = () => {
        if (xhr.status === 200) {
            let data = xhr.response;
            userList.innerHTML = data;
        }
    }
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(param);
}
setInterval(GetUserList,500);

function GetUserList(){
    let userList = document.querySelector(".user .userlist");
    let xhr = new XMLHttpRequest();
    xhr.open("GET","dynamic/dynamicUserlist.php",true);
    xhr.onload = () => {
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.readyState == 4 && xhr.status == 200) {
                let data = xhr.response;
                if(searchBar.classList.contains("searching")){}else{
                    userList.innerHTML = data;
                }
            }
        }
    }
    xhr.send();
}