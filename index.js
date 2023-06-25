const myForm = document.querySelector('#my--form');
const nameInput= document.querySelector('#name');
const emailInput = document.querySelector('#email');
const Msg = document.querySelector('.msg');
const uList = document.querySelector('.items');

myForm.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();
    if( nameInput.value === '' || emailInput.value === '' )
    {
        Msg.classList.add('error');
        Msg.innerHTML='<p>Fill both the details</p>';
        setTimeout(() => Msg.innerHTML='',3000);    
    }
    else
    {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        uList.appendChild(li);
        nameInput.innerHTML = '';
        emailInput.innerHTML = '';
    }
}