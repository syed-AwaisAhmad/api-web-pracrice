$(document).ready(function(){

  let id = localStorage.getItem("userId");
    if (!id) {
      
        canRegister();
       $(document).on("DOMNodeInserted",function(){

        $(document).find(".profile").css("display","none");
        $(document).find(".log-out").css("display","none");

       })
    }
    else{

        $(location).prop('href','http://127.0.0.1:5500/src/profile.html')
    }

    function canRegister(){
      $(".submit-btn").on("click",function(){

        let username = $("#username").val();
        let password = $("#password").val();
        let address = $("#address").val();
        let email = $("#email").val();
        let cell = $("#cell").val();

        fetch('http://localhost:3000/user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
             "username" : username,
             "password" : password,
             "address" : address,
             "email" : email,
             "cell":cell
            })
          })
          .then(res => res.json())
          .then(response =>{
            localStorage.setItem("userId",response.id)
            $(location).prop('href','http://127.0.0.1:5500/src/profile.html')
          });
    })
    }
    
})