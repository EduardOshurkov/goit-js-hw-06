
const form = document.querySelector(".login-form");
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    
    formData.forEach((value, name) => {
        if (value === "" || name === "") {
            alert('Укажите свои данные')
            return;
        }
        else {
            event.currentTarget.reset();
        }
        console.log({name, value});
     
    });
}
