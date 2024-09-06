function pesquisar() {
  // Obtém a seção onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  // Recebe o texto escrito pelo usuário
  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  // Reduz a caixa de todo o texto escrito pelo usuário
  campoPesquisa = campoPesquisa.toLowerCase();
  
  // Limpa os espaços vazios no início ou no final campo de pesquisa
  const campoLimpo = campoPesquisa.trim();
 
  // Se a string estiver vazia, retorna apenas uma mensagem e encerra a função
  if (!campoLimpo) {
    section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar um nome de atleta ou esporte.</p>";
    return;
  };

  // Inicializa uma string vazia para armazenar os resultados da pesquisa
  let resultados = "";
  // Inicializa strings vazias para armazenar os títulos, descrições e tags do banco de dados
  let titulo = "";
  let descricao = "";
  let tags = "";

  // Itera sobre cada dado na lista de dados
  for (let dado of dados) {
    // Recebe os dados do banco de dados e reduz a caixa
    titulo = dado.titulo.toLowerCase();
    descricao = dado.titulo.toLowerCase();
    tags = dado.tags.toLowerCase();
    // Pesquisa se o texto digitado pelo usuário está incluso em algum título ou descrição ou tag
    if (titulo.includes(campoLimpo) || descricao.includes(campoLimpo) || tags.includes(campoLimpo)) {
      // Constrói o HTML para cada resultado que for correspondente à pesquisa, formatando os dados dinamicamente
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `;
    } else {
      section.innerHTML = "<p>Nada foi encontrado</p>";
      return;
    };
  };

  // Atribui o HTML gerado à seção de resultados
  section.innerHTML = resultados;
};
