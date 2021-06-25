// RANDOMIZE PRESENTERS
// Objective: Pick 3 presenters at random from a list and give back the result

// Define all presenters
const allPresenters = ['Alexej', 'Guilherme', 'Lorianne', 'Natalie', 'Pallavi', 'Peter', 'Pilar', 'Salvatore', 'Sasmitha', 'Victor']
// Keep track of past presenters - missing the type of presentation (Kahoot/TechWatch)
const pastPresenters = [9, 7, 0, 3, 1, 4]

// Create an array to keep the new presenters for next week so they can be excluded for the second and third pick
let excludedPresenters = pastPresenters
let picks = 0

// Function to get 3 random presenters, excluding the past presenters and ongoing selection
function randomizePresenters (){
    //Get a random number from 0 to 9 and check if it is not on the excluded presenter array
    let randomNumber = Math.floor(Math.random()*10)
    for (let i=0; i<excludedPresenters.length;i++){
        // console.log(`i: ${i} rndNum: ${randomNumber}`)
        if (randomNumber===excludedPresenters[i]){
            // console.log(`rndNum: ${randomNumber} pstPrst ${pastPresenters[i]}`)
            randomNumber = Math.floor(Math.random()*10)
            i = -1
        }
    }
    return randomNumber
}

// Event Listener for the button to call the randomize funtion
const rndButton = document.getElementById('start')
const msgTitle = document.getElementById('msg-title')

rndButton.addEventListener('click', function(){
    //each time the button is pushed, we first check if we can proceed or if we already went 3x
    if (picks<3){
        const rndPresenter = randomizePresenters();
        excludedPresenters.push(rndPresenter)
        picks++
        console.log(excludedPresenters, picks)
        //print the result each time
        revealResult(rndPresenter)
        if (picks === 3) {
            // when the third pick is made, change the picks to -1 and change style to reset button
            rndButton.className = 'icon reset'
            rndButton.innerHTML = '♻️'
            msgTitle.innerText = 'Congratulation to the presenters! You can start over if you\'d like!'
        }
    } else {
        //call the function to clear
        resetPicks()
    }
})
// Apply the style and add the correct data to the new picks
function revealResult (presenter){
    // Change the result information
    // change the avatar
    document.getElementById('r-img'+picks.toString()).src = 'resources/'+presenter.toString()+'.png'
    // change the name
    document.getElementById('r-p'+picks).innerText = allPresenters[presenter]
    // set the locked info on all presenters
    // change the avatar
    document.getElementById('presenter'+presenter).className = 'locked'
}

// ADD ALL THE INFO SAVED AS DATA TO THE WEBPAGE - PRESENTERS AND PAST PRESENTERS
// Append all registered presenters to the page
const presentersList = document.getElementById('presenters-list')
// cycle through the presenters and create a div for each participant and append it
for (let i=0; i < allPresenters.length; i++){
    const presenterDiv = document.createElement('div')
    presenterDiv.id = 'presenter'+i
    presenterDiv.innerHTML = `<img src="resources/${i}.png"><p>${allPresenters[i]}</p>`
    // Apply the locked class to the last 3 past presenters already saved
    for (let k=0; k < pastPresenters.length; k++){
        if (i===pastPresenters[k]){
            presenterDiv.className = 'locked'
        }
    }
    presentersList.appendChild(presenterDiv)
}
// Append the past presenters to the page
const presentersListPast = document.getElementById('past-presenters')
// cycle through the presenters and create a div for each participant and append it - MISSING SEPARATE BY WEEK (/3)
for (let i=0; i < pastPresenters.length; i++){
    const presenterDiv = document.createElement('div')
    presenterDiv.innerHTML = `<img src="resources/${pastPresenters[i]}.png"><p>${allPresenters[pastPresenters[i]]}</p>`
    presentersListPast.appendChild(presenterDiv)
}

// clear the result to start over
function resetPicks (){
    // rest pick count
    picks = 0
    // select last 3 saved presenters picked
    let clearPresenters = 0
    for (let i =0, k=1 ; i<3; i ++, k++){
        clearPresenters = excludedPresenters[excludedPresenters.length-1]
        excludedPresenters.pop()
        k = i+1
        // change the avatar, change the name and presenter style
        console.log(excludedPresenters, clearPresenters, i, k)
        document.getElementById('r-img'+k.toString()).src = 'resources/n.png'
        document.getElementById('r-p'+k).innerText = '?'
        document.getElementById('presenter'+clearPresenters).className = ''
    }
    rndButton.className = 'icon'
    rndButton.innerHTML = '🎲'
    msgTitle.innerText = 'Roll the dice'
}
