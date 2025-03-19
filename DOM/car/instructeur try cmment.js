// cette fonction pour faire real time
/*const isValidDateE = () =>
    endDate.value != "" && new Date(endDate.value) >= new Date(startDate.value);
*/
//le totalcost changer en real time sans besoins de cliquer sur le button submit
//ajouter a la fin de tableau
// refresh in tableau delet all the contenu mais avec les nouvelles valeurs

/*local storage : enregistrer les données dans le brrowser : 
      - function addreservation : objet 'row' et pusher dans tableau array reservation créer
      - dans le meme function ajouter : localstorage.setItem("reserveation", JSON.stringify(reservation)) // localStorage.setItem(keyname, value) ou sessionStorage.setItem(keyname, value)
      -stringify : from js to json
      -setItem : ajouter un item dans le local strorage et dans une tableau des objets
      -getItem: pour recupérer les données.
      json.parese: from json to js
- DOMContentLoaded: pour charger les données dans le local strorage : awel mytcharger html lkol ysir reload lel tableau
*/

// Calculate Total Cost
const start = new Date(startDate.value);
const end = new Date(endDate.value);
console.log(
  Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
);
