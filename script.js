// script.js

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    // Adiciona um listener de clique ao botão de menu
    menuToggle.addEventListener('click', function() {
        // Alterna a classe 'show-menu' no menu
        menu.classList.toggle('show-menu');
    });
});
