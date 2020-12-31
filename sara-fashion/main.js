//Menu show
const showMenu = (toggleId, navId) => {
    const toggleBtn = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggleBtn && nav) {
        toggleBtn.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
}

showMenu('nav-toggle', 'nav-menu');

// OR
// const toggleBtn = document.getElementById('nav-toggle');
// const nav = document.getElementById('nav-menu');

// toggleBtn.addEventListener('click', () => {
//     nav.classList.toggle('show');
// });


// Remove menu when clicked on links AND  Add/Remove the active link color
const navLink = document.querySelectorAll('.nav__link');

navLink.forEach((n) => {
    n.addEventListener('click', linkAction)
});

function linkAction() {
    //active link change
    navLink.forEach((n) => {
        n.classList.remove('active');
    });
    this.classList.add('active');
    // remove menu when clicked on links
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}

