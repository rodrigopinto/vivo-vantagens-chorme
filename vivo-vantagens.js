var tds = document.querySelectorAll("tr > td.disponibilidade");

for (i = 0; i < tds.length; i++) {
  if (tds[i].innerHTML.trim() == "Esgotado"){
    var tr = tds[i].parentElement;
    tr.parentElement.removeChild(tr);
  }
}
