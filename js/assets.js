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

let male = [];
male.push(addBoots("m1", "Кроссовки ML-1", 2000, "assets\\image\\none.jpg", "зелёный/красный"));
male.push(addBoots("m2", "Кроссовки ML-2", 1100, "assets\\image\\none.jpg", "чёрный"));
male.push(addBoots("m3", "Кроссовки ML-3", 1200, "assets\\image\\none.jpg", "чёрный"));
male.push(addBoots("m4", "Кроссовки ML-4", 1300, "assets\\image\\none.jpg", "чёрный"));
male.push(addBoots("m5", "Кроссовки ML-5", 1400, "assets\\image\\none.jpg", "серый"));
male.push(addBoots("m6", "Кроссовки ML-6", 2500, "assets\\image\\none.jpg", "чёрный"));
male.push(addBoots("m7", "Кроссовки ML-7", 1000, "assets\\image\\none.jpg", "зелёный"));
male.push(addBoots("m8", "Кроссовки ML-8", 1700, "assets\\image\\none.jpg", "белый"));
male.push(addBoots("m9", "Кроссовки ML-9", 1100, "assets\\image\\none.jpg", "чёрный"));
male.push(addBoots("mm10", "Кроссовки ML-10", 1800, "assets\\image\\none.jpg", "красный"));
male.push(addBoots("mm11", "Кроссовки ML-11", 1300, "assets\\image\\none.jpg", "чёрный"));
male.push(addBoots("mm12", "Кроссовки ML-12", 1350, "assets\\image\\none.jpg", "белый"));
male.push(addBoots("mm13", "Кроссовки ML-13", 1890, "assets\\image\\none.jpg", "красный"));
male.push(addBoots("mm14", "Кроссовки ML-14", 1900, "assets\\image\\none.jpg", "чёрный"));

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

