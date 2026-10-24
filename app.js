// 01. Mahsulotning umumiy narxi
let daftar = Number(prompt("Daftar narxini kiriting:"));
let ruchka = Number(prompt("Ruchka narxini kiriting:"));
console.log((daftar * 4) + (ruchka * 2));

// 02. Yoshni tekshirish
let yosh = Number(prompt("Yoshingizni kiriting:"));
console.log(yosh >= 18 ? "Kirish mumkin" : "Kirish mumkin emas");

// 03. Boolean() natijasini aniqlash
let qiymat = prompt("Qiymat kiriting:");
console.log(Boolean(qiymat));

// 04. Imtihondan o'tish
let ball = Number(prompt("Ballaringizni kiriting:"));
let davomat = Number(prompt("Davomatingizni kiriting (%):"));
if (ball >= 60 && davomat >= 80) {
  console.log("Imtihondan o'tdi");
} else {
  console.log("Imtihondan o'tmadi");
}

// 05. Bepul yetkazib berish
let summa = Number(prompt("Buyurtma summasini kiriting:"));
let isPremium = confirm("Premium obunangiz bormi? (OK - Ha, Cancel - Yo'q)");
if (summa >= 100000 || isPremium) {
  console.log("Bepul yetkazib berish");
} else {
  console.log("Yetkazib berish pulik");
}

// 06. Login va parol tekshiruvi
let login = prompt("Loginni kiriting:");
let parol = prompt("Parolni kiriting:");
if (login === "student" && parol === "js12345") {
  console.log("Tizimga xush kelibsiz");
} else {
  console.log("Login yoki parol xato");
}

// 07. Chegirmali xarid
let narx = Number(prompt("Mahsulot narxini kiriting:"));
let kupon = confirm("Chegirma kuponingiz bormi? (OK - Ha, Cancel - Yo'q)");
let jami = kupon ? narx * 0.85 : narx;
console.log("To'lov summasi: " + jami);

// 08. Bo'sh qiymatni tekshirish
let username = prompt("Ismingizni kiriting:");
let age = Number(prompt("Yoshingizni kiriting:"));
if (username) {
  console.log("Xush kelibsiz, " + username);
} else {
  console.log("Ismingizni kiriting");
}

// 09. Sonning juft yoki toqligini aniqlash
let number = Number(prompt("Son kiriting:"));
console.log(number % 2 === 0 ? "Juft son" : "Toq son");

// 10. Kino kirmasdan oldin shartlarni tekshirish
let userAge = Number(prompt("Yoshingizni kiriting:"));
let ruxsat = confirm("Ota-onangizdan ruxsat bormi? (OK - Ha, Cancel - Yo'q)");
if (userAge >= 18 || ruxsat) {
  console.log("Kino zoliga kirish mumkin");
} else {
  console.log("Kirish mumkin emas");
}