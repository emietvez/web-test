document.getElementById("form-login").addEventListener("submit", function (e) {
  e.preventDefault();
  var nombre = document.getElementById("name").value;

  alert(`Se envio correctamente`);
});
