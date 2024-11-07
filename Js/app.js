const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
        
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('');

  alertPlaceholder.innerHTML = '';
  alertPlaceholder.append(wrapper);
}

let alertTrigger = document.getElementById('liveAlertBtn');

if (alertTrigger !== null) {
  alertTrigger.addEventListener('click', () => {
    let nome = document.getElementById('nome').value.trim();
    let email = document.getElementById('email').value.trim();
    let whatsapp = document.getElementById('whatsapp').value.trim();
    let message = document.getElementById('message').value.trim();
    let estado = document.getElementById('estado').value.trim();
    
    if (nome && email && whatsapp && message && estado) {
      appendAlert('Sua mensagem foi enviada com Sucesso! Obrigado por entrar em contato conosco!', 'success');
    } else {
      appendAlert('Por favor, preencha todos os campos obrigatórios.', 'danger');
    }
  });
}