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


//mouse hover event for anchor tags
document.querySelectorAll('a').forEach(el =>{
    el.addEventListener('mouseenter', () =>{
        el.style.transform = "rotate(45deg)";  
});
    el.addEventListener('mouseleave', ()=>{
        el.style.transform = 'rotate(0deg)';
});
    
})

//click event for buttons
document.querySelectorAll('.btn').forEach(el=>{
    el.addEventListener('click',()=>{
        el.style.border = '3px yellow solid';
    })
})
//logo double click event
let headLogo = document.querySelector('.logo-heading')
    headLogo.addEventListener('dblclick', () =>{
        headLogo.innerText = "Have you seen my bus?";
    })

//header img mouse hover event
let headImg = document.querySelector('header img')
    headImg.addEventListener('mouseenter',()=>{
        headImg.setAttribute('src', '/img/googlyeyes.jpeg');
    })
    headImg.addEventListener('mouseleave',()=>{
        headImg.setAttribute('src', 'img/fun-bus.jpg')
    } )

//scroll event
// let lastScrollPosition = 0;
// let ticking = false;

// function scrollManip(scroll_pos){
//    let bodyscroll = document.querySelector('body')
//    bodyscroll.style.transform = 'rotate(10deg)';
// }

// window.addEventListener('scroll', function (e){
//     lastScrollPosition = window.scrollY;
//     if(!ticking){
//         window.requestAnimationFrame(function(){
//             scrollManip(lastScrollPosition);
//             ticking = false;
//         });
//     }
    
// });

//keydown
// let dest = document.querySelector('.content-destination');
// dest.addEventListener('keydown', doesAThing);
// function doesAThing(e){
//     log.textContent += `${e.code}`;
// }

const input = document.querySelector('input');
const log = document.getElementById('input');

input.addEventListener('keydown', logKey);

function logKey(e) {
  log.style.backgroundColor = 'green';
}

//focus
let password = document.querySelector('input:nth-of-type(2)');
password.addEventListener('focus', (event)=>{
    event.target.style.backgroundColor = 'yellow';
})


//Load

window.addEventListener('load', (event) =>{
    alert('You have loaded this page, be careful when scrolling. Check the console for more information.');
    console.log('You have come seeking answers, but only destruction awaits you as you toy with this website.');
})

//resize
window.addEventListener('resize',(event)=>{
   document.querySelectorAll('h2').forEach(el =>{
        el.style.fontSize = '45rem';
        console.log('What have you done to my poor headings? You monster!');
    })
})

//select
function thisIsSelected(event){
    const logSelect = document.getElementById('slectionID');
    const selection = event.taget.value.substring(event.target.selectionStart, event.target.selectionEnd);
    logSelect.textContent = `You have chosen ${selection}`;
}

const selectatron = document.querySelector('input');
selectatron.addEventListener('select', thisIsSelected);
