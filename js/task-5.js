function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyElem = document.querySelector("body");
const colorSpan = document.querySelector(".widget .color");
const changeColorBtn = document.querySelector(".widget .change-color");

changeColorBtn.addEventListener("click", () => {
  const randomColor = getRandomHexColor();

  bodyElem.style.backgroundColor = randomColor;

  colorSpan.textContent = randomColor;
});

const style = document.createElement("style");
style.textContent = `

.widget{
width: 345px;
height: 280px;
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
}

.widget p{
font-family: "Montserrat", sans-serif;
font-weight: 400;
font-size: 16px;
line-height: 1.5;
letter-spacing: 0.04em;
color: #2e2f42;

}

.change-color {
border-radius: 8px;
padding: 8px 16px;
width: 148px;
height: 40px;
background-color: #4e75ff;
font-family: "Montserrat", sans-serif;
font-weight: 500;
font-size: 16px;
line-height: 1.5;
letter-spacing: 0.04em;
color: #fff;
cursor: pointer;
border: none;
margin: 0 auto;

}

.change-color :hover {
    background-color: #6c8cff;;
  }
`;
document.head.appendChild(style);
