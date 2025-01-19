const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit1);

function handleSubmit1(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();
  
  if (email === "" || password === "") {
    return console.log('All form fields must be filled in');
  }

  const Object = {
    Email: email,
    Password: password,
  };
  console.log(Object);
  form.reset();
}
