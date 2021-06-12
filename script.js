// RANDOMIZE PRESENTERS
// Objective: Pick 3 presenters at random from a list and give back the result

// Define all presenters
const allPresenters = ['Alexej', 'Guilherme', 'Lorianne', 'Natalie', 'Pallavi', 'Peter', 'Pilar', 'Salvatore', 'Sasmitha', 'Victor']

// Keep track of past presenters - missing the type of presentation (Kahoot/TechWatch)
const pastPresenters = [9, 7, 0]

// Create an array to keep the new presenters for next week
let newPresenters = []

// Function to get 3 random presenters, excluding the past presenters

// Event Listener for the button to call the randomize funtion

// Append all registered presenters to the page
const presentersList = document.getElementById('presenters-list')
// cycle through the presenters and create a div for each participant and append it
for (let i=0; i < allPresenters.length; i++){
    const presenterDiv = document.createElement('div')
    presenterDiv.innerHTML = `<img src="resources/${i}.png"><p>${allPresenters[i]}</p>`
    // Apply the locked class to the last 3 past presenters since they won't be picked 
    for (let ii=0; ii < pastPresenters.length; ii++){
        if (i===pastPresenters[ii]){
            presenterDiv.classList.add('locked')
        }
    }
    presentersList.appendChild(presenterDiv)
}

// Append the past presenters to the page
const presentersListPast = document.getElementById('past-presenters')
// cycle through the presenters and create a div for each participant and append it
for (let i=0; i < pastPresenters.length; i++){
    const presenterDiv = document.createElement('div')
    presenterDiv.innerHTML = `<img src="resources/${pastPresenters[i]}.png"><p>${allPresenters[pastPresenters[i]]}</p>`
    presentersListPast.appendChild(presenterDiv)
}

// Apply the style to the new picks

