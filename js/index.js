const switch_mode = document.querySelector('#mode');
const text_mode = document.querySelector('#text_mode');
const body = document.querySelector('body')
switch_mode.addEventListener('click', (e) => {
    // alert( e.target.checked )
    if (e.target.checked) {
        text_mode.textContent='Dark mode'
        body.classList.add('dark')
    } else {
        text_mode.textContent='Light mode'
        body.classList.remove('dark')
    }

})
