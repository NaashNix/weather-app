const locationName = $("#locationName");

function searchBtnOnClick(){
   
   $.ajax({
      method : "GET",
      url: " http://api.weatherapi.com/v1/current.json?key=a393728118084352b3571035231005&q=Colombo",
      success : (resp) => {
         console.log(resp);
         locationName.text(resp.location.name);
      }
   });
   
}
