const loginForm = document.querySelector('.login-form');

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {

    event.preventDefault();

    const form = event.target;
    const emailUser = form.elements.email.value.trim();
    const passwordUser = form.elements.password.value.trim();

    if (!emailUser || !passwordUser) {
        return alert('All form fields must be filled in');
    }

    const objData = {
        email: emailUser,
        password: passwordUser,
    };

    console.log(objData);
    form.reset();
}
