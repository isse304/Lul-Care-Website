document.getElementById("button").addEventListener("click", function() {
  location.href = 'login';
});


const menuShowBtn = document.getElementById('menu-show-btn');
const menuHideBtn = document.getElementById('menu-hide-btn');
const menuOverlay = document.querySelector('.nav-overlay');


menuShowBtn.addEventListener('click', () => menuOverlay.classList.add('show-overlay'));
menuHideBtn.addEventListener('click', () => menuOverlay.classList.remove('show-overlay'));


// TODO: Replace the following with your app's Firebase project configuration





