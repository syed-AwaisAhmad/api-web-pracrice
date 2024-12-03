$(document).ready(function(){
console.log("hello");
    $(".login-btn").on("click",function(){
        let name = $("#username").val();
        let pass = $("#password").val();
        console.log(name +"and password :"+pass);

        fetch(`http://localhost:3000/user?username=${name}&password=${pass}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }, 
          })
            .then(res => res.json())
            .then(response => {
                if(response[0]){
                    localStorage.setItem("userId",response[0].id);
                    console.log(response)
                   $(location).prop('href','http://127.0.0.1:5500/src/profile.html')
                }
                else{
                    alert("incorrect username or password");
                }  
            })
            
    })


})


