// Données de départ fournies. Aucun comportement n’est encore implémenté.
let produits = [
  { id: 1, nom: "Jus d’orange", prix: 12 },
  { id: 2, nom: "Biscuits", prix: 8 }
];
let prochainId = 3;

const input_name = document.getElementById("nom");
const input_price = document.getElementById("prix");
const add_button = document.getElementById("submit");
const product_list = document.getElementById("liste-produits");
const text_totale = document.getElementById("total");
const compteur = document.getElementById("compteur");
function add_input() {
  produits.push({
    id:produits.length + 1,
    nom:input_name.value,
    prix:input_price.value,
  })
 // console.log(produits[produits.length - 1]);
}
get_totale();
function get_totale() {
  let totale = 0;
  for(let i = 0;i<produits.length;i++) {
    totale += parseInt(produits[i].prix);
  }
  console.log(totale);
  text_totale.textContent = totale;
}

function create_card(product_name,product_price,i) {

  let li_list = document.createElement("li");
  li_list.className = "produit";

  let div_info_card = document.createElement("div");
  li_list.appendChild(div_info_card);

  let strong_product_name = document.createElement("strong");
  strong_product_name.textContent = product_name;
  div_info_card.appendChild(strong_product_name);

  let span_product_price = document.createElement("span");
  span_product_price.className = "prix-produit";
  span_product_price.textContent = product_price;
  div_info_card.appendChild(span_product_price);

  let button_add_product = document.createElement("button");
  button_add_product.className = "supprimer";
  button_add_product.textContent = "Retirer";
  li_list.appendChild(button_add_product);

  button_add_product.addEventListener("click", () => {
    produits.splice(i,1);
    compteur.textContent = produits.length;
    get_totale();
    show();
  })
  
  product_list.appendChild(li_list);
}
show()
function show() {
  product_list.textContent = "";
  for(let i = 0; i< produits.length;i++) {
    create_card(produits[i].nom,produits[i].prix,i);
  }
}
function check_validation() {
  let name = input_name.value;
  let price = input_price.value;

  if (name == "" || price == "") {
    alert("un champ na pas etais saisie");
    return false;
  }
}

function clear_input() {
  input_name.value = "";
  input_price.value = "";
}

compteur.textContent = produits.length;
add_button.addEventListener('click', (e) => {

  if(check_validation() == false) {
    return;
  }

  e.preventDefault();
  add_input();
  get_totale();
  compteur.textContent = produits.length;
  get_totale();
  clear_input();
  show();
})



// À vous de jouer :
// 1. Afficher les produits du tableau au chargement.
// 2. Gérer l’ajout depuis le formulaire.
// 3. Gérer le retrait du produit cliqué.
// 4. Bonus : compteur, état vide et total.
