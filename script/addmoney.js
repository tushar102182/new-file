clickKor("add-money-btn").addEventListener("click",function(){
const BankName = getId("bank");
console.log(BankName);
if(BankName==='Select a Bank'){
    alert("Please Select a Bank");
return;

}
const amount = getId("add-money-amount");
 const newBalance = Number(amount) + Number(getText("balance"))
    if(getId("add-money-pin") !== '1234'){
    alert("Invalid Pin");
    return;}
    setBalance(newBalance);
    alert(`Money Added Successfully from ${BankName} at ${new Date()} ` );
 const history = document.getElementById('history-container');
 const historyDiv = document.createElement('div');
 historyDiv.innerHTML =` <div class="bg-base-100 rounded-lg p-4 ">
 <h2 class="text-xl font-bold">Added Money</h2>
<p>Added Successfully from ${BankName} at ${new Date()}</p> 

 </div>
  
 
 `;
 history.appendChild(historyDiv);
})
