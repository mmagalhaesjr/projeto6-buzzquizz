// CÓDIGO DO MARCOS PARA A PAGINA DE CRIAÇÃO DE QUIZZ
let tituloNovoQuiz;
let imgNovoQuiz;
let qtdPerguntasNovoQuiz;
let qtdNiveisNovoQuiz;
let txtPergunta;
let corPergunta;
let respostaCorreta;
let imagemCorreta;
let respostaIncorreta1;
let imagemIncorreta1;
let respostaIncorreta2;
let imagemIncorreta2;
let respostaIncorreta3;
let imagemIncorreta3;
let quizData;
const urlRegex = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
const colorRegex = /#(([0-9a-fA-F]{2}){3,4}|([0-9a-fA-F]){3,4})/g;
let correct = 0;

function renderizarPagina1CriacaoQuizz() {
  let conteudo = document.querySelector('main');
  conteudo.innerHTML = `  <h2>Comece pelo começo</h2>
        <div class="criandoQuiz">
            <input type="text" placeholder="Título do seu quizz"  name="" id="tituloNovoQuiz" minlength="6">
            <input type="url" placeholder="URL da imagem do seu quizz"name="" id="imgNovoQuiz">
            <input type="number" placeholder="Quantidade de perguntas do quizz"name="" id="qtdPerguntasNovoQuiz">
            <input type="number" placeholder="Quantidade de níveis do quizz"name="" id="qtdNiveisNovoQuiz">
        </div>
    <button onclick="validacaoP1()">Prosseguir pra criar perguntas</button>`
}

function validacaoP1() {
  tituloNovoQuiz = document.querySelector('#tituloNovoQuiz').value;
  imgNovoQuiz = document.querySelector('#imgNovoQuiz').value;
  qtdPerguntasNovoQuiz = document.querySelector('#qtdPerguntasNovoQuiz').value;
  qtdNiveisNovoQuiz = document.querySelector('#qtdNiveisNovoQuiz').value;

  if ((tituloNovoQuiz.length >= 20) && (tituloNovoQuiz.length <= 65) && (urlRegex.test(imgNovoQuiz) === true) && (qtdPerguntasNovoQuiz >= 3) && (qtdNiveisNovoQuiz >= 2)) {
    getQuizInfo();
    renderizarPagina2CriacaoQuizz();
  } else {
    alert("Preencha os dados corretamente")
  }
}

function renderizarPagina2CriacaoQuizz() {
  let conteudo = document.querySelector('main');
  conteudo.innerHTML = `<h2>Crie suas perguntas</h2>`;

  for (let i = 0; i < qtdPerguntasNovoQuiz; i++) {
    conteudo.innerHTML +=
      `<section class="criandoQuiz pergunta${[i + 1]}">
            <div class="criandoQuizFechada">
                <h3>Pergunta ${[i + 1]}</h3>
                <img onclick="expandirForm(this)" src="icones/vetorEditar.svg" alt="">
            </div>
            <div class="expandido escondido">
            <h3>Pergunta ${[i + 1]}</h3>
                <div> 
                    <input type="text" placeholder="Texto da pergunta" name="" id="txtPergunta" minlength="20">
                    <input type="text" placeholder="Cor de fundo da pergunta"name="" id="corPergunta">
                </div>
                <h3>Resposta correta</h3>
                <div>
                    <input type="text" placeholder="Resposta correta"name="" id="respostaCorreta" minlength="1">
                    <input type="url" placeholder="URL da imagem"name="" id="imagemCorreta">
                </div>
                <h3>Respostas incorretas</h3>
                <div class="respostasIncorretas">
                    <div>
                        <input type="text" placeholder="Resposta incorreta 1"name="" id="respostaIncorreta1">
                        <input type="url" placeholder="URL da imagem 1"name="" id="imagemIncorreta1">
                    </div>
                    <div>
                        <input type="text" placeholder="Resposta incorreta 2"name="" id="respostaIncorreta2">
                        <input type="url" placeholder="URL da imagem 2" name="" id="imagemIncorreta2">
                    </div>
                    <div>
                        <input type="text" placeholder="Resposta incorreta 3"name="" id="respostaIncorreta3">
                        <input type="url" placeholder="URL da imagem 3"name="" id="imagemIncorreta3">
                    </div>
            </div>
            </div>
        </section>`
  }
  conteudo.innerHTML += `<button onclick="validacaoP2()" >Prosseguir pra criar níveis</button>`
}

