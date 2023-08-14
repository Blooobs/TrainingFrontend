console.log("'LEVEL 1'")
console.log('')

console.log("Ex1: ")

let ten = '30DaysOfJavascript'
console.log(ten)

console.log("Ex2: ")
console.log(ten)

console.log("Ex3: ")
console.log(ten.length)

console.log("Ex4: ")
let lonthom = 'lon thom'
console.log(lonthom.toUpperCase())

console.log("Ex5: ")
let lonthoi = 'LON THOI'
console.log(lonthoi.toLowerCase())

console.log("Ex6: ")
let lonthomlonthoi = 'Lon thom lon thoi'
console.log(lonthomlonthoi.substr(4,13))
console.log(lonthomlonthoi.substring(4))

console.log("Ex7: ")
let tuoi = '30 Days Of JavaScript'
console.log(tuoi.substring(3))

console.log("Ex8: ")
console.log(tuoi.includes('Script'))

console.log("Ex9: ")
console.log(tuoi.split())

console.log("Ex10: ")
console.log(tuoi.split(' '))

console.log("Ex11: ")
let hang = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(hang.split(', '))

console.log("Ex12: ")
console.log(tuoi.replace('JavaScript', 'Python'))

console.log("Ex13: ")
console.log(tuoi.charAt(15))

console.log("Ex14: ")
console.log(tuoi.charCodeAt('J'))

console.log("Ex15: ")
console.log(tuoi.indexOf('a'))

console.log("Ex16: ")
console.log(tuoi.lastIndexOf('a'))

console.log("Ex17: ")
let ho = 'You cannot end a sentence with because because because is a conjunction'
console.log(ho.indexOf('because'))

console.log("Ex18: ")
console.log(ho.lastIndexOf('because'))

console.log("Ex19: ")
console.log(ho.search('because'))

console.log("Ex20: ")
let chim = ' 30 Days Of JavaScript '
console.log(chim.trim())

console.log("Ex21: ")
console.log(tuoi.startsWith(3))

console.log("Ex22: ")
console.log(tuoi.endsWith('t'))

console.log("Ex23: ")
console.log(tuoi.match('a'))

console.log("Ex24: ")
let cac = '30 Days Of'
console.log(cac.concat(' JavaScript'))

console.log("Ex25: ")
console.log(tuoi.repeat(2))

console.log('')
console.log("'LEVEL 2'")
console.log('')

console.log("Ex1: ")
let quote1 = "The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another."
console.log(quote1)

console.log("Ex2: ")
let quote2 = `\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"`
console.log(quote2)

console.log("Ex3: ")
let num1 = 10
console.log(typeof(num1) == typeof(10))

console.log("Ex4: ")
console.log(Math.round(parseFloat('9.8')) == 10)

console.log("Ex5: ")
let word1 = 'python'
let word2 = 'jargon'
console.log(word1.includes('on'), word2.includes('on'))

console.log("Ex6: ")
let quote3 = 'I hope this course is not full of jargon.'
console.log(quote3.includes('jargon'))

console.log("Ex7: ")
console.log(Math.floor(Math.random() * 101))

console.log("Ex8: ")
console.log(Math.floor(Math.random() * 51) + 50)

console.log("Ex9: ")
console.log(Math.floor(Math.random() * 256))

console.log("Ex10: ")
let title = "JavaScript"
console.log(title[Math.floor(Math.random() * 10)])

console.log("Ex10: ")
let so = "1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125"
console.log(so)

console.log("Ex11: ")
let bulon = 'You cannot end a sentence with because because because is a conjunction'
console.log(bulon.substr(0,30), bulon.substr(55))

console.log("")
console.log("\"LEVEL 3\"")
console.log("")

console.log("Ex1: ")
let love = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let partern = /love/gi
console.log(love.match(partern))

console.log("Ex2: ")
let partern1 = /because/gi
console.log(bulon.match(partern1))

console.log("Ex3: ")
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(sentence.replace(/[^a-zA-Z0-9,. ]/g, ""))

console.log("Ex4: ")
let money = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let tai = money.replace(/[^0-9]/g, " ")
let dai = parseInt(tai.substr(0,4))
let bai = parseInt(tai.substr(4,5))
let zai = parseInt(tai.substr(9,5))
console.log('Tong la ',dai + bai + zai)
var temp = tai.split(" ");
var sum = 0
for (let i of temp) {
    if(i != "") {
        sum += parseInt(i)
    }
}
console.log(sum + "result");
console.log(tai)