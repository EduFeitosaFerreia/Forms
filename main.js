//Criar Função para coletar o cep 

function coletar() {
    let input = document.getElementById('cep').value
    //Teste
    console.log(input.value)
    Dados(input)
}

//Função para consumir a API Via CEP
async function Dados(cep) {
let dados = await fetch(`https://viacep.com.br/ws/${cep}/json/`).then(Response => Response.json())

ExibirDados(dados)
}

//Funçãp inserir dados na tela
function ExibirDados(dados){
    console.log(dados)
    document.getElementById('bairro').value = dados.uf
    document.getElementById('cidade').value = dados.localidade
    document.getElementById('endereco').value = dados.logradouro
    
}
const form = document.querySelector('form')
const submit = document.querySelector('button[type="submit"]')

form.addEventListener('keydown' , function(e){
if(e.key=== 'Enter' && !e.shiftKey) {
    e.preventDefault()
    submit.click()
}
})


