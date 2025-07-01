const burgerBtn = document.getElementById("burger")
const menu = document.getElementById("menu")

burgerBtn.addEventListener('click', () => {
    menu.classList.toggle('active')
})
