const details = document.getElementById('details');
const front = document.getElementsByClassName('card-front');
const back = document.getElementsByClassName('card-back');
const flip = document.getElementById('flip');
const contact = document.getElementById('contact');


details.addEventListener('click', () => {
        for ( let i = 0; i < front.length; i++ ) {
            front[i].classList.toggle('hide');
        }
        for ( let i = 0; i < back.length; i++ ) {
            back[i].classList.toggle('show');
        }
    details.style.display = 'none';
    flip.style.display = 'flex';
});

flip.addEventListener('click', () => {
        for ( let i = 0; i < front.length; i++ ) {
            front[i].classList.toggle('hide');
        }
        for ( let i = 0; i < back.length; i++ ) {
            back[i].classList.toggle('show');
    }
    details.style.display = 'flex';
    flip.style.display = 'none';
});

// const myModal = document.getElementById('myModal')
// const myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus()
// })