let btnNav = document.getElementById('btnNav');
let MenuNav = document.getElementById('MenuNav');
let idbody = document.getElementById('idbody');
btnNav.addEventListener('click', function(){
    'use strict';
    MenuNav.classList.toggle('mostrar');
    idbody.classList.toggle('parar');
});


let btndespops = document.getElementById('btndespops');
let opscuenta = document.getElementById('opscuenta');
let dropdownmenu = document.getElementById('dropdownmenu');
btndespops.addEventListener('click', function(){
    'use strict';
    opscuenta.classList.toggle('mostrar2');
    dropdownmenu.classList.toggle('dropdownmenu');
});


let Desaparecer = document.getElementById('Desaparecer');
Desaparecer.addEventListener('click', function(){
    'use strict';
    MenuNav.classList.toggle('mostrar');
});