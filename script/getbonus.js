document.getElementById('bonus-btn').addEventListener("click",function(){

const coupon = getId("bonus-coupon");
if (coupon !== "1234"){
    alert("wrong coupon");
    return;
}

const balance = Number(getText("balance"));
const newbalance = balance+500;
setBalance(newbalance);

 const history = document.getElementById('history-container');
 const historyDiv = document.createElement('div');
 historyDiv.innerHTML =` <div class="bg-base-100 rounded-lg p-4 ">
 <h2 class="text-xl font-bold">Bonus</h2>
<p>Got Bonus Successfully $500 at ${new Date()}</p> 

 </div>
  
 
 `;
 history.appendChild(historyDiv);

    


})