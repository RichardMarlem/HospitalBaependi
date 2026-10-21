// Pega valor de um select ou input pelo ID (retorna "" se não existir)
function val(id) {
  const el = document.getElementById(id);
  return el ? el.value.trim() : "";
}

function coletarDados() {
    return {

        // --- Departamento escolhido ---
        setor: val("setor"),
        nome: val("nome"),
        data: val('data'),
        // --- CHECKLIST DE LIMPEZA ---
        secretaria: val("secretaria"),
        salaEspera: val("salaEspera"),
        recepcaoCtImagens: val("recepcaoCtImagens"),
        banheirosCtImagens: val("banheirosCtImagens"),
        consultoriosPs: val("consultoriosPs"),
        consultoriosCtImagens: val("consultoriosCtImagens"),
        salaEmergencia: val("salaEmergencia"),
        salaSinais: val("salaSinais"),
        lixoUtiD: val("lixoUtiD"),
        lixoUtiCentral: val("lixoUtiCentral"),
        lixoCovid: val("lixoCovid"),
        salaMedicacao: val("salaMedicacao"),
        salaCurativo: val("salaCurativo"),
        salaSutura: val("salaSutura"),
        banheiroFuncionarios: val("banheiroFuncionarios"),
        salaOrtopedia: val("salaOrtopedia"),
        banheiroOrtopedia: val("banheiroOrtopedia"),
        corredorPs: val("corredorPs"),
        limpezaLaboratorio: val("limpezaLaboratorio"),
        lavarLixeiras: val("lavarLixeiras"),
        corredores: val("corredores"),
        vestiarios: val("vestiarios"),
        recolherRoupas: val("recolherRoupas"),
        salaMedicaoImagens: val("salaMedicaoImagens"),
        limpezaEnceradeira: val("limpezaEnceradeira"),
        quartoPlantonista: val("quartoPlantonista"),
        salaRx: val("salaRx"),
        copaCentroImagens: val("copaCentroImagens"),
        copaCentroAdministrativo: val("copaCentroAdministrativo")

    };
}

function mostrarForm(){
    const formulario = document.getElementById('formulario');
    const setores = document.getElementById('setor').value


    if (setores == 'noturno') {
        formulario.innerHTML = `
        <div class="dados_checklist">
                    <label for="secretaria">Secretaria:</label>
                    <select name="secretaria" id="secretaria">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diaria">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="salaEspera">P.S Sala de Espera:</label>
                    <select name="salaEspera" id="salaEspera">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diaria">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="recepcaoCtImagens">Recepção Centro de Imagens:</label>
                    <select name="recepcaoCtImagens" id="recepcaoCtImagens">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diaria">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="banheirosCtImagens">Banheiros Centro de Imagens:</label>
                    <select name="banheirosCtImagens" id="banheirosCtImagens">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diaria">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="consultoriosPs">Consultórios P.S:</label>
                    <select name="consultoriosPs" id="consultoriosPs">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diaria">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="consultoriosCtImagens">Consultórios Centro de Imagens:</label>
                    <select name="consultoriosCtImagens" id="consultoriosCtImagens">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diaria">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="salaEmergencia">Sala de Emergência:</label>
                    <select name="salaEmergencia" id="salaEmergencia">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diaria">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="salaSinais">Sala de Sinais:</label>
                    <select name="salaSinais" id="salaSinais">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diaria">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="lixoUtiD">Retirar o Lixo UTI D:</label>
                    <select name="lixoUtiD" id="lixoUtiD">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diaria">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="lixoUtiCentral">Retirar o Lixo UTI Central:</label>
                    <select name="lixoUtiCentral" id="lixoUtiCentral">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diaria">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="lixoCovid">Retirar o Lixo Setor Covid:</label>
                    <select name="lixoCovid" id="lixoCovid">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diaria">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="salaMedicacao">Sala de Medicação:</label>
                    <select name="salaMedicacao" id="salaMedicacao">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diaria">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="salaCurativo">Sala de Curativo:</label>
                    <select name="salaCurativo" id="salaCurativo">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diaria">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="salaSutura">Sala de Sutura:</label>
                    <select name="salaSutura" id="salaSutura">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diaria">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="banheiroFuncionarios">Banheiro Funcionários:</label>
                    <select name="banheiroFuncionarios" id="banheiroFuncionarios">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diaria">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="salaOrtopedia">Sala da ortopedia:</label>
                    <select name="salaOrtopedia" id="salaOrtopedia">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diaria">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="banheiroOrtopedia">Banheiro da ortopedia:</label>
                    <select name="banheiroOrtopedia" id="banheiroOrtopedia">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diaria">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="corredorPs">Corredor do P.S:</label>
                    <select name="corredorPs" id="corredorPs">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diaria">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="limpezaLaboratorio">Limpeza no laboratório:</label>
                    <select name="limpezaLaboratorio" id="limpezaLaboratorio">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diaria">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="lavarLixeiras">Lavar as lixeiras:</label>
                    <select name="lavarLixeiras" id="lavarLixeiras">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diaria">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="corredores">Corredores:</label>
                    <select name="corredores" id="corredores">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diaria">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="vestiarios">Vestiários:</label>
                    <select name="vestiarios" id="vestiarios">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diaria">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="recolherRoupas">Recolher as roupas nos setores:</label>
                    <select name="recolherRoupas" id="recolherRoupas">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diaria">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="salaMedicaoImagens">Sala de medicação do centro de imagens:</label>
                    <select name="salaMedicaoImagens" id="salaMedicaoImagens">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diaria">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="limpezaEnceradeira">Limpeza enceradeira area externa:</label>
                    <select name="limpezaEnceradeira" id="limpezaEnceradeira">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diaria">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="quartoPlantonista">Quarto do plantonista:</label>
                    <select name="quartoPlantonista" id="quartoPlantonista">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diaria">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="salaRx">Sala do RX:</label>
                    <select name="salaRx" id="salaRx">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diaria">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="copaCentroImagens">Copa do centro de imagens:</label>
                    <select name="copaCentroImagens" id="copaCentroImagens">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diaria">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="copaCentroAdministrativo">Copa centro administrativo  :</label>
                    <select name="copaCentroAdministrativo" id="copaCentroAdministrativo">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diaria">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
        `
    } else if (setores == 'Ambulatorio Covid') {
        formulario.innerHTML = `
            
        `;

    } else if (setores == ''){
       formulario.innerHTML = `` 
    }
     else {
        formulario.innerHTML = '';
    }
}

function verDados() {
    const dados = coletarDados();

    console.log(dados);
    console.table(dados);
}

const dados = coletarDados();
console.log(dados);
