// function findBtnOnClicked(){
//    const searchField = document.getElementById("searchField");
//    console.log(searchField.value);
//    const cityName = document.getElementById('cityName');
//    cityName.innerText = searchField.value;
// }


function findBtnOnClicked(){
   const searchField = $("#searchField");
   console.log(searchField.val());

   //Storing typed text to the variable
   var typedText = searchField.val();

   const cityName = $("#cityName");
   cityName.text(typedText)

}