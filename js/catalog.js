'use strict'

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
      button.dataset.id = res.id;
      div.append(button);
      allGoods.append(div);
    }
  }
}

if (document.title === "Женский каталог" ||
    document.title === "Мужской каталог") {
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
      if (document.title === "Женский каталог")
        addGoodsToPAge(female, 0, ui.value);
      else {
        allGoods = document.getElementById("all-goods-male");
        addGoodsToPAge(male, 0, ui.value);
      }
    }
  });
}


let selectSort = "new";
let allGoods = document.getElementById("all-goods-female");

if (allGoods)
  addGoodsToPAge(female);
else {
  allGoods = document.getElementById("all-goods-male");
  addGoodsToPAge(male);
}

