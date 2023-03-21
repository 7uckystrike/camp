function InputDate() {
    let inputYear = document.querySelector('#input-year').value
    let inputMonth = document.querySelector('#input-month').value
    let inputDay = document.querySelector('#input-day').value

    let dateFormat = `${inputYear} ${inputMonth} ${inputDay}`
    
    return dateFormat //리턴값을 통해 지역변수를 전역으로 사용할 수 있게 만든다! 
}

function counterMaker() {
    const targetDateInput = InputDate();
    const nowDate = new Date();
    const targetDate = new Date(targetDateInput).setHours(0, 0, 0, 0) //자정기준
    const remaining = (targetDate - nowDate) / 1000
      // 만약 리메이닝이 0이라면, 타이머가 종료 출력
      if(remaining < 0) {
        console.log('타이머가 종료되었습니다.')
      } else if(isNaN(remaining)) {
        console.log('유효한 시간대가 아닙니다.')
      }

    
    const remainingData = Math.floor(remaining / 3600 / 24)
    const remainingHours = Math.floor(remaining / 3600) % 24
    const remainingMin = Math.floor(remaining / 60) % 60
    const remainingSec = Math.floor(remaining / 60) % 60
}

