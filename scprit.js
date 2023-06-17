

function dateCalc(){

let inputDay = document.querySelector('#day')
let inputMonth = document.querySelector('#month')
let inputYear = document.querySelector('#year')

// console.log(inputDay.value)

let inputDate = new Date(inputYear.value,Number(inputMonth.value) -1,inputDay.value)


// console.log(inputDate)

const currentDate = new Date()

// console.log(currentDate)

let calcDate = ageComparison(inputDate,currentDate)


console.log(calcDate)



let resultDay = document.querySelector('span#days')
let resultMonth = document.querySelector('span#months')
let resultYear = document.querySelector('span#years')

resultDay.innerHTML = calcDate.ageDays
resultMonth.innerHTML = calcDate.ageMonths
resultYear.innerHTML = calcDate.ageYears


}

function ageComparison(birthDate,nowDate){
    const ageDif = Math.floor(nowDate.getTime() - birthDate.getTime())
    const ageDays = Math.floor(nowDate.getDate() - birthDate.getDate())
    const ageMonths = Math.floor(12 + nowDate.getMonth() - birthDate.getMonth())
    const ageYears = Math.floor(ageDif/(1000 * 60 * 60 * 24 * 365))
    return {ageDays, ageMonths, ageYears}
}