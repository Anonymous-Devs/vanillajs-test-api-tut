
let profileForm = document.querySelector('#signupForm');

function profileHandler(){
    function updateProfile(e){
        alert(e.target.tagName)
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            country: e.target.country.value,
            state: e.target.city.value,
            city: e.target.city.value,
            about: e.target.about.value,
        }
        fetch('https://4cf49c2887b0.ngrok.io/user/update', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "content-type": "application/json"
            }
        }).then(result => result.json())
            .then(res => {
                console.log('good', res)
            }).catch(err => {
                console.log(err)
            })
        e.preventDefault();
    }

    return {updateProfile};
}
console.log(profileHandler());
profileForm.addEventListener('submit', profileHandler().updateProfile)