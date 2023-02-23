const startWord = () => {
    let myWord = document.getElementById("my_word").value
    let word = document.getElementById("word").innerText

    let lastWord = word[word.length -1]
    let firstWord = myWord[0]

    if(lastWord === firstWord) {
        document.getElementById("result").innerText = "정답입니다."
        document.getElementById("word").innerText = myWord
        document.getElementById("my_word").value = ""
    } else {
        document.getElementById("result").innerText = "틀렸습니다."
        document.getElementById("my_word").value = ""
    }
}