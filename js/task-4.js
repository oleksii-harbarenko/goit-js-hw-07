const form = document.querySelector(".login-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const { email, password } = form.elements;

  if (!email.value.trim() || !password.value.trim()) {
    alert(`All form fields must be filled in`);
    return;
  }

  const formData = {
    email: email.value.trim(),
    password: password.value.trim(),
  };

  console.log(formData);
  form.reset();
});

const style = document.createElement("style");
style.textContent = `
.login-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 408px;
    height: 256px;
    background-color: #fff;
    padding: 24px;
    border-radius: 8px;
  }

  .login-form label {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.04em;
    color: #2e2f42;
  }

  .login-form input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    font-size: 16px;
  }

  .login-form button[type="submit"] {
    width: 86px;
    height: 40px;
    padding: 8px 16px;
    background-color: #4e75ff;
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: 0.04em;
  }

  .login-form button[type="submit"]:hover {
    background-color: #6c8cff;;
  }
`;

document.head.appendChild(style);
