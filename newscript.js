window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

var show_menu = document.querySelector('.menu');

show_menu.addEventListener('click', function (event) {
    var target = document.querySelector(show_menu.getAttribute('data-target'));

    if (target.style.display == "none") {
        target.style.display = "block";
        show_menu.innerHTML = show_menu.getAttribute('data-shown-text');

    } else {
        target.style.display = "none";
        show_menu.innerHTML = show_menu.getAttribute('data-hidden-text');
    }
});

function toggleMenu() {
    var menuToggle = document.querySelector('.toggle');
    var menuToggle = document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}