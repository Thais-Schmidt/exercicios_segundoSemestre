var table =
        `<tr>
            <th> Nome: </th>
            <th> R.G. </th>
            <th> C.P.F. </th>
            <th> Data de Nascimento: </th>
            <th> Endereço: </th>
            <th> Contato: </th>
            <th> Email: </th>
        </tr>`

let url = "dados.exer/exercicio1.xml";

$.ajax(url)
    .done(function(receita){
        $(receita).find('contribuinte').each(function (){
            table +=
                `<tr>
                    <td>${$(this).find('nome').text()}</td>
                    <td>${$(this).find('rg').text()}</td>
                    <td>${$(this).find('cpf').text()}</td>
                    <td>${$(this).find('data_nasc').text()}</td>

                    <td>${$(this).find('endereco').text()}</td>

                    <td>${$(this).find('telefone').text()} - 
                    ${$(this).find('celular').text()}</td>

                    <td>${$(this).find('email').text()}</td>
                </tr>`
            })
            document.getElementById('tbl1').innerHTML = table;
        })

    .fail(function () {
        alert("Ocorreu um erro na leitura do arquivo XML.");
    })


//     var table =
//         `<tr>
//             <th> Nome: </th>
//             <th> R.G. </th>
//             <th> C.P.F. </th>
//             <th> Data de Nascimento: </th>
//             <th> Endereço: </th>
//             <th> Contato: </th>
//             <th> Logradouro </th>
//             <th> Numero: </th>
//             <th> Bairro </th>
//             <th> Cidade: </th>
//             <th> UF </th>
//             <th> CEP </th>
//             <th> Telefone: </th>
//             <th> Celular: </th>
//             <th> Email: </th>
//         </tr>`

// let url = "dados.exer/exercicio1.xml";

// $.ajax(url)
//     .done(function(receita){
//         $(receita).find('contribuinte').each(function (){
//             table +=
//                 `<tr>
//                     <td>${$(this).find('nome').text()}</td>
//                     <td>${$(this).find('rg').text()}</td>
//                     <td>${$(this).find('cpf').text()}</td>
//                     <td>${$(this).find('data_nasc').text()}</td>
//                     <td>${$(this).find('endereco').text()}</td>
//                     <td>${$(this).find('contato').text()}</td>
//                     <td>${$(this).find('logradouro').text()}</td>
//                     <td>${$(this).find('numero').text()}</td>
//                     <td>${$(this).find('bairro').text()}</td>
//                     <td>${$(this).find('cidade').text()}</td>
//                     <td>${$(this).find('uf').text()}</td>
//                     <td>${$(this).find('cep').text()}</td>
//                     <td>${$(this).find('telefone').text()}</td>
//                     <td>${$(this).find('celular').text()}</td>
//                     <td>${$(this).find('email').text()}</td>
//                 </tr>`
//             })
//             document.getElementById('tbl1').innerHTML = table;
//         })

//     .fail(function () {
//         alert("Ocorreu um erro na leitura do arquivo XML.");
//     })



