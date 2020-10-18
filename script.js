function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
var blownhere = 0;
function setCookie(cname, cvalue) {
  var d = new Date();
  d.setTime(d.getTime() + (0*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";";
}
function moreBlown() {
  setCookie("Available", Number(getCookie("Available")) + 1);
  document.getElementById("input1").value="";
  document.getElementById("blowntotal").innerHTML=getCookie("Available");
  blownhere++;
  document.getElementById("thissession").innerHTML=blownhere;
  setCookie("Unblown", Number(getCookie("Unblown") - 1));
  document.getElementById("unblown").innerHTML=getCookie("Unblown");
}
document.getElementById("blowntotal").innerHTML=getCookie("Available");
function decrease() {
  setCookie("Available", Number(getCookie("Available")) - Number(document.getElementById("input3").value));
  document.getElementById("blowntotal").innerHTML=getCookie("Available");
}
function left() {
  setCookie("Unblown", Number(getCookie("Unblown")) + 1);
  document.getElementById("unblown").innerHTML=getCookie("Unblown");
  document.getElementById("input2").value="";
}