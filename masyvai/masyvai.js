// 1. Sukurti masyvą (piniginę), kurio ilgis yra atsitiktinis nuo 10 iki 30, o reikšmės atsitiktiniai skaičiai nuo 0 iki 10 (pinigai);
const pinigineIlgis = Math.floor(Math.random() * (30 - 10)) + 10;
const pinigine = [];
for (let i = 0; i < pinigineIlgis; i++) {
  pinigine[i] = Math.floor(Math.random() * 11);
}
console.log(pinigine);

// 2. Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio reikšmių (pinigų esančių piniginėje) sumą;
let suma = 0;
for (let i = 0; i < pinigine.length; i++) {
  suma += pinigine[i];
}
console.log(suma);
// 3. Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio popierinių pinigų (skaičių didesnių už 2 ) reikšmių sumą;
let suma2 = 0;
for (let i = 0; i < pinigine.length; i++) {
  if (pinigine[i] > 2) suma2 += pinigine[i];
}
console.log(suma2);

// 4. Išleisti visus metalinius pinigus (reikšmes, kurios yra mažesnės arba lygios 2 padaryti lygias 0) iš 1 uždavinio;

for (let i = 0; i < pinigine.length; i++) {
  if (pinigine[i] <= 2) pinigine[i] = 0;
}
console.log(pinigine);

// 5. Surasti didžiausią reikšmę 1 uždavinio masyve ir paskaičiuoti kiek tokių didžiausių reikšmių masyve yra;
let didziausia = 0;
let kartai = 0;
for (let i = 0; i < pinigine.length; i++) {
  if (pinigine[i] > didziausia) {
    didziausia = pinigine[i];
    kartai = 0;
  }
  if (pinigine[i] === didziausia) {
    kartai++;
  }
}
console.log("didziausia: ", didziausia);
console.log("kiek kartu: ", kartai);

// 6. Visus masyvo elementus, kurie yra lygūs 0, pakeisti į tų elementų indeksų (vietų, numerių) reikšmes;
for (let i = 0; i < pinigineIlgis; i++) {
  if (pinigine[i] === 0) {
    pinigine[i] = i;
  }
}
console.log("visi lygus nuliui: ", pinigine);

// 7. Į 1 uždavinio masyvą pridėti tiek naujų reikšmių (pinigų, atsitiktinių skaičių nuo 0 iki 10), kad masyvo ilgis būtų lygiai 30;
for (let i = pinigineIlgis; i < 30; i++) {
  pinigine[i] = Math.trunc(Math.random() * (30 - 10) + 10);
}

console.log("nauji pinigai: ", pinigine);
// 8. Naudojant 1 uždavinio masyvą iš jo reikšmių sukurti dar du papildomus masyvus. Į vieną iš 1 uždavinio masyvo pridėti reikšmes mažesnes arba lygias 2 (monetas), o į kitą didesnes nei 2 (popierinius pinigus);
let monetos = [];
let popieriniai = [];

for (let i = 0; i < pinigineIlgis; i++) {
  if (pinigine[i] <= 2) {
    monetos.push(pinigine[i]);
  }
  if (pinigine[i] > 2) {
    popieriniai.push(pinigine[i]);
  }
}
console.log("monetos: ", monetos);
console.log("popieriniai: ", popieriniai);
// 9. Sukurti masyvą (piniginę su dviem skyreliais) iš dviejų elementų, kurio pirmas elementas būtų masyvas iš 8 uždavinio su monetom, o antras elementas masyvas iš 8 uždavinio su popieriniais pinigais;

let naujaPinigine = [];
naujaPinigine.push(monetos);
naujaPinigine.push(popieriniai);
console.log("nauja pinigine: ", naujaPinigine);
// 10. Į 9 uždavinio masyvą, piniginę su dviem skyreliais, pridėti trečią skyrelį- masyvą su kortelėm: ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];
let korteles = [
  "KIKA",
  "Euro Vaistinė",
  "Drogas",
  "Ačiū",
  "Lietuvos Geležinkeliai",
  "Mano RIMI",
];
naujaPinigine.push(korteles);
console.log("nauja pinigine su korteliu skyreliu: ", naujaPinigine);

// 11. Korteles skyrelyje sudėlioti (išrūšiuoti) pagal abėcėlę;
for (let i = 0; i < korteles.length - 1; i++) {
  if (korteles[i] > korteles[i + 1]) {
    let rusiuotojas = korteles[i];
    korteles[i] = korteles[i + 1];
    korteles[i + 1] = rusiuotojas;
    i = -1;
  }
}
console.log("nauja pinigine su kortelemis abeceles tvarka: ", naujaPinigine);
// 12. Į kortelių skyrelį pridėti mokėjimo kortelių 'MasterCard', 'Visa' (su rand generuokite atsitiktines reikšmes 'MasterCard' arba 'Visa' ir rašykite į masyvą) iš skirtingų bankų tiek, kad skyrelis (masyvo ilgis) pasidarytų lygus 20;
for (let i = korteles.length; i < 20; i++) {
  if (Math.trunc(Math.random() * 2) < 1) {
    korteles[i] = "MasterCard";
  } else {
    korteles[i] = "Visa";
  }
}
console.log("mastercard ir visa korteles: ", korteles);
// 13. Paskaičiuokite, kokio tipo kortelių ('MasterCard' arba 'Visa') yra daugiau;
let kVisa = 0;
let kMaster = 0;

for (let i = 0; i < korteles.length; i++) {
  if (korteles[i] === "MasterCard") {
    kMaster++;
  }
  if (korteles[i] === "Visa") {
    kVisa++;
  }
}
console.log("kiek Visa: ", kVisa, "kiek MasterCard: ", kMaster);

// 14. Sukurkite masyve (piniginėje) ketvirtą elementą (skyrelį) į kurį įdėkite 10 loterijos bilietų, kurių numerius sugeneruokite atsitiktinai su rand funkcija nuo 1000000000 iki 9999999999;
let bilietai = [];
for (let i = 0; i < 10; i++) {
  let reiksmes = Math.trunc(
    Math.random() * (9999999999 - 1000000000) + 1000000000
  );
  bilietai.push(reiksmes);
}
naujaPinigine.push(bilietai);
console.log("pinigine su bilieteliu skyrium: ", naujaPinigine);
// 15. Loterijos bilietų masyvą išrūšiuoti nuo didžiausio numerio iki mažiausio;
for (let i = 0; i < naujaPinigine[3].length - 1; i++) {
  if (naujaPinigine[3][i] < naujaPinigine[3][i + 1]) {
    let rusiuotojas = naujaPinigine[3][i];
    naujaPinigine[3][i] = naujaPinigine[3][i + 1];
    naujaPinigine[3][i + 1] = rusiuotojas;
    i = -1;
  }
}
console.log("Nuo didziausio iki maziausio: ", naujaPinigine[3]);
// 16. Į piniginės popierinių pinigų skyrelį įdėti 500 pinigų mažom kupiūrom ( generuoti atsitiktinius skaičius nuo 3 iki 10 ir dėti kaip naujus elementus, kol įdėta suma bus lygi 500);

// 17. Patikrinti ar ką nors laimėjote. Bilieto numerius dalinkite iš 777 ir jeigu numeris išsidalins be liekanos - jūs laimėjote! Suskaičiuokite, kiek buvo laimingų bilietų.
let LMsk = 0;

for (let i = 0; i < bilietai.length; i++) {
  if (naujaPinigine[3][i] % 777 === 0) {
    LMsk++;
  }
}

console.log("laimingas bilietas: ", LMsk);
//  18. Sukurkite penktą skyrelį ir į jį sudėkite nuotraukas: ['šuo', 'katė', 'automobilis', 'namas', 'kiemas'] ir jas išrūšiuokite pagal žodžių ilgį taip, kad pirma eitų trumpiausi žodžiai};
let skyrius5 = ['šuo', 'katė', 'automobilis', 'namas', 'kiemas'];
naujaPinigine.push(skyrius5);

for (let i = 0; i < skyrius5.length - 1; i++) {
  if (skyrius5[i] < skyrius5[i + 1]) {
    let rusiuotojas = skyrius5[i];
    skyrius5[i] = skyrius5[i + 1];
    skyrius5[i + 1] = rusiuotojas;
  }
}
console.log( "trumpiausi zodziai: ", skyrius5);
