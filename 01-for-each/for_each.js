// define an array of fruits
const fruits = ["Banana","Appel","Onion","Leman","Orange"];

fruits.forEach((fruit, index) => {
    console.log((index + 1)  + " - " + fruit);  //a message interpolating the name of the fruit and it's position in the array (index increased by 1);
})
