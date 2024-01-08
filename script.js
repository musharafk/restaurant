document.addEventListener("DOMContentLoaded", function () {
    var loginBtn = document.getElementById("loginBtn");
    var loginModal = document.getElementById("loginModal");
    var closeBtn = document.getElementById("closeBtn");
    var loginForm = document.getElementById("loginForm");
   
    
    var orderOnlineBtn = document.getElementById("orderOnlineBtn");

    loginBtn.addEventListener("click", function () {
        loginModal.style.display = "block";
    });

    closeBtn.addEventListener("click", function () {
        loginModal.style.display = "none";
    });

    window.addEventListener("click", function (e) {
        if (e.target === loginModal) {
            loginModal.style.display = "none";
        }
    });

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
      
    });
    orderOnlineBtn.addEventListener("click", function () {
        window.location.href = "https://www.swiggy.com/restaurants/a2b-adyar-ananda-bhavan-opp-permabur-railway-station-perambur-chennai-31822";
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var socialIcons = document.querySelectorAll(".login-menu ul li a,.social-menu ul li a");

    socialIcons.forEach(function (icon) {
        icon.addEventListener('click', function (event) {
            event.preventDefault(); 
           
        });
    });
});
