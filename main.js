const prompt = require(`prompt-sync`)()
main()
function main() {
    // console.log(getMax(1,2,3,3,1,5,2)) // Exercise 1
    // console.log(reverse()) // Exercise 2
    // console.log(uppercase("I am Daniel")) // Exercise 3
    // console.log(invertCase("I am not Daniel")) // Exercise 4

    // Exercise 1
    function getMax(...nums) {
        let max = -Infinity
        for (let num of nums) {
            if (num > max) max = num
        }
        return max
    }

    // Exercise 2
    function reverse() {
        let num = prompt("Value to reverse: ")
        return num.split("").reverse().join("")
    }

    // Exercise 3
    function uppercase(str) {
        for (let i = 0; i < str.length; i++) {
            if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
                str = str.slice(0, i) + String.fromCharCode(str.charCodeAt(i) - 32) + str.slice(i+1,str.length)
            }
        }
        return str
    }

    // Exercise 4
    function invertCase(str){
        for (let i = 0; i < str.length; i++) {
            if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
                str = str.slice(0, i) + String.fromCharCode(str.charCodeAt(i) - 32) + str.slice(i+1,str.length)
            }else if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
                str = str.slice(0, i) + String.fromCharCode(str.charCodeAt(i) + 32) + str.slice(i+1,str.length)
            }
        }
        return str
    }
}