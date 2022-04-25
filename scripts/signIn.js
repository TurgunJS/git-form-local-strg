
function clickedButton(){
    url= window.location = 'http://127.0.0.1:5500/htmlFolder/main.html'
    console.log('fignya Fuction')
    return url
}

function showPaaword() {
    var x = document.getElementById("psw");
    if ((x.type === "password")) {
        x.type = "text";
    } else {
        x.type = "password";
    }
  }

function confirm(){

    let email = document.getElementById("email").value;
    let psw = document.getElementById("psw").value;
    
    
    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[];

    let ifMail = (user_records.some((v) => {return v.email == email}))
    let ifPsw = (user_records.some((v) => {return v.psw == psw}))

      if((ifMail) && (ifPsw)){
        clickedButton();
      }
      else if(email == "") {  
        alert("Email line is empty");
      }

      else if(psw == "") {  
        alert("Password line is empty");
      }

      else if(user_records.some((v) => {return v.email != email})){
        alert('Email or Password is not correct');
      }

      else if(user_records.some((v) => {return v.psw != psw})){
        alert('Email or Password is not correct');
      }
      
      else {  
          alert("Email or Password errors");
        } 
    
    }


    console.log('test')