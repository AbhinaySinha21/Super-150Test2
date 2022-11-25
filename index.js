let themes=document.querySelectorAll("input[name='theme']");
const URL="https://api.tvmaze.com/search/shows?q=";

themes.forEach((demo)=>{
    demo.addEventListener('click',(e)=>{
        if(e.target.id==="black")
            document.querySelector(".search-pan h1").style.color="white";
        else
            document.querySelector(".search-pan h1").style.color="black";
        document.querySelector(":root").style.setProperty('--main-col',demo.id);
        localStorage.setItem('color',demo.id);
    });
});

window.addEventListener('load',()=>{
    let themeC=localStorage.getItem('color');
    document.querySelector(":root").style.setProperty('--main-col',themeC);
    let check=document.getElementById(themeC);
    check.checked=true;
});

/* API call */
btn=document.getElementById("sit");
btn.addEventListener("click",(e)=>{
    if(document.getElementById("add").childNodes.length>0){
        removeAllChildNodes(document.getElementById("add"));
    }
    e.preventDefault();
    let to_search=document.getElementById("searchL").value;
    document.getElementById("searchL").value="";
    fetch(URL+to_search).then((res)=>{
        return res.json();
    }).then((data)=>{
        displayI(data);
    })
});

function displayI(data){
    data.forEach((demo)=>{
        let div=document.createElement("div");
        let img=document.createElement("img");
        img.setAttribute("src",demo.show.image.original);
        img.setAttribute("width","200px");
        img.setAttribute("height","400px");
        div.appendChild(img);
        div.className="image";
        document.getElementById("add").appendChild(div);
    });
}
function removeAllChildNodes(p) {
    while (p.firstChild) {
        p.removeChild(p.firstChild);
    }
}
