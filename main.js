
console.log('hello')
function submit2Clicked() {
    let Pnt = document.getElementById("point1"); 
    Pnt.classList.add("navy");
}

document.getElementsByClassName("point").addEventListener('click', submit2Clicked);