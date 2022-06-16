const changeButton = document.getElementById('change-quote');

let randomId;
let newId;





let changeQuote = () => {
randomIdGet(); //get random ID number
//console.log(randomId)
dataRetrieve();
}

changeButton.addEventListener('click', changeQuote);


const randomIdGet = () => {
  newId = Math.floor(Math.random() * 10) + 1;
newId !== randomId ? randomId = newId : randomIdGet();
}

const dataRetrieve = () => {
  let requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  let urlToUse = `https://testimonialapi.toolcarton.com/api/${randomId}`;
fetch(urlToUse, requestOptions)
 .then(response => response.text())
 .then(result => console.log(result))
 .catch(error => console.log('error', error));
}
