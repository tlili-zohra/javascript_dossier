/* filtrage des élement qui sont paires */
let arr = [1, 2, 3, 4, 5, 6];
arr;

let even_arr = arr.filter(function (num) {
  return num % 2 == 0;
});

even_arr;

/* filtrage les chaine de caractére qui sont >5 caractére */

let fruits = ["appel", "banana", "kiwi", "strawberry"];
arr;

let longeur_word = fruits.filter(function (num) {
  return num.length > 5;
});

longeur_word;

/* Somme de tous les elements de tableau*/
let tab = [1, 2, 3, 4];
//tab.reduce(prev,current)
let somme = tab.reduce(function (somme, valeur) {
  return (somme += valeur);
});

somme;

/* Trouvé le maximum*/
let tab_max = [3, 7, 2, 9, 5];
let max = tab_max.reduce(function (max, valeur) {
  valeur;
  if (max < valeur) return valeur;
  return max;
});
// initialisation, tab[0]
max;

/* Find missing number */

let tab_find = [1, 2, 3, 5, 7, 8, 9];

let missingnumber = tab_find.reduce(function (missing, num, i) {
  console.log(num, i);
  if (num != i + 1 && missing == "no missing number") return i + 1;
  return missing;
}, "no missing number");
missingnumber;

/*Missing number in tableau*/

let missing_tab_v2 = [];
let decalage = 1;
for (let index = 0; index < tab_find.length; index++) {
  const element = tab_find[index];
  if (element != index + decalage) {
    missing_tab_v2.push(index + decalage);
    decalage += 1;
  }
}
missing_tab_v2;
