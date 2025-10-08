let form=document.getElementById("fr")
let nameInput=document.getElementById('name');
let emailInput=document.getElementById('email');
let passwordInput=document.getElementById('password');
let confirmpassword=document.getElementById('cnfrmpassword');
let errorsDiv=document.getElementById('errors')
function add(){
    form.classList.toggle('hide')
    
}
document.getElementById("btn").addEventListener('click', add);
function submitLogic(e){
    e.preventDefault();
    errorsDiv.textContent='';
    if(nameInput.value.trim()==''){
        let p=document.createElement('p');
        p.textContent="name is required";
        errorsDiv.append(p)
    }
     if(emailInput.value.trim()==''){
        let p=document.createElement('p');
        p.textContent="email is required";
        errorsDiv.append(p)
    }
     if(passwordInput.value.trim()==''){
        let p=document.createElement('p');
        p.textContent="password is required";
        errorsDiv.append(p)
    }
    
    if(passwordInput.value!='' && passwordInput.value.length<=8){
        let p=document.createElement('p');
        p.textContent="password should be atleast 8 characters";
        errorsDiv.append(p)
    }
    if(passwordInput.value!='' && confirmpassword.value!=''&& passwordInput.value!=confirmpassword.value){
         let p=document.createElement('p');
        p.textContent="password and confirm password are not matching";
        errorsDiv.append(p)
    }
    let emailRegex=/^[A-Za-z0-9]{2,}+@[A-Za-z]{2,}+\.[A-Za-z]{2,}$/
    if(emailInput.value!='' && !emailRegex.test(emailInput.value)){
        let p=document.createElement('p');
        p.textContent="please enter valid email";
        errorsDiv.append(p)

    }
     let passwordRegex=/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])/
    if(emailInput.value!='' && !emailRegex.test(emailInput.value)){
        let p=document.createElement('p');
        p.textContent="please enter valid email";
        errorsDiv.append(p)

    }

}
document.getElementById("fr").addEventListener('submit', submitLogic)
document.getElementById('showpwd').addEventListener('click', function(){
    passwordInput.type=passwordInput.type=='password' ? 'text' : 'password';
})
document.getElementById("showpwd2").addEventListener('click', function(){
    confirmpassword.type=confirmpassword.type=='password' ? 'text' : 'password'
})