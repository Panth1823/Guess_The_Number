let runagain = true;

while (runagain) {
  let num = prompt("Enter a 1 digit number");
  num = Number.parseInt(num);
  if (num > 4) {
    location.href = "https://github.com/Panth1823";
    break;
  } 
  else {
    alert("oops !!Try Again!!");
    
  }
  runagain = confirm("Do you want to try again?");
}
