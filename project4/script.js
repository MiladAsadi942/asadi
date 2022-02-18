var opens = document.getElementById('open');
var closee = document.getElementById('close');
var header = document.getElementById('header');


opens.addEventListener('click' , function(){
    header.style.right  = '0';
    header.style.transition = 'right 1s'
    opens.style.display = 'none';
    closee.style.display = 'block';

})

closee.addEventListener('click' , function(){
    header.style.right = '-180px';
    opens.style.display = 'block';
    closee.style.display = 'none';

})