'use strict'

function getSortValue() {
  let select = document.getElementById("select-sort").value;
  alert(select);
}

function doSortCatalog(catalog, sort) {
  if (sort === "new") {
    catalog.sort(function(a, b) {
      if (a.id < b.id)
        return 1;
      else if (a.id > b.id)
        return -1;
      else
        return 0;
    });
  }
  else if (sort === "down") {
    catalog.sort(function(a, b) {
      if (a.price < b.price)
        return 1;
      else if (a.price > b.price)
        return -1;
      else
        return 0;
    });
  }
  else {
    catalog.sort(function(a, b) {
      if (a.price < b.price)
        return -1;
      else if (a.price > b.price)
        return 1;
      else
        return 0;
    });
  }
}

document.getElementById("select-sort").addEventListener('change', function (e) {
  let max = document.getElementById("hidden");

  selectSort = e.target.value;
  if (document.title === "Женский каталог") {
    doSortCatalog(female, e.target.value);
    addGoodsToPAge(female, 0, max.value);
  }
  else {
    doSortCatalog(male, e.target.value);
    addGoodsToPAge(male, 0, max.value);
  }
})
