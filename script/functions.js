function getId(id){
    return document.getElementById(id).value;

}
function getText(id){
    return document.getElementById(id).innerText;
}
function setBalance(value){
    const balanceElement = document.getElementById("balance");
    balanceElement.innerText=value;}

    function clickKor (value){
        return document.getElementById(value);
    }

    
function showOnly(id){
    const addmoney =document.getElementById('add-money');
    const cashout =document.getElementById('cashout');
    const history =document.getElementById('history');

    addmoney.classList.add("hidden");
    cashout.classList.add("hidden"); 
    history.classList.add("hidden"); 
    


    const element = document.getElementById(id);
    element.classList.remove("hidden");
}