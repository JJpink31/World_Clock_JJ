function updateTime(){
//san juan://
let sanJuanElement=document.querySelector("#sanJuan");
let sanJuanDateElement=sanJuanElement.querySelector(".date");
let sanJuanTimeElement=sanJuanElement.querySelector(".time");
let sanJuanTime=moment().tz("America/Argentina/San_Juan");
 sanJuanDateElement.innerHTML=moment().format("MMMM Do,  YYYY");
 sanJuanTimeElement.innerHTML=sanJuanTime.format("h:mm:ss [<small>]A[</small>]");

//bankok://
let bangkokElement=document.querySelector("#bangkok");
let bangokokDateElement=bangkokElement.querySelector(".date");
let bangkokTimeElement=bangkokElement.querySelector(".time");
let bangkokTime=moment().tz("Asia/Bangkok");
 bangokokDateElement.innerHTML=moment().format("MMMM Do,  YYYY");
 bangkokTimeElement.innerHTML=bangkokTime.format("h:mm:ss [<small>]A[</small>]");

//new salem://
let newSalemElement=document.querySelector("#newSalem");
let newSalemDateElement=newSalemElement.querySelector(".date");
let newSalemTimeElement=newSalemElement.querySelector(".time");
let newSalemTime=moment().tz("America/North_Dakota/New_Salem");
  newSalemDateElement.innerHTML=moment().format("MMMM Do,  YYYY");
  newSalemTimeElement.innerHTML=newSalemTime.format("h:mm:ss [<small>]A[</small>]");

//dublin://
let dublinElement=document.querySelector("#dublin");
let dublinDateElement=dublinElement.querySelector(".date");
let dublinTimeElement=dublinElement.querySelector(".time");
let dublinTime=moment().tz("Europe/Dublin");
  dublinDateElement.innerHTML=moment().format("MMMM Do,  YYYY");
  dublinTimeElement.innerHTML=dublinTime.format("h:mm:ss [<small>]A[</small>]");

}


updateTime();
setInterval(updateTime,1000);



function updateCity(event){
  let cityTimezone=event.target.value;
  if (cityTimezone === "current"){
    cityTimezone = moment.tz.guess();
  }

  let cityName=cityTimezone.replace("_",).split("/")[1];
  let citytime=moment().tz(cityTimezone);
  let cityElement=document.querySelector("#cities");
  cityElement.innerHTML= `
     <div class="city"><div>
       <h2>${cityName}</h2>
            <div class="date">${citytime.format("MMMM Do,  YYYY")}</div>
          </div>
          <div>
            <div class="time">${citytime.format("h:mm:ss")}<small>${citytime.format(" A ")}</small></div>
          </div>
        </div>
        <a href="index.html">Back to Homepage</a>
        `
        ;
}

let citySelect=document.querySelector("#city");
citySelect.addEventListener("change",updateCity);


