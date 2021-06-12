// RANDOMIZE PRESENTERS
// Objective: Pick 3 presenters at random from a list and give back the result

// Define all presenters
const allPresenters = ['Alexej', 'Guilherme', 'Lorianne', 'Natalie', 'Pallavi', 'Peter', 'Pilar', 'Salvatore', 'Sasmitha', 'Victor']

// Keep track of past presenters - missing the type of presentation (Kahoot/TechWatch)
const pastPresenters = ['Victor', 'Salvatore', 'Alexej']

// Create an array to keep the new presenters for next week
let newPresenters = []

// Function to get 3 random presenters, excluding the past presenters

// Event Listener for the button to call the randomize funtion

// Append all registered presenters to the page
let presentersList = document.getElementById('presenters-list')
// cycle through the presenters and create a div for each participant and append it
for (let i=0; i < allPresenters.length; i++){
    let presenterDiv = document.createElement('div')
    presenterDiv.innerHTML = `<img src="resources/${i}.png"><p>${allPresenters[i]}</p>`
    presentersList.appendChild(presenterDiv)
}

// Append the past presenters to the page
let presentersListPast = document.getElementById('past-presenters')
// cycle through the presenters and create a div for each participant and append it
for (let i=0; i < pastPresenters.length; i++){
    let presenterDiv = document.createElement('div')
    presenterDiv.innerHTML = `<!--<img src="resources/${i}.png">--><p>${pastPresenters[i]}</p>`
    //img commented out because it needs to be an object to get the correct file
    presentersListPast.appendChild(presenterDiv)
}

// Apply the style to the new picks

// Apply the style to the last 3 past presenters to avoid being picked
