/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('temples');
const templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    let articleElement = document.createElement('article');
    let h3Element = document.createElement('h3');
    h3Element.textContent = temples.templeName;

    let imageElement = document.createElement('image');
    imageElement.setAttribute('src', temples.imageUrl);
    imageElement.setAttribute('alt', temples.location);

    articleElement.appendChild(h3Element);
    articleElement.appendChild(imageElement);
    templesElement.appendChild(articleElement);
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response  = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json")
    const json = JSON.stringify(response)
    //promise here???
    
}

/* reset Function */


/* sortBy Function */



getTemples();

/* Event Listener */
