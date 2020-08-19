'use strict'

function addBoots(id, name, price, urlImage, color, des = "Описание товара...") {
  let res = [];

  res.id = id;
  res.name = name;
  res.price = price;
  res.src = urlImage;
  res.color = color;
  res.des = des;
  return res;
}

function addGoodsToPAge(goods, min = 0, max = 200000) {
  doSortCatalog(goods, selectSort);
  allGoods.innerHTML = "";
  for (let i = 0; goods[i]; i++) {
    let res = goods[i];
    if (res.price >= min && res.price <= max) {
      let div = document.createElement("div");
      let name = document.createElement("h1");
      let img = document.createElement("img");
      let price = document.createElement("h2");
      let color = document.createElement("span");
      let description = document.createElement("p");
      let button = document.createElement("button");

      div.className = "boot";
      div.id = res.id;
      name.textContent = res.name;
      div.append(name);
      img.src = res.src;
      img.title = "Для просмотра щелкните по фото.";
      div.append(img);
      description.textContent = res.des;
      div.append(description);
      color.textContent = `Цвет: ${res.color}`;
      div.append(color);
      price.className = "price";
      price.textContent = `Цена: ${res.price}грн`;
      div.append(price);
      button.textContent = "Купить";
      button.className = "add-to-card";
      div.append(button);
      allGoods.append(div);
    }
  }
}

$(".slider").slider({
  animate: true,
  range: "min",
  value: 2000,
  min: 1000,
  max: 3500,
  step: 10,

  //Получаем значение и выводим его на странице
  slide: function (event, ui) {
    $("#slider-result").html(`${ui.value}грн`);
  },

  //Обновляем скрытое поле формы, так что можно передать данные с помощью формы
  change: function (event, ui) {
    $('#hidden').attr('value', ui.value);
    if (allGoods)
      addGoodsToPAge(male, 0, ui.value);
    else {
      allGoods = document.getElementById("all-goods-female");
      addGoodsToPAge(female, 0, ui.value);
    }
  }
});

let male = [];
male.push(addBoots("m1", "Кроссовки ML-1", 2000, "assets\\image\\none.jpg", "зелёный/красный"));
male.push(addBoots("m2", "Кроссовки ML-2", 1100, "assets\\image\\none.jpg", "чёрный"));
male.push(addBoots("m3", "Кроссовки ML-3", 1200, "assets\\image\\none.jpg", "чёрный"));
male.push(addBoots("m4", "Кроссовки ML-4", 1300, "assets\\image\\none.jpg", "чёрный"));
male.push(addBoots("m5", "Кроссовки ML-5", 1400, "assets\\image\\none.jpg", "серый"));
male.push(addBoots("m6", "Кроссовки ML-6", 2500, "assets\\image\\none.jpg", "чёрный"));
male.push(addBoots("m7", "Кроссовки ML-7", 1000, "assets\\image\\none.jpg", "зелёный"));
male.push(addBoots("m8", "Кроссовки ML-8", 1700, "assets\\image\\none.jpg", "чёрный"));
male.push(addBoots("m9", "Кроссовки ML-9", 1100, "assets\\image\\none.jpg", "чёрный"));

let female = [];
female.push(addBoots("f1", "Кроссовки FML-1", 2500, "assets\\image\\none.jpg", "чёрный"));
female.push(addBoots("f2", "Кроссовки FML-2", 1650, "assets\\image\\none.jpg", "белый"));
female.push(addBoots("f3", "Кроссовки FML-3", 2200, "assets\\image\\none.jpg", "зелёный/красный"));
female.push(addBoots("f4", "Кроссовки FML-4", 3200, "assets\\image\\none.jpg", "белый/зелёный"));
female.push(addBoots("f5", "Кроссовки FML-5", 1600, "assets\\image\\none.jpg", "чёрный"));
female.push(addBoots("f6", "Кроссовки FML-6", 1300, "assets\\image\\none.jpg", "чёрный"));
female.push(addBoots("f7", "Кроссовки FML-7", 1500, "assets\\image\\none.jpg", "чёрный"));
female.push(addBoots("f8", "Кроссовки FML-8", 1000, "assets\\image\\none.jpg", "красный"));
female.push(addBoots("f9", "Кроссовки FML-9", 1800, "assets\\image\\none.jpg", "чёрный"));


let selectSort = "new";
let allGoods = document.getElementById("all-goods-male");

if (allGoods)
  addGoodsToPAge(male);
else {
  allGoods = document.getElementById("all-goods-female");
  addGoodsToPAge(female);
}