function validacaoP2() {
  let perguntasValidadas = 0;
  //-----------------------------------ínicio looping de verificação---------------------------------------------------
  for (let i = 0; i < qtdPerguntasNovoQuiz; i++) {
    txtPergunta = document.querySelector(`.pergunta${[i + 1]} #txtPergunta`).value;
    corPergunta = document.querySelector(`.pergunta${[i + 1]} #corPergunta`).value;
    respostaCorreta = document.querySelector(`.pergunta${[i + 1]} #respostaCorreta`).value;
    imagemCorreta = document.querySelector(`.pergunta${[i + 1]} #imagemCorreta`).value;
    respostaIncorreta1 = document.querySelector(`.pergunta${[i + 1]} #respostaIncorreta1`).value;
    imagemIncorreta1 = document.querySelector(`.pergunta${[i + 1]} #imagemIncorreta1`).value;
    respostaIncorreta2 = document.querySelector(`.pergunta${[i + 1]} #respostaIncorreta2`).value;
    imagemIncorreta2 = document.querySelector(`.pergunta${[i + 1]} #imagemIncorreta2`).value;
    respostaIncorreta3 = document.querySelector(`.pergunta${[i + 1]} #respostaIncorreta3`).value;
    imagemIncorreta3 = document.querySelector(`.pergunta${[i + 1]} #imagemIncorreta3`).value;

    if ((txtPergunta.length > 20) && (isValidHexaCode(corPergunta)) && (respostaCorreta !== '') && (respostaIncorreta1 !== '') && (checkUrl(imagemCorreta)) && (checkUrl(imagemIncorreta1)) && respostaIncorreta2 === '' && imagemIncorreta2 === '' && respostaIncorreta3 === '' && imagemIncorreta3 === '') {
      perguntasValidadas++;
    } else {
      if ((txtPergunta.length > 20) && (isValidHexaCode(corPergunta)) && (respostaCorreta !== '') && (respostaIncorreta1 !== '') && (checkUrl(imagemCorreta)) && (checkUrl(imagemIncorreta1)) && (respostaIncorreta2 !== '') && (checkUrl(imagemIncorreta2)) && (respostaIncorreta3 === '' && imagemIncorreta3 === '')) {
        perguntasValidadas++;
      } else {
        if ((txtPergunta.length > 20) && (isValidHexaCode(corPergunta)) && (respostaCorreta !== '') && (respostaIncorreta1 !== '') && (checkUrl(imagemCorreta)) && (checkUrl(imagemIncorreta1)) && (respostaIncorreta2 !== '') && (checkUrl(imagemIncorreta2)) && (respostaIncorreta3 !== '') && (checkUrl(imagemIncorreta3))) {
          perguntasValidadas++;
        }
      }
    }
  }
  //---------------------------------------------------final do looping de verificação-------------------------
  if (perguntasValidadas == qtdPerguntasNovoQuiz) {
    getQuestions();
    renderizarPagina3CriacaoQuizz()
  } else {
    alert('Preencha os dados corretamente')
  }
}

function renderizarPagina3CriacaoQuizz() {
  let conteudo = document.querySelector('main');
  conteudo.innerHTML = '';
  conteudo.innerHTML = `<h2>Agora, decida os níveis</h2>`
  for (let i = 0; i < qtdNiveisNovoQuiz; i++) {
    conteudo.innerHTML += `
      <section class="criandoQuiz nivel${[i + 1]}">
          <div class="criandoQuizFechada">
              <h3>Nível ${[i + 1]}</h3>
              <img onclick="expandirForm(this)" src="icones/vetorEditar.svg" alt="">
          </div>
          <div class="expandido escondido">
          <h3>Nivel ${[i + 1]}</h3>
          <input type="text" placeholder="Título do nível"  name="" id="tituloDoNivel">
          <input type="text" placeholder="% de acerto mínima"name="" id="acertoMinimoNivel">
          <input type="text" placeholder="URL da imagem do nível"name="" id="urlNivel">
          <input type="text" placeholder="Descrição do nível"name="" id="descricaoNivel">
          </div>
      </section>
      `
  }
  conteudo.innerHTML += `<button onclick="validacaoP3()">Prosseguir pra criar perguntas</button>`
}

