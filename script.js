window.addEventListener("load", loaded())

function loaded(){
    let res = document.querySelector("#Resume");
    res.style.hidden = true;
}

let resB = document.querySelector("#resumeButton")
let res = document.querySelector("#Resume");
res.addEventListener("click",()=>{
    res.style.hidden = false;
})