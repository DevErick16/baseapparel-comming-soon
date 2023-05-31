const btnSubmit = document.getElementById('submit');
const form = document.getElementById('form');
const inputEmail = document.getElementById('inputEmail');
const formError = document.getElementById('formError');


form.addEventListener('submit' , (event)=>{
    event.preventDefault();
    formValidate(inputEmail.value, inputEmail, formError);
});

function formValidate(inputValue, divEmail , divError){
    let RegExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if(RegExp.test(inputValue)){
        divEmail.style.border = '';
        divEmail.style.backgroundImage = '';
        divError.innerHTML = '';
        alert("enviado");
    }else{
        divEmail.style.border = '1px solid red';
        divEmail.style.backgroundImage = 'url(images/icon-error.svg)';
        divError.innerHTML = "Please provide a valid email";
    }
    
}
