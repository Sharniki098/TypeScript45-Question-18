

let places:string[] =["Italy","Germany","Murrey","Eifel Tower","Times Square"];

//Print your array in its orignal order.
console.log("origal"+places);

//print your array in alphabetical order without modifying actual list.
console.log("copy"+[...places].sort());

// Show that your is still in its original order by printing it.
console.log("origial"+places);

//Print your array in reverse alphabetical  order without changing order of the original list.
console.log("copy" +[...places].sort().reverse());

// Show that your is still in its original order by printing it.
console.log("origial"+places);

//  Reverse the order of your list. Print the array to show that its order has changed.
console.log("origial"+places.reverse());

// Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("origial"+places.reverse());

//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("origial"+places.sort());

//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("origial"+places.sort().reverse());