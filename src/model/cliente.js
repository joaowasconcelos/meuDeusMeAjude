const {connection} = require("../config/db");


const testeModel = {
    listarTodasPessoas: async () => {
        try {
            const conn = await connection();
            const [rows] = await conn.query('select * from tbl_pessoa;');
            return rows;

        } catch (error) {
            throw error;
        }
    },
    // listarTodosPacientes: async () => {
    //     try {
    //         const conn = await connection();
    //         const [rows] = await conn.query('select * from tbl_paciente;');
    //         return rows;

    //     } catch (error) {
    //         throw error;
    //     }
    // },
    // listarTodosFuncionarios: async () => {
    //     try {
    //         const conn = await connection();
    //         const [rows] = await conn.query('select * from tbl_funcionario;');
    //         return rows;

    //     } catch (error) {
    //         throw error;
    //     }
    // },
    // listarTodosMedicos: async () => {
    //     try {
    //         const conn = await connection();
    //         const [rows] = await conn.query('select * from tbl_funcionario where crm is not null ;');
    //         return rows;

    //     } catch (error) {
    //         throw error;
    //     }
    // },
    // listarEspecialidadeMedico: async () => {
    //     try {
    //         const conn = await connection();
    //         const sql = await conn.query(`SELECT 
    //         f.id AS id_funcionario,
    //         f.data_admissao,
    //         f.crm,
    //         p.nome AS nome_medico,
    //         e.desc_especialidade
    //     FROM 
    //         clinica.tbl_funcionario AS f
    //     JOIN 
    //         clinica.tbl_funcionario_has_tbl_especialidade AS fe ON f.id = fe.funcionario_id
    //     JOIN 
    //         clinica.tbl_especialidade AS e ON fe.especialidade_id = e.id
    //     JOIN 
    //         clinica.tbl_pessoa AS p ON f.pessoa_id = p.id
    //     WHERE 
    //         f.crm IS NOT NULL;`);
    //         return await conn.query(sql);

    //     } catch (error) {
    //         throw error;
    //     }
    // },
    // listarConsultas: async (id, nome, cpf) => {
    //     try {
    //         const conn = await connection();
    //         const sql = await conn.query(`
    //             SELECT 
    //                 c.data AS data_consulta,
    //                 c.hora AS hora_consulta,
    //                 pp.nome AS nome_paciente,
    //                 pf.nome AS nome_medico
    //             FROM 
    //                 clinica.tbl_consulta c
    //             JOIN 
    //                 clinica.tbl_paciente p ON c.paciente_id = p.id
    //             JOIN 
    //                 clinica.tbl_pessoa pp ON p.pessoa_id = pp.id
    //             JOIN 
    //                 clinica.tbl_funcionario f ON c.funcionario_id = f.id
    //             JOIN 
    //                 clinica.tbl_pessoa pf ON f.pessoa_id = pf.id
    //             WHERE 
    //                 p.id = ? OR pp.nome = ? OR pp.cpf = ?;`);
    //         const values  = [id,nome,cpf]
    //         return await conn.query(sql, values);
    //     } catch (error) {
    //         throw error;
    //     }
    // },

}

module.exports = testeModel ;