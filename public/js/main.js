//seleciona todos os elementos 'card' do HTML
const cards = document.querySelectorAll('.card');
//seleciona todas as 'dropzones'do HTML
const dropzones = document.querySelectorAll('.dropzone');

//seleciona os botões para adicionar uma nova tarefa
const addCard = document.querySelectorAll('.btn-add-card'); 

//adiciona um novo card dentro de dropzone
const dropzoneCreate = document.getElementById('status-to-do')


//função que uma nova div, onde a nova tarefa será colocada
function criaDiv () {
    let newcard = document.createElement('div');
    return newcard;
}

//função que adiciona um novo'card', uma nova tarefa
function creatCard() {
    let newcard = criaDiv();
    newcard.innerHTML = `<div class="card" draggable="true">
                            <div class="status" ></div>
                            <div class="content"><input type="text" placeholder="Digite aqui"></div>
                        </div>`;

    dropzoneCreate.appendChild(newcard);
}

// Início: Registo de event listeners utilizando event delegation pattern
document.querySelector('.workspace').addEventListener(
  'dragstart',
  (event) => {
    if (event.target.classList.contains('card')) startDragging(event.target);
  },
);

document.querySelector('.workspace').addEventListener(
  'drag',
  (event) => {
    if (event.target.classList.contains('card')) dragging(event.target);
  },
);

document.querySelector('.workspace').addEventListener(
  'dragend',
  (event) => {
    if (event.target.classList.contains('card')) endDragging(event.target);
  },
);
// Fim: Registo de event listeners utilizando event delegation pattern


//para cada 'card' ele vai pegar os eventos
function startDragging(card) {
    dropzones.forEach(dropzone => {
      dropzone.classList.add('highlight');
    });
  
    card.classList.add('ghost-card');
  }
  
  function dragging(card) {}
  
  function endDragging(card) {
    dropzones.forEach(dropzone => {
      dropzone.classList.remove('highlight');
    });
  
    card.classList.remove('ghost-card');
  }
  


//local onde serão soltados os cards
dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragenter', dragEnter); //entra no zona seleceionada(dropzone)
    dropzone.addEventListener('dragover', dragOver); //fica sobre a 'dropzone'
    dropzone.addEventListener('dragleave', dragLeave); //é solto sobre a 'dropzone'
    dropzone.addEventListener('drop', drop); 
});

//inicia o evento 'dragenter'
function dragEnter() {}


function dragOver(e) {
    this.classList.add('over'); 
    const cardDragged = document.querySelector('.ghost-card'); 
    this.appendChild(cardDragged); //adiciona o cartão que está sendo arrastado ao novo quadro
    e.preventDefault(); //previne o padrão do cursor
}

function dragLeave() {
    this.classList.remove('over');
}

function drop() {
    this.classList.remove('over');
}
