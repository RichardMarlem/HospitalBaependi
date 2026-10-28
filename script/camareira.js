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
        leito: val("leito"),
        nomeCamareira: val("nomeCamareira"),
        dataCamareira: val("dataCamareira"),
        

        // --- CHECK-LIST CAMAREIRA --- //
        armariosGavetas: val('armariosGavetas'),
        irregularidadeArmarioGaveta1: marcado('irregularidadeArmarioGaveta1'),
        irregularidadeArmarioGaveta2: marcado('irregularidadeArmarioGaveta2'),
        irregularidadeArmarioGaveta3: marcado('irregularidadeArmarioGaveta3'),
        cama: val('cama'),
        cama1: marcado('cama1'),
        cama2: marcado('cama2'),
        cama3: marcado('cama3'),
        piasRalo: val('piasRalo'),
        piasRalo1: marcado('piasRalo1'),
        piasRalo2: marcado('piasRalo2'),
        dispensers: val('dispensers'),
        dispensers1: marcado('dispensers1'),
        dispensers2: marcado('dispensers2'),
        dispensers3: marcado('dispensers3'),
        cortina: val('cortina'),
        cortina1: marcado('cortina1'),
        cortina2: marcado('cortina2'),
        reguaGases: val('reguaGases'),
        reguaGases1: marcado('reguaGases1'),
        reguaGases2: marcado('reguaGases2'),
        sofaPoltrona: val('sofaPoltrona'),
        sofaPoltrona1: marcado('sofaPoltrona1'),
        sofaPoltrona2: marcado('sofaPoltrona2'),
        sofaPoltrona3: marcado('sofaPoltrona3'),
        frigobar: val('frigobar'),
        frigobar1: marcado('frigobar1'),
        frigobar2: marcado('frigobar2'),
        frigobar3: marcado('frigobar3'),
        aparelhosTelefone: val('aparelhosTelefone'),
        aparelhosTelefone1: marcado('aparelhosTelefone1'),
        aparelhosTelefone2: marcado('aparelhosTelefone2'),
        tvControlePilhas: val('tvControlePilhas'),
        tvControlePilhas1: marcado('tvControlePilhas1'),
        tvControlePilhas2: marcado('tvControlePilhas2'),
        tvSmart: val('tvSmart'),
        tvSmart2: val('tvSmart2'),
        suportes: val('suportes'),
        suportes1: marcado('suportes1'),
        suportes2: marcado('suportes2'),
        chao: val('chao'),
        chao1: marcado('chao1'),
        chao2: marcado('chao2'),
        janelas: val('janelas'),
        janelas1: marcado('janelas1'),
        janelas2: marcado('janelas2'),
        teto: val('teto'),
        teto1: marcado('teto1'),
        teto2: marcado('teto2'),
        paredes: val('paredes'),
        paredes1: marcado('paredes1'),
        paredes2: marcado('paredes2'),
        tomadas: val('tomadas'),
        tomadas1: marcado('tomadas1'),
        tomadas2: marcado('tomadas2'),
        interruptores: val('interruptores'),
        interruptores1: marcado('interruptores1'),
        interruptores2: marcado('interruptores2'),
        registroAguaTemperatura: val('registroAguaTemperatura'),
        registroAguaTemperatura1: marcado('registroAguaTemperatura1'),
        registroAguaTemperatura2: marcado('registroAguaTemperatura2'),
        espelho: val('espelho'),
        espelho1: marcado('espelho1'),
        espelho2: marcado('espelho2'),
        suporteToalha: val('suporteToalha'),
        suporteToalha1: marcado('suporteToalha1'),
        suporteToalha2: marcado('suporteToalha2'),
        suporteAmenidades: val('suporteAmenidades'),
        suporteAmenidades1: marcado('suporteAmenidades1'),
        suporteAmenidades2: marcado('suporteAmenidades2'),
        descargaVaso: val('descargaVaso'),
        descargaVaso1: marcado('descargaVaso1'),
        descargaVaso2: marcado('descargaVaso2'),
        corrimao: val('corrimao'),
        corrimao1: marcado('corrimao1'),
        corrimao2: marcado('corrimao2'),
        chuveiro: val('chuveiro'),
        chuveiro1: marcado('chuveiro1'),
        chuveiro2: marcado('chuveiro2'),
        chuveiro3: marcado('chuveiro3'),
        placaSinalizacao: val('placaSinalizacao'),
        placaSinalizacao1: marcado('placaSinalizacao1'),
        placaSinalizacao2: marcado('placaSinalizacao2'),
        criadoMudo: val('criadoMudo'),
        criadoMudo1: marcado('criadoMudo1'),
        criadoMudo2: marcado('criadoMudo2'),
        bandejaRefeicao: val('bandejaRefeicao'),
        bandejaRefeicao1: marcado('bandejaRefeicao1'),
        bandejaRefeicao2: marcado('bandejaRefeicao2'),
        porta: val('porta'),
        porta1: marcado('porta1'),
        porta2: marcado('porta2'),
        torneiras: val('torneiras'),
        torneiras1: marcado('torneiras1'),
        torneiras2: marcado('torneiras2'),
        torneiras3: marcado('torneiras3'),
        luzes: val('luzes'),
        luzes1: marcado('luzes1'),
        painelDigitalCamas: val('painelDigitalCamas'),
        painelDigitalCamas1: marcado('painelDigitalCamas1'),
        painelDigitalCamas2: marcado('painelDigitalCamas2'),
        diretorioInternacao: val('diretorioInternacao'),
        diretorioInternacao1: marcado('diretorioInternacao1'),
        diretorioInternacao2: marcado('diretorioInternacao2'),
        paraPeito: val('paraPeito'),
        paraPeito1: marcado('paraPeito1'),
        secadorCabelo: val('secadorCabelo'),
        secadorCabelo1: marcado('secadorCabelo1'),
        secadorCabelo2: marcado('secadorCabelo2'),
        arCondicionado: val('arCondicionado'),
        arCondicionado1: marcado('arCondicionado1'),
        observacaoNoturno: val('observacaoNoturno')
        
    };
}



async function verDados() {
    const dados = coletarDados();

    if (!dados.leito || !dados.nomeCamareira || !dados.dataCamareira) {
        alert("Preencha o Leito, o Nome e a Data antes de registrar.");
        return;
    }

    try {
        const resposta = await fetch(
            "",
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

        alert("Cadastro realizado com sucesso!");

        
        window.location.reload();

    } catch (erro) {
        console.error("Erro ao enviar o checklist:", erro);

        alert(
            "Não foi possível enviar o checklist. " +
            "Verifique a conexão e o webhook."
        );
    }
}




