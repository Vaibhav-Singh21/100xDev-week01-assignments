/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.

  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
  
*/

function calculateTotalSpentByCategory(transactions) {

  // const trnxs = [
  //   { "itemName": "tshirt", "category": "cloths", "price": "500", "timestamp": "12345" },
  //   { "itemName": "pants", "category": "cloths", "price": "500", "timestamp": "1345" },
  //   { "itemName": "burger", "category": "food", "price": "300", "timestamp": "1245" },
  //   { "itemName": "coke", "category": "drinks", "price": "100", "timestamp": "1234" }
  // ];

  let totalExpense = 0;

  const { category, price } = transactions;

  for (let index = 0; index < transactions.length; index++) {
    totalExpense += transactions[index].price;
  }





  return [];
}

module.exports = calculateTotalSpentByCategory;
