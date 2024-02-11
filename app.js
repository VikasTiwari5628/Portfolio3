document.addEventListener('DOMContentLoaded', function () {
    const mobileNavbarBtn = document.querySelector('.mobile-navbar-btn');
    const navList = document.querySelector('.nav-list');

    mobileNavbarBtn.addEventListener('click', function () {
        navList.classList.toggle('active');
    });
});


