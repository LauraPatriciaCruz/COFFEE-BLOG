// const data = {
//     name:'',
//     email:'',
//     message:''
// }

const name = document.querySelector('#name');
const email = document.querySelector('#e-mail');
const message = document.querySelector('#message');
const form = document.querySelector('.form');

name.addEventListener('input', readText);
email.addEventListener('input', readText);
message.addEventListener('input', readText);

//Evento Submit
form.addEventListener('submit', function(e){
    e.preventDefault();

    //Validar Formulario
    // const {name, email, message}= data;
    
    if (name==='' || email==='' || message===''){        // si name, email o message están vacios...
        showAlert('All fields are required', 'true');       // ERROR: All fields are required.
        return;                                      //Corta la ejecución del código
    } 
    //Enviar Formulario
    showAlert('Message Sent');


    // console.log('name');
    // console.log('email');
    // console.log('message');
    
});

function readText(e){
    //Console.log(e.target.value);
    data[e.target.id]=e.target.value;

    // console.log(data);
}


function showAlert(message, error = null){
    const alert = document.createElement('P');
    alert.textContent=message;

    if(error){
        alert.classList.add('error');
    } else {
        alert.classList.add('correct');
    }      

    form.appendChild(alert);

    setTimeout(()=>{
        alert.remove();
    },5000);
}


