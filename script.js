const changeButton = document.getElementById('change-quote');
const testimonialName = document.getElementById('test-name');
const mainText = document.getElementById('main-text');
const mainAvatar = document.getElementById('main-avatar');

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
 .then(result => {

let jParsed = JSON.parse(result);

mainText.innerHTML = `<p class="test-message"> ${jParsed.message} </p>
                   <b> ${jParsed.name} </b>
                    <p> ${jParsed.location} </p>`;
mainAvatar.innerHTML = ` <img src="${jParsed.avatar}" alt="Person image">`

 })
 .catch(error => console.log('error', error));
}
