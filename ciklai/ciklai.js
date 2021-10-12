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
let r = 0;
let rNaujas = 1;

while (r !== rNaujas) {
  r = Math.trunc(Math.random() * 11);
  rNaujas = Math.trunc(Math.random() * 11);
  console.log("atsitiktinis R: ", r, "atsitiktinis rNaujas: ", rNaujas);
}

// 14. console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Skaičiuoti abiejų skaičių sumas skirtinguose kintamuosiuose. Ciklą kartoti tol, kol kiekviena iš sumų bus daugiau nei 100;
let random5;
let randomNew5;
let randomSuma5 = 0;
let randomNewSuma5 = 0;

while (randomSuma5 <= 100 || randomNewSuma5 <= 100) {
  random5 = Math.trunc(Math.random() * 11);
  randomSuma5 += random5;
  randomNew5 = Math.trunc(Math.random() * 11);
  randomNewSuma5 += randomNew5;
  console.log("random5 skaicius: ", random5, " ", "randomNew5 skaicius: ", randomNew5);
  console.log("randomSuma5: ", randomSuma5, " ", "randomNewSuma5: ", randomNewSuma5);
}

// 15. console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Ciklą kartoti kol bus sugeneruota po tris arba daugiau nelyginių skaičių.
let random6;
let randomNew6;
let randomNelyginis6 = 0;
let randomNewNelyginis6 = 0;

while (randomNelyginis6 <= 3 && randomNewNelyginis6 <= 3) {
  random6 = Math.trunc(Math.random() * 11);
  randomNew6 = Math.trunc(Math.random() * 11);
  console.log("random6: ", random6, " ", "randomNew6: ", randomNew6);
  if (random6 % 2 === 1 || randomNew6 % 2 === 1) {
    randomNelyginis6++;
    randomNewNelyginis6++;
  }
}

