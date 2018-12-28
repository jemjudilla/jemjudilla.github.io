
 function doPayment() {
 
 var p = parseFloat(document.getElementById('principalinput').value);
 var r = parseFloat(document.getElementById('rateinput').value);
 var y = parseFloat(document.getElementById('nofyearsinput').value);
 var n = parseFloat(document.getElementById('pperyearinput').value);
  var npayments = n*y;
 var message = computePayment(p, r, y, n);
document.getElementById('paymentMonthly').value = message;
   
}

function computePayment(principal, annualRate, years, periodsPerYear) {
 var a = principal;
 var r = annualRate/periodsPerYear;
 var n = years*periodsPerYear;
 var payment = (a*r)/(1-(Math.pow((1+r),-n)));
    payment = parseFloat(payment).toFixed(2);
 return payment; 
}


function doBalance() {
 var a = parseFloat(document.getElementById('principalinput').value);
 var r = parseFloat(document.getElementById('rateinput').value);
 var period = parseFloat(document.getElementById('pperyearinput').value);
 var n = parseFloat(document.getElementById('paidtodate').value);
 var y = parseFloat(document.getElementById('nofyearsinput').value);
 

 
 
 var message = computeBalance(a, r, y,period,n);
 
 document.getElementById('balance').value = message;

    




function computeBalance(principal, annualRate, years, periodsPerYear, numberOfPaymentsPaidToDate) {
 var a = principal;
 var r = annualRate/periodsPerYear;
 var n = numberOfPaymentsPaidToDate;
 var x = years*periodsPerYear;
 var paymentpermonth = (a*r)/(1-(Math.pow((1+r),-x)));
 var p = paymentpermonth.toFixed(2)
 var balance = a*Math.pow((1+r),n) - ((p*(Math.pow((1+r),n)-1))/r);
 var amount = balance.toFixed(2);
 return amount;
}
    
    

 

}