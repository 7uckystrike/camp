

function InputDate() {
    let inputYear = document.querySelector('#input-year').value
    let inputMonth = document.querySelector('#input-month').value
    let inputDay = document.querySelector('#input-day').value

    let dateFormat = `${inputYear}-${inputMonth}-${inputDay}`
    
    return dateFormat
}

function counterMaker() {
    const targetDateInput = InputDate();
    const nowDate = new Date();
    const targetDate = new Date(targetDateInput).setHours(0, 0, 0, 0) //자정기준
    const remaining = (targetDate - nowDate) / 1000
    const remainingData = Math.floor(remaining / 3600 / 24)
    const remainingHours = Math.floor(remaining / 3600) % 24
    const remainingMin = Math.floor(remaining / 60) % 60
    const remainingSec = Math.floor(remaining / 60) % 60

    console.log(remainingData, remainingHours, remainingMin, remainingSec)
}






// const targetDate = new Date('2022-01-01');
// const remaining = (targetDate - newDate) / 1000
// const remainingData = Math.floor(remaining / 3000 /24);