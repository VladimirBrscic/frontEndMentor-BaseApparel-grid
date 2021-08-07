const form = document.querySelector('form');
const formControl =  document.querySelector('.form-control');
const emailInput = document.querySelector('input');

form.addEventListener( 'submit', (e) => {
  e.preventDefault();
  checkInput();
})

function checkInput(){
  const inputValue = emailInput.value.trim();
  const regExTest = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if(inputValue === '' || !regExTest.test(inputValue)){
    formControl.className = 'form-control error';
  }else{
    formControl.className = 'form-control success';
  }
}
