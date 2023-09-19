function findBtnOnClicked(){
   const searchField = document.getElementById("searchField");
   console.log(searchField.value);
   const cityName = document.getElementById('cityName');
   cityName.innerText = searchField.value;
}