//배열 안에 객체를 담을 수 있다.


let classMate = [
    { name : '철수', age : '13', school : '다람쥐초등학교' },
    { name : '영희', age : '8', school : '공룡초등학교' },
    { name : '훈이', age : '11', school : '거북이초등학교'}
]
//undefined

classMate
//(3) [{…}, {…}, {…}]
   // 0: {name: '철수', age: '13', school: '다람쥐초등학교'}
   // 1: {name: '영희', age: '8', school: '공룡초등학교'}
   // 2: {name: '훈이', age: '11', school: '거북이초등학교'}

classMate.length
//3

classMate[0].name
//'철수'

classMate[2].age
//'11'