let firstName=document.getElementById("name1");
let name1Error=document.getElementById("name1-error");

let lastName=document.getElementById("name2");
let name2Error=document.getElementById("name2-error");

let email=document.getElementById("email");
let emailError=document.getElementById("emailError");

let password=document.getElementById("password");
let passwordError=document.getElementById("passwordError");

let btn=document.getElementById("btn");
    
btn.addEventListener("click",function(e){
    e.preventDefault();
    let isvalid =true;
    if(firstName.value.trim()==="")
        {
            name1Error.textContent="first Name is requred";
            name1Error.style.color="red";
            name1Error.style.textAlign = "right";
            name1Error.style.display="block";
            firstName.style.border = "2px solid red";
            isvalid=false;
        }
        else if(firstName.value.trim().length <6 ||firstName.value.trim().length > 18){
            name1Error.textContent="First Name must be between 4 and 10 characters";
            name1Error.style.color="red";
            name1Error.style.textAlign = "right";
            name1Error.style.display="block";
            firstName.style.border = "2px solid red";
            isvalid=false;
        }
        else{
            name1Error.textContent=""
        }

        if(lastName.value.trim()==="")
            {
                name2Error.textContent="lastName is requred";
                name2Error.style.color="red";
                name2Error.style.textAlign = "right";
                name2Error.style.display="block";
                lastName.style.border="2px solid red";
                isvalid=false;
            }
            else if(firstName.value.trim().length <6 ||firstName.value.trim().length > 18){
                name2Error.textContent="last name must be between 4 and 10 characters";
                name2Error.style.color="red";
                name2Error.style.textAlign = "right";
                lastName.style.border="2px solid red";
                isvalid=false;
            }
            else{
                name2Error.textContent="";
            }
            if(email.value.trim()==="")
                {
                    emailError.textContent="email is requred";
                    emailError.style.color="red";
                    emailError.style.textAlign = "right";
                    emailError.style.display="block";
                    email.style.border="2px solid red";
                    isvalid=false;
                }
                else if(!email.value.includes('@'))
                {
                    emailError.textContent = "Email must contain '@'";
                    emailError.style.color="red";
                    emailError.style.textAlign = "right";
                    emailError.style.display="block";
                    email.style.border="2px solid red";
                    isvalid=false;
                }
                else{
                    emailError.textContent="";
                }

                if(password.value.trim()==="")
                    {
                        passwordError.textContent="password is requred";
                        passwordError.style.color="red"
                        passwordError.style.textAlign = "right";
                        passwordError.style.display="block";
                        password.style.border="2px solid red";
                        isvalid=false;
                    }

                    else if (password.value.trim().length < 2 || password.value.trim().length > 8) {
                        passwordError.textContent = "Password must be between 6 and 8 characters";
                        passwordError.style.color="red"
                        passwordError.style.textAlign = "right";
                        passwordError.style.display="block";
                        password.style.border="2px solid red";
                        isvalid = false;
                    }
                    else{
                        passwordError.textContent="";
                    }

                   if(isvalid)
                    {
                        firstName.value="";
                        name1Error.value=""
                        lastName.value="";
                        name2Error.value=""
                        email.value="";
                        emailError.value="";
                        password.value="";
                        passwordError.value=""
                        alert("form submitted successfuly");

                        
                    } 

})


