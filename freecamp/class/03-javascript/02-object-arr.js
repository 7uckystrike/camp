const fruits = [
    {number: 1, title: "레드향"},
    {number: 2, title: "샤인머스캣"},
    {number: 3, title: "산청딸기"},
    {number: 4, title: "한라봉"},        
    {number: 5, title: "사과"},
    {number: 6, title: "애플망고"},
    {number: 7, title: "딸기"},
    {number: 8, title: "천혜향"},
    {number: 9, title: "과일선물세트"},
    {number: 10, title: "귤"},
]
//undefined

fruits[0].number + " " + fruits[0].title
//'1 레드향'

let data1 = fruits[0].number + " " + fruits[0].title
//undefined

let data2 = fruits[1].number + " " + fruits[1].title
//undefined

let data3 = fruits[2].number + " " + fruits[2].title
//undefined

let data4 = fruits[3].number + " " + fruits[3].title
//undefined

let data5 = fruits[4].number + " " + fruits[4].title
//undefined

let data6 = fruits[5].number + " " + fruits[5].title
//undefined

let data7 = fruits[6].number + " " + fruits[6].title
//undefined

let data8 = fruits[7].number + " " + fruits[7].title
//undefined

let data9 = fruits[8].number + " " + fruits[8].title
//undefined

let data10 = fruits[9].number + " " + fruits[9].title
//undefined

data1.concat(data2, data3, data4, data5, data6, data7, data8, data9, data10)
//'1 레드향2 샤인머스캣3 산청딸기4 한라봉5 사과6 애플망고7 딸기8 천혜향9 과일선물세트10 귤'

let result = data1.concat(data2, data3, data4, data5, data6, data7, data8, data9, data10)
//undefined

result
//'1 레드향2 샤인머스캣3 산청딸기4 한라봉5 사과6 애플망고7 딸기8 천혜향9 과일선물세트10 귤'