function rewriteValue(){
    let func_v = document.getElementById("func_s").value;
    var point_v = document.getElementById("point_n").value;
    point_v = parseInt(point_v)
    console.log(typeof(point_v))

func_v = encodeURIComponent(func_v);

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var response = JSON.parse(this.responseText);
      alert("The tangent of function: " + decodeURI(func_v) + ", at the point: " + point_v + ", is y = " + response.result);
  }
};
xhttp.open("GET", "https://newton.vercel.app/api/v2/tangent/" + point_v + "|" + func_v);
xhttp.send();
}
