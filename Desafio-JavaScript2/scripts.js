const changeColor = (cor) => {
  const color = document.getElementById('principal');
  color.style.backgroundColor = cor;
};


const selectChangeColor = (event) => {
  const color = document.getElementById('principal');
  const selectedColor = event.target.value;
  color.style.backgroundColor = selectedColor;
};

const toggleContent = () => {
  const conteudo = document.getElementById("conteudo");
  if (conteudo.style.display === "none" || conteudo.style.display === "") {
      conteudo.style.display = "block";
  } else {
      conteudo.style.display = "none";
  }
}


// Exercicio - 5
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const button = document.getElementById('buttonForm');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const checkboxSelected = document.querySelectorAll('input[type="checkbox"]:checked');
        button.disabled = checkboxSelected.length < 2;
    });
});


// Exercicio - 6
const changeColorAndBackground = (cor) => {
  const color = document.getElementById('principal');
  color.style.backgroundColor = cor;

  if (cor === 'black') {
    color.style.color = 'white';
  } else {
    color.style.color = 'black';
  }
};


// Exercicio - 7

const texto = document.querySelector('p');

var tamanhoFonte = 16;
function increaseFontSize() {
    tamanhoFonte += 2;
    texto.style.fontSize = tamanhoFonte + 'px';
}

function decreaseFontSize() {
    tamanhoFonte -= 2;
    texto.style.fontSize = tamanhoFonte + 'px';
}

function transformUppercase() {
  texto.textContent = texto.textContent.toUpperCase();
}

function transformLowercase() {
  texto.textContent = texto.textContent.toLowerCase();
}

// Exercicio - 9

function validateForm() {
  const login = document.getElementById("login").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (login === "" || password === "" || confirmPassword === "") {
      alert("Por favor, preencha todos os campos.");
      return false;
  } else if (password.length < 6 || password.length > 10) {
      alert("A senha deve ter entre 6 e 10 caracteres.");
      return false;
  } else if (password !== confirmPassword) {
      alert("As senhas não coincidem.");
      return false;
  }

  return true;
}

// Exercicio - 10

function toggleFormFields() {
  const pessoaFisica = document.getElementById('pessoaFisica');
  const pessoaJuridica = document.getElementById('pessoaJuridica');
  const dataNascimentoField = document.getElementById('dataNascimento');
  const cpfField = document.getElementById('cpf');
  const cnpjField = document.getElementById('cnpj');
  const cepField = document.getElementById('cep');

  cpfField.disabled = !pessoaFisica.checked;
  cnpjField.disabled = !pessoaJuridica.checked;
  dataNascimentoField.disabled = !pessoaFisica.checked;
  cepField.maxLength = pessoaFisica.checked ? 8 : 0;
}