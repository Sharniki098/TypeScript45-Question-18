var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["Italy", "Germany", "Murrey", "Eifel Tower", "Times Square"];
//Print your array in its orignal order.
console.log("origal" + places);
//print your array in alphabetical order without modifying actual list.
console.log("copy" + __spreadArray([], places, true).sort());
// Show that your is still in its original order by printing it.
console.log("origial" + places);
//Print your array in reverse alphabetical  order without changing order of the original list.
console.log("copy" + __spreadArray([], places, true).sort().reverse());
// Show that your is still in its original order by printing it.
console.log("origial" + places);
//  Reverse the order of your list. Print the array to show that its order has changed.
console.log("origial" + places.reverse());
// Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("origial" + places.reverse());
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("origial" + places.sort());
//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("origial" + places.sort().reverse());
