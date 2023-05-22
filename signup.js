function  signUp() {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let mobile = document.getElementById("mobile").value;
  
    checkusername(username);
    checkemail(email);
    checkpassword(password);
    checkmobile(mobile);
  

function checkusername(username){
    if (username.length > 7) {
        document.getElementById("username").classList.add("success");
        document.getElementById("username").classList.replace("error", "success");
        document.getElementById("username_error").innerText = "";
      } else {
        document.getElementById("username").classList.add("error");
        if(error){
          let username = document.getElementById("username");
          username.value = "";
        }
        document.getElementById("username_error").innerText =
          "Enter valid username";
      }
}

function checkmobile(mobile){
    if (mobile.length === 10){
        document.getElementById("mobile").classList.add("success");
        document.getElementById("mobile").classList.replace("error", "success");
        document.getElementById("mobile_error").innerText = "";
    } else{
        document.getElementById("mobile").classList.add("error");
        if ('error'){
          let mobile = document.getElementById("mobile");
          mobile.value = "";
        }
        document.getElementById("mobile_error").innerText =
        "Enter Valid Mobile Number";
    }
}

function  checkemail(email){
    if (email.includes("@")) {
        document.getElementById("email").classList.add("success");
        document.getElementById("email").classList.replace("error", "success");
        document.getElementById("email_error").innerText = "";
      } else {
        document.getElementById("email").classList.add("error");
        if(error){
          let email = document.getElementById("email");
          email.value = "";
        }
        document.getElementById("email_error").innerText = "Enter valid email";
      }
}

function  checkpassword(password){
    if (password.length > 8) {
        document.getElementById("password").classList.add("success");
        document.getElementById("password").classList.replace("error", "success");
        document.getElementById("password_error").innerText = "";
      } else {
        document.getElementById("password").classList.add("error");
        if('error'){
          let password = document.getElementById("password");
          password.value = "";
        }
        document.getElementById("password_error").innerText ="Enter valid password";
      }
}


let formData = JSON.parse(localStorage.getItem('formData')) || [];

let exist = formData.length &&
        JSON.parse(localStorage.getItem('formData')).some(data =>
            data.username.toLowerCase() == username.toLowerCase(),
          );

        if(!exist){
          formData.push({username,email,password});
          localStorage.setItem('formData', JSON.stringify(formData));
          location.reload();
          document.getElementById('username').focus();
          alert('Account Created');
        }
        else{
          alert('Duplicate found');
        }
      }


      






















