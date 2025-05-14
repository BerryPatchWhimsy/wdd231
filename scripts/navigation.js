const hambutton = document.querySelector('#menu');
const navigation = document.querySelector('#animateMe');

hambutton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hambutton.classList.toggle('open');
});

