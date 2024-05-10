export default class Pessoa {
    constructor(pId, pCpf, pNome, pDataNasc, pGenero, pEmail, pLogradouro, pBairro, pEstado, pNumeroEndereco, pComplementoEndereco, pCep, pNumeroTelefone) {
        this.id = pId
        this.cpf = pCpf;
        this.nome = pNome;
        this.dataNasc = pDataNasc;
        this.genero = pGenero;
        this.email = pEmail;
        this.logradouro = pLogradouro;
        this.bairro = pBairro;
        this.estado = pEstado;
        this.numeroEndereco = pNumeroEndereco;
        this.complementoEndereco = pComplementoEndereco;
        this.cep = pCep;
        this.numeroTelefone = pNumeroTelefone;
    }

    get Id() { return this.id; }
    set Id(sId) { this.id = sId; }


    get Cpf() { return this.cpf; }
    set Cpf(sCpf) { this.cpf = sCpf; }

    get Nome() { return this.nome }
    set Nome(sNome) { this.nome = sNome; }

    get DataNasc() { return this.dataNasc }
    set DataNasc(sDataNasc) { this.dataNasc = sDataNasc; }

    get Genero() { return this.genero }
    set Genero(sGenero) { this.genero = sGenero; }

    get Email() { return this.email }
    set Email(sEmail) { this.email = sEmail; }

    get Logradouro() { return this.logradouro; }
    set Logradouro(sLogradouro) { this.logradouro = sLogradouro; }

    get Bairro() { return this.bairro; }
    set Bairro(sBairro) { this.bairro = sBairro; }

    get Estado() { return this.estado; }
    set Estado(sEstado) { this.estado = sEstado; }

    get NumeroEndereco() { return this.numeroEndereco; }
    set NumeroEndereco(sNumeroEndereco) { this.numeroEndereco = sNumeroEndereco; }

    get ComplementoEndereco() { return this.complementoEndereco; }
    set ComplementoEndereco(sComplementoEndereco) { this.complementoEndereco = sComplementoEndereco; }

    get Cep() { return this.cep; }
    set Cep(sCep) { this.cep = sCep; }

    get NumeroTelefone() { return this.numeroTelefone; }
    set NumeroTelefone(sNumeroTelefone) { this.numeroTelefone = sNumeroTelefone; }
}

export class Funcionario extends Pessoa {
    constructor(pId, pCpf, pNome, pDataNasc, pGenero, pEmail, pLogradouro, pBairro, pEstado, pNumeroEndereco, pComplementoEndereco, pCep, pNumeroTelefone, pDataAdmissao, pCRM, pEspecialidade) {
        super(pId, pCpf, pNome, pDataNasc, pGenero, pEmail, pLogradouro, pBairro, pEstado, pNumeroEndereco, pComplementoEndereco, pCep, pNumeroTelefone);
        this.dataAdmissao = pDataAdmissao;
        this.crm = pCRM;
        this.especialidades = pEspecialidade || [];
    }

    get DataAdmissao() { return this.dataAdmissao; }
    set DataAdmissao(sDataAdmissao) { this.dataAdmissao = sDataAdmissao; }

    get CRM() { return this.crm; }
    set CRM(sCRM) { this.crm = sCRM; }

    get Especialidades() { return this.especialidades; }
    set Especialidades(sEspecialidades) { this.especialidades = sEspecialidades; }

    adicionarEspecialidade(especialidade) {
        this.especialidades.push(especialidade);
    }

    removerEspecialidade(especialidade) {
        this.especialidades = this.especialidades.filter(e => e.id !== especialidade.id);
    }
}

export class Paciente extends Pessoa {
    constructor(pId, pCpf, pNome, pDataNasc, pGenero, pEmail, pLogradouro, pBairro, pEstado, pNumeroEndereco, pComplementoEndereco, pCep, pNumeroTelefone) {
        super(pId, pCpf, pNome, pDataNasc, pGenero, pEmail, pLogradouro, pBairro, pEstado, pNumeroEndereco, pComplementoEndereco, pCep, pNumeroTelefone);
    }
}

export class Login {
    constructor(pId, pLogin, pSenha, pStatus) {
        this.id = pId;
        this.login = pLogin;
        this.senha = pSenha;
        this.status = pStatus;
    }

    get Id() { return this.id; }
    set Id(sId) { this.id = sId; }

    get Login() { return this.login; }
    set Login(sLogin) { this.login = sLogin; }

    get Senha() { return this.senha; }
    set Senha(sSenha) { this.senha = sSenha; }

    get Status() { return this.status; }
    set Status(sStatus) { this.status = sStatus; }
}

export class Perfil {
    constructor(pid, ptipo, ploginId) {
        this.id = pid;
        this.tipo = ptipo;
        this.loginId = ploginId;
    }
    get Id() { return this.id; }
    set Id(sId) { this.id = sId; }

    get Tipo() { return this.tipo; }
    set Tipo(sTipo) { this.tipo = sTipo; }

}

export class Consulta {
    constructor(pId, pData, pHora, pStatus) {
        this.id = pId;
        this.data = pData;
        this.hora = pHora;
        this.status = pStatus;
    }

    get Id() { return this.id; }
    set Id(sId) { this.id = sId; }

    get Data() { return this.data; }
    set Data(sData) { this.data = sData; }

    get Hora() { return this.hora; }
    set Hora(sHora) { this.hora = sHora; }

    get Status() { return this.status; }
    set Status(sStatus) { this.status = sStatus; }

}

export class Prontuario {
    constructor(pId, pDiagnostico, pMedicacao) {
        this.id = pId;
        this.diagnostico = pDiagnostico;
        this.medicacao = pMedicacao;
    }

    get Id() { return this.id; }
    set Id(sId) { this.id = sId; }

    get Diagnostico() { return this.diagnostico; }
    set Diagnostico(sDiagnostico) { this.diagnostico = sDiagnostico; }

    get Medicacao() { return this.medicacao; }
    set Medicacao(sMedicacao) { this.medicacao = sMedicacao; }
}

