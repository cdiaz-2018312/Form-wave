const izquierda = document.querySelector('.izquierda');
const derecha = document.querySelector('.derecha');
const container = document.querySelector('.container');

izquierda.addEventListener('mouseenter', ()=>{
    container.classList.add('hover-izquierda')
})

izquierda.addEventListener('mouseleave',()=>{
    container.classList.remove('hover-izquierda')
})


derecha.addEventListener('mouseenter' , ()=>{
    container.classList.add('hover-derecha')
})

derecha.addEventListener('mouseleave',()=> {
    container.classList.remove('hover-derecha')
})