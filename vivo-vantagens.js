var tds = document.querySelectorAll("tr > td.disponibilidade");

var availability = "";

for (i = 0; i < tds.length; i++) {
  availability = tds[i].innerHTML.trim();

  if (availability == "Esgotado" || availability == "reservas encerradas") {
    var tr = tds[i].parentElement;
    tr.parentElement.removeChild(tr);
  }
}
