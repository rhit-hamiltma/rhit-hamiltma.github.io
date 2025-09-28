window.addEventListener("load", loaded)

let resumeOn = 0;
let portfolioOn = 0;

function loaded(){
    let res = document.querySelector("#Resume");
    let por = document.querySelector("#Portfolio");
    res.style.visibility = "hidden";
    por.style.visibility = "hidden";
    setupEventListeners();
}


function setupEventListeners(){
    let resB = document.querySelector("#resumeButton")
    let res = document.querySelector("#Resume");  
    let porB = document.querySelector("#portfolioButton")
    let por = document.querySelector("#Portfolio");  
    let foot = document.querySelector("#links");
    let parent = res.parentNode;
    parent.insertBefore(foot,res);
    resB.addEventListener("click",()=>{
    portfolioOn=0;
    por.style.visibility = "hidden";
    if (resumeOn == 0) {
        res.style.visibility = "visible";
        resumeOn++;
        parent.insertBefore(res,por)
    }
    else{
        res.style.visibility = "hidden";
        resumeOn--;
    }

    
    parent.insertBefore(res,por)
    });
    porB.addEventListener("click",()=>{
    resumeOn=0;
    res.style.visibility = "hidden";
    if (portfolioOn == 0) {
        por.style.visibility = "visible";
        portfolioOn++;
        parent.insertBefore(por,res)
    }
    else{
        por.style.visibility = "hidden";
        portfolioOn--;
    }
    });
 
}
