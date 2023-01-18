let btnNav = document.getElementById('btnNav');
let MenuNav = document.getElementById('MenuNav');
btnNav.addEventListener('click', function(){
    'use strict';
    MenuNav.classList.toggle('mostrar');
});

let btndespops = document.getElementById('btndespops');
let opscuenta = document.getElementById('opscuenta');
btndespops.addEventListener('click', function(){
    'use strict';
    opscuenta.classList.toggle('mostrar2');
});