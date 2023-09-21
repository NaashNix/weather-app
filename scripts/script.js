function searchBtnOnClick(){
   
   $.ajax({
      method : "GET",
      url : "db/db.txt",
      success : (resp) => {
         console.log(resp);
      }
   });
   
}
