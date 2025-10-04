const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
const PORT = 3000;


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'db_pet_shop',
});

app.use(cors());
app.use(express.json());

app.post('/cadastro', (req, res) => {
  const {
    nome_completo, cpf, email, telefone, endereco,
    nome_pet, especie, raca, data_nascimento, observacoes
  } = req.body;

  const donoSql = 'INSERT INTO dono (nome_completo, cpf, email, telefone, endereco) VALUES (?, ?, ?, ?, ?)';
  db.query(donoSql, [nome_completo, cpf, email, telefone, endereco], (err, donoResult) => {
    if (err) return res.status(500).json({ sucesso: false, erro: err.message });

    const id_dono = donoResult.insertId;

    const petSql = 'INSERT INTO pet (id_dono, nome_pet, especie, raca, data_nascimento, observacoes) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(petSql, [id_dono, nome_pet, especie, raca, data_nascimento, observacoes], (err, petResult) => {
      if (err) return res.status(500).json({ sucesso: false, erro: err.message });
      res.json({ sucesso: true });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});