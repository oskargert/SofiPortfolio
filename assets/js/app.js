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
    let pageContent = document.getElementById(id);    

    if(!pageContent.classList.contains("page-open")){
        closePages();        
    }
    document.getElementById("projects-container").classList.toggle("show-projects");
    pageContent.classList.toggle("page-open");  
}

function closePages(){
    let pages = document.getElementsByClassName("page");
    for (let page of pages) {
        page.classList.remove("page-open");
    }    
    document.getElementById("projects-container").classList.add("show-projects");    
}

function closePagesAndProjects(){
    closePages();
    closeProjects();
}