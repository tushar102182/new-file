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
    alert(`Money Added Successfully from ${BankName} at ${new Date()} 
    New balance is : ${newBalance}
    ` );
 const history = document.getElementById('history-container');
 const historyDiv = document.createElement('div');
 historyDiv.innerHTML =` <div class="flex items-center gap-6 bg-green-200 rounded-lg p-4 ">
    <div>
        <img class="w-[30px]" src="./assets/opt-5.png" alt="">
    </div>
    <div class=" ">
 <h2 class="text-xl font-bold">Added Money</h2>
<p>Added Successfully from ${BankName} at ${new Date()}</p> 

 </div>
</div>
  
 
 `;
 history.appendChild(historyDiv);
})
