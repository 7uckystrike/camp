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


const tokenBtn = () => {
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6,"0")
    console.log(token)
    document.getElementById("token").innerText = token
    document.getElementById("timer__btn").style = "background-color: #FFFFFF; color: #0068FF; cursor: pointer;"
    document.getElementById("timer__btn").removeAttribute("disabled")
    getTokenTimer();
}

let getTime 
console.log(getTime)
const getTokenTimer = () => {
    let time = 10
    getTime = setInterval(function() {
        if(time >= 0 ){
            let min = String(Math.floor(time / 60))
            let sec = String(time % 60).padStart(2, "0")
            time = time - 1
            console.log(time)
            document.getElementById("timer").innerText = `${min}:${sec}`
        } else {
            clearInterval(getTime)
        }
    },1000)
}

const getTokenConfirm = () => {
    clearInterval(getTime)

    document.getElementById("timer__btn").style = "background-color: #FFFFFF; cursor: default;"
    alert("인증이 완료됐습니다.")
    
    document.getElementById("signup__button").style = "background-color: #FFFFFF; color: #0068FF; cursor: pointer;"
    document.getElementById("signup__button").removeAttribute("disabled")
}

const signUp = () => {
    let email = document.getElementById("email").value
    let name = document.getElementById("name").value
    let pw1 = document.getElementById("pw1").value
    let pw2 = document.getElementById("pw2").value
    let location = document.getElementById("location").value
    let genderWoman = document.getElementById("gender__woman").checked
    let genderMan = document.getElementById("gender__man").checked

    let isValid = true 

    if(email.includes("@") === false) {
        document.getElementById("error__email").innerText = "이메일을 입력해주세요."
        isValid = false
    } else {
        document.getElementById("error__email").innerText = ""
    }

    if(name === "") {
        document.getElementById("error__name").innerText = "이름을 입력해주세요."
        isValid = false
    } else {
        document.getElementById("error__name").innerText = ""
    }

    if(pw1 === "") {
        document.getElementById("error__pw1").innerText = "비밀번호를 입력해주세요."
        isValid = false 
    } else {
        document.getElementById("error__pw1").innerText = ""
    }

    if(pw2 === "") {
        document.getElementById("error__pw2").innerText = "비밀번호를 입력해주세요."
        isValid = false 
    } else {
        document.getElementById("error__pw2").innerText = ""
    }

    if(pw1 !== pw2) {
        document.getElementById("error__pw1").innerText = "비밀번호가 일치하지 않습니다."
        document.getElementById("error__pw2").innerText = "비밀번호가 일치하지 않습니다."
        isValid = false 
    } else {
        document.getElementById("error__pw1").innerText = ""
        document.getElementById("error__pw2").innerText = ""
    }

    if(location !== "인천" && location !== "경기" && location !== "서울") {
        document.getElementById("error__location").innerText = "지역을 선택해주세요."
        isValid = false 
    } else {
        document.getElementById("error__location").innerText = ""
    }

    if(genderWoman === false && genderMan === false) {
        document.getElementById("error__gender").innerText = "성별을 선택해주세요."
    } else {
        document.getElementById("error__gender").innerText = ""
    }

    if(isValid === true) {
        alert ("가입을 축하합니다!")
    }
}