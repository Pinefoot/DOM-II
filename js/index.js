// // Your code goes here

// // using camelCase id as variable in the code
// // to work on the home link
// function clickEventHandler(event) {
//     console.log(event.type + '!!!!!!!!!!!!!!!!!!!!!!!!!!!')
//     console.log(event.target)
// }
//   document.querySelector('a').addEventListener('click', clickEventHandler)
//   document.querySelector('nav').addEventListener('click', clickEventHandler)
//   document.querySelector('header').addEventListener('click', clickEventHandler, true)
//   document.body.addEventListener('click', clickEventHandler)
//   document.addEventListener('click', clickEventHandler)
//   window.addEventListener('click', clickEventHandler)



document.querySelectorAll('a').forEach(el =>{
    el.addEventListener('mouseenter', () =>{
        el.style.transform = "rotate(45deg)";  
});
    el.addEventListener('mouseleave', ()=>{
        el.style.transform = 'rotate(0deg)';
});
    
})

document.querySelectorAll('.btn').forEach(el=>{
    el.addEventListener('click',()=>{
        el.style.border = '3px yellow solid';
    })
})

let headLogo = document.querySelector('.logo-heading')
    headLogo.addEventListener('dblclick', () =>{
        headLogo.innerText = "Have you seen my bus?";
    })


let headImg = document.querySelector('header img')
    headImg.addEventListener('mouseenter',()=>{
        headImg.setAttribute('src', '');
    })
    headImg.addEventListener('mouseleave',()=>{
        headImg.setAttribute('src', '/img/googlyeyes.jpeg')
    } )

let myBody = document.querySelector('body');
window.onscroll = function(){
    'use strict';
    if(document.body.scrollTop >= 100 ){
        myBody.classList.add('green');
        
    }
}

