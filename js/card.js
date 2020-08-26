document.onclick = event => {
  if (event.target.classList.contains('add-to-card'))
    addToCard(event.target.dataset.id)
};

function addToCard(id) {
  let storage = JSON.parse(localStorage.getItem("lidiCard"));

  if (!storage) {
    storage = {};
    storage.count = 1;
    storage[storage.count] = id;
    storage[id] = 1;
    localStorage.setItem("lidiCard", JSON.stringify(storage));
  }
  else {
    for (let i = 1; i <= storage.count; i++)
    if (storage[i] === id) {
      storage[id] = !storage[id] ? 1 : storage[id] += 1;
      localStorage.setItem("lidiCard", JSON.stringify(storage));
      return;
    }
    storage.count++;
    storage[storage.count] = id;
    storage[id] = !storage[id] ? 1 : storage[id] += 1;
    localStorage.setItem("lidiCard", JSON.stringify(storage));
  }
  document.getElementsByClassName("card-pointer")[0].textContent = `Корзина (${storage.count})`;
}

function searchCatalog(catalog, id) {
  for (let i = 0; i < catalog.length; i++)
    if (catalog[i].id === id)
      return catalog[i];
}

function addCardSpan(id, count) {
  if (id[0] === "m") {
    let res = searchCatalog(male, id);
    return `${res.name} × ${count}шт`;
  }
  else {
    let res = searchCatalog(female, id);
    return `${res.name} × ${count}шт`;
  }
}

document.onmouseover = hover => {
  if (hover.target.classList.contains("card-pointer")) {
    let box = document.createElement("div");
    let card = JSON.parse(localStorage.getItem("lidiCard"));

    box.className = "card-box";
    if (!card)
      box.textContent = "Ваша корзина пуста";
    else
      for (let i = 1; i <= card.count; i++)
        box.innerHTML += `<span>${addCardSpan(card[i], card[card[i]])}</span><br>`;
    hover.target.append(box);
  }
};

document.onmouseout = hover => {
  if (hover.target.classList.contains("card-pointer"))
    document.getElementsByClassName("card-box")[0].remove();
};

let card = JSON.parse(localStorage.getItem("lidiCard"));
if (card && document.title != "Корзина")
  document.getElementsByClassName("card-pointer")[0].textContent = `Корзина (${card.count})`;
