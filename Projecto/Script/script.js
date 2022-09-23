const submit = document.getElementById('submit')
submit.disabled = true

function CheckBox(){


    var clicks = 0
    let alerts =1
    clicks = clicks  + 1 
    var Id = document.getElementById('Id')
    if(Id.value.trim() === "" || Id.value.length < 4){    
        alert("Invalid Name!!! Name Must be at least 4 digits." )
        alerts =-1
    }

    var email = document.getElementById('email').value
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(email.match(pattern) != email){    
        alert("Invalid Email!")
        alerts =-1
    }

    var password = document.getElementById('password')
    if(password.value.trim() === "" || password.value.length < 8 ){  
        alert("Invalid Password!! Password must be at least 8 length long. ")
        alerts =-1
    }

    var phoneNumber = document.getElementById('phoneNumber')
    if(password.value.trim() === "" || phoneNumber.value.length == 12 ){  
        alert("Must be 12 digit with the first two numbers = 01***** ")
        alerts =-1
    }

    if (clicks != 0 && alerts == 1 ){
        submit.disabled = false
        
    }
    
}