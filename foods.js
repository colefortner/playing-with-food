
class Food {
  constructor(
    servingSizeG,
    calories, 
    totFatG, 
    satFatG, 
    cholMg, 
    naMg, 
    totCarb, 
    fiber, 
    sugars, 
    protein, 
  ){
    this.servingSizeG = servingSizeG;
    this.calories = calories;
    this.totFatG = totFatG;
    this.satFatG = satFatG;
    this.cholMg = cholMg;
    this.naMg = naMg;
    this.totCarb = totCarb;
    this.fiber = fiber;
    this.totSugars = sugars;
    this.protein = protein;
    // this.vitA = vitA;
    // this.vitC = vitC;
    // this.ca = ca;
    // this.fe = fe;
  }
}

let trueStoryChicken = new Food(56, 80, 2, 0, 45, 110, 0, 0, 0, 15);
trueStoryChicken.vitA = 0;
trueStoryChicken.vitC = 0;
trueStoryChicken.ca = 0;
trueStoryChicken.fe = 2;

let horizonOrgAmerican = new Food(19, 60, 4, 2.5, 10, 240, 1, 0, 1, 4);

horizonOrgAmerican.vitD = 0;
horizonOrgAmerican.ca = 10;
horizonOrgAmerican.fe = 0;
horizonOrgAmerican.kMg = 0;
horizonOrgAmerican.addedSugarsG = 1;

let davesEnglishMuff = new Food(62, 140, 1.5, 0, 0, 300, 26, 3, 2, 6);

davesEnglishMuff.vitD = 0;
davesEnglishMuff.ca = 0;
davesEnglishMuff.fe = 6;
davesEnglishMuff.kMg = 110;

let kashiChocolate = new Food(61, 210, 1.5, 0, 0, 5, 50, 7, 9, 5);
kashiChocolate.soluableFiberG = 1;
kashiChocolate.insoluableFiberG = 6;
kashiChocolate.addedSugarsG = 9;
kashiChocolate.vitD = 0;
kashiChocolate.ca = 2;
kashiChocolate.fe = 8;
kashiChocolate.kMg = 230;
kashiChocolate.thiamin = 20;
kashiChocolate.niacin = 25;
kashiChocolate.magnesium = 15;
kashiChocolate.zinc = 10;

let almondBreezeUnsweetendVanilla = new Food(240, 30, 2.5, 0, 0, 170, 1, 0, 0, 1);
almondBreezeUnsweetendVanilla.vitD = 25;
almondBreezeUnsweetendVanilla.ca = 35;
almondBreezeUnsweetendVanilla.fe = 4;
almondBreezeUnsweetendVanilla.kMg = 160;
almondBreezeUnsweetendVanilla.vitA = 15;
almondBreezeUnsweetendVanilla.vitE = 50;
almondBreezeUnsweetendVanilla.phosphorus = 2;
almondBreezeUnsweetendVanilla.magnesium = 4;

let franksBuff = new Food(15, 0, 0, 0, 0, 420, 0, 0, 0, 0);

let greenwiseSpinach = new Food(142, 35, 0, 0, 0, 110, 5, 3, 0, 4);
greenwiseSpinach.vitD = 0;
greenwiseSpinach.ca = 10;
greenwiseSpinach.fe = 20;
greenwiseSpinach.kMg = 790;

let greenwiseSunflowerSeeds = new Food(30, 200, 17, 1, 0, 170, 6, 5, 0, 5);
greenwiseSunflowerSeeds.vitD = 0;
greenwiseSunflowerSeeds.ca = 2;
greenwiseSunflowerSeeds.fe = 6;
// greenwiseSpinach.kMg = 790;??????????? 4%

let tomatoUSDA = new Food(123, 22, 0, 0, 0, 6, 5, 2, 3, 1);
tomatoUSDA.vitD = 0;
tomatoUSDA.ca = 1;
tomatoUSDA.fe = 2;
tomatoUSDA.kMg = 291;

let bananaUSDA = new Food(118, 105, 0, 0, 0, 1, 27, 3, 14, 1);
bananaUSDA.vitD = 0;
bananaUSDA.ca = 6;
bananaUSDA.fe = 1;
bananaUSDA.kMg = 517;

// console.log(trueStoryChicken)

function servingCalculation(food, serving){
  let factor = serving/food.servingSizeG
  console.log(factor)
  // let calculated = {}
  for(let key in food){
    food[key] = food[key] * factor
  }
  return food
}

function mealCalculation(foodArr){
  
  let meal = { }
  for(let food of foodArr){
    for(let key in food){
      console.log(typeof food[key])
      // console.log(key)
      if (!meal[key]){
        meal[key] = food[key]
      } else {
        meal[key] += food[key]
      }
    }
  }
  return meal
}
console.log(mealCalculation(
                            [
                              servingCalculation(trueStoryChicken, 56), 
                              horizonOrgAmerican, 
                              franksBuff, 
                              servingCalculation(tomatoUSDA, 30),
                              davesEnglishMuff,
                              servingCalculation(greenwiseSpinach, 10)
                            ]
                          )
                        )
let calculatedTomato = servingCalculation(tomatoUSDA, 30);
console.log(calculatedTomato);
let calculatedSpinach = servingCalculation(greenwiseSpinach, 10);
console.log(calculatedSpinach)

