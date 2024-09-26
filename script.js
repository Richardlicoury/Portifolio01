const menuhamburguer = document.querySelector('.menu-hamburguer')
menuhamburguer.addEventListener('click', () => {
   toggleMenu();
} )
function toggleMenu(){
    const nav = document.querySelector('.nav-responsive')
    console.log(nav);
    menuhamburguer.classList.toggle('change')
    if(menuhamburguer.classList.contains('change')){
        nav.style.display = 'block'
    } else{
         nav.style.display = 'none'
    }
}