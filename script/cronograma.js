// Pega valor de um select ou input pelo ID (retorna "" se não existir)
function val(id) {
  const el = document.getElementById(id);
  return el ? el.value.trim() : "";
}

function marcado(id) {
    const elemento = document.getElementById(id);
    return elemento ? elemento.checked : false;
}

function coletarDados() {
    return {

        // --- Departamento escolhido ---
        nomeSetorCronograma: val("nomeSetorCronograma"),
        nomeCronograma: val("nomeCronograma"),
        dataCronograma: val('dataCronograma'),
        // --- CHECKLIST CRONOGRAMA ---

        // --- SETOR: ALA D ---
        limpezaLaboratorioReuniao: val("limpezaLaboratorioReuniao"),
        manha: marcado('manha'),
        tarde: marcado('tarde'),
        noite: marcado('noite')

       
    };
}

function mostrarForm() {
    const formulario = document.getElementById('formulario');
    const setores = document.getElementById('nomeSetorCronograma').value;
    const textoSetor = document.getElementById('textoSetorCronograma');

    if (setores === 'ALA D') {
        textoSetor.textContent = setores;

        formulario.innerHTML = `
            <div class="dados-checklist">
                <label for="limpezaLaboratorioReuniao">
                    LIMPEZA NO LABORATÓRIO/SALÃO DE REUNIÃO
                </label>

                <h2>Dia da Semana:</h2>

                <select name="limpezaLaboratorioReuniao"
                    id="limpezaLaboratorioReuniao">
                    <option value="">Selecione</option>
                    <option value="Domingo">Domingo</option>
                    <option value="Segunda-Feira">Segunda-Feira</option>
                    <option value="Terça-Feira">Terça-Feira</option>
                    <option value="Quarta-Feira">Quarta-Feira</option>
                    <option value="Quinta-Feira">Quinta-Feira</option>
                    <option value="Sexta-Feira">Sexta-Feira</option>
                    <option value="Sabado">Sábado</option>
                </select>

                <div class="opcoes-checkbox">
                    <label>
                        <input type="checkbox" name="manha" id="manha">
                        Manhã
                    </label>

                    <label>
                        <input type="checkbox" name="tarde" id="tarde">
                        Tarde
                    </label>

                    <label>
                        <input type="checkbox" name="noite" id="noite">
                        Noite
                    </label>
                </div>
            </div>
        `;
    } else {
        textoSetor.textContent = '';

        formulario.innerHTML = `
            <div class="logoHospital">
                <img src="/assets/img/logo-horizontal.png"
                    alt="Logo Hospital">
            </div>
        `;
    }
}

function limparFormulario() { 
    document.getElementById('nomeSetorCronograma').value = '';
    document.getElementById('nomeCronograma').value = '';
    document.getElementById('dataCronograma').value = '';

    const formulario = document.getElementById('formulario');
    formulario.innerHTML = `
        <div class="logoHospital">
            <img src="/assets/img/logo-horizontal.png" alt="Logo Hospital">
        </div>
    `;

    document.getElementById('nomeSetorCronograma').innerHTML = '';
}

async function verDados() {
    const dados = coletarDados();
    
    if (!dados.nomeSetorCronograma || !dados.nomeCronograma || !dados.dataCronograma) {
        alert("Preencha o Setor, o Nome e a Data antes de registrar.");
        return;
    }

    try {
        const resposta = await fetch(
            "https://defaultb5738c79b980469fadac95ed46cede.ef.environment.api.powerplatform.com:443/powerautomate/automations/direct/cu/07/workflows/7ecf52adb05447b6ad8ccf0484e4da74/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=sIi3iu2EBRuwaS4WeAONfoBk77Orj5h2mBH3MPCITfs",
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



