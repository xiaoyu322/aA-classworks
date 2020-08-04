
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

function dogLinkCreator(dogs){
  // debugger
  const dogsName = Object.keys(dogs);
  const dogLink = []
  for (let index = 0; index < dogsName.length; index++) {
    const newEle = document.createElement('a');

    newEle.innerHTML = dogsName[index];
    newEle.href = dogs[dogsName[index]];
    
    const newLi = document.createElement('li');

    newLi.classList = 'dog-link';
    newLi.appendChild(newEle);
    dogLink.push(newLi);
  }
  return dogLink;
}

function attachDogLinks(){
  const dropDownList = document.querySelector(".drop-down-dog-list");
  const dogLinks = dogLinkCreator(dogs);
  dogLinks.forEach(link => dropDownList.appendChild(link));
}

attachDogLinks();
