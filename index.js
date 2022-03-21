let valueDisplay = document.getElementById('value-input')
let convertBtn = document.getElementById('convert-btn')



function convertValue() {
    let feetValue = (valueDisplay.value * 3.2808).toFixed(3)
    let metersValue = (valueDisplay.value * 0.3048).toFixed(3)
    let litersValue = (valueDisplay.value * 0.2641).toFixed(3)
    let gallonsValue = (valueDisplay.value * 3.7854).toFixed(3)
    let killosValue = (valueDisplay.value * 2.2046).toFixed(3)
    let poundsValue = (valueDisplay.value * 0.4535).toFixed(3)
    document.getElementById('bottom').innerHTML = `
    <h3>Length (Meter/Feet)</h3>
        <p id="meters">${valueDisplay.value} meters = ${feetValue} feet </p> <p id="feet">${valueDisplay.value} feet = ${metersValue} meters</p>
        <h3>Volume (Liters/Gallons)</h3>
        <p id="liters">${valueDisplay.value} liters = ${gallonsValue} gallons </p> <p id="gallons">${valueDisplay.value} gallons = ${litersValue} liters</p>
        <h3>Mass (Kilograms/Pounds)</h3>
        <p id="kilograms">${valueDisplay.value} kilograms = ${poundsValue} pounds </p> <p id="pounds">${valueDisplay.value} pounds = ${killosValue} kilograms</p>
    `
}

valueDisplay.addEventListener('keyup', convertValue)