const form = document.getElementById("form-atividade");
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji festejando" />';
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji triste" />';
const atividade=[];
const notas=[];
const spanaprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanreprovado = '<span class="resultado reprovado">Reprovado</span>';
let linhas = " ";
form.addEventListener("submit", function (e) {
    e.preventDefault();
    adicionarlinha();
    atualizarTabela();
    atualizamediafinal();
   
    
});

function adicionarlinha(){
    const inputNomeAtividade = document.getElementById("nome-atividade");
    const inputNotaAtividade = document.getElementById("nota-atividade");
    atividade.push(parseFloat(inputNomeAtividade.value));
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha= "<tr>";
    linha += `<td> ${inputNomeAtividade.value} </td>`;
    linha += `<td> ${inputNotaAtividade.value} </td>`;
    linha += `<td> ${inputNotaAtividade.value >=7 ? imgAprovado : imgReprovado} </td>`;
    linha += `</tr>`;
    linhas += linha
    
    inputNomeAtividade.value= " ";
    inputNotaAtividade.value= " ";

}
function atualizarTabela(){
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;
}
function atualizamediafinal(){
    const mediaFinal = calcularmediafinal();

    document.getElementById("media-final-valor").innerHTML= mediaFinal;

    document.getElementById("media-final-resultado").innerHTML = mediaFinal >= 7 ? spanaprovado : spanreprovado;

    
}

function calcularmediafinal(){
    let somadasnotas = 0;
    for (let i = 0 ; i < notas.length; i++) {
        somadasnotas += notas[i];
    }
    return somadasnotas / notas.length;
}