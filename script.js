


const signUpBtn = document.getElementById("form-btn");

signUpBtn.addEventListener("click", ((event) => {
    event.preventDefault();
    const name = document.getElementById("yourname").value;
    const email = document.getElementById("youremail").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmpassword").value;

    localStorage.setItem("Fullname", name);
    localStorage.setItem("Email", email);
    localStorage.setItem("Password", password);
    localStorage.setItem("confirmPassword", confirmPassword);
    
    navigateToAnotherPage();

    
}))
function navigateToAnotherPage() {
    // Assign the new URL to the window.location.href property
    window.location.href = 'index2.html';
   
    // const userDetails = document.getElementsByClassName("content-section");
    // const userName = localStorage.getItem("Fullname");
    // console.log(Fullname)
    // const userEmail = localStorage.getItem("Email");
    // const userPassword = localStorage.getItem("Password");
    // userDetails.innerHTML = `
    // <p>Fullname : ${userName}</p>
    // <p>Email : ${userEmail}</p>
    // <p>Password : ${userPassword}</p>`;
// const details = `<p>Fullname : ${userName}</p>
// <p>Email : ${userEmail}</p>
// <p>Password : ${userEmail}</p>`
// userDetails.appendChild(details)

}