function validacaoP3() {
  let acertoMinimoLista = [];
  let niveisValidados = 0;
  //-----------------------------------ínicio looping de verificação-------------------------
  for (let i = 0; i < qtdNiveisNovoQuiz; i++) {
    tituloDoNivel = document.querySelector(`.nivel${[i + 1]} #tituloDoNivel`).value
    acertoMinimoNivel = document.querySelector(`.nivel${[i + 1]} #acertoMinimoNivel`).value
    urlNivel = document.querySelector(`.nivel${[i + 1]} #urlNivel`).value
    descricaoNivel = document.querySelector(`.nivel${[i + 1]} #descricaoNivel`).value

    if (tituloDoNivel.length >= 10 && acertoMinimoNivel >= 0 && acertoMinimoNivel <= 100 && acertoMinimoNivel !== '' && (checkUrl(urlNivel)) && descricaoNivel.length >= 30) {
      niveisValidados += 1;
      acertoMinimoLista.push(acertoMinimoNivel);
    }
  }
  //-----------------------------------final do looping de verificação-------------------------
  if (acertoMinimoLista.includes("0") && (niveisValidados == qtdNiveisNovoQuiz)) {
    getLevels();
    renderizarPagina4CriacaoQuizz();
  } else {
    alert('Preencha os dados corretamente');
  }
}

function renderizarPagina4CriacaoQuizz() {
  let conteudo = document.querySelector('main');

  conteudo.innerHTML = `<h2>Seu quizz está pronto!</h2>
    <section>
        <img class="imagemFinal" src="${imgNovoQuiz}" alt="">
        <p></p>
    </section>
    <button>Acessar Quizz</button>
    <p onclick="window.location.reload();">Voltar pra home</p>`
}

//função que checa se determinada string é uma url válida
function checkUrl(string) {
  try {
    let url = new URL(string)
    return true
  } catch (err) {
    console.log("Invalid URL!")
  }
}

//função que checa se determinada string é uma cor hexadecimal
  function isValidHexaCode(str) {
if (str[0] != '#')
    return false;
  if (!(str.length == 7))
    return false;
for (let i = 1; i < str.length; i++)
    if (!((str[i].charCodeAt(0) <= '0'.charCodeAt(0) && str[i].charCodeAt(0) <= 9)
        || (str[i].charCodeAt(0) >= 'a'.charCodeAt(0) && str[i].charCodeAt(0) <= 'f'.charCodeAt(0))
        || (str[i].charCodeAt(0) >= 'A'.charCodeAt(0) || str[i].charCodeAt(0) <= 'F'.charCodeAt(0))))
        return false;
return true;
}

function expandirForm(select) {
  let pai = select.parentNode;
  pai.classList.add('escondido');
  let divExpandida = pai.parentNode.querySelector('.expandido');
  divExpandida.classList.remove('escondido');
}

// ---------------------------------------------------------------- CÓDIGO DO DANILO PARA A PAGINA INICIAL
// FUNÇÕES PARA COLETAR OS DADOS DOS QUIZES

function postQuizz(data) {
  const URL = 'https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes';
  console.log(data)

  axios.post(URL, data).then(({ data }) => {
    // myQuizzesArray.push(id);
    const myQuizzesArray = JSON.parse(localStorage.getItem('myQuizzesArray')) || [];
    // console.log(myQuizzesArray, data.id, data)
    myQuizzesArray.push(data.id);
    localStorage.setItem('myQuizzesArray', JSON.stringify(myQuizzesArray));
    // console.log(JSON.parse(localStorage.getItem('myQuizzesArray')))
  }).catch((error) => console.log(error));
};

function getQuizInfo() {
  console.log(document.querySelector('.criandoQuiz'));
  const title = document.querySelector('.criandoQuiz').firstElementChild.value;
  const image = document.querySelector('.criandoQuiz').firstElementChild.nextElementSibling.value;
  quizData = {
    title,
    image,
  };
};

function getLevels() {
  const levels = [];
  Array.from(document.querySelectorAll('.expandido')).map((level) => {
    const title = level.firstElementChild.nextElementSibling.value;
    const minValue = level.firstElementChild.nextElementSibling.nextElementSibling.value;
    const image = level.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.value;
    const text = level.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.value;
    levels.push({
      title,
      image,
      text,
      minValue,
    });
  });
  quizData = {
    ...quizData,
    levels,
  };
  postQuizz(quizData);
};

