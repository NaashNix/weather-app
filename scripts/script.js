function searchBtnOnClick(){
   const httpReq = new XMLHttpRequest();

   httpReq.open("GET","db/db.txt");
   
   httpReq.send();
   
   // If ReadystateValue == 4 
   httpReq.onreadystatechange = () => {
      if(httpReq.readyState == 4 ){
         console.log(httpReq.responseText);
      }
   }
   console.log(httpReq.responseText);
   


}
