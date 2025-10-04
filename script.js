document.getElementById('cadastro-form').addEventListener('submit', async function(e) {
  e.preventDefault();
  const form = e.target;
  const dados = {
    nome_completo: form.nome_completo.value,
    cpf: form.cpf.value,
    email: form.email.value,
    telefone: form.telefone.value,
    endereco: form.endereco.value,
    nome_pet: form.nome_pet.value,
    especie: form.especie.value,
    raca: form.raca.value,
    data_nascimento: form.data_nascimento.value,
    observacoes: form.observacoes.value
  };

  try {
    const res = await fetch('http://localhost:3000/cadastro', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dados)
    });
    const result = await res.json();
    if (result.sucesso) {
      document.getElementById('mensagem').textContent = "Cliente e pet cadastrados com sucesso!";
      form.reset();
    } else {
      document.getElementById('mensagem').textContent = "Erro ao cadastrar: " + (result.erro || '');
    }
  } catch (err) {
    document.getElementById('mensagem').textContent = "Erro de conexão com o servidor.";
  }
});