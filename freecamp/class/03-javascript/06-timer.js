let isStarted = false;

let NumBtn = () => {
if(isStarted === false) {
    isStarted = true
        const token = String(Math.floor((Math.random() * 1000000))).padStart(6, "0")
        document.getElementById("target").innerText = token
    
        let time = 10
        let timer = setInterval(function(){
            if(time >= 0) {
                let min = Math.floor(time / 60)
                let sec = String(time % 60).padStart(2, "0")
                time = time - 1
                document.getElementById("timer").innerText = `${min}분 ${sec}초`
            } else {
                document.getElementById("finish").disabled = true //작동이 끝났을 때 
                 isStarted = false
                 console.log("타이머작동중")
                 clearInterval(timer) //인터벌 삭제
            }
        },1000)
    } else {
    }
}



// 우하하 내가 혼자 해내다!!! 미췬!!