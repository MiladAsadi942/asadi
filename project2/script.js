let header = document.getElementById('header');
let logo = document.getElementById('log');
let log2 = document.getElementById('log2');
let conti = document.getElementById('conti');


logo.addEventListener('click' , function(e){
    header.style.left = '0';
    header.style.transition = 'all 1s';
    
    logo.style.display = 'none';
    log2.style.display = 'block';
    e.preventDefault();
})

log2.addEventListener('click' , function(e){
    header.style.left = '-30%';
    header.style.transition = 'all 1s'
    log2.style.display = 'block';
    logo.style.display = 'block';
    log2.style.display = 'none';
    e.preventDefault();

})

let lnk = document.getElementById('lnk');
let tophide = document.getElementById('top-hide');

lnk.addEventListener('click' , function(e){
    tophide.style.top = '0';
    tophide.style.zIndex = '1';
    e.preventDefault();
})








