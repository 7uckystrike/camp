let time = 10

setInterval(function(){
    if(time >= 0) {
        console.log(time)
        time = time -1 
    }
},1000)


let time2 = 180
setInterval(function(){
    let min = Math.floor(time / 60)
    let sec = String(time % 60).padStart(2, "0")
    time = time -1
    console.log(min + "분" + sec + "초")
}, 1000)