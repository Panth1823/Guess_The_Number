let btncnt=0
const button = document.getElementById("clickbtn");
const display =document.getElementById("nip");

function clicker(){
    btncnt+=1;

    if(btncnt===1){
        display.textContent="Hello this is donee ehahahahah 😂🤣🤣😂😂"
        document.body.style.color="cyan";
        
    }
        else if(btncnt===2){display.textContent="Hello this is donee ehahahahah 😂🤣🤣😂😂"
        document.body.style.color="red";
        }
        else if(btncnt===3){display.textContent="Hello this is donee ehahahahah 😂🤣🤣😂😂"
        document.body.style.color="green";
        }
        else
        {display.textContent="khatam Tata"
        document.body.style.color="red";
        }
        console.log(btncnt+" times clicked")
        

    
}