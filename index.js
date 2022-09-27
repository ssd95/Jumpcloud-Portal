function buttonState() {
    console.log('Hello');
    var checkBox = document.getElementById("login-checkbox");
    var btn = document.getElementById("login");
  
    if (checkBox.checked == true){
      btn.disable = false;
      console.log(checkBox);
    } else {
      btn.disable = true;
    }
  }