const pswrdField = document.querySelector(".form input[type='password']"),
  toggleBtn = document.querySelector(".form .field i");

  toggleBtn.onclick = ()=>{
    // alert('Tรก joia ๐๐');
    if(pswrdField.type == "password"){
        pswrdField.type = "text";
        toggleBtn.classList.add("active");
    }else{
        pswrdField.type = "password";
        toggleBtn.classList.remove("active");
    }
  }