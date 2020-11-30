// list grocery items to buy

var groceryList = ['Onion','Tea','Cups','Oil','Jug'];

function printGrocery(groceryList)
{
  console.log(groceryList[0]);
  console.log(groceryList[2]);
  console.log(groceryList[4]);  
  console.log(groceryList.length);
}

printGrocery(groceryList);
console.log(groceryList[groceryList.length-1]);