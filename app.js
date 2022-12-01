alert("You like dark, rignt? That's why I used black on the background according to your taste. I hope you'll like it!")

let tablinks = document.getElementsByClassName('tab-links')
let tabcontents = document.getElementsByClassName('tab-contents')
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const portfolio = document.querySelector("#services")



portfolio.addEventListener('click', function() {
    alert("Aslam Sikder didn't add any courses yet!")
})



// Display Mobile Menu
const  mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)




function openTab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove('active-link')
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove('active-tab')
    }
    event.currentTarget.classList.add('active-link')
    document.getElementById(tabname).classList.add('active-tab')

}

//32








































