const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  const checkIngredients = function(bakery) {
    let counterBake = [];
  for(let i = 0; i < recipes.length; i++) {
    for(let j = 0; j < bakery.length; j++) {
      for(let x = 0; x < recipes[i].ingredients.length; x++) {
        if(bakery[j] === recipes[i].ingredients[x]) {
          counterBake.push(recipes[i].name);
        }
      }
    }
  }  
  return counterBake;
  }
  const checkIngrBkrA = checkIngredients(bakeryA);
  const checkIngrBkrB = checkIngredients(bakeryB);
  let biggerArr = [];
  let smallerArr = [];
  if(checkIngrBkrA.length > checkIngrBkrB.length) {
    biggerArr = checkIngrBkrA;
    smallerArr = checkIngrBkrB;
  } else {
    biggerArr = checkIngrBkrB;
    smallerArr = checkIngrBkrA;
  }
  for(let z = 0; z < biggerArr.length; z++) {
    for(let y = 0; y < smallerArr.length; y++) {
      if(smallerArr[y] === biggerArr[z]) {
        return biggerArr[z];
      }
    }
  }
  
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));