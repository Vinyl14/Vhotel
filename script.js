const navbarNav = document.querySelector('.navbar_nav');

document.querySelector('#hamburger').onclick = () => {
    navbarNav.classList.toggle('active');
};

// click outside sidebar to hide nav

const hamburger = document.querySelector('#hamburger');

document.addEventListener('click', function (e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})

const nama = document.getElementById('name')
const phonenumber = document.getElementById('phone')
const email = document.getElementById('email')
const form = document.getElementById('form')
const date = document.getElementById('tanggal')
const room = document.getElementById('room')
const errorelement = document.getElementById('error')
const errorelement2 = document.getElementById('error2')
const errorelement3 = document.getElementById('error3')
const errorelement4 = document.getElementById('error4')
const errorelement5 = document.getElementById('error5')

form.addEventListener('submit', (e) => {
    let messages =[]
    if(nama.value === '' || nama.value == null){
        messages.push('Name is required');
    }
    if(nama.value.length < 5 ){
        messages.push('Name must be more than 5 characters')
    }   

    if(messages.length > 0){
        e.preventDefault()
        errorelement.innerText = messages.join(', ')
    }
})
    
form.addEventListener('submit',(e) => {
    let messages2 = []

    if(email.value === '' || email.value == null){
        messages2.push('Email is required')
    }

    if(!email.value.endsWith("@gmail.com")){
        messages2.push('Email must ends with @gmail.com');
    }

    if(messages2.length > 0){
        e.preventDefault()
        errorelement2.innerText = messages2.join(', ');
    }
    
})

form.addEventListener('submit',(e) => {
    let messages3 = []

    if(phonenumber.value === '' || phonenumber.value == null){
        messages3.push('Phone number is required')
    }
    if(phonenumber.value.length < 10 || phonenumber.value.length > 12){
        messages3.push('Phone number must be between 10-12 Numbers');
    }

    if(messages3.length > 0){
        e.preventDefault()
        errorelement3.innerText = messages3.join(', ');
    }
    
})

form.addEventListener('submit',(e) => {
    let messages4 = []

    if(date.value === '' || date.value == null){
        messages4.push('Check In Date is required')
    }

    if(messages4.length > 0){
        e.preventDefault()
        errorelement4.innerText = messages4.join(', ');
    }
    
})

form.addEventListener('submit',(e) => {
    let messages5 = []

    if(room.value === '' || room.value == null){
        messages5.push('Room Type Selection is required')
    }

    if(messages5.length > 0){
        e.preventDefault()
        errorelement5.innerText = messages5.join(', ');
    }
    
})

