function searchBtnOnClick(){
   
   $.ajax({
      method : "GET",
      url: " http://api.weatherapi.com/v1/current.json?key=a393728118084352b3571035231005&q=Panadura",
      success : (resp) => {
         console.log(resp);
      }
   });
   
}
