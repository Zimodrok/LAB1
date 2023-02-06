function returnValue(){
    let func_v = document.getElementById("func_s").value;
    var point_v = document.getElementById("point_n").value;
    point_v = parseInt(point_v)
// Вбудованна функція перкодування символів
func_v = encodeURIComponent(func_v);
// Створюємо HTTP-запит 
var xhttp = new XMLHttpRequest();
// Створюємо подію залежну від стану і статусу запиту
xhttp.onreadystatechange = function() {
// Якщо запит завершен і він успішний, то...
  if (this.readyState == 4 && this.status == 200) {
// Створюємо змінну зберігаючу відповідь, яку шукаємо в JSON-рядку
    var response = JSON.parse(this.responseText);
// Виведення на екран
      alert("Рівняння дотичної, функції: " + decodeURI(func_v) + ", в точці: " + point_v + " , це y = " + response.result);
  }
};
// "Запускаємо" запит
xhttp.open("GET", "https://newton.vercel.app/api/v2/tangent/" + point_v + "|" + func_v);
// Посилаємо запит
xhttp.send();
}
