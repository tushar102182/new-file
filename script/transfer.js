document.getElementById("transfer-btn").addEventListener("click",function(){

const transferNo  = getId("transfer-number");
if(transferNo.length !== 11 ){
    alert("Please enter a valid 11-digit number.");
return;

}
const amount = Number(getId("transfer-amount"));
const balance = Number(getText("balance"));


if(amount>balance){
    alert("Insuffecient Balance");
return;

}
const Pin = getId("transfer-pin");
if(Pin !== '1234'){
    alert("Invalid Pin");
    return;}
    if(amount<balance){

const newBalance = balance- amount;
        setBalance(newBalance);
        alert ("Cashout Successful!")


    }


 const history = document.getElementById('history-container');
 const historyDiv = document.createElement('div');
 historyDiv.innerHTML =` <div class="bg-base-100 rounded-lg p-4 ">
 <h2 class="text-xl font-bold">Transfer</h2>
<p>Transfer Successfully ${amount}$ at ${new Date()}</p> 

 </div>
  
 
 `;
 history.appendChild(historyDiv);

    


})