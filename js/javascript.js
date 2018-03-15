window.onload = function () {
  var x = 0;

  document.getElementById("btnup").addEventListener("click", function(){
    // alert('x');
    x++;

    if (x<=1) {
      var element = document.getElementById("btndown");
      element.classList.remove("inactive");
    }

      document.getElementById("numb").innerHTML = x;
  });

  document.getElementById("btndown").addEventListener("click", function(){
    // alert('y');
    if (x>0) {
      x--;
      if (x<1) {
        var element = document.getElementById("btndown");
        element.classList.add("inactive");
      }
    }
      document.getElementById("numb").innerHTML = x;
  });
}
