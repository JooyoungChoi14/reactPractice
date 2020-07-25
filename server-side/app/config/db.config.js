module.exports = {
    HOST: "127.0.0.1",
    PORT: '8903',
    USER: "root",
    PASSWORD: "admin8903",
    DB: "nodemysql",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
