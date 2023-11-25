const userDetails = document.getElementsByClassName("content-section");
// userDetails.innerHTML = '';

const userName = document.createElement("p");
userName.innerHTML =`FullName:${localStorage.getItem("Fullname")}`;
const userEmail = document.createElement("p");
userEmail.innerHTML = `Email:${localStorage.getItem("Email")}`;
const userPassword = document.createElement("p");
userPassword.innerHTML =`Email:${localStorage.getItem("Password")}`; 
userDetails.appendChild(userName);

userDetails.appendChild(userEmail);
userDetails.appendChild(userPassword);