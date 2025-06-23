function determineFirstPage(){
    // Check if the user is logged in by checking for a token in localStorage
    // the true is just there since we have not yet attached the backend to get tokens and store them, so when attaching the backend, remove the "|| true"
    const token = localStorage.getItem('token') || true;
    if (token) {
        setTimeout(() => {
            window.location.href = './pages/innerApp/home.html';
        }, 2000);
    } else {
        // If the token does not exist, redirect to the login and sign up page
        // Redirect to the login and sign up page after 2 seconds
        setTimeout(() => {
            window.location.href = './pages/signInAndSignUp/loginAndSignUp.html';
        }, 2000);
    }
}

// Call the function to determine the first page
document.addEventListener('DOMContentLoaded', determineFirstPage);