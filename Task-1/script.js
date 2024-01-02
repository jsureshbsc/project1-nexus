function validateLoginForm(event) {
    
    const username = document.querySelector('.front input[type="text"]').value;
    const password = document.querySelector('.front input[type="password"]').value;

    

    // Check if username and password 
    if (username.trim() === 'suresh' && password.trim() === '1234') {
        alert('Login Successfully...!');
        window.location.href = "./new/sample.html";
        return;
    } else {
        alert('Invalid username or password');
    }
    
    

    event.preventDefault(); // Prevent form submission by default
}


function validateSignupForm(event) {
    event.preventDefault(); // Prevent form submission by default
    const name = document.querySelector('.back input[placeholder="Name"]').value;
    const email = document.querySelector('.back input[placeholder="Email id"]').value;
    const username = document.querySelector('.back input[placeholder="Username"]').value;
    const password = document.querySelector('.back input[placeholder="Password"]').value;

    
      
    //Check if all fields are not empty
    if (name.trim() === '' || email.trim() === '' || username.trim() === '' || password.trim() === '') {
        alert('All fields are required');
        return;
    }
    else if((name.trim() === 'suresh' || email.trim() === '123@gmail.com' || username.trim() === 'suresh' || password.trim() === '1234')){
        alert("Succsufully...!")
        location.href = "./index.html";
    }

    // If validation passes, you can submit the form or perform additional actions
    // alert('Signup successful!');
}

let front = document.querySelector('.front');
let back = document.querySelector('.back');

let newUser = document.querySelector('.newUser');
let existingUser = document.querySelector('.existingUser');

newUser.addEventListener('click', function(){
    front.style.zIndex = "1"
    back.style.zIndex = "2"
    front.style.transform = "rotateY(180deg)"
    back.style.transform = "rotateY(0deg)"
})

existingUser.addEventListener('click', function(){
    back.style.zIndex = "1"
    front.style.zIndex = "2"
    back.style.transform = "rotateY(180deg)"
    front.style.transform = "rotateY(0deg)"
})