const categoriesList = document.querySelector("#categories");

const categories = categoriesList.querySelectorAll(".item");

console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
  const categoryTitle = category.querySelector("h2").textContent;

  const itemsCount = category.querySelectorAll("ul li").length;

  console.log(`Category: ${categoryTitle}`);

  console.log(`Elements: ${itemsCount}`);
});

const style = document.createElement("style");
style.textContent = `

#categories {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  width: 440px;
  height: 888px;
  border-radius: 8px;
  back-ground-color: #fff;
  margin: 0;
}

.item {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 392px;
  background-color: #f6f6fe;
  padding: 16px;
  border-radius: 8px;
  }
    
.item h2{
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.33;
  letter-spacing: 0.04em;
  color: #2e2f42;
  margin: 0;
  }

.item ul{
  display: flex;
  flex-direction: column;
  padding: 0;
  list-style: none;
  gap: 8px;
  }
.item ul li{
  padding: 8px;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.04em;
  color: #2e2f42;
  width: 360px;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
} 
  `;

document.head.appendChild(style);
