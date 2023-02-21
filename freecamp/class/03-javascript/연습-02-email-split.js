//상수 이메일에 할당된 주소 값을 골뱅이 기준으로 나눈 후, 아이디 마지막 네글자를 별표처리하고
//다시 합쳐서 상수 result에 저장한다.


const email = "codecamp@gmail.com"
//undefined

email.split("@")
//(2) ['codecamp', 'gmail.com']

email.split("@")[0]
//'codecamp'

email.split("@")[1]
//'gmail.com'

const user = email.split("@")[0]
//undefined

const company = email.split("@")[1]
//undefined

user
//'codecamp'

company
//'gmail.com'

let masking = []
//undefined

masking.push(user[0])
//1

masking.push(user[1])
//2

masking.push(user[2])
//3

masking.push(user[3])
//4

masking
//(4) ['c', 'o', 'd', 'e']

masking.push("*")
//5

masking.push("*")
//6

masking.push("*")
//7

masking.push("*")
//8

masking.push("*")
//9

masking.pop()
//'*'

masking
//(8) ['c', 'o', 'd', 'e', '*', '*', '*', '*']

masking.join(" ") + "@" + company
//'c o d e * * * *@gmail.com'

let result = masking.join(" ") + "@" + company
//undefined

result
//'c o d e * * * *@gmail.com'