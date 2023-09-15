const input = document.getElementById('send');
const box = document.getElementById('box');
const textContainer = document.getElementById('textContainer');
const send = document.getElementById('iconSend');

function sendMessage() {

  const box = document.getElementById('box');


  const divRow = document.createElement('div');
  const divCol = document.createElement('div');


  divRow.classList.add('row');
  divCol.classList.add('col-lg');
  divCol.id = 'msg';

  box.appendChild(divRow);

  divRow.appendChild(divCol);

  const paragraph = document.createElement('p');

 
  paragraph.textContent = 'Você: ' + input.value;

  divCol.appendChild(paragraph);

  input.value = '';


  box.scrollTop = box.scrollHeight;
}


send.addEventListener('click', function() {

  if (input.value != '') {
    sendMessage();
  }
});

input.addEventListener('keydown', function(event) {

  if (event.key === 'Enter') {

    if(input.value != ''){
        sendMessage();
    }
  }
});

textContainer.classList.add('text-style');
