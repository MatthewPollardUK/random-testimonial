const changeButton = document.getElementById('change-quote');

let randomId;
let newId;





let changeQuote = () => {
randomIdGet();
console.log(randomId)
}

changeButton.addEventListener('click', changeQuote);


const randomIdGet = () => {
  newId = Math.floor(Math.random() * 10) + 1;
  // if (newId !== randomId){
  // randomId = newId;
  // console.log(randomId);
 //} else {
  //console.log(`newId = ${newId} and randomId = ${randomId} are the same`);
//  randomIdGet();
//return randomId;
//}

newId !== randomId ? randomId = newId : randomIdGet();


}
