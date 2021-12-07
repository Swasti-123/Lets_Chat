function addUser(){
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("u_n" , user_name);
    window.location="selectRoom.html";
}

