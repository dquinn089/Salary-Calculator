const fedTaxRateInput = document.getElementById('fedTaxRate')
const stateTaxRateInput = document.getElementById('stateTaxRate')
const hourlyRateInput = document.getElementById('hourlyRate')
const hoursPerDayInput = document.getElementById('hoursPerDay')
const daysPerWeekInput = document.getElementById('daysPerWeek')

const fedNumE1 = document.getElementById('fedpercent')
const stateNumE1 = document.getElementById('statepercent')
const hoursNumE1 = document.getElementById('hours-num')
const daysNumE1 = document.getElementById('days-num')

fedTaxRateInput.addEventListener('input', calculateSalary)
stateTaxRateInput.addEventListener('input', calculateSalary)
hourlyRateInput.addEventListener('input', calculateSalary)
hoursPerDayInput.addEventListener('input', calculateSalary)
daysPerWeekInput.addEventListener('input', calculateSalary)

function calculateSalary() {
    const fedTaxRate = parseFloat(fedTaxRateInput.value)
    const stateTaxRate = parseFloat(stateTaxRateInput.value)
    const hourlyRate = parseFloat(hourlyRateInput.value)
    const hoursPerDay = parseFloat(hoursPerDayInput.value)
    const daysPerWeek = parseFloat(daysPerWeekInput.value)

    const hourlyAmount = hourlyRate
    const dailyAmount = hourlyRate * hoursPerDay
    const weeklyAmount = dailyAmount * daysPerWeek
    const monthlyAmount = (weeklyAmount * 52) / 12
    const annualAmount = monthlyAmount * 12
    const fedTax = (fedTaxRate/100) * annualAmount
    const stateTax = (stateTaxRate/100) * annualAmount
    const afterTax = annualAmount - (fedTax + stateTax)

    hoursNumE1.innerText = hoursPerDayInput.value
    daysNumE1.innerText = daysPerWeekInput.value
    fedNumE1.innerText = fedTaxRateInput.value
    stateNumE1.innerText = stateTaxRateInput.value

    displaAmounts(hourlyAmount, dailyAmount, weeklyAmount, monthlyAmount, annualAmount, afterTax)
}

function displaAmounts(hourlyAmount, dailyAmount, weeklyAmount, monthlyAmount, annualAmount, afterTax) {
    document.getElementById('hourlyAmount').textContent = `$${hourlyAmount.toFixed(2)}`
    document.getElementById('dailyAmount').textContent = `$${dailyAmount.toFixed(2)}`
    document.getElementById('weeklyAmount').textContent = `$${weeklyAmount.toFixed(2)}`
    document.getElementById('monthlyAmount').textContent = `$${monthlyAmount.toFixed(2)}`
    document.getElementById('annualAmount').textContent = `$${annualAmount.toFixed(2)}`
    document.getElementById('afterTax').textContent = `$${afterTax.toFixed(2)}`

}

calculateSalary()