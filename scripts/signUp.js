function showPaaword() {
  var x = document.getElementById("pswd");
  var c = document.getElementById("pswd2");
  if ((x.type === "password") || (c.type === "password") ) {
      x.type = "text";
      c.type = "text";
  } else {
      x.type = "password";
      c.type = "password";
  }
}

function clickedButton2(){
  url= window.location = 'http://127.0.0.1:5500/htmlFolder/main.html'
  console.log('fignya Fuction')
  return url
}

function saveData(){

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let psw = document.getElementById("pswd").value;
let psw2 = document.getElementById("pswd2").value;

let user_records = new Array();
user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []

 if(email == "") {  
    alert("Email line is empty");
  }
  else if(name == "") {  
    alert("Name line is empty");
  }

  else if(psw == "") {  
    alert("Password line is empty");
  }
  else if(user_records.some((v)=>{
    return v.name == name}))
  {
    alert("this name already exist");
  }

  else if(user_records.some((v) => {return v.email == email})){
    alert("this email already exist");
  }

  else if(psw != psw2) {   
     alert("Passwords did not match"); 
  }

  else if(psw.length < 8) {  
      alert("Passwords lines shold coplain from 8 characters min");
    } 

  else{
          user_records.push ({
          "name":name,
          "email":email,
          "psw":psw
          })

        localStorage.setItem("users",JSON.stringify(user_records));

        clickedButton2()
      }

}
