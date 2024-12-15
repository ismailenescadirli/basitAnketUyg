let sorular = [
{
soru: "Hangi Futbolcuyu Daha Çok Seviyorsunuz?",
secenekler: ["Anderson Talisca", "Alex De Souza", "Fernando Muslera", "Hakan Çalhanoğlu"]
},
 {
  soru: "En sevdiğiniz Konsol Oyunu Nedir?",
  secenekler: ["Fifa 25", "The Last Of Us", "A Way Out", "Gta 5"],
},
{
  soru: "Hangi Sporu Tercih Ediyorsunuz?",
  secenekler: ["Basketbol", "Futbol", "Voleybol", "Tenis"],
}
];
  
let cevaplar = [];

for (let i = 0; i < sorular.length; i++) {
 let soru = sorular[i].soru;
let secenekler = sorular[i].secenekler.join(", ");
let cevap = prompt(soru + "\nSeçenekler: " + secenekler + "\nYanıtınızı giriniz:");

let geçerli = false;
for (let j = 0; j < sorular[i].secenekler.length; j++) {
    if (cevap === sorular[i].secenekler[j]) {
    geçerli = true;
    break;
  }
}

if (geçerli) {
    cevaplar[cevaplar.length] = cevap; 
} else {
    alert("Geçersiz cevap! Lütfen geçerli bir seçenek giriniz.Şıklarımızın Yazılışına Lütfen Dikkat Edin.");
    i--;
  }
}
  
console.log(cevaplar);
  