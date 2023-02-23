const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
console.log(hexValues.length)

const auth = () => {
    const number = String(Math.floor(Math.random() * hexValues.length * 10000)).padStart(6, "0")
    const hex = '#' + number
    document.getElementById("target").innerText = hex
    target.style.color = hex
} 


// 코드
// const auth = () => {
//     const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
//     document.getElementById("target").innerText = token
//     document.getElementById("target").style.color = "#" + token
// }

