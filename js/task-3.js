const textInput = document.getElementById("name-input");
const output = document.getElementById("name-output");

textInput.addEventListener("input", handleSubmit) 

function handleSubmit (event)  {
    output.textContent = event.currentTarget.value.trim();
  if (event.currentTarget.value.trim() === "") {
    output.textContent = "Anonymous"
  }
  };