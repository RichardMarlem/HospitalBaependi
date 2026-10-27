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


        // --- SETOR: NOTURNO ---
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
        copaCentroAdministrativo: val("copaCentroAdministrativo"),
        observacaoNoturno: val("observacaoNoturno"),

        // --- SETOR: C-1 ---
        recepcaoC1: val("recepcaoC1"),
        postoEnfermagemC1: val("postoEnfermagemC1"),
        quartoMedicosC1: val("quartoMedicosC1"),
        salaTelefonistaC1: val("salaTelefonistaC1"),
        bancoSangueC1: val("bancoSangueC1"),
        lactarioC1: val("lactarioC1"),
        quartoPlantonistaC1: val("quartoPlantonistaC1"),
        segurancaTrabalhoC1: val("segurancaTrabalhoC1"),
        salaEnfermagemC1: val("salaEnfermagemC1"),
        dmlC1: val("dmlC1"),
        qualidade35C1: val("qualidade35C1"),
        governanca36C1: val("governanca36C1"),
        compras37C1: val("compras37C1"),
        dprh38C1: val("dprh38C1"),
        financeiro39C1: val("financeiro39C1"),
        slReuniao30C1: val("slReuniao30C1"),
        slFaturamento30C1: val("slFaturamento30C1"),
        slMarbioC1: val("slMarbioC1"),
        corredorCentralC1: val("corredorCentralC1"),
        consultorio04C1: val("consultorio04C1"),
        banheiroC1: val("banheiroC1"),
        consultorio01C1: val("consultorio01C1"),
        salaGinecologicaC1: val("salaGinecologicaC1"),
        slPequenaCirurgia02C1: val("slPequenaCirurgia02C1"),
        rxC1: val("rxC1"),
        recepcaoOrtopediaC1: val("recepcaoOrtopediaC1"),
        corredorC1: val("corredorC1"),
        epiC1: val("epiC1"),
        consultorio03C1: val("consultorio03C1"),
        salaMedicosTiC1: val("salaMedicosTiC1"),
        observacaoC1: val("observacaoC1"),

        // --- SETOR: A ---
        emodimanicaA: val("emodimanicaA"),
        salaRecuperacaoA: val("salaRecuperacaoA"),
        banheiroA: val("banheiroA"),
        corredorA: val("corredorA"),
        salaLaudoA: val("salaLaudoA"),
        salaExamesA: val("salaExamesA"),
        banheiroFuncionariosA: val("banheiroFuncionariosA"),
        expurgoA: val("expurgoA"),
        salaMedicosA: val("salaMedicosA"),
        expurgoEnfermagemA: val("expurgoEnfermagemA"),
        quartos108A: val("quartos108A"),
        quartos107A: val("quartos107A"),
        quartos106A: val("quartos106A"),
        quartos105A: val("quartos105A"),
        quartos104A: val("quartos104A"),
        quartos103A: val("quartos103A"),
        limpezaAreaExternaA: val("limpezaAreaExternaA"),
        epiA: val("epiA"),
        expurgoLimpezaA: val("expurgoLimpezaA"),
        rampaA: val("rampaA"),
        retirarResiduosA: val("retirarResiduosA"),
        levarLixoA: val("levarLixoA"),
        entregarCheckMesA: val("entregarCheckMesA"),
        verificarQuartoDiariaA: val("verificarQuartoDiariaA"),
        salaCarneA: val("salaCarneA"),
        salaServicoSocialA: val("salaServicoSocialA"),
        observacaoA: val("observacaoA"),

        // --- SETOR: B ---
        postoEmergenciaB: val('postoEmergenciaB'),
        expurgoEmergenciaB: val('expurgoEmergenciaB'),
        expurgoLimpezaB: val('expurgoLimpezaB'),
        banheiroFuncionarioB: val('banheiroFuncionarioB'),
        corredorB: val('corredorB'),
        quarto202B: val('quarto202B'),
        quarto203B: val('quarto203B'),
        quarto204B: val('quarto204B'),
        quarto205B: val('quarto205B'),
        quarto206B: val('quarto206B'),
        quarto207B: val('quarto207B'),
        quarto208B: val('quarto208B'),
        quarto209B: val('quarto209B'),
        quarto210B: val('quarto210B'),
        quarto211B: val('quarto211B'),
        quarto212B: val('quarto212B'),
        quarto213B: val('quarto213B'),
        quarto214B: val('quarto214B'),
        quarto215B: val('quarto215B'),
        limpezaGeladeiraB: val('limpezaGeladeiraB'),
        ramapaJanelasB: val('ramapaJanelasB'),
        depositoCadeirasMacasB: val('depositoCadeirasMacasB'),
        epiB: val('epiB'),
        observacaoB: val("observacaoB"),

        // --- SETOR: D ---

        copaD: val('copaD'),
        areaExternaD: val('areaExternaD'),
        tendaTriagemD: val('tendaTriagemD'),
        salaObservacaoD: val('salaObservacaoD'),
        rampaD: val('rampaD'),
        limpezaMobiliariosD: val('limpezaMobiliariosD'),
        lavarLixeirasD: val('lavarLixeirasD'),
        retirarResiduosD: val('retirarResiduosD'),
        epiD: val('epiD'),
        observacaoD: val("observacaoD"),
        
        // --- SETOR: E --- 
        postoEnfermagemE: val('postoEnfermagemE'),
        copaE: val('copaE'),
        roupariaE: val('roupariaE'),
        salaGinecologicaE: val('salaGinecologicaE'),
        bercarioE: val('bercarioE'),
        farmaciaE: val('farmaciaE'),
        setorComprasE: val('setorComprasE'),
        depositoFarmacia1E: val('depositoFarmacia1E'),
        depositoFarmacia2E: val('depositoFarmacia2E'),
        depositoFarmacia3E: val('depositoFarmacia3E'),
        salaFarmaceuticoE: val('salaFarmaceuticoE'),
        banheiroFuncionariosE: val('banheiroFuncionariosE'),
        quarto404E: val('quarto404E'),
        quarto405E: val('quarto405E'),
        quarto406E: val('quarto406E'),
        quarto407E: val('quarto407E'),
        quarto408E: val('quarto408E'),
        quarto409E: val('quarto409E'),
        quarto410E: val('quarto410E'),
        quarto411E: val('quarto411E'),
        quarto412E: val('quarto412E'),
        quarto413E: val('quarto413E'),
        quarto414E: val('quarto414E'),
        quarto415E: val('quarto415E'),
        quarto416E: val('quarto416E'),
        quarto417E: val('quarto417E'),
        quarto418E: val('quarto418E'),
        areaExternaE: val('areaExternaE'),
        escadaE: val('escadaE'),
        corredorE: val('corredorE'),
        expurgoEnfermagemE: val('expurgoEnfermagemE'),
        expurgoLimpezaE: val('expurgoLimpezaE'),
        depositoCadeirasMacasE: val('depositoCadeirasMacasE'),
        epiE: val('epiE'),
        observacaoE: val('observacaoE'),

       
    };
}

function mostrarForm(){
    const formulario = document.getElementById('formulario');
    const setores = document.getElementById('setor').value
    const textoSetor = document.getElementById('nomeSetor');

    if (setores == 'Noturno') {
        textoSetor.innerHTML = `${setores}`;

        formulario.innerHTML = `
        <div class="dados_checklist">
                    <label for="secretaria">Secretaria:</label>
                    <select name="secretaria" id="secretaria">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diária">Limpeza Diária</option>
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
                        <option value="Limpeza Diária">Limpeza Diária</option>
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
                        <option value="Limpeza Diária">Limpeza Diária</option>
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
                        <option value="Limpeza Diária">Limpeza Diária</option>
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
                        <option value="Limpeza Diária">Limpeza Diária</option>
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
                        <option value="Limpeza Diária">Limpeza Diária</option>
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
                        <option value="Limpeza Diária">Limpeza Diária</option>
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
                        <option value="Limpeza Diária">Limpeza Diária</option>
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
                        <option value="Limpeza Diária">Limpeza Diária</option>
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
                        <option value="Limpeza Diária">Limpeza Diária</option>
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
                        <option value="Limpeza Diária">Limpeza Diária</option>
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
                        <option value="Limpeza Diária">Limpeza Diária</option>
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
                        <option value="Limpeza Diária">Limpeza Diária</option>
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
                        <option value="Limpeza Diária">Limpeza Diária</option>
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
                        <option value="Limpeza Diária">Limpeza Diária</option>
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
                        <option value="Limpeza Diária">Limpeza Diária</option>
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
                        <option value="Limpeza Diária">Limpeza Diária</option>
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
                        <option value="Limpeza Diária">Limpeza Diária</option>
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
                        <option value="Limpeza Diária">Limpeza Diária</option>
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
                        <option value="Limpeza Diária">Limpeza Diária</option>
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
                        <option value="Limpeza Diária">Limpeza Diária</option>
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
                        <option value="Limpeza Diária">Limpeza Diária</option>
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
                        <option value="Limpeza Diária">Limpeza Diária</option>
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
                        <option value="Limpeza Diária">Limpeza Diária</option>
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
                        <option value="Limpeza Diária">Limpeza Diária</option>
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
                        <option value="Limpeza Diária">Limpeza Diária</option>
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
                        <option value="Limpeza Diária">Limpeza Diária</option>
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
                        <option value="Limpeza Diária">Limpeza Diária</option>
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
                        <option value="Limpeza Diária">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <div class="textoObservacao">
                        <label for="observacaoNoturno">Observação:</label>
                        <textarea id="observacaoNoturno" name="observacaoNoturno" placeholder="Digite sua observação..."></textarea>
                    </div>
                </div>
        `
    } else if (setores == 'C-1') {
        textoSetor.innerHTML = `${setores}`;

        formulario.innerHTML = `
            <div class="dados_checklist">
                        <label for="recepcaoC1">RECEPÇÃO:</label>
                        <select name="recepcaoC1" id="recepcaoC1">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="postoEnfermagemC1">POSTO DE ENFERMAGEM:</label>
                        <select name="postoEnfermagemC1" id="postoEnfermagemC1">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="quartoMedicosC1">QUARTO DOS MÉDICOS:</label>
                        <select name="quartoMedicosC1" id="quartoMedicosC1">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="salaTelefonistaC1">SALA DA TELEFONISTA:</label>
                        <select name="salaTelefonistaC1" id="salaTelefonistaC1">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="bancoSangueC1">BANCO DE SANGUE:</label>
                        <select name="bancoSangueC1" id="bancoSangueC1">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="lactarioC1">LACTÁRIO:</label>
                        <select name="lactarioC1" id="lactarioC1">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="quartoPlantonistaC1">QUARTO PLANTONISTA:</label>
                        <select name="quartoPlantonistaC1" id="quartoPlantonistaC1">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="segurancaTrabalhoC1">
                            SALA DA SEGURANÇA DO TRABALHO:
                        </label>
                        <select name="segurancaTrabalhoC1" id="segurancaTrabalhoC1">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div> 
                    <div class="dados_checklist">
                        <label for="salaEnfermagemC1">
                            SALA DA ENFERMAGEM:
                        </label>
                        <select name="salaEnfermagemC1" id="salaEnfermagemC1">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="dmlC1">
                            DML:
                        </label>
                        <select name="dmlC1" id="dmlC1">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="qualidade35C1">
                            35 QUALIDADE:
                        </label>
                        <select name="qualidade35C1" id="qualidade35C1">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="governanca36C1">
                            36 GOVERNANÇA:
                        </label>
                        <select name="governanca36C1" id="governanca36C1">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="compras37C1">
                            37 COMPRAS:
                        </label>
                        <select name="compras37C1" id="compras37C1">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="dprh38C1">
                            38 D. P. RH:
                        </label>
                        <select name="dprh38C1" id="dprh38C1">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="financeiro39C1">
                            39 FINANCEIRO:
                        </label>
                        <select name="financeiro39C1" id="financeiro39C1">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="slReuniao30C1">
                            30 S.L REUNIÃO:
                        </label>
                        <select name="slReuniao30C1" id="slReuniao30C1">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="slFaturamento30C1">
                            S.L  FATURAMENTO:
                        </label>
                        <select name="slFaturamento30C1" id="slFaturamento30C1">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="slMarbioC1">
                            S.L MARBIO:
                        </label>
                        <select name="slMarbioC1" id="slMarbioC1">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="corredorCentralC1">
                            CORREDOR CENTRAL:
                        </label>
                        <select name="corredorCentralC1" id="corredorCentralC1">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="consultorio04C1">
                            COSULTORIO 04:
                        </label>
                        <select name="consultorio04C1" id="consultorio04C1">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="banheiroC1">
                            BANHEIRO:
                        </label>
                        <select name="banheiroC1" id="banheiroC1">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="consultorio01C1">
                            CONSULTÓRIO  01:
                        </label>
                        <select name="consultorio01C1" id="consultorio01C1">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="salaGinecologicaC1">
                            SALA GINECOLÓGICA:
                        </label>
                        <select name="salaGinecologicaC1" id="salaGinecologicaC1">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="slPequenaCirurgia02C1">
                            S.L PEQUENA C.CIRURGIA 02:
                        </label>
                        <select name="slPequenaCirurgia02C1" id="slPequenaCirurgia02C1">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="rxC1">
                            RX:
                        </label>
                        <select name="rxC1" id="rxC1">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="recepcaoOrtopediaC1">
                            RECEPÇÃO DA ORTOPEDIA:
                        </label>
                        <select name="recepcaoOrtopediaC1" id="recepcaoOrtopediaC1">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="corredorC1">
                            CORREDOR:
                        </label>
                        <select name="corredorC1" id="corredorC1">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="epiC1">
                            EPI’S:
                        </label>
                        <select name="epiC1" id="epiC1">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="consultorio03C1">
                            CONSULTÓRIO 03:
                        </label>
                        <select name="consultorio03C1" id="consultorio03C1">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="salaMedicosTiC1">
                            SALA DE MEDICOS SL.T.I:
                        </label>
                        <select name="salaMedicosTiC1" id="salaMedicosTiC1">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <div class="textoObservacao">
                            <label for="observacaoC1">Observação:</label>
                            <textarea id="observacaoC1" name="observacaoC1" placeholder="Digite sua observação..."></textarea>
                        </div>
                    </div>
        `;

    } else if (setores == 'A'){
        textoSetor.innerHTML = `${setores}`;

        formulario.innerHTML = `
                    <div class="dados_checklist">
                        <label for="emodimanicaA">
                            EMODIMANICA:
                        </label>
                        <select name="emodimanicaA" id="emodimanicaA">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="salaRecuperacaoA">
                            SALA DE RECUPERAÇÃO:
                        </label>
                        <select name="salaRecuperacaoA" id="salaRecuperacaoA">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="banheiroA">
                            BANHEIRO:
                        </label>
                        <select name="banheiroA" id="banheiroA">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="salaLaudoA">
                            SALA DE LAUDO:
                        </label>
                        <select name="salaLaudoA" id="salaLaudoA">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="salaExamesA">
                            SALA DE EXAMES:
                        </label>
                        <select name="salaExamesA" id="salaExamesA">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="banheiroFuncionariosA">
                            BANHEIRO DOS FUNCIONARIOS:
                        </label>
                        <select name="banheiroFuncionariosA" id="banheiroFuncionariosA">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="expurgoA">
                            EXPURGO:
                        </label>
                        <select name="expurgoA" id="expurgoA">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="salaMedicosA">
                            SALA DOS MEDICOS:
                        </label>
                        <select name="salaMedicosA" id="salaMedicosA">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="expurgoEnfermagemA">
                            EXPURGO DA ENFERMAGEM:
                        </label>
                        <select name="expurgoEnfermagemA" id="expurgoEnfermagemA">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="quartos108A">
                            QUARTOS: 108:
                        </label>
                        <select name="quartos108A" id="quartos108A">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="quartos107A">
                            QUARTOS: 107:
                        </label>
                        <select name="quartos107A" id="quartos107A">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="quartos106A">
                            QUARTOS: 106:
                        </label>
                        <select name="quartos106A" id="quartos106A">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="quartos105A">
                            QUARTOS: 105:
                        </label>
                        <select name="quartos105A" id="quartos105A">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="quartos104A">
                            QUARTOS: 104:
                        </label>
                        <select name="quartos104A" id="quartos104A">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="quartos103A">
                            QUARTOS: 103:
                        </label>
                        <select name="quartos103A" id="quartos103A">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="corredorA">
                            CORREDOR:
                        </label>
                        <select name="corredorA" id="corredorA">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="limpezaAreaExternaA">
                            LIMPEZA ÁREA EXTERNA:
                        </label>
                        <select name="limpezaAreaExternaA" id="limpezaAreaExternaA">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="epiA">
                            EPI’S:
                        </label>
                        <select name="epiA" id="epiA">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="expurgoLimpezaA">
                            EXPURGO DA LIMPEZA:
                        </label>
                        <select name="expurgoLimpezaA" id="expurgoLimpezaA">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="rampaA">
                            RAMPA:
                        </label>
                        <select name="rampaA" id="rampaA">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="retirarResiduosA">
                            RETIRAR OS RESÍDUOS:
                        </label>
                        <select name="retirarResiduosA" id="retirarResiduosA">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="levarLixoA">
                            LEVAR O LIXO(E):
                        </label>
                        <select name="levarLixoA" id="levarLixoA">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="entregarCheckMesA">
                            ENTREGAR O CHECK NO FINAL DO MÊS:
                        </label>
                        <select name="entregarCheckMesA" id="entregarCheckMesA">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="verificarQuartoDiariaA">
                            VERIFICAR  OS QUARTOS DIARIAMENTE:
                        </label>
                        <select name="verificarQuartoDiariaA" id="verificarQuartoDiariaA">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="salaCarneA">
                            SALA DO CARNE:
                        </label>
                        <select name="salaCarneA" id="salaCarneA">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="salaServicoSocialA">
                            SALA DO SERVIÇO SOCIAL:
                        </label>
                        <select name="salaServicoSocialA" id="salaServicoSocialA">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <div class="textoObservacao">
                            <label for="observacaoA">Observação:</label>
                            <textarea id="observacaoA" name="observacaoA" placeholder="Digite sua observação..."></textarea>
                        </div>
                    </div>
       
       ` ;
    } else if (setores == 'B'){
        textoSetor.innerHTML = `${setores}`;

        formulario.innerHTML = `
            <div class="dados_checklist">
                        <label for="postoEmergenciaB">Postinho de Enfermagem:</label>
                        <select name="postoEmergenciaB" id="postoEmergenciaB">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="expurgoEmergenciaB">Expurgo da Enfermagem:</label>
                        <select name="expurgoEmergenciaB" id="expurgoEmergenciaB">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="expurgoLimpezaB">Expurgo da limpeza:</label>
                        <select name="expurgoLimpezaB" id="expurgoLimpezaB">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="banheiroFuncionarioB">Banheiro dos Funcionários:</label>
                        <select name="banheiroFuncionarioB" id="banheiroFuncionarioB">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="quarto202B">Quarto: 202:</label>
                        <select name="quarto202B" id="quarto202B">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="quarto203B">Quarto: 203:</label>
                        <select name="quarto203B" id="quarto203B">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="quarto204B">Quarto: 204:</label>
                        <select name="quarto204B" id="quarto204B">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="quarto205B">Quarto: 205:</label>
                        <select name="quarto205B" id="quarto205B">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="quarto206B">Quarto: 206:</label>
                        <select name="quarto206B" id="quarto206B">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="quarto207B">Quarto: 207:</label>
                        <select name="quarto207B" id="quarto207B">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="quarto208B">Quarto: 208:</label>
                        <select name="quarto208B" id="quarto208B">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="quarto209B">Quarto: 209:</label>
                        <select name="quarto209B" id="quarto209B">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="quarto210B">Quarto: 210:</label>
                        <select name="quarto210B" id="quarto210B">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="quarto211B">Quarto: 211:</label>
                        <select name="quarto211B" id="quarto211B">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="quarto212B">Quarto: 212:</label>
                        <select name="quarto212B" id="quarto212B">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="quarto213B">Quarto: 213:</label>
                        <select name="quarto213B" id="quarto213B">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="quarto214B">Quarto: 214:</label>
                        <select name="quarto214B" id="quarto214B">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="quarto215B">Quarto: 215:</label>
                        <select name="quarto215B" id="quarto215B">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="corredorB">Corredor:</label>
                        <select name="corredorB" id="corredorB">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="limpezaGeladeiraB">Limpeza da geladeira:</label>
                        <select name="limpezaGeladeiraB" id="limpezaGeladeiraB">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="ramapaJanelasB">Rampa/janelas do corredor:</label>
                        <select name="ramapaJanelasB" id="ramapaJanelasB">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="depositoCadeirasMacasB">Deposito das cadeiras de rodas e  macas:</label>
                        <select name="depositoCadeirasMacasB" id="depositoCadeirasMacasB">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <label for="epiB">EPI’s:</label>
                        <select name="epiB" id="epiB">
                            <option value="">Selecione</option>
                            <option value="Limpeza Diária">Limpeza Diária</option>
                            <option value="Limpeza Quartos">Limpeza Quartos</option>
                            <option value="Limpeza Terminal">Limpeza Terminal</option>
                            <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</ option>
                            <option value="Noturno">Noturno</option>
                        </select>
                    </div>
                    <div class="dados_checklist">
                        <div class="textoObservacao">
                            <label for="observacaoB">Observação:</label>
                            <textarea id="observacaoB" name="observacaoB" placeholder="Digite sua observação..."></textarea>
                        </div>
                    </div>

        
        `;
    
    }   else if (setores == 'D'){
        textoSetor.innerHTML = `${setores}`

        formulario.innerHTML = `
                <div class="dados_checklist">
                    <label for="copaD">Copa:</label>
                    <select name="copaD" id="copaD">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diária">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="areaExternaD">Área externa:</label>
                    <select name="areaExternaD" id="areaExternaD">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diária">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="tendaTriagemD">Tenda de triagem:</label>
                    <select name="tendaTriagemD" id="tendaTriagemD">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diária">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="salaObservacaoD">Sala de observação:</label>
                    <select name="salaObservacaoD" id="salaObservacaoD">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diária">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="rampaD">Rampa:</label>
                    <select name="rampaD" id="rampaD">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diária">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="limpezaMobiliariosD">Limpeza nos mobiliários:</label>
                    <select name="limpezaMobiliariosD" id="limpezaMobiliariosD">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diária">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="lavarLixeirasD">Lavar lixeiras:</label>
                    <select name="lavarLixeirasD" id="lavarLixeirasD">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diária">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="retirarResiduosD">Retirar os resíduos:</label>
                    <select name="retirarResiduosD" id="retirarResiduosD">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diária">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="epiD">Epi's:</label>
                    <select name="epiD" id="epiD">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diária">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div> 
                <div class="dados_checklist">
                    <div class="textoObservacao">
                        <label for="observacaoD">Observação:</label>
                        <textarea id="observacaoD" name="observacaoD" placeholder="Digite sua observação..."></textarea>
                    </div>
                </div>
        `
    } 
    
    else if (setores == 'E') {
        textoSetor.innerHTML = `${setores}`;
        
        formulario.innerHTML = `
            <div class="dados_checklist">
                    <label for="postoEnfermagemE">Postinho de enfermagem:</label>
                    <select name="postoEnfermagemE" id="postoEnfermagemE">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diária">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="copaE">Copa:</label>
                    <select name="copaE" id="copaE">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diária">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="roupariaE">Rouparia:</label>
                    <select name="roupariaE" id="roupariaE">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diária">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="salaGinecologicaE">Sala ginecológica:</label>
                    <select name="salaGinecologicaE" id="salaGinecologicaE">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diária">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="bercarioE">Berçário:</label>
                    <select name="bercarioE" id="bercarioE">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diária">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="farmaciaE">Farmácia:</label>
                    <select name="farmaciaE" id="farmaciaE">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diária">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="setorComprasE">Setor de compras:</label>
                    <select name="setorComprasE" id="setorComprasE">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diária">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="depositoFarmacia1E">Deposito da farmácia I:</label>
                    <select name="depositoFarmacia1E" id="depositoFarmacia1E">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diária">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="depositoFarmacia2E">Deposito da farmácia II:</label>
                    <select name="depositoFarmacia2E" id="depositoFarmacia2E">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diária">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="depositoFarmacia3E">Deposito da farmácia III:</label>
                    <select name="depositoFarmacia3E" id="depositoFarmacia3E">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diária">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="salaFarmaceuticoE">Sala do Farmacêutico:</label>
                    <select name="salaFarmaceuticoE" id="salaFarmaceuticoE">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diária">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="banheiroFuncionariosE">Banheiro dos funcionários:</label>
                    <select name="banheiroFuncionariosE" id="banheiroFuncionariosE">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diária">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="quarto404E">Quarto: 404:</label>
                    <select name="quarto404E" id="quarto404E">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diária">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="quarto405E">Quarto: 405:</label>
                    <select name="quarto405E" id="quarto405E">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diária">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="quarto406E">Quarto: 406:</label>
                    <select name="quarto406E" id="quarto406E">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diária">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="quarto407E">Quarto: 407:</label>
                    <select name="quarto407E" id="quarto407E">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diária">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="quarto408E">Quarto: 408:</label>
                    <select name="quarto408E" id="quarto408E">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diária">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="quarto409E">Quarto: 409:</label>
                    <select name="quarto409E" id="quarto409E">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diária">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="quarto410E">Quarto: 410:</label>
                    <select name="quarto410E" id="quarto410E">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diária">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="quarto411E">Quarto: 411:</label>
                    <select name="quarto411E" id="quarto411E">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diária">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="quarto412E">Quarto: 412:</label>
                    <select name="quarto412E" id="quarto412E">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diária">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="quarto413E">Quarto: 413:</label>
                    <select name="quarto413E" id="quarto413E">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diária">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="quarto414E">Quarto: 414:</label>
                    <select name="quarto414E" id="quarto414E">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diária">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="quarto415E">Quarto: 415:</label>
                    <select name="quarto415E" id="quarto415E">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diária">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="quarto416E">Quarto: 416:</label>
                    <select name="quarto416E" id="quarto416E">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diária">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="quarto417E">Quarto: 417:</label>
                    <select name="quarto417E" id="quarto417E">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diária">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="quarto418E">Quarto: 418:</label>
                    <select name="quarto418E" id="quarto418E">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diária">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="areaExternaE">Área externa:</label>
                    <select name="areaExternaE" id="areaExternaE">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diária">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="escadaE">Escada:</label>
                    <select name="escadaE" id="escadaE">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diária">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="corredorE">Corredor:</label>
                    <select name="corredorE" id="corredorE">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diária">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="expurgoEnfermagemE">Expurgo de enfermagem:</label>
                    <select name="expurgoEnfermagemE" id="expurgoEnfermagemE">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diária">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="expurgoLimpezaE">Expurgo de limpeza:</label>
                    <select name="expurgoLimpezaE" id="expurgoLimpezaE">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diária">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="depositoCadeirasMacasE">Deposito das cadeiras de rodas e macas:</label>
                    <select name="depositoCadeirasMacasE" id="depositoCadeirasMacasE">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diária">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <label for="epiE">EPI’S:</label>
                    <select name="epiE" id="epiE">
                        <option value="">Selecione</option>
                        <option value="Limpeza Diária">Limpeza Diária</option>
                        <option value="Limpeza Quartos">Limpeza Quartos</option>
                        <option value="Limpeza Terminal">Limpeza Terminal</option>
                        <option value="Limpeza c/ enceradeira">Limpeza c/ enceradeira</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                </div>
                <div class="dados_checklist">
                    <div class="textoObservacao">
                        <label for="observacaoE">Observação:</label>
                        <textarea id="observacaoE" name="observacaoE" placeholder="Digite sua observação..."></textarea>
                    </div>
                </div>
        
        `;
    }

    
     else {
        formulario.innerHTML = `
            <div class="logoHospital">
                <img src="/assets/img/logo-horizontal.png" alt="Logo Hospital">
            </div> 
        `;
        textoSetor.innerHTML = ``;
    }
}