function getQuestions() {
  const questions = [];
  Array.from(document.querySelectorAll('.expandido')).map((question) => {
    // console.log(question);
    const title = question.firstElementChild.nextElementSibling.firstElementChild.value;
    const color = question.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.value;
    let answers = [];
    const correctAnswerText = question.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value;
    const correctAnswerImage = question.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.value;
    const correctAnswer = {
      text: correctAnswerText,
      image: correctAnswerImage,
      isCorrectAnswer: true,
    };
    answers.push(correctAnswer);
    Array.from(question.querySelector('.respostasIncorretas').children).map((answer) => {
      // console.log(answer)
      if(answer.firstElementChild.value !== ""){
        answers.push({
        text: answer.firstElementChild.value,
        image: answer.firstElementChild.nextElementSibling.value,
        isCorrectAnswer: false,
        });
      }
    });

    questions.push({
      title,
      color,
      answers,
    });
  });
  quizData = {
    ...quizData,
    questions,
  };
};

// CÓDIGO DO DANILO PARA A PAGINA INICIAL

const quizzesContainer = document.querySelector('.quizzes-container');
const myQuizzes = document.querySelector('.myQuizzes');

function createQuizz() {
  // AQUI É O LINK ENTRE OS SCRIPTS. UMA FUNÇÃO CHAMA A OUTRA
  renderizarPagina1CriacaoQuizz();
};

function buildSavedQuizzes(array) {
  const myQuizzesArray = JSON.parse(localStorage.getItem('myQuizzesArray'));
  console.log(myQuizzesArray);
  const arrayFiltered = array.filter(({ id }) => myQuizzesArray.includes(id));
  console.log(arrayFiltered);
  buildQuizzes(arrayFiltered, true);
};

function buildMyQuizzes(quizzesArray) {
  const myQuizzesArray = JSON.parse(localStorage.getItem('myQuizzesArray'));
  console.log(myQuizzesArray)
  if (myQuizzesArray?.length === 0 || myQuizzesArray === null) {
    const noQuizzesText = 'Você não criou nenhum quizz ainda :(';
    const noQuizzes = document.createElement('p');
    const createQuizzButton = document.createElement('button');

    noQuizzes.innerHTML = noQuizzesText;
    createQuizzButton.innerHTML = 'Criar Quizz';

    createQuizzButton.addEventListener('click', createQuizz);

    noQuizzes.classList.add('noQuizzes');
    createQuizzButton.classList.add('createQuizzButton');

    myQuizzes.append(noQuizzes);
    myQuizzes.append(createQuizzButton);
  } else {
    console.log('Render rray');
    buildSavedQuizzes(quizzesArray);
  }
};

function renderHeader(data) {
  console.log(data);
  const main = document.querySelector('main');

  const figure = document.createElement('figure');
  const banner = document.createElement('img');
  const title = document.createElement('figcaption');

  figure.classList.add('bannerContainer');
  banner.classList.add('banner');
  title.classList.add('bannerTitle');

  banner.src = data.image;
  title.innerHTML = data.title;

  figure.append(banner);
  figure.append(title);
  main.append(figure)
};

let questoesRespondidas = 0;
let niveis;

function chooseAnswer(event) {
  const row = event.target.parentElement.parentElement;
  const children = Array.from(row.children);
  children.map((child) => child.classList.add('white'));
  children.map((child) => {
    if (child.firstElementChild.getAttribute('correct') === 'true') {
      child.firstElementChild.nextElementSibling.style.color = 'green';
    }
  });
  event.target.parentElement.classList.remove('white');
  
  if (event.target.getAttribute('correct') === 'true') correct += 1;
  console.log(correct);
  questoesRespondidas ++;
  verificarFim();
};

function verificarFim(){
  let qtdQuestoes = Array.from(document.querySelector("main article").children);
  if(questoesRespondidas == qtdQuestoes.length){
    alert(`Você acertou ${correct} questões`)
    renderizarFinalizacao();
  } 
}

