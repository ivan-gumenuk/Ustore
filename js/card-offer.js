'use strict'

function searchOffer(catalog, id) {
  for (let i = 0; i < catalog.length; i++)
    if (catalog[i].id === id)
      return catalog[i];
}

function addSellItem(id) {
  if (id[0] === "m")
    return searchOffer(male, id);
  else
    return searchOffer(female, id);
}

function description(name, price, count) {
  let div = document.createElement("div");
  let tmp = document.createElement("h3");

  div.className = "description";
  tmp.textContent = name;
  div.append(tmp);
  div.append(document.createElement("br"));
  tmp = document.createElement("p");
  tmp.innerHTML = `Цена: <strong>${price}грн`;
  div.append(tmp);
  div.append(document.createElement("br"));
  tmp = document.createElement("span");
  tmp.innerHTML = `Количество: <strong>${count}шт`;
  div.append(tmp);
  return div;
}

function editing(id) {
  let div = document.createElement("div");
  let button = document.createElement("div");

  button.id = "plus";
  button.className = "plus-minus";
  button.dataset.id = id;
  div.append(button);
  button = document.createElement("div");
  button.className = "plus-minus";
  button.id = "minus";
  button.dataset.id = id;
  div.append(button);
  return div;
}

function oneSellOffer(img, name, price, count, id) {
  let div = document.createElement("div");
  let tmp = document.createElement("img");

  div.className = "one-offer";
  tmp.src = img;
  div.append(tmp);
  div.append(description(name, price, count));
  div.append(editing(id));
  return div;
}

function addSellOffer(storage, div) {
  let box = document.createElement("div");
  let h2Sum = document.createElement("h2");
  let sum = 0;

  div.innerHTML = "";
  box.className = "sell-offer";
  for (let i = 1; i <= storage.count; i++) {
    let sell = addSellItem(storage[i]);
    box.append(oneSellOffer(sell.src, sell.name, sell.price, storage[sell.id], sell.id));
    sum += (sell.price * storage[sell.id]);
  }
  h2Sum.textContent = `Всего: ${sum}грн`;
  box.append(h2Sum);
  div.append(box);
}

function addSellGoods() {
  let storage = JSON.parse(localStorage.getItem("lidiCard"));
  let sell = document.getElementById("offer");

  if (!storage) {
    document.getElementsByTagName("p")[0].innerText = "";
    sell.innerHTML = "";
    let h2 = document.createElement("span");
    h2.textContent = "Ваша корзина пуста";
    sell.append(h2);
  }
  else
    addSellOffer(storage, sell);
}

addSellGoods();

document.getElementById("clear-all").addEventListener('click', () => {
  localStorage.removeItem("lidiCard");
  location.reload();
});

//  Кнопки +,-
function plusBoots(id) {
  addToCard(id);
  addSellGoods();
}

function deleteBoots(id, storage, i) {
  storage.count--;
  if (storage.count <= 0)
    localStorage.removeItem("lidiCard");
  else {
    delete storage[id];
    delete storage[i];
    for (i = 1; i <= storage.count + 1; i++)
      if (!storage[i] && storage[i + 1]) {
        storage[i] = storage[i + 1];
        delete storage[i + 1];
      }
    localStorage.setItem("lidiCard", JSON.stringify(storage));
  }
  addSellGoods();
}

function minusBoots(id) {
  let storage = JSON.parse(localStorage.getItem("lidiCard"));

  for (let i = 1; i <= storage.count; i++)
    if (storage[i] === id)
      if (storage[id] > 1)
        storage[id]--;
      else {
        deleteBoots(id, storage, i);
        return;
      }
  localStorage.setItem("lidiCard", JSON.stringify(storage));
  addSellGoods();
}

document.onclick = ev => {
  if (ev.target.classList.contains('plus-minus'))
    if (ev.target.id == "plus")
      plusBoots(ev.target.dataset.id);
    else
      minusBoots(ev.target.dataset.id);
}
