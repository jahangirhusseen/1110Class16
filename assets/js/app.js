let button = document.querySelector('#button');
let modal = document.querySelector('#custom_modal');
let close = document.querySelector('#close');
let aclose = document.querySelector('#aclose');
let modal_alert = document.querySelector('#modal_alert');
let editing = document.querySelector('#editing');
let discard = document.querySelector('#discard');


button.addEventListener('click', function(e){
    e.preventDefault();
    modal.classList.add('active');
});

close.addEventListener('click', function(){
    modal_alert.style.display = 'flex';
});

modal.addEventListener('click', function(e){
    if (e.target == this) {
        modal.classList.remove('active');
    }
});

aclose.addEventListener('click', function(){
    modal_alert.style.display = 'none';
});

editing.addEventListener('click', function(){
    modal_alert.style.display = 'none';
});

discard.addEventListener('click', function(){
    modal_alert.style.display = 'none';
    modal.classList.remove('active');
 
});

// ************* Accordion *************

let ach_btns = document.querySelectorAll('.accordion_header');

ach_btns.forEach(item => {
    item.addEventListener('click', function(){
        item.classList.toggle('acc_arrow');
        if (item.classList.contains('acc_arrow') ) {
            item.nextElementSibling.style.height = item.nextElementSibling.scrollHeight + 'px';
        }else{
            item.nextElementSibling.style.height = '0';
        }
        
    });
});