function renderizarFinalizacao(data) {
  // let conteudo = document.querySelector('main');
  // for (let i=0; i< niveis.length; i++){
  //   if ((correct/questoesRespondidas)*100 >= niveis[i].minValue){
  //     conteudo.innerHTML += `<section class="topo-card-finalizacao">
  //     <div class="titulo-finalizacao">
  //       <h3>${88}% de acerto:${vocêépraticamenteumalunodeHogwarts}</h3>
  //     </div>
  //   </section>
    
  //   <section class="body-finalizacao">
  //     <div id="image-finalizacao">
  //       <img src="${assets / dumbledore.png}" alt="imagem card finalização">
  //     </div>
  //     <div class="texto-finalizacao">
  //       <p>${ParabénsPotterhead}</p>
  //     </div>
  //   </section>`;
  //   }
  //   }
     }
 
function renderQuizzes(data) {
  // console.log(data);
 niveis = data.levels;
  const main = document.querySelector('main');

  const quizzesPost = document.createElement('article');
  quizzesPost.classList.add('quizzesPost');
  main.append(quizzesPost);


  data.questions.map((question) => {
    const questionContainer = document.createElement('div');
    const title = document.createElement('h3');
    title.innerHTML = question.title;
    title.style.backgroundColor = question.color;

    const answerContainer = document.createElement('div');
    answerContainer.classList.add('answerContainer');
    questionContainer.classList.add('questionContainer');
    title.classList.add('titleQuestion');
    questionContainer.append(title);

    question.answers.map((answer) => {
      const answerCont = document.createElement('div');
      const image = document.createElement('img');
      const text = document.createElement('p');

      image.classList.add('.answerImg');
      answerCont.classList.add('.answerCont');
      text.classList.add('.answerText');

      text.style.color = 'red';

      image.src = answer.image;
      text.innerHTML = answer.text;
      image.setAttribute('correct', answer.isCorrectAnswer);

      image.addEventListener('click', chooseAnswer);

      answerCont.append(image);
      answerCont.append(text);
      answerContainer.append(answerCont);
      questionContainer.append(answerContainer);
      console.log(answer.image);
    })

    quizzesPost.append(questionContainer);
  })
};

function buildQuiz(data) {
  console.log(data);

  const main = document.querySelector('main');

  Array.from(main.children).map((child) => child.remove());

  renderHeader(data);
  renderQuizzes(data);
};

function getQuizz(event) {
  const { id } = event.target;
  const URL = `https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${id}`;

  axios.get(URL).then(({ data }) => buildQuiz(data));
};

function buildQuizzes(quizzesArray, myquiz = false) {
  if (!myquiz) {
    quizzesArray.map(({ id, title, image, questions, levels }) => {
      const card = document.createElement('div');
      const cardTittle = document.createElement('figCaption');
      const imageContainer = document.createElement('figure');
      const cardImage = document.createElement('img');

      card.id = id;
      card.classList.add('card');
      cardImage.src = image;
      cardTittle.innerHTML = title;

      card.addEventListener('click', getQuizz);

      card.append(imageContainer);
      imageContainer.append(cardImage);
      imageContainer.append(cardTittle);

      quizzesContainer.append(card);
    })
  } else {
    const title = document.createElement('h3');
    const titleContainer = document.createElement('div');
    const myQuizzesContainer = document.createElement('div');
    const button = document.createElement('ion-icon');

    title.innerHTML = 'Seus Quizzes';
    button.setAttribute('name', 'add-circle');
    button.classList.add('addQuiz');
    titleContainer.classList.add('titleContainer');
    myQuizzesContainer.classList.add('myQuizzesContainer');

    quizzesArray.map(({ id, title, image, questions, levels }) => {
      const card = document.createElement('div');
      const cardTittle = document.createElement('figCaption');
      const imageContainer = document.createElement('figure');
      const cardImage = document.createElement('img');

      card.id = id;
      card.classList.add('card');
      cardImage.src = image;
      cardTittle.innerHTML = title;

      card.addEventListener('click', getQuizz);

      card.append(imageContainer);
      imageContainer.append(cardImage);
      imageContainer.append(cardTittle);

      myQuizzesContainer.append(card);
    })

    button.addEventListener('click', createQuizz);

    titleContainer.append(title);
    titleContainer.append(button);
    myQuizzes.append(titleContainer);
    myQuizzes.append(myQuizzesContainer);
    myQuizzes.className = 'all-quizzes';
  }

};

function getQuizzes() {
  const URL = 'https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes';

  const promisse = axios.get(URL);
  promisse.then(({ data: data }) => {
    buildQuizzes(data);
    buildMyQuizzes(data);
  }).catch((error) => console.log(error.message));
};

window.addEventListener('load', getQuizzes);
