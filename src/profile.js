$(document).ready(function () {

    let id = localStorage.getItem("userId");
    if (id) {

        showProfile();
        console.log("remove register button")
        $(document).on("DOMNodeInserted", function () {
            $(".Register").css("display", "none");
            $(".log-in").css("display", "none");
        });
        
    }
    else{

        $(location).prop('href','http://127.0.0.1:5500/src/login.html')
    }


    function showProfile() {

        fetch('http://localhost:3000/user/' + id)
            .then(res => res.json())
            .then(res => {
                let profileHTML = `
                                    <div>
                                        <h1 class="text-4xl text-teal-800 py-2 mt-5">${res.username}</h1>

                                        <div>
                                            <h5 class="py-2">Email :</h5>
                                            <p>${res.email}</p>
                                            <h5 class="py-2">Address :</h5>
                                            <p>${res.address}</p>
                                            <h5 class="py-2">cell no:</h5>
                                            <p>${res.cell}</p>
                                        </div>
                                    </div>`
                            
                $('.profile').html(profileHTML);
            })
    }


    $(document).on("click",".log-out", function () {

        localStorage.clear();
    })


})