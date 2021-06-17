let signupForm = document.querySelector('#signupForm');

signupForm.addEventListener('submit', e => {
    e.preventDefault();
    const data = {
        name: e.target.name.value,
        email: e.target.email.value,
        phone: e.target.phone.value,
        password: e.target.password.value
    }
    fetch('http://test-api.yowamusic.com.ng/user/create-account', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(res => {
        return res.json()
    }).then(data => {
        console.log(data);
        let success_msg = document.getElementById('success_msg');
        if (data.okay === true) {
            success_msg.className = 'green text-center';
            success_msg.textContent = data.message;
            console.log(data.message);
            setTimeout(() => {
                success_msg.textContent = '';
                document.location.href = 'http://localhost:63342/vanillajs-test-api-tut/login.html'
            }, 3000)
        } else {
            success_msg.className = 'red text-center';
            success_msg.textContent = data.message;
        }
    }).catch(err => {
        console.log(err);
    })
});
