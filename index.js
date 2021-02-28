const num = document.querySelector('#num-dice')
const button = document.querySelector('#roll-btn')
const diceDisplay = document.querySelector('#dice-para')
const sumDisplay = document.querySelector('#sum-para')
const ul = document.querySelector('ul')


diceArr = ['&#9856', '&#9857', '&#9858', '&#9859', '&#9860', '&#9861']

button.addEventListener('click', (event) => {
    event.preventDefault()
    sumDisplay.textContent="Sum = "
    let newDiceArr = []
    for (let i = 0; i < num.value; i++){
        newDiceArr[i] = diceArr[Math.floor(Math.random() * diceArr.length)]
    }
    
    let sum = 0
    for(let i = 0; i < newDiceArr.length; i++){
        if (newDiceArr[i] === '&#9856'){
            sum += 1
        }else if (newDiceArr[i] === '&#9857'){
            sum += 2
        }else if (newDiceArr[i] === '&#9858'){
            sum += 3 
        }else if (newDiceArr[i] === '&#9859'){
            sum += 4
        }else if (newDiceArr[i] === '&#9860'){
            sum += 5
        } else {
            sum += 6
        }

    }
    let diceHistoryList = document.createElement('li')
    diceHistoryList.innerHTML = `${newDiceArr.join('')} = ${sum}` 
    ul.appendChild(diceHistoryList)

    sumDisplay.textContent += sum
    diceDisplay.innerHTML = newDiceArr.join('')
    num.value = ""

})