function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const myInput = document.querySelector("#controls input[type='number']");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const myBoxes = document.querySelector("#boxes");

createBtn.addEventListener("click", createBoxes);

function createBoxes() {
  const amount = Number(myInput.value);
  if (amount >= 1 && amount <= 100) {
    destroyBoxes();
    const boxes = [];

    let size = 30;

    for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxes.push(box);
      size += 10;
    }
    myBoxes.append(...boxes);
    myInput.value = "";
  } else {
    alert("Введіть значення від 1 до 100!");
  }
}

destroyBtn.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  myBoxes.innerHTML = "";
}

myInput.classList.add("my-input-class");
createBtn.classList.add("create-btn");
destroyBtn.classList.add("destroy-btn");

const style = document.createElement("style");
style.textContent = `
#controls {
display: flex;
flex-direction: row;
border-radius: 8px;
padding: 32px;
width: 486px;
height: 104px;
background-color: #f6f6fe;
gap: 16px;
margin-bottom: 16px;
}

.my-input-class{
border: 1px solid #808080;
border-radius: 8px;
padding: 8px;
width: 150px;
height: 40px;
font-family: "Montserrat", sans-serif;
font-weight: 400;
font-size: 16px;
line-height: 1.5;
letter-spacing: 0.04em;
color: #2e2f42;
text-align: center;
}

.create-btn{
border-radius: 8px;
padding: 8px 16px;
width: 120px;
height: 40px;
background-color: #4e75ff;
cursor: pointer;
border: none;
margin: 0 auto;
font-family: "Montserrat", sans-serif;
font-weight: 500;
font-size: 16px;
line-height: 150%;
letter-spacing: 0.04em;
color: #fff;
}

.destroy-btn{
border-radius: 8px;
padding: 8px 16px;
width: 120px;
height: 40px;
background-color: #ff4e4e;
cursor: pointer;
border: none;
margin: 0 auto;
font-family: "Montserrat", sans-serif;
font-weight: 500;
font-size: 16px;
line-height: 150%;
letter-spacing: 0.04em;
color: #fff;
}

#boxes{
width: 486px;
display: flex;
flex-direction: row;
flex-wrap: wrap;
border-radius: 8px;
padding: 32px;
gap: 10px;
background-color: #f6f6fe;
}

`;
document.head.appendChild(style);
