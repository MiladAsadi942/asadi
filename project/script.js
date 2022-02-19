// var user = document.getElementById('user');
// var pass = document.getElementById('pass');
// var btn = document.getElementById('btn')
// var opens = document.getElementById('open')
// var closee = document.getElementById('close')
// var form = document.getElementById('form')
// var cont = document.getElementById('continer');


// opens.addEventListener('click' , function(e){
//     form.style.top = '0';
    
//     closee.style.display = 'block'
//     closee.style.zIndex = '1'
//     opens.style.display = 'none'
    
// })

// closee.addEventListener('click' , function(e){
//     form.style.top = '-70%';
//     closee.style.display = 'none';
//     opens.style.display = 'block';
// })


var opens = document.getElementById('opens');
var closee = document.getElementById('close');
var header = document.getElementById('nav');
var cont = document.getElementById('header');

opens.addEventListener('click' , function(){
    header.style.top = '0'
    opens.style.display = 'none';
    header.style.transition = 'all 2s'
    header.style.zIndex = '10'
    
})

closee.addEventListener('click' , function(){
    // header.style.display = 'none';
    header.style.top = '-100vh'
    opens.style.display = 'block';
    
})




// slider 



