const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display="none";

    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block"

}) 

//deposit button event handler
    const addDepositBtn = document.getElementById("addDepositBtn");

    addDepositBtn.addEventListener("click", function(){
    const depositAmount = document.getElementById("depositAmount").value;
    const depositNumber = parseFloat(depositAmount);

    const currentDeposit = document.getElementById("currentDeposit").innerText;
    const currentDepositNumber = parseFloat(currentDeposit);
    const totalDeposit = depositNumber + currentDepositNumber;
    console.log(totalDeposit);

    document.getElementById("currentDeposit").innerText = totalDeposit ;
    document.getElementById("depositAmount").value="" ;
})