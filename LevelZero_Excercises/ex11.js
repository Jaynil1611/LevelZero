// print every item on the list

var groceryList = ['Onion','Tea','Cups','Oil','Jug'];

function printGrocery(groceryList)
{
  for(var i = 0; i < groceryList.length; i++)
  {
    console.log(groceryList[i]);
  }
}

printGrocery(groceryList);