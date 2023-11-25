
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
    localStorage.setItem("Token", generateAccessToken());
    
    navigateToProfilePage();
    
    
}))
function navigateToProfilePage() {
    
    alert("Logged in succesfully");
    window.location.href = 'index2.html';
}



function generateAccessToken() {
    // A simple function to generate a random 16-byte string
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let accessToken = "";
    for (let i = 0; i < 16; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        accessToken += charset[randomIndex];
    }
    return accessToken;
}

