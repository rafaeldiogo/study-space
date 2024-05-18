/* 
- Um meio nativo de realizar requisições a ApIs com JavaScript
- Podemos utilizar com Promise ou async/await
- Se a requisição for GET é preciso passar apenas a URL do recurso que estamos resgatando da API
- Caso seja outro verbo, podemos configurar a requisição com: methid, body e headers
- O fetch é muito utilizado com frameworks/libs como: React, Vue e Angular
 */
const url = "https://jsonplaceholder.typicode.com/posts";

const loadingElement = document.querySelector("#loading");
const postsContainer = document.querySelector("#posts-container");

// Selecionando o elemento que possui o id post
const postPage = document.querySelector("#post");
// Selecionando o elemento que possui o id post-container
const postContainer = document.querySelector("#post-container");
// Selecionando o elemento que possui o id comments-container
const commentsContainer = document.querySelector("#comments-container");

// Selecionando elementos para adicionar comentarios
const commentForm = document.querySelector("#comment-form");
const emailInput = document.querySelector("#email");
const bodyInput = document.querySelector("#body");

// Get id from URL
const urlSearchParams = new URLSearchParams(window.location.search);
const postId = urlSearchParams.get("id");

// Get all posts
async function getAllPosts() {
  const response = await fetch(url);

  console.log(response);

  const data = await response.json();
  console.log(data);

  // Adicionando a classe hide no html que possui loading como id
  loadingElement.classList.add("hide");

  // o map vai percorrer data (varios post) para pegar cada post
  data.map((post) => {
    // criando uma div
    const div = document.createElement("div");
    // dentro da div foi criado um h2, p e um  a (link)
    const title = document.createElement("h2");
    const body = document.createElement("p");
    const link = document.createElement("a");

    // o post tem essa estrutura
    /*   
  {    
    body:"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    id:1
    title:"sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
    userId:1
} */
    title.innerText = post.title; // innerText vai inserir um texto (post.title que vem da requisicao) a tag h2 (title)
    body.innerText = post.body;
    link.innerText = "Ler"; // adicionando texto ao link
    link.setAttribute("href", `post.html?id=${post.id}`); // adicionando atributo href ao link

    // Através da manipulação do DOM, vamos inserir o h2, p e a dentro da div
    div.appendChild(title);
    div.appendChild(body);
    div.appendChild(link);

    // Inserindo a manipulação do DOM dentro da div que possui a id posts-container
    postsContainer.appendChild(div);
  });
}

// Get individual post
// função para preencher as informações do post
// Utilizando promise.all pq serão feitas duas requisições em paralelo, uma para o post individual usando o id e o outro para os comentarios
// Utilizando destructuring de array para as duas respostas
async function getPost(id) {
  const [responsePost, responseComments] = await Promise.all([
    fetch(`${url}/${id}`),
    fetch(`${url}/${id}/comments`),
  ]);

  const dataPost = await responsePost.json();
  const dataComments = await responseComments.json();

  loadingElement.classList.add("hide");
  postPage.classList.remove("hide");

  const title = document.createElement("h1");
  const body = document.createElement("p");

  title.innerText = dataPost.title;
  body.innerText = dataPost.body;

  postContainer.appendChild(title);
  postContainer.appendChild(body);

  console.log(dataComments);

  dataComments.map((comment) => {
    createComment(comment);
  });
}

function createComment(comment) {
  const div = document.createElement("div");
  const email = document.createElement("h3");
  const commentBody = document.createElement("p");

  email.innerText = comment.email;
  commentBody.innerText = comment.body;

  div.appendChild(email);
  div.appendChild(commentBody);

  commentsContainer.appendChild(div);
}

// Post a comment
async function postComment(comment) {
  const response = await fetch(`${url}/${postId}/comments`, {
    method: "POST",
    body: comment,
    headers: {
      "Content-type": "application/json",
    },
  });

  const data = await response.json();
  createComment(data);
}

if (!postId) {
  getAllPosts();
} else {
  getPost(postId);

  // Add evento form
  // Adicionando um evento para fazer a requisicao do post que vai inserir um novo comentario
  commentForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let comment = {
      email: emailInput.value,
      body: bodyInput.value,
    };

    comment = JSON.stringify(comment);
    postComment(comment);
  });
}
