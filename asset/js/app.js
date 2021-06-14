// const signinWrapper = document.querySelector("#signinWrapper");
// signinWrapper.style.display = "none";
// const signinBtn = document.querySelector('#signinBtn');

const noLogin = document.querySelector('#noLogin');
const welcomeText = document.querySelector("#welcomeText");
const userName =   document.querySelector("#userName");

welcomeText.style.display = 'none';


let email = localStorage.getItem('user');

if(email !== null){
    fetch(`https://4cf49c2887b0.ngrok.io/user/getOne?email=${email}`).then(res => {
        return res.json()
    }).then(data => {
        noLogin.style.display = 'none';
        welcomeText.style.display = 'block';
        userName.innerText = data.message.name;
        console.log(data);
    }).catch(err => {
        console.log(err);
    });
}else{
    welcomeText.style.display = 'none';
    console.log('User is not logedin');
}