function limparFormulario() {
    
    document.getElementById('setor').value = '';
    document.getElementById('nome').value = '';
    document.getElementById('data').value = '';

    
    const formulario = document.getElementById('formulario');
    formulario.innerHTML = `
        <div class="logoHospital">
            <img src="/assets/img/logo-horizontal.png" alt="Logo Hospital">
        </div>
    `;

    
    document.getElementById('nomeSetor').innerHTML = '';
}

async function verDados() {
    const dados = coletarDados();
    
    if (!dados.setor || !dados.nome || !dados.data) {
        alert("Preencha o setor, o nome e a data antes de registrar.");
        return;
    }

    try {
        const resposta = await fetch(
            "https://defaultb5738c79b980469fadac95ed46cede.ef.environment.api.powerplatform.com:443/powerautomate/automations/direct/cu/01/workflows/ded80f2c5ab641fab3c08ffee7b52215/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=7-XIf8KXLM8ghgjmTBa_Jz-WYr6nvhYZkVQ8reyCVEc",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dados)
            }
        );

        if (!resposta.ok) {
            throw new Error(`Erro HTTP: ${resposta.status}`);
        }

        alert("Cadastro Realizado!");

        
        limparFormulario();

    } catch (erro) {
        console.error("Erro ao enviar o checklist:", erro);

        alert(
            "Não foi possível enviar o checklist. " +
            "Verifique a conexão e o webhook."
        );
    }
}



