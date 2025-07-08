function topo() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

window.onscroll = function () {
  var voltarTopo = document.getElementById("voltar-topo");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    voltarTopo.style.display = "block";
  } else {
    voltarTopo.style.display = "none";
  }
}

function validarLogin() {
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;

  if (usuario === "higor" && senha === "lira") {
    alert("Login realizado com sucesso!");
    window.location.href = "index.html";
  } else {
    alert("Usuário ou senha inválidos!");
  }
}

function cadastro() {
  alert("Cadastro realizado com sucesso!");
  window.location.href = "index.html";
}
