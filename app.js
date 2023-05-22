const isEven = (mathString) => {
    const convertToString = String(mathString);
    const pureString = convertToString.replace(/ /g, "");
    const isValid = checkString(pureString);
    if(!isValid){
        console.log("not allowed string");
        return
    }
    const numbers = pureString.split(/\D+/);
    const specialCharacters = pureString.split(/[A-Za-z0-9]+/).slice(1);
    specialCharacters.pop()
    let result = parseInt(numbers[0]);
    let actualNumber = null;

    for (let i = 1; i < numbers.length; i++) {
        actualNumber = parseInt(numbers[i], 10);
        if (specialCharacters[i - 1] === '+'){
            result += actualNumber;
        } else {
            result -= actualNumber;
        }
    }
    return result % 2 === 0;
}
const checkString = (myString) => {
    const firstString = myString.charAt(0);
    const lastString = myString.charAt(myString.length - 1);
    const alphabets = new RegExp(/[a-zA-Z]/g);
    if (alphabets.test(myString)){
        return false;
    }
    if(myString.includes("*") || myString.includes("/")){
        return false;
    }
    if(firstString === "+" || firstString === "-"){
        return false
    }
    if(lastString === "+" || lastString === "-"){
        return false;
    }
    return true;
}

isEven("2+112+48-13+43-361-0+454*");
