function showProject(id){
    let projectContent = document.getElementById(id+"/section");    
    projectContent.classList.toggle("open-content-container");
}

function closeProjects(){
    let pages = document.getElementsByClassName("closed-content-container");
    for (let page of pages) {
        page.classList.remove("open-content-container");
    }
}

function showPage(id){
    let pageContent = document.getElementById(id);    

    if(!pageContent.classList.contains("lightbox-dark-open")){
        closePages();        
    }
    pageContent.classList.toggle("lightbox-dark-open");
    document.getElementById("projects-container").classList.toggle("hide-projects");
}

function closePages(){
    let pages = document.getElementsByClassName("lightbox-dark");
    for (let page of pages) {
        page.classList.remove("lightbox-dark-open");
    }    
    document.getElementById("projects-container").classList.remove("hide-projects");    
}

function closePagesAndProjects(){
    closePages();
    closeProjects();
}