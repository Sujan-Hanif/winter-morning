function clickMenu() {
    let menu = document.getElementById('nav');
    menu.classList.toggle('nav-active');


}
let btn = document.getElementById('mobile-menu');
btn.addEventListener('click', clickMenu);

function hideMenu() {

    /*  Another way of hide DOM */
    /* document.getElementByI('search-button').style.visibility = "hidden";
    document.getElementByI('search-box').style.visibility = "hidden"; */
    let hideProduct = document.getElementById('product-search');
    hideProduct.classList.toggle('search-hide');
}
let hideProduct = document.getElementById('mobile-menu');
hideProduct.addEventListener('click', hideMenu);