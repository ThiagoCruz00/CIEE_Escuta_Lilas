const botao = document.getElementById("botao-denuncia");
botao.addEventListener("click", () => {
  const secaoDenuncias = document.getElementById("denuncias");
  secaoDenuncias.scrollIntoView({ behavior: "smooth" });
});

const botao190 = document.querySelector(".btn.alerta");

botao190.addEventListener("click", (e) => {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

  if (isMobile) {
    window.location.href = "tel:190";
  } else {

    e.preventDefault();
    alert(
      "A função de ligar diretamente para 190 só está disponível em celulares. Por favor, use um telefone para entrar em contato."
    );
  }
});