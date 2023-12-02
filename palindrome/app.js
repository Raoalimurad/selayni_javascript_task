let inputValue = prompt("Entre palindrome value");

const revvalue = ()=>{
    let reverseValue = inputValue.toString().split("").reverse().join("");
    if(inputValue == reverseValue){
        document.write("This is palindrome")
    }else{
        document.write("This is  not palindrome")
    }
   
}
revvalue()

