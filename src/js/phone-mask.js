//Phone mask

let inputElement = document.getElementById('phoneNumber');

const maskOption = {
  mask: '+ {\\3\\8} (000) 000-00-00',
};

const mask = IMask(inputElement, maskOption);


let inputElement2 = document.getElementById('phoneNumber2');

const maskOption2 = {
  mask: '+ {\\3\\8} (000) 000-00-00',
};
const mask2 = IMask(inputElement2, maskOption2);

//Second version не дружить з патерном в html
/*
const selector1 = document.getElementById('phoneNumber');

const im1 = new Inputmask('+38 (099) 999-99-99');
im1.mask(selector1);

const selector2 = document.getElementById('phoneNumber2');

const im2 = new Inputmask('+38 (099) 999-99-99');
im2.mask(selector2);*/