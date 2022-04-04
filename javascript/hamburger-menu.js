const toggleButton = document.querySelectorAll(".toggle-button")[0]
const menuLinks = document.querySelectorAll("menu ul")[0]


toggleButton.addEventListener('click', () => {
    // if there is no active class, this will add the active class otherwise it will remove the active class
    menuLinks.classList.toggle('active')
})