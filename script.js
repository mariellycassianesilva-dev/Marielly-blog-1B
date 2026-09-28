const btnTemaEscuro = document.querySelector(".bnt-tema-escuro"); 
  bntTemaEscuro.addEventListener("click", mudaTema); 
function mudaTema(){ 
  const corpoPagina = document.body; 
if (corpoPagina.classList.contains("tema-escuro")) { 
 corpoPagina.classList.remove("tema-escuro");
} else { 
  corpoPagina.classList.add("tema-escuro");} 
} 
