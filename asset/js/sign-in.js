let signin = document.querySelector("#signin");
signin.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = {
        email: e.target.email.value,
        password: e.target.password.value
    }
    const errorMessage = document.querySelector("#errorMessage");
    fetch("http://test-api.yowamusic.com.ng/user/sign-in", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "content-type": "application/json"
        }
    })//determine how data is sent
        .then(result => result.json())
        .then(res => {
            if(res.okay){
                localStorage.setItem('user', res.message.email);
                errorMessage.className = 'green text-center';
                errorMessage.textContent = "Login successfully!";
                setTimeout(() => {
                    document.location.href = 'http://localhost:63342/vanillajs-test-api-tut/'
                }, 3000)
            }
            else {
                errorMessage.className = 'red text-center';
                errorMessage.textContent = res.message;
            }
            console.log(res.message.email)
        })
        .catch(err => {
            console.log(err)
        })
})