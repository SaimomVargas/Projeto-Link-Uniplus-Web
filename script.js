const form = document.querySelector('form');
const concatenarBtn = document.querySelector('#concatenar');

concatenarBtn.addEventListener('click', function(event) {
  event.preventDefault();
  
  const valorInput = document.querySelector('#valor');
  const valor = valorInput.value;
  const valorPredefinido = ' https://canal.intelidata.inf.br/acesso/';
  const resultado = valorPredefinido + valor;
  
  window.open(resultado, '_blank');
});
