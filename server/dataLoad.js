// Load some ingredients, first time start only
if (IngredientsList.find().count() === 0) {

  var ingred = ['Vodka','Rum', 'Whiskey', 'Scotch', 'Bourbon', 'Tequila', 'Cognac', 'Everclear', 'Absinthe', 'Soju', 'Brandy', 'Moonshine', 'Schnapps', 'Brandy', 'Orange Juice', 'Sprite', '7-Up', 'Cranberry Juice', 'Simple Sugar', 'Genadine', 'Ginger-ale', 'Triple Sec', 'Maraschino liqueur', 'Kahlua', 'Crème de Cacao', 'Dry Vermouth', 'Sweet Vermouth', 'Orange Bitters', 'Campari', 'Ice', 'Lemon juice', 'Lime juice', 'Amaretto', 'Southern Comfort', 'Sweet and sour mix', 'Gin','Bailey\'s','Milk','Cream','Nutmeg','Tomato juice','Half and half','Crème de menthe','Peach Schnapps','Cherry','powdered sugar','granulated sugar','Strawberry Schnapps','Strawberries','Sake'];

  // Heh, ES6 FTW: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
  for(var i of ingred){
    console.log('Adding ingredient:'+ i);
    IngredientsList.insert({
      name: i,
    });
  }
}

// Load the units of measurement, first start only
if (UnitsList.find().count() === 0) {

  var units = ['shot', 'oz', 'tsp', 'tbsp', 'dash', 'part', 'cup', 'splash',];
  for(var i of units){
    console.log('Adding units:'+ i);
    UnitsList.insert({
      name: i,
    });
  }
}
