function updateTime(){
let sanJuanElement=document.querySelector("#sanJuan");
let sanJuanDateElement=sanJuanElement.querySelector(".date");
let sanJuanTimeElement=sanJuanElement.querySelector(".time");
let sanJuanTime=moment().tz("America/Argentina/San_Juan");
 sanJuanDateElement.innerHTML=moment().format("MMMM Do,  YYYY");
 sanJuanTimeElement.innerHTML=sanJuanTime.format("h:mm:ss [<small>]A[</small>]");


let bangkokElement=document.querySelector("#bangkok");
let bangokokDateElement=bangkokElement.querySelector(".date");
let bangkokTimeElement=bangkokElement.querySelector(".time");
let bangkokTime=moment().tz("Asia/Bangkok");
 bangokokDateElement.innerHTML=moment().format("MMMM Do,  YYYY");
 bangkokTimeElement.innerHTML=bangkokTime.format("h:mm:ss [<small>]A[</small>]");


let newSalemElement=document.querySelector("#newSalem");
let newSalemDateElement=newSalemElement.querySelector(".date");
let newSalemTimeElement=newSalemElement.querySelector(".time");
let newSalemTime=moment().tz("America/North_Dakota/New_Salem");
  newSalemDateElement.innerHTML=moment().format("MMMM Do,  YYYY");
  newSalemTimeElement.innerHTML=newSalemTime.format("h:mm:ss [<small>]A[</small>]");


let dublinElement=document.querySelector("#dublin");
let dublinDateElement=dublinElement.querySelector(".date");
let dublinTimeElement=dublinElement.querySelector(".time");
let dublinTime=moment().tz("Europe/Dublin");
  dublinDateElement.innerHTML=moment().format("MMMM Do,  YYYY");
  dublinTimeElement.innerHTML=dublinTime.format("h:mm:ss [<small>]A[</small>]");
}


updateTime();
setInterval(updateTime,1000);