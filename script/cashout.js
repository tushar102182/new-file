document.getElementById("cashout-btn").addEventListener("click",function(){
 const agentNumber =getId("agent-number");
 console.log(agentNumber);
 if(agentNumber.length !== 11){
    alert("Invalid Agent Number");
    return;}
 const Amount = getId("cashout-amount");
 console.log(Amount);
 if(Amount<=0){
    alert("Invalid Amount");
    return;}

const Pin = getId("cashout-pin");
if(Pin !== '1234'){
    alert("Invalid Pin");
    return;}
    
    
        const currentBalance = getText("balance");
        console.log(currentBalance);
      if(Number(currentBalance)>Number(Amount)){
          const newBalance = Number(currentBalance) - Number(Amount);
        setBalance(newBalance);
        alert ("Cashout Successful!")
      }
      else {
        alert("Try Again!")
      }

      const history = document.getElementById('history-container');
 const historyDiv = document.createElement('div');
 historyDiv.innerHTML =` <div class="bg-base-100 rounded-lg p-4 ">
 <h2 class="text-xl font-bold">Cashout</h2>
<p>Cashout Successfully ${Amount}$ at ${new Date()}</p> 

 </div>
  
 
 `;
 history.appendChild(historyDiv);

    

})
