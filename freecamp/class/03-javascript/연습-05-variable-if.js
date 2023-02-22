//데이터 타입, 연산자 실스
    1+1
    //2

    1+ "만원"
    //'1만원'

    1+"1"
    //'11'

    1-"1"
    //0

    1-1
    //0

    "123" === 123
    //false

    "123" == 123
    //true

    true && true
    //true

    true || false
    //true

    !false
    //true

    !true
    //false


// 조건문 실습 1
if(1+1 === 2) {
    console.log("정답입니다.")
} else {
    console.log("오답입니다.")
}
//정답입니다.
//undefined

if(true) {
    console.log("정답입니다.")
} else {
    console.log("오답입니다.")
}
//정답입니다.
//undefined

if(!true) {
    console.log("정답입니다.")
} else {
    console.log("오답입니다.")
}
//오답입니다.
//undefined

if(0) {
    console.log("정답입니다.")
} else {
    console.log("오답입니다.")
}
//오답입니다.
//undefined

if(1) {
    console.log("정답입니다.")
} else {
    console.log("오답입니다.")
}
//정답입니다.
//undefined


//조건문 실습2
const profile = {
    name: "철수",
    age:12, 
    school: "다람쥐초등학교"
}

if(profile.age >= 20) {
    console.log("성인입니다.")
} else if (profile.age >=8) {
    console.log("학생입니다.") 
} else if(profile.age > 0) {
    console.log("어린이입니다.")
} else {
    console.log("잘못입력하셨습니다.")
}
        