const nameInput = document.querySelector("#name-input");

const nameOutput = document.querySelector("#name-output");

function updateNameOutput() {
  const fixedValue = nameInput.value.trim();
  nameOutput.textContent = fixedValue || "Anonymous";
}

nameInput.addEventListener("input", updateNameOutput);

const style = document.createElement("style");
style.textContent = `
#name-input {
border-radius: 8px;
padding: 8px;
width: 360px;
height: 40px;
background-color: #fff;
font-family: "Montserrat", sans-serif;
font-weight: 400;
font-size: 16px;
line-height: 1.5;
letter-spacing: 0.04em;
color: #2e2f42;
margin-bottom: 16px;
}


h1 {
margin: 0;
font-family: "Montserrat", sans-serif;
font-weight: 600;
font-size: 24px;
line-height: 133%;
letter-spacing: 0.04em;
color: #2e2f42;
}`;

document.head.appendChild(style);
