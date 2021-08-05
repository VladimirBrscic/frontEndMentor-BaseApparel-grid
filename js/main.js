const inputForm = document.querySelector('form');
const warningText = document.querySelector('.warning-text');
const errorIcon = document.querySelector('.error-icon');
const button = document.querySelector('button');

// controlValue locks form after invalid email has been entered
let controlValue = 0;

inputForm.addEventListener( 'submit', (e) => {
  e.preventDefault();
  let inputValue = document.querySelector('input').value;
  if (!inputValue.includes('@') && controlValue < 1) {
    warningText.style.display = 'block';
    errorIcon.style.display = 'block';
    button.classList.toggle('button-active');
    controlValue =+ 1;
  }
})
