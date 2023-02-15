
let runagain=true;
const drive=(age)=>{
  return age>18?true:false
}

while (runagain){
  let age = prompt("Enter your age")
    age = Number.parseInt(age)
    if(age<0){
        console.error("Enter a Valid Age")
        break;
    }

if(age<18){
   alert("you cant drive")  
}
else {
    alert("you are eligible to drive ")
}
  runagain= confirm("Do you want to enter your age again")
}