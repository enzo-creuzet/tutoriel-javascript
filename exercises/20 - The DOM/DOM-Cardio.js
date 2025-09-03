// Make a div
const div = document.createElement('div')

// add a class of wrapper to it
div.classList.add('wrapper')

// put it into the body
document.body.appendChild(div)

// make an unordered list
const ul = `
    <ul>
        <li>one</li>    
        <li>two</li>    
        <li>three</li>    
    </ul>
`;

// add three list items with the words "one, two, three" in them
// put that list into the above wrapper
div.innerHTML = ul;
console.log(div)

// create an image
const img = document.createElement('img');

// set the source to an image
img.src = '25-500x500.jpg';

// set the width to 250
img.width = 250;
img.height = 250;

// add a class of cute
img.classList.add('cute');

// add an alt of Cute Puppy
img.alt = "Cute tout court"

// Append that image to the wrapper
div.appendChild(img)

// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
    <div class="myDiv">
        <p>Paragraph one</p>
        <p>Paragraph two</p>
    </div>
`

// put this div before the unordered list from above
const ulElement = div.querySelector('ul');
console.log(ulElement);

ulElement.insertAdjacentHTML("beforeBegin", myHTML);

// add a class to the second paragraph called warning
const myDiv = document.querySelector('.myDiv');
console.log(myDiv)
console.log(myDiv.children)

// remove the first paragraph
myDiv.children[1].classList.add('warning');
myDiv.children[1].remove();


// create a function called generatePlayerCard that takes in three arguments: name, age, and height

function generateTestCard(name,age,height) {
    const html = `
        <div class = 'testCard'>
            <h2>name : ${name}</h2>
            <p>${age * 3}yo | ${height}cm</p> 
            <button class = "delete" type = "button">&times Del the zozo</button>
        </div>
    `;
    return html;
}

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards


let cards = document.createElement('div');
cards.classList.add('cards');

// make 4 player cards using generatePlayerCard

cards.insertAdjacentHTML('beforeEnd', generateTestCard('zozo', 5, 150));
cards.insertAdjacentHTML('beforeEnd', generateTestCard('zouzou', 10, 175));
cards.insertAdjacentHTML('beforeEnd', generateTestCard('zinzin', 15, 125));
cards.insertAdjacentHTML('beforeEnd', generateTestCard('zouzin', 15, 150));

// append those cards to the div

// put the div into the DOM just before the wrapper element
div.insertAdjacentElement('beforebegin', cards);

console.log('test');

// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const buttons = document.querySelectorAll('.delete');

// make out delete function
function deleteCard(event) {
    const clickedButton = event.currentTarget;
    clickedButton.parentElement.remove();
};

// loop over them and attach a listener
buttons.forEach(button => button.addEventListener("click", deleteCard));
