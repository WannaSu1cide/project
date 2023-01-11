let colorArray = ["https://scontent.fhan14-1.fna.fbcdn.net/v/t1.15752-9/322734716_1212057689662991_3728105437173909097_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=TXjmPKaKPQIAX-3aEmN&_nc_ht=scontent.fhan14-1.fna&oh=03_AdT9gw_G9muVk6FzUGW5CSln2d66zpCCbjP16rG8kLSfnw&oe=63E4EBD7",
"https://scontent.fhan14-2.fna.fbcdn.net/v/t1.15752-9/321422547_696414998762216_5908096713700972520_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_ohc=5HWMZnqNvz8AX9Q564o&tn=WAvtkJ7IiDQjElIM&_nc_ht=scontent.fhan14-2.fna&oh=03_AdR9L6kECIbuNeU_ffTP-GXMgHFckoH47_5VMPughmT_Fg&oe=63E4CDD7",
"https://scontent.fhan14-2.fna.fbcdn.net/v/t1.15752-9/324767248_530100968911416_356412816962985122_n.png?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=svKyNwbR428AX-ewoaY&_nc_ht=scontent.fhan14-2.fna&oh=03_AdREkHDAzz6JVL_9R5b0w12UjsAaalMvAePWGES1xj695A&oe=63E4D5D3"];
let color = document.querySelector(".color");
button = document.getElementById("btn");
button.addEventListener("click",function(){

    const randomcolor =  Math.floor(Math.random()*colorArray.length);
    document.getElementById("img").src = `${colorArray[randomcolor]}`
    // document.body.style.backgroundImage ="url('colorArray[randomcolor]')";
       img.textContent = colorArray[randomcolor];
})