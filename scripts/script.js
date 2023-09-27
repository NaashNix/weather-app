const locationName = $("#locationName");


const successCallBack = (position) => {
   console.log(position);
   setLocationInMap(position.coords.latitude,position.coords.longitude);
};

const errorCallBack = (error) => {
   console.log(error);
}

getLocation();

function getLocation(){
   navigator.geolocation.getCurrentPosition(successCallBack,errorCallBack);
}




function searchBtnOnClick(){
   
   $.ajax({
      method : "GET",
      url: " http://api.weatherapi.com/v1/current.json?key=a393728118084352b3571035231005&q=Panadura",
      success : (resp) => {
         console.log("Latitude : ",resp.location.lat);
         console.log("Longitude : ",resp.location.lon);
         setLocationInMap(resp.location.lat, resp.location.lon);
      }
      
   });
   
}

var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
   maxZoom: 19,
   attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const marker = L.marker([0, 0]).addTo(map);

function setLocationInMap(lng,ltd){
   
   marker.setLatLng([lng, ltd]).update();
   map.setView([lng, ltd], 15);
}
