const mysql2 = require("mysql2/promise");

const connection = async () => {
    try {
        if (global.connection && global.connection.state !== 'disconnected') {
            return global.connection;
        }
        
        const con = await mysql2.createConnection({
            host: 'localhost',
            port: '3306',
            database: 'clinica',
            user: 'root',
            password: '1234'
        });
        
        console.log("Conectou no MySQL!");
        global.connection = con;
        return con;
    } catch (error) {
        console.error("Erro ao conectar ao MySQL:", error);
        throw error; // Re-throw the error to be handled by the caller
    }
}

module.exports = { connection };
