const Sequelize = require('sequelize');

const sequelize = new Sequelize("test", "postgres", "123", {
    host: 'localhost',
    dialect: 'postgres',

    pool: {
        max: 5,
        min: 0,
        require: 30000,
        idle: 10000
    },
    // logging: false
});

sequelize.authenticate().then(() => {
    console.log("[API] Banco de Dados conectado com SUCESSO.");
}).catch(err => {
    console.log("[API] Erro ao se conectar com o banco de Dados.\n [API] O ERRO: "+ err);
})

module.exports = sequelize;