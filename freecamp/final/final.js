// 핸드폰번호 숫자 제한
const focusBtn = () => {
    let ph1 = document.getElementById("phone1").value

    if(ph1.length === 3) {
        document.getElementById("phone2").focus()
    }
}

const focusBtn1 = () => {
    let ph2 = document.getElementById("phone2").value

    if(ph2.length === 4) {
        document.getElementById("phone3").focus()
    }
}

const focusBtn2 = () => {
    let ph3 = document.getElementById("phone3").value

    if(ph3.length === 4) {
        document.getElementById("token__btn").style = "background-color: #FFFFFF; color: #0068FF; cursor: pointer;"
        document.getElementById("token__btn").removeAttribute("disabled")
    }
}


//인증번호 전송
const tokenBtn = () => {
    let token = String(Math.floor(Math.random() * 1000000)).padStart(6,"0")
    document.getElementById("token").innerText = token

    let time = 5
    let timer = setInterval(function(){
        if(time >= 0) {
            let min = Math.floor(time / 60)
            let sec = String(time % 60).padStart(2, "0")
            time = time - 1
            document.getElementById("timer").innerText = `${min}분 ${sec}초`
        } else {
            document.getElementById("timer__btn").style = "background-color: #FFFFFF; color: #0068FF; cursor: pointer;"
            document.getElementById("timer__btn").removeAttribute("disabled")
        }
    },1000)
}