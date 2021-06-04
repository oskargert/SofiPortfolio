window.onload = function () {
    if (localStorage.getItem("hasCodeRunBefore") === null) {
        
        let projectTitles = document.getElementsByClassName("project-title");
        
        left = true;
        Array.from(projectTitles).forEach( (title, index) => {
            
            let parentSize = title.parentElement.clientWidth;
            let titleSize = title.getBoundingClientRect().width 
            
            let leftValue = (left) ? Math.floor(Math.random() * ((parentSize/2)-titleSize)) : Math.floor((Math.random() * ((parentSize/2)-titleSize)) + (parentSize/2));
            left = !left;
            console.log(leftValue)
            // title.style.top =  String(verticalSpaceing*(index+1)) + "px";
            title.style.left = String(leftValue) + "px";
        });
    }
}



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
    let projectContent = document.getElementById(id);    
    if(!projectContent.classList.contains("lightbox-dark-open")){
        closePages();
    }
    projectContent.classList.toggle("lightbox-dark-open");
}

function closePages(){
    let pages = document.getElementsByClassName("lightbox-dark");
    for (let page of pages) {
        page.classList.remove("lightbox-dark-open");
    }
}

function closePagesAndProjects(){
    closePages();
    closeProjects();
}