
const data1 = document.getElementById("data1");
const data2 = document.getElementById("data2");
const data3 = document.getElementById("data3");
const data4 = document.getElementById("data4");

data1.innerText= localStorage.getItem("Fullname");
data2.innerText= localStorage.getItem("Email");
data3.innerText= localStorage.getItem("Token");
data4.innerText= localStorage.getItem("Password");


function navigateToSignUpPage() {
    
    window.location.href = 'index.html';
   alert("Are you sure want to Logout");
}


const logOutBtn = document.getElementById("logout-btn");

logOutBtn .addEventListener("click", function() {
    localStorage.clear();
    navigateToSignUpPage();
});