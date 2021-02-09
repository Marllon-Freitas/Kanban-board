//seleciona todos os elementos 'card' do HTML
const cards = document.querySelectorAll('.card');
//seleciona todas as 'dropzones'do HTML
const dropzones = document.querySelectorAll('.dropzone');

//seleciona os botões para adicionar uma nova tarefa
const addCard = document.querySelectorAll('.btn-add-card'); 

//adiciona um novo card dentro de dropzone
const dropzoneCreate = document.getElementById('status-to-do');

//função que remove todas as tarefas concluidas
function removeCard () {
    //seleciona os botões para remover uma tarefa
    let removeCard = document.getElementById('status-done'); 
    removeCard.innerHTML = " ";
    //salvarTarefas();
}

//função que cria uma nova div, onde a nova tarefa será colocada
function criaDiv () {
    let newcard = document.createElement('div');
    return newcard;
}

//função que adiciona um novo cartão, uma nova tarefa
function creatCard() {
    let newcard = criaDiv();
    newcard.innerHTML = `<div class="card" draggable="true">
                            <div class="status" ></div>
                            <div class="content"><input type="text" placeholder="Digite aqui"></div>
                        </div>`;

    dropzoneCreate.appendChild(newcard);
    //salvarTarefas();
}

//Registo de event listeners utilizando event delegation pattern
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
//Registo de event listeners utilizando event delegation pattern


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
  


//local onde serão soltados os cartões
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

//salva os cartões no local storage
/*
function salvarTarefas () {
  const saveCards = document.querySelectorAll('.card');
  const cardList = [];

  for(let card of saveCards) {
    let cardContent = card.innerHTML;
    cardContent = cardContent.trim();
    cardList.push(cardContent);
  }
  const cardJSON = JSON.stringify(cardList);
  
  localStorage.setItem('card', cardJSON);
}

function adicionaCartoesSalvos () {
  const cards = localStorage.getItem('card');
  const cardList = JSON.parse(cards);
  
  for(let card of cardList) {
    creatCard(card);
  }
}

adicionaCartoesSalvos();
*/