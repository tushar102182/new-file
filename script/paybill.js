document.getElementById('pay-btn').addEventListener("click",function(){
const method = getId('pay-method');
if(method === "Select to pay"){
alert("insert a method first");
return;


}
const payId = getId('pay-number');
const payAmount = Number(getId('pay-amount'));
const payPin = getId('pay-pin');
const balance = Number(getText('balance'));


if( payId.length !== 11 || payAmount > balance || payPin !== "1234"){
    alert ('Correct Your Information');
return;

}

if(balance>payAmount){
const newbalance = balance - payAmount;
setBalance(newbalance);
alert("Payment successful! New balance: " + newbalance);
}

     const history = document.getElementById('history-container');
 const historyDiv = document.createElement('div');
 historyDiv.innerHTML =` <div class="bg-base-100 rounded-lg p-4 ">
 <h2 class="text-xl font-bold">Pay Bill</h2>
<p>Pay Bill Successfully ${payAmount}$ at ${new Date()}</p> 

 </div>
  
 
 `;
 history.appendChild(historyDiv);

    

})