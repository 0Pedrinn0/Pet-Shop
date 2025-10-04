CREATE DATABASE IF NOT EXISTS db_pet_shop;
USE db_pet_shop;

CREATE TABLE dono (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_completo VARCHAR(100) NOT NULL,
    cpf VARCHAR(14) NOT NULL,
    email VARCHAR(100) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    endereco VARCHAR(150) NOT NULL
);

CREATE TABLE pet (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_dono INT NOT NULL,
    nome_pet VARCHAR(50) NOT NULL,
    especie VARCHAR(20) NOT NULL,
    raca VARCHAR(40) NOT NULL,
    data_nascimento DATE NOT NULL,
    observacoes TEXT,
    FOREIGN KEY (id_dono) REFERENCES dono(id)
);