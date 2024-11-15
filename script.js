// script.js

// Valida se o nome é completo
function validarNome(nome) {
  return nome.trim().split(' ').length > 1;
}

// Obtém o sobrenome em letras minúsculas
function obterSobrenome(nome) {
  const palavras = nome.trim().split(' ');
  return palavras[palavras.length - 1].toLowerCase();
}

// Conta o número de vogais no nome, com dois dígitos
function contarVogais(nome) {
  const vogais = nome.match(/[aeiouáéíóúãõâêîôûàèìòùäëïöü]/gi) || [];
  return vogais.length.toString().padStart(2, '0');
}

// Evento de geração de senha
document.getElementById('gerarSenha').addEventListener('click', () => {
  const nome = document.getElementById('nome').value;
  const resultadoDiv = document.getElementById('resultado');

  if (!validarNome(nome)) {
      resultadoDiv.textContent = 'Por favor, insira o nome completo do aluno.';
      resultadoDiv.style.color = 'red';
      return;
  }

  const sobrenome = obterSobrenome(nome);
  const qtdVogais = contarVogais(nome);
  const senha = `${sobrenome}${qtdVogais}`;

  resultadoDiv.textContent = `Senha inicial: ${senha}`;
  resultadoDiv.style.color = '#007BFF';
});
