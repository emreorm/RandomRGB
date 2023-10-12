// script.js
function getRandomRgb() {
  let num = Math.round(0xffffff * Math.random()); /* 0xffffff onaltılı bir sayıdır ve 16777215 ondalık sayısını temsil eder. Bu sayı, RGB renk modelinde maksimum renk değerini (255) üç kez temsil eder. Her bir renk bileşeni (kırmızı, yeşil, mavi) 0 ile 255 arasında değer alabilir. Bu nedenle 0xffffff beyaz rengi ifade eder. */
  
  let r = num >> 16;  /* num >> 16 ifadesi, sağa doğru bit kaydırma işlemi anlamına gelir. Bu ifade, bir tamsayının belli bir sayıda bitini belirtilen miktarda kaydırmak için kullanılır. Kırmızı rengi ifade eder.*/
  
  let g = num >> 8 & 255; /*Bu ifade, bir tamsayının 8 bit sağa kaydırılması ve ardından elde edilen değerin 255 ile bit AND işlemine tabi tutulması anlamına gelir. Bu işlem, RGB renk modelindeki yeşil (green) renk bileşenini elde etmek amacıyla kullanılır.*/

  let b = num & 255; /* Bu ifade, bir tamsayının son 8 bitini (en düşük 8 bit) almak için 255 ile bit AND işlemi yapar. Bu işlem, RGB renk modelindeki mavi (blue) renk bileşenini elde etmek amacıyla kullanılır.*/

  return 'rgb(' + r + ', ' + g + ', ' + b + ')'; /* Bu da bizim rgb(256,256,256) gibi bir çıktı almamızı sağlar */
}


function getRandomHexColor() {
  let letters = "0123456789ABCDEF";
  let color = '#';
  for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]; /* letters stringinin içindeki 16 karakterden rastgele 6 tanesini almamıza yardım eden for döngüsü*/
  }
  return color;
}

console.log(getRandomRgb());
console.log(getRandomHexColor());

let div1 = document.querySelector(".div1");
let div2 = document.querySelector(".div2");
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");

/* addEventListener aynı onclick gibi bir dom fonksiyonudur ama illa click kullanmıza gerek yoktur bir sürü işlevi vardır . Örneğin (mouseover, keydown,submit,focus, blur vb) */
btn1.addEventListener("click", function() {
  div1.style.backgroundColor = getRandomRgb();
});

btn2.addEventListener("click", function() {
  div2.style.backgroundColor = getRandomHexColor();
});
