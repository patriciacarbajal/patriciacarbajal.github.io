// U3.W8-9: 


// I worked on this challenge [by myself, with: ].


// User Stories (As many as you want. Delete the statements you don't need)
// As a user, I want to add items to the list.
// As a user, I want to remove items from the list.
// As a user, I want to display the list.
// As a user, I want to see total number of each item.
// As a user, I want to see total cost of each item and total cost of entire list

// 2. Pseudocode
// Create a grocerylist object
// 		give it a property called list, another object
// 		give it a property called item, another object with name and price properties
// 		give it a property which is a function to add items with arguments (item, quantity)
//   		 1. check against list to see if item is already a key
//    	  	 2. if it is, just add quantity to existing value
//    	     3. if item isn't already on list, then
//          	4. add it onto the list with quantity as property and name_item as value
 // 	give it a property which is a function to remove items from the list that takes as arguments (item)
 //   			1. Check if item is on the list
 //  		    2. if it is, then delete it
 //   		    3. if not on the list, print message "sorry, this item is not on the list"
 // 	give it a property which is a function to display the list
 //   			1. print hash and format it
// 		give it a property that is a function, total_quantity with argument (item)
 //   		    1. go into list object and return item's quantity
 // 


// 3. Initial Solution

	function contains(product) {
    	return grocerylist.hasOwnProperty(product)
    }

	var grocerylist = {}

		function addItems (product, count) {
			count = parseInt(count);

			if (contains(product)){
				grocerylist[product] += count;
			} else {
				grocerylist[product] = count;
			}
		}

		function removeItems (product) {
			if (contains(product)){
				delete grocerylist[product];
			} else {
				console.log("Item cannot be removed because it does not exist");
			}
		}

		function displayList() {

			var text = "Your Grocery List: <br><br>";
				for (var product in grocerylist){
					text += grocerylist[product] + " " + product + "(s) <br>"
				}
				document.getElementById("display").innerHTML = text
			}

		

		function totalQuantity (product) {
			if (contains(product)){
				console.log("There are " + grocerylist[product] + " " + product + "(s) on the list");
			} else {
				console.log("There are no " + product + "s on the list");
			}
		}


	




// 4. Refactored Solution






// 1. DRIVER TESTS/ASSERT STATEMENTS GO BELOW THIS LINE

// addItems("apple", 4);
// addItems("pear", 3);
// addItems("chicken", 2);
// displayList();
// totalQuantity("pear")
// addItems("pear", 8)
// totalQuantity("pear")
// removeItems("chicken")
// totalQuantity("chicken")
// displayList()


// function assert(test, message, test_number) {
//   if (!test) {
//     console.log(test_number + "false");
//     throw "ERROR: " + message;
//   }
//   console.log(test_number + "true");
//   return true;
// }

// assert(
//   (contains instanceof Function),
//   "The value of average should be a Function.\n",
//   "1. "
// )

// assert(
//   contains("pear") === true,
//   "contains should return true if an item is on the list.\n",
//   "2. "
// )

// assert(
//   (grocerylist instanceof Object),
//   "The value of grocerylist should be an Object.\n",
//   "3. "
// )





