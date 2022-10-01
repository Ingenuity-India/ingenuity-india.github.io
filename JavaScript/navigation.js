function myFunction() {
    var x = document.getElementById("mytopnavi");
    if (x.className === "topnavi") {
      x.className += " responsive";
      x.classList.toggle("change");
    } else {
      x.className = "topnavi";
    }
    
  }
