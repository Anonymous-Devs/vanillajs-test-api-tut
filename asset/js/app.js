const signinWrapper = document.querySelector("#signinWrapper");
signinWrapper.style.display = "none";
const signinBtn = document.querySelector('#signinBtn');
const signupBtn = document.querySelector('#signupBtn');
const signupWrapper = document.querySelector("#signupWrapper");

//add an addEventListener to the signinBtn
signinBtn.addEventListener('click', e => {
    signinWrapper.style.display = "block";
    signupWrapper.style.display = 'none';
})

//add an addEventListener to the signupBtn
signupBtn.addEventListener('click', e => {
    signinWrapper.style.display = "none";
    signupWrapper.style.display = 'block';
})


let signupForm = document.querySelector('#signupForm');

signupForm.addEventListener('submit', e => {
    e.preventDefault();
    const data = {
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value
    }
    fetch('/create-account', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(res => {
        return res.json()
    }).then(data => {
        let success_msg = document.getElementById('success_msg');
        if (data.okay === true) {
            success_msg.classList.add('green');
            success_msg.textContent = data.message;
            console.log(data.message);
            setTimeout(() => {
                success_msg.textContent = '';
            }, 3000)
        } else {
            if (success_msg.className === 'green') {
                success_msg.classList.add('red');
                success_msg.textContent = data.message;
            }
        }
    }).catch(err => {
        console.log(err);
    })
})


let signin = document.querySelector("#signin");
signin.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = {
        email: e.target.email.value,
        password: e.target.password.value
    }
    try {
        const errorMessage = document.querySelector("#errorMessage");
        fetch("/login", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "content-type": "application/json"
                }
            })
            .then(result => result.json())
            .then(res => {
                errorMessage.textContent = "Loggedin successfully";
                console.log(res)
            })
            .catch(err => console.log(err))
    } catch (e) {
        alert(e)
        console.log(e)
    }

    /**
      @TODO
      *Create an object with email and password keys i.e const data = {
        email: ,
        password: ,
      }
    **/

})