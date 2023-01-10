let colorArray = ["#2596be","rgb(37, 150, 190)","rgba(196,236,235,255)"];
let color = document.querySelector(".color");
button = document.getElementById("btn");
button.addEventListener("click",function(){
    const randomcolor =  Math.floor(Math.random()*colorArray.length);
    document.body.style.backgroundColor =colorArray[randomcolor];
       color.textContent = colorArray [ Math.floor(Math.random()*colorArray.length)];
})