 var section = document.querySelector('section');

 var requestURL ='https://judilla-jemifer.github.io/TheMountainSpoke/data/servicedata.json';
 var request = new XMLHttpRequest();
 request.open('GET', requestURL);
 request.responseType = 'json';
 request.send();
    
 request.onload = function() {
     var servicePrice = request.response;
     showTable(servicePrice);
 }
 
 function showTable(jsonObj) {
     var prices = jsonObj['prices'];
         
       for(var i = 0; i<prices.length; i++) {
         var myTable = document.createElement('table')
         var body = document.createElement('tbody')
         var row = document.createElement('tr');
         var svcName = document.createElement('td');
         var svcPrice = document.createElement('td');
        
         
         svcName.textContent = prices[i].name;
         svcPrice.textContent = prices[i].serviceprice;
       
         
         myTable.appendChild(body)    
         myTable.appendChild(row) 
         myTable.appendChild(svcName) 
         myTable.appendChild(svcPrice) 
    
         
        section.appendChild(myTable);
     }
 }