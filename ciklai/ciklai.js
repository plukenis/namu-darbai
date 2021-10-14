// 1. console.log’e, naudojant ciklą atspausdinti penkias eilutes ‘Labas’;
for(let sk =0; sk<5; sk++){
  console.log("Labas");
}

// 2. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 1 2 3 4 (vienas skaičius vienoje eilutėje);
for (var sk = 0; sk <= 4; sk++) {
  console.log(sk);
}

// 3. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 10 20 30 40 (vienas skaičius vienoje eilutėje);
for(let sk = 0; sk < 50; sk+=10) {
  console.log(sk);
}
  
// 4. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 49 50 51 52 53 (vienas skaičius vienoje eilutėje);
for(let sk = 49; sk<=53; sk++) {
  console.log(sk);
}

// 5. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 4 3 2 1 0 (vienas skaičius vienoje eilutėje);
for(let sk = 4; sk>=0; sk--) {
  console.log(sk);
}

// 6. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 2 4 6 8 (vienas skaičius vienoje eilutėje, daugybos konsolėje nenaudoti!, if’ų nenaudoti, ciklas for);
for(let sk = 0; sk < 9; sk+=2) {
  console.log(sk);
}

// 7. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje);
for(let sk= 0 ; sk< 5; sk++) {

  console.log(Math.floor(Math.random() * 11));
  
}

// 8. console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5;
let random;
while (random != 5) {
  random = Math.floor(Math.random() * 11);
  console.log(random);
}

// 9. console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 100;
let suma = 0;
while (suma <= 100) {
  let random = Math.floor(Math.random() * 11);
  console.log("atsitiktinis skaicius: ", random);
  suma += random;
  console.log("suma yra: ", suma);
}

// 10. console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5 arba 7; Suskaičiuoti kiek ciklų prasisuko;
let ciklas = 0;
let random2;
while (random2 != 5 && random2 != 7) {
  random2 = Math.floor(Math.random() * 11);
  console.log(random2);
  ciklas++;
}
console.log("ciklu kiekis: ", ciklas);
// 11. console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 20, bet ne anksčiau nei po 11 ciklų;
let suma2 = 0;
let ciklas2 = 0;
let random3;

while (suma2 <= 20 || ciklas2 < 11) {
    random3 = Math.floor(Math.random() * 11);
    console.log(random3);
    ciklas2++;
    suma2+=random3;
}
console.log("ciklų kiekis: ", ciklas2);
console.log("suma", suma2);
// 12. console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklą kartoti kol bus sugeneruoti trys nelyginiai skaičiai;
let nelyginis = 0;

while(nelyginis < 3) {
let random4 = Math.floor(Math.random() * 11);
console.log(random4);
if(random4 % 2 === 1 ) {
nelyginis++;
}
}
console.log("nelyginis skaicius", nelyginis);

// 13. console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Ciklą kartoti tol, kol neiškris abu vienodi skaičiai;
let n = 0;
let nNaujas = 1;

while (n !== nNaujas) {
  n = Math.trunc(Math.random() * 11);
  nNaujas = Math.trunc(Math.random() * 11);
  console.log("atsitiktinis M: ", n, "atsitiktinis rNaujas: ", nNaujas);
}

// 14. console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Skaičiuoti abiejų skaičių sumas skirtinguose kintamuosiuose. Ciklą kartoti tol, kol kiekviena iš sumų bus daugiau nei 100;
let randome;
let randomeNaujas;
let randomeSuma = 0;
let randomeNaujasSuma = 0;

while (randomeSuma <= 100 || randomeNaujasSuma <= 100) {
  randome = Math.trunc(Math.random() * 11);
  randomeSuma += randome;
  randomeNaujas = Math.trunc(Math.random() * 11);
  randomeNaujasSuma += randomeNaujas;
  console.log("randome skaicius: ", randome, " ", "randomNaujas skaicius: ", randomeNaujas);
  console.log("randomeSuma: ", randomeSuma, " ", "randomeNaujasSuma5\: ", randomeNaujasSuma);
}

// 15. console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Ciklą kartoti kol bus sugeneruota po tris arba daugiau nelyginių skaičių.
let randomo;
let randomoNew;
let randomoNelyginis = 0;
let randomoNaujasNelyginis = 0;

while (randomoNelyginis <= 3 && randomoNaujasNelyginis <= 3) {
  randomo = Math.trunc(Math.random() * 11);
  randomoNaujas = Math.trunc(Math.random() * 11);
  console.log("randomo: ", randomo, " ", "randomoNaujas: ", randomoNaujas);
  if (randomo % 2 === 1 || randomoNaujas % 2 === 1) {
    randomoNelyginis++;
    randomoNaujasNelyginis++;
  }
}

