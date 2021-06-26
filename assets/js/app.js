function showProject(id){
    let projectContent = document.getElementById(id+"/section");    
    projectContent.classList.toggle("open-content-container");
}

function closeProjects(){
    let pages = document.getElementsByClassName("content-container");
    for (let page of pages) {
        page.classList.remove("open-content-container");
    }
}

function showPage(id){
    
    let pageContent = document.getElementById(id + "-page");    
    let navButton = document.getElementById(id + "-nav");    

    if(!pageContent.classList.contains("page-open")){
        closePages();        
    }
    document.getElementById("projects-container").classList.toggle("show-projects");
    pageContent.classList.toggle("page-open");  
    navButton.classList.toggle("selected");
}

function closePages(){
    let pages = document.getElementsByClassName("page");
    for (let page of pages) {
        page.classList.remove("page-open");
    }    
    let menuItems = document.getElementsByClassName("menu-item");
    for (let menuItem of menuItems) {
        menuItem.classList.remove("selected");
    }
    document.getElementById("projects-container").classList.add("show-projects");    
}

function closePagesAndProjects(){
    closePages();
    closeProjects();
}