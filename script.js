const DADOS_INICIAIS = {
    fornecedores: [{ "id": 1, "nome": "Componentes Master", "representante": "João Goulart", "telefone": "4000-1111", "cnpj": "12.000.000/0001-00", "especialidade": "Microeletrônica", "prazoEntrega": "10 dias" }, { "id": 2, "nome": "Aços e Metais BR", "representante": "Bianca Silva", "telefone": "4000-2222", "cnpj": "22.000.000/0001-00", "especialidade": "Fixadores e Perfis", "prazoEntrega": "5 dias" }, { "id": 3, "nome": "Máquinas Precisas", "representante": "André Lima", "telefone": "4000-3333", "cnpj": "32.000.000/0001-00", "especialidade": "Motores e Atuadores", "prazoEntrega": "15 dias" }, { "id": 4, "nome": "Plásticos Industriais", "representante": "Sofia Nunes", "telefone": "4000-4444", "cnpj": "42.000.000/0001-00", "especialidade": "Injeção e Moldagem", "prazoEntrega": "20 dias" }, { "id": 5, "nome": "Elétrica Total", "representante": "Marcelo Ruiz", "telefone": "4000-5555", "cnpj": "52.000.000/0001-00", "especialidade": "Cabos e Fios", "prazoEntrega": "3 dias" }, { "id": 6, "nome": "Medição Científica", "representante": "Vanessa Melo", "telefone": "4000-6666", "cnpj": "62.000.000/0001-00", "especialidade": "Sensores", "prazoEntrega": "12 dias" }, { "id": 7, "nome": "Hidro & Válvulas", "representante": "Paulo Souza", "telefone": "4000-7777", "cnpj": "72.000.000/0001-00", "especialidade": "Hidráulica e Pneumática", "prazoEntrega": "7 dias" }, { "id": 8, "nome": "Mecânica Simples", "representante": "Rafael Costa", "telefone": "4000-8888", "cnpj": "82.000.000/0001-00", "especialidade": "Pinos e Buchas", "prazoEntrega": "4 dias" }, { "id": 9, "nome": "Testes e Reparos", "representante": "Laura Silva", "telefone": "4000-9999", "cnpj": "92.000.000/0001-00", "especialidade": "Ferramental", "prazoEntrega": "6 dias" }, { "id": 10, "nome": "Baterias Power", "representante": "Henrique Guedes", "telefone": "4000-0000", "cnpj": "13.000.000/0001-00", "especialidade": "Fontes de Energia", "prazoEntrega": "8 dias" }],
    clientes: [{ "id": 1, "nome": "Inovação Técnica LTDA", "contato": "Carlos Faria", "telefone": "3000-1111", "cnpj": "10.000.000/0001-00", "setor": "Pesquisa e Desenvolvimento", "email": "contato@inovacao.com" }, { "id": 2, "nome": "Metalúrgica Rápida SA", "contato": "Ana Clara", "telefone": "3000-2222", "cnpj": "20.000.000/0001-00", "setor": "Produção", "email": "vendas@metalurgica.com" }, { "id": 3, "nome": "Automação Futura", "contato": "Roberto Alves", "telefone": "3000-3333", "cnpj": "30.000.000/0001-00", "setor": "Manutenção Industrial", "email": "roberto@automacao.com" }, { "id": 4, "nome": "SoftDesign Eletro", "contato": "Juliana Mendes", "telefone": "3000-4444", "cnpj": "40.000.000/0001-00", "setor": "Prototipagem", "email": "juliana@softdesign.com" }, { "id": 5, "nome": "Engenharia Sólida", "contato": "Pedro Rocha", "telefone": "3000-5555", "cnpj": "50.000.000/0001-00", "setor": "Construção Naval", "email": "pedro@solida.com" }, { "id": 6, "nome": "Robótica Avançada BR", "contato": "Leticia Souza", "telefone": "3000-6666", "cnpj": "60.000.000/0001-00", "setor": "Robótica", "email": "leticia@robotica.com" }, { "id": 7, "nome": "Fábrica Ágil", "contato": "Gustavo Lima", "telefone": "3000-7777", "cnpj": "70.000.000/0001-00", "setor": "Produção", "email": "gustavo@agil.com" }, { "id": 8, "nome": "Tecno Sistemas", "contato": "Márcia Santos", "telefone": "3000-8888", "cnpj": "80.000.000/0001-00", "setor": "TI e Redes", "email": "marcia@tecno.com" }, { "id": 9, "nome": "Eletro Components", "contato": "Ricardo Melo", "telefone": "3000-9999", "cnpj": "90.000.000/0001-00", "setor": "Montagem", "email": "ricardo@eletro.com" }, { "id": 10, "nome": "Hidro Solutions", "contato": "Fernanda Costa", "telefone": "3000-0000", "cnpj": "11.000.000/0001-00", "setor": "Hidráulica", "email": "fernanda@hidro.com" }],
    produtos: [{ "id": 1, "nome": "Cimento CP-II 50kg", "preco": 35.5, "projeto": "Estrutura", "fabricante": "Cimex", "unidade": "Saco", "dataAquisicao": "2025-01-10" }, { "id": 2, "nome": "Vergalhão CA-50 10mm", "preco": 48.9, "projeto": "Armação", "fabricante": "Aço Forte", "unidade": "Barra", "dataAquisicao": "2024-08-20" }, { "id": 3, "nome": "Tubo PVC 100mm", "preco": 22.75, "projeto": "Hidráulica", "fabricante": "Tigre", "unidade": "Metro", "dataAquisicao": "2025-05-01" }, { "id": 4, "nome": "Bloco Cerâmico 14x19x29", "preco": 1.5, "projeto": "Alvenaria", "fabricante": "Ceramica Sul", "unidade": "Unidade", "dataAquisicao": "2025-06-15" }, { "id": 5, "nome": "Fio Rígido 2.5mm²", "preco": 1.9, "projeto": "Elétrica", "fabricante": "EletroCabos", "unidade": "Metro", "dataAquisicao": "2025-03-22" }, { "id": 6, "nome": "Argamassa AC-III 20kg", "preco": 18, "projeto": "Acabamento", "fabricante": "Quartzolit", "unidade": "Saco", "dataAquisicao": "2025-02-05" }, { "id": 7, "nome": "Telha Ondulada 6mm", "preco": 45, "projeto": "Cobertura", "fabricante": "Brasilit", "unidade": "Peça", "dataAquisicao": "2025-01-01" }, { "id": 8, "nome": "Conexão Joelho 90º 50mm", "preco": 3.5, "projeto": "Hidráulica", "fabricante": "Amanco", "unidade": "Unidade", "dataAquisicao": "2025-04-12" }, { "id": 9, "nome": "Areia Lavada Média", "preco": 80, "projeto": "Concreto", "fabricante": "Mineração Alpha", "unidade": "m³", "dataAquisicao": "2024-11-30" }, { "id": 10, "nome": "Disjuntor Bipolar 20A", "preco": 15.2, "projeto": "Elétrica", "fabricante": "Siemens", "unidade": "Unidade", "dataAquisicao": "2025-07-01" }],
    listaCompras: { cliente: null, fornecedor: null, produtos: [] }
};

function salvarDados(chave, dados) { localStorage.setItem(chave, JSON.stringify(dados)); }

function carregarDados(chave) {
    const dadosSalvos = localStorage.getItem(chave);
    if (dadosSalvos) {
        try {
            const parsed = JSON.parse(dadosSalvos);
            return parsed;
        } catch (e) {
            console.error(`Erro ao carregar ${chave}, resetando...`, e);
        }
    }
    salvarDados(chave, DADOS_INICIAIS[chave]);
    return DADOS_INICIAIS[chave];
}

function getNextId(lista) {
    if (lista.length === 0) return 1;
    const ids = lista.map(item => item.id).filter(id => typeof id === 'number');
    if (ids.length === 0) return 1;
    return Math.max(...ids) + 1;
}

function getItemIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get('id'));
}

function preencherFormularioCliente() {
    const id = getItemIdFromUrl();
    if (!id) return;
    const clientes = carregarDados('clientes');
    const cliente = clientes.find(c => c.id === id);

    if (cliente) {
        const clienteIdElement = document.getElementById('cliente-id');
        if (clienteIdElement) clienteIdElement.value = cliente.id;
        const clienteNomeElement = document.getElementById('cliente-nome');
        if (clienteNomeElement) clienteNomeElement.value = cliente.nome;
        const clienteContatoElement = document.getElementById('cliente-contato');
        if (clienteContatoElement) clienteContatoElement.value = cliente.contato;
        const clienteTelefoneElement = document.getElementById('cliente-telefone');
        if (clienteTelefoneElement) clienteTelefoneElement.value = cliente.telefone;
        const clienteCnpjElement = document.getElementById('cliente-cnpj');
        if (clienteCnpjElement) clienteCnpjElement.value = cliente.cnpj;
        const clienteSetorElement = document.getElementById('cliente-setor');
        if (clienteSetorElement) clienteSetorElement.value = cliente.setor;
        const clienteEmailElement = document.getElementById('cliente-email');
        if (clienteEmailElement) clienteEmailElement.value = cliente.email;
    }
}

function salvarCliente(e) {
    e.preventDefault();
    let clientes = carregarDados('clientes');
    const clienteIdElement = document.getElementById('cliente-id');
    const id = clienteIdElement ? parseInt(clienteIdElement.value) : null;

    const clienteNomeElement = document.getElementById('cliente-nome');
    const clienteContatoElement = document.getElementById('cliente-contato');
    const clienteTelefoneElement = document.getElementById('cliente-telefone');
    const clienteCnpjElement = document.getElementById('cliente-cnpj');
    const clienteSetorElement = document.getElementById('cliente-setor');
    const clienteEmailElement = document.getElementById('cliente-email');

    const clienteNovo = {
        nome: clienteNomeElement ? clienteNomeElement.value : '',
        contato: clienteContatoElement ? clienteContatoElement.value : '',
        telefone: clienteTelefoneElement ? clienteTelefoneElement.value : '',
        cnpj: clienteCnpjElement ? clienteCnpjElement.value : '',
        setor: clienteSetorElement ? clienteSetorElement.value : '',
        email: clienteEmailElement ? clienteEmailElement.value : ''
    };

    if (id) {
        const index = clientes.findIndex(c => c.id === id);
        if (index !== -1) clientes[index] = { id: id, ...clienteNovo };
    } else {
        clienteNovo.id = getNextId(clientes);
        clientes.push(clienteNovo);
    }

    salvarDados('clientes', clientes);
    window.location.href = 'lista-clientes.html';
}

document.addEventListener('DOMContentLoaded', () => {
    preencherFormularioCliente();
    const formCliente = document.getElementById('form-cliente');
    if (formCliente) formCliente.onsubmit = salvarCliente;
});

function preencherFormularioFornecedor() {
    const id = getItemIdFromUrl();
    if (!id) return;
    const fornecedores = carregarDados('fornecedores');
    const fornecedor = fornecedores.find(f => f.id === id);

    if (fornecedor) {
        const fornecedorIdElement = document.getElementById('fornecedor-id');
        if (fornecedorIdElement) fornecedorIdElement.value = fornecedor.id;
        const fornecedorNomeElement = document.getElementById('fornecedor-nome');
        if (fornecedorNomeElement) fornecedorNomeElement.value = fornecedor.nome;
        const fornecedorRepresentanteElement = document.getElementById('fornecedor-representante');
        if (fornecedorRepresentanteElement) fornecedorRepresentanteElement.value = fornecedor.representante;
        const fornecedorTelefoneElement = document.getElementById('fornecedor-telefone');
        if (fornecedorTelefoneElement) fornecedorTelefoneElement.value = fornecedor.telefone;
        const fornecedorCnpjElement = document.getElementById('fornecedor-cnpj');
        if (fornecedorCnpjElement) fornecedorCnpjElement.value = fornecedor.cnpj;
        const fornecedorEspecialidadeElement = document.getElementById('fornecedor-especialidade');
        if (fornecedorEspecialidadeElement) fornecedorEspecialidadeElement.value = fornecedor.especialidade;
        const fornecedorPrazoEntregaElement = document.getElementById('fornecedor-prazoEntrega');
        if (fornecedorPrazoEntregaElement) fornecedorPrazoEntregaElement.value = fornecedor.prazoEntrega;
    }
}

function salvarFornecedor(e) {
    e.preventDefault();
    let fornecedores = carregarDados('fornecedores');
    const fornecedorIdElement = document.getElementById('fornecedor-id');
    const id = fornecedorIdElement ? parseInt(fornecedorIdElement.value) : null;

    const fornecedorNomeElement = document.getElementById('fornecedor-nome');
    const fornecedorRepresentanteElement = document.getElementById('fornecedor-representante');
    const fornecedorTelefoneElement = document.getElementById('fornecedor-telefone');
    const fornecedorCnpjElement = document.getElementById('fornecedor-cnpj');
    const fornecedorEspecialidadeElement = document.getElementById('fornecedor-especialidade');
    const fornecedorPrazoEntregaElement = document.getElementById('fornecedor-prazoEntrega');

    const fornecedorNovo = {
        nome: fornecedorNomeElement ? fornecedorNomeElement.value : '',
        representante: fornecedorRepresentanteElement ? fornecedorRepresentanteElement.value : '',
        telefone: fornecedorTelefoneElement ? fornecedorTelefoneElement.value : '',
        cnpj: fornecedorCnpjElement ? fornecedorCnpjElement.value : '',
        especialidade: fornecedorEspecialidadeElement ? fornecedorEspecialidadeElement.value : '',
        prazoEntrega: fornecedorPrazoEntregaElement ? fornecedorPrazoEntregaElement.value : ''
    };

    if (id) {
        const index = fornecedores.findIndex(f => f.id === id);
        if (index !== -1) fornecedores[index] = { id: id, ...fornecedorNovo };
    } else {
        fornecedorNovo.id = getNextId(fornecedores);
        fornecedores.push(fornecedorNovo);
    }

    salvarDados('fornecedores', fornecedores);
    window.location.href = 'lista-fornecedores.html';
}

document.addEventListener('DOMContentLoaded', () => {
    preencherFormularioFornecedor();
    const formFornecedor = document.getElementById('form-fornecedor');
    if (formFornecedor) formFornecedor.onsubmit = salvarFornecedor;
});

function preencherFormularioProduto() {
    const id = getItemIdFromUrl();
    if (!id) return;

    const produtos = carregarDados('produtos');
    const produto = produtos.find(p => p.id === id);

    if (produto) {
        const produtoIdElement = document.getElementById('produto-id');
        if (produtoIdElement) produtoIdElement.value = produto.id;
        const produtoNomeElement = document.getElementById('produto-nome');
        if (produtoNomeElement) produtoNomeElement.value = produto.nome;
        const produtoPrecoElement = document.getElementById('produto-preco');
        if (produtoPrecoElement) produtoPrecoElement.value = produto.preco;
        const produtoProjetoElement = document.getElementById('produto-projeto');
        if (produtoProjetoElement) produtoProjetoElement.value = produto.projeto;
        const produtoFabricanteElement = document.getElementById('produto-fabricante');
        if (produtoFabricanteElement) produtoFabricanteElement.value = produto.fabricante;
        const produtoUnidadeElement = document.getElementById('produto-unidade');
        if (produtoUnidadeElement) produtoUnidadeElement.value = produto.unidade;
        const produtoDataAquisicaoElement = document.getElementById('produto-dataAquisicao');
        if (produtoDataAquisicaoElement) produtoDataAquisicaoElement.value = produto.dataAquisicao;
    }
}

function salvarProduto(e) {
    e.preventDefault();
    let produtos = carregarDados('produtos');
    const produtoIdElement = document.getElementById('produto-id');
    const id = produtoIdElement ? parseInt(produtoIdElement.value) : null;

    const produtoNomeElement = document.getElementById('produto-nome');
    const produtoPrecoElement = document.getElementById('produto-preco');
    const produtoProjetoElement = document.getElementById('produto-projeto');
    const produtoFabricanteElement = document.getElementById('produto-fabricante');
    const produtoUnidadeElement = document.getElementById('produto-unidade');
    const produtoDataAquisicaoElement = document.getElementById('produto-dataAquisicao');

    const produtoNovo = {
        nome: produtoNomeElement ? produtoNomeElement.value : '',
        preco: produtoPrecoElement ? parseFloat(produtoPrecoElement.value) : 0,
        projeto: produtoProjetoElement ? produtoProjetoElement.value : '',
        fabricante: produtoFabricanteElement ? produtoFabricanteElement.value : '',
        unidade: produtoUnidadeElement ? produtoUnidadeElement.value : '',
        dataAquisicao: produtoDataAquisicaoElement ? produtoDataAquisicaoElement.value : ''
    };

    if (id) {
        const index = produtos.findIndex(p => p.id === id);
        if (index !== -1) produtos[index] = { id: id, ...produtoNovo };
    } else {
        produtoNovo.id = getNextId(produtos);
        produtos.push(produtoNovo);
    }

    salvarDados('produtos', produtos);
    window.location.href = 'lista-produtos.html';
}

document.addEventListener('DOMContentLoaded', () => {
    preencherFormularioProduto();
    const formProduto = document.getElementById('form-produto');
    if (formProduto) formProduto.onsubmit = salvarProduto;
});

document.addEventListener('DOMContentLoaded', () => {
    carregarDados('produtos');
    carregarDados('clientes');
    carregarDados('fornecedores');
    carregarDados('listaCompras');
});

function renderizarTabelaClientes() {
    const clientes = carregarDados('clientes');
    const tabelaClientesElement = document.getElementById('tabela-clientes');
    const tbody = tabelaClientesElement ? tabelaClientesElement.querySelector('tbody') : null;
    if (!tbody) return;
    tbody.innerHTML = '';

    clientes.forEach(cliente => {
        const tr = document.createElement('tr');
        tr.className = 'hover:bg-gray-50 transition';

        tr.innerHTML = `
                        <td>${cliente.nome}</td>
                        <td>${cliente.contato}</td>
                        <td>${cliente.setor}</td>
                        <td>${cliente.telefone}</td>
                        <td>${cliente.cnpj}</td>
                        <td>${cliente.email}</td>
                        <td class="space-x-2 whitespace-nowrap">
                            <a href="cadastro-cliente.html?id=${cliente.id}" class="text-white p-1 rounded text-sm bg-yellow-500 hover:bg-yellow-600" title="Abrir formulário para editar os dados">Editar</a>
                            <button onclick="adicionarClienteALista(${cliente.id})" class="text-white p-1 rounded text-sm bg-red-600 hover:bg-red-700" title="Define este cliente como o destinatário da Lista de Compras">Definir Cliente</button>
                            <button onclick="excluirCliente(${cliente.id})" class="text-white p-1 rounded text-sm bg-red-500 hover:bg-red-600" title="Excluir o cliente do cadastro">Excluir</button>
                        </td>
                `;
        tbody.appendChild(tr);
    });
}

function adicionarClienteALista(id) {
    let listaCompras = carregarDados('listaCompras');
    listaCompras.cliente = id;
    salvarDados('listaCompras', listaCompras);
    console.log(`Cliente ID ${id} definido na Lista de Compras.`);
}

function excluirCliente(id) {
    if (!confirm('CONFIRMAR EXCLUSÃO: Tem certeza que deseja excluir este Cliente?')) return;
    let clientes = carregarDados('clientes');
    clientes = clientes.filter(c => c.id !== id);
    salvarDados('clientes', clientes);
    window.location.reload();
}

function resetarClientes() {
    if (confirm('Tem certeza que deseja RESETAR os dados de Clientes?')) {
        salvarDados('clientes', DADOS_INICIAIS.clientes);
        window.location.reload();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderizarTabelaClientes();
    const btnResetClientes = document.getElementById('btn-reset-clientes');
    if (btnResetClientes) btnResetClientes.onclick = resetarClientes;
});

function renderizarListaCompras() {
    const lista = carregarDados('listaCompras');
    const clientes = carregarDados('clientes');
    const fornecedores = carregarDados('fornecedores');

    const ulProdutos = document.getElementById('lista-produtos-compra');
    const totalElement = document.getElementById('total-compra');
    if (!ulProdutos || !totalElement) return;

    const cliente = clientes.find(c => c.id === lista.cliente) || { nome: "NENHUM SELECIONADO" };
    const fornecedor = fornecedores.find(f => f.id === lista.fornecedor) || { nome: "NENHUM SELECIONADO" };

    const clienteCompraElement = document.getElementById('cliente-compra');
    if (clienteCompraElement) clienteCompraElement.textContent = cliente.nome;
    const fornecedorCompraElement = document.getElementById('fornecedor-compra');
    if (fornecedorCompraElement) fornecedorCompraElement.textContent = fornecedor.nome;

    ulProdutos.innerHTML = '';
    let totalGeral = 0;

    if (lista.produtos.length === 0) {
        ulProdutos.innerHTML = '<li class="text-gray-500 p-2">Adicione peças da tela de Produtos.</li>';
    } else {
        lista.produtos.forEach((item, index) => {
            const li = document.createElement('li');
            li.className = 'flex justify-between items-center p-2 border-b border-gray-100 text-sm';

            const subtotal = item.preco * item.quantidade;
            totalGeral += subtotal;

            li.innerHTML = `
                        <div class="flex-grow flex items-center space-x-4">
                            <span class="font-medium">${item.nome}</span> 
                        </div>
                        <div class="flex items-center space-x-2">
                            <input type="number" id="qtd-${item.id}" value="${item.quantidade}" min="1" 
                                onchange="alterarQuantidade(${index}, this.value)"
                                class="w-16 p-1 border rounded text-right text-sm"
                                title="Ajustar a quantidade deste item">
                            <span class="text-gray-500">x R$ ${item.preco.toFixed(2).replace('.', ',')}</span>
                        </div>
                        <span class="font-semibold mr-4 w-20 text-right">R$ ${subtotal.toFixed(2).replace('.', ',')}</span>
                        <button onclick="removerItemCompra(${index})" class="text-red-500 hover:text-red-700 p-1 rounded transition text-sm" title="Remover este item da lista">X</button>
                `;
            ulProdutos.appendChild(li);
        });
    }

    totalElement.textContent = totalGeral.toFixed(2).replace('.', ',');
}

function alterarQuantidade(index, novaQuantidade) {
    let listaCompras = carregarDados('listaCompras');
    const qtd = parseInt(novaQuantidade);

    if (qtd > 0) {
        listaCompras.produtos[index].quantidade = qtd;
    } else {
        listaCompras.produtos.splice(index, 1);
    }

    salvarDados('listaCompras', listaCompras);
    renderizarListaCompras();
}

function removerItemCompra(index) {
    if (!confirm('CONFIRMAR REMOÇÃO: Tem certeza que deseja remover este item da lista?')) return;
    let listaCompras = carregarDados('listaCompras');
    listaCompras.produtos.splice(index, 1);
    salvarDados('listaCompras', listaCompras);
    renderizarListaCompras();
}

function limparListaCompra() {
    if (confirm('Tem certeza que deseja limpar todos os PRODUTOS da Lista de Compras?')) {
        let listaCompras = carregarDados('listaCompras');
        listaCompras.produtos = [];
        salvarDados('listaCompras', listaCompras);
        renderizarListaCompras();
    }
}

function resetGeralCompra() {
    if (confirm('ATENÇÃO: Este reset apagará TUDO: itens, cliente e fornecedor da Lista de Compras. Deseja continuar?')) {
        salvarDados('listaCompras', DADOS_INICIAIS.listaCompras);
        window.location.reload();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderizarListaCompras();
    const btnLimparCompra = document.getElementById('btn-limpar-compra');
    if (btnLimparCompra) btnLimparCompra.onclick = limparListaCompra;
    const btnResetCompra = document.getElementById('btn-reset-compra');
    if (btnResetCompra) btnResetCompra.onclick = resetGeralCompra;
});

function renderizarTabelaFornecedores() {
    const fornecedores = carregarDados('fornecedores');
    const tabelaFornecedoresElement = document.getElementById('tabela-fornecedores');
    const tbody = tabelaFornecedoresElement ? tabelaFornecedoresElement.querySelector('tbody') : null;
    if (!tbody) return;
    tbody.innerHTML = '';

    fornecedores.forEach(fornecedor => {
        const tr = document.createElement('tr');
        tr.className = 'hover:bg-gray-50 transition';

        tr.innerHTML = `
                        <td>${fornecedor.nome}</td>
                        <td>${fornecedor.representante}</td>
                        <td>${fornecedor.especialidade}</td>
                        <td>${fornecedor.telefone}</td>
                        <td>${fornecedor.cnpj}</td>
                        <td>${fornecedor.prazoEntrega}</td>
                        <td class="space-x-2 whitespace-nowrap">
                            <a href="cadastro-fornecedor.html?id=${fornecedor.id}" class="text-white p-1 rounded text-sm bg-blue-500 hover:bg-blue-600" title="Abrir formulário para editar os dados">Editar</a>
                            <button onclick="adicionarFornecedorALista(${fornecedor.id})" class="text-white p-1 rounded text-sm bg-red-600 hover:bg-red-700" title="Define este fornecedor como o principal para a Lista de Compras">Definir Fornecedor</button>
                            <button onclick="excluirFornecedor(${fornecedor.id})" class="text-white p-1 rounded text-sm bg-red-500 hover:bg-red-600" title="Excluir o fornecedor do cadastro">Excluir</button>
                        </td>
                `;
        tbody.appendChild(tr);
    });
}

function adicionarFornecedorALista(id) {
    let listaCompras = carregarDados('listaCompras');
    listaCompras.fornecedor = id;
    salvarDados('listaCompras', listaCompras);
    console.log(`Fornecedor ID ${id} definido na Lista de Compras.`);
}

function excluirFornecedor(id) {
    if (!confirm('CONFIRMAR EXCLUSÃO: Tem certeza que deseja excluir este Fornecedor?')) return;
    let fornecedores = carregarDados('fornecedores');
    fornecedores = fornecedores.filter(f => f.id !== id);
    salvarDados('fornecedores', fornecedores);
    window.location.reload();
}

function resetarFornecedores() {
    if (confirm('Tem certeza que deseja RESETAR os dados de Fornecedores?')) {
        salvarDados('fornecedores', DADOS_INICIAIS.fornecedores);
        window.location.reload();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderizarTabelaFornecedores();
    const btnResetFornecedores = document.getElementById('btn-reset-fornecedores');
    if (btnResetFornecedores) btnResetFornecedores.onclick = resetarFornecedores;
});

function renderizarTabelaProdutos() {
    const produtos = carregarDados('produtos');
    const tabelaProdutosElement = document.getElementById('tabela-produtos');
    const tbody = tabelaProdutosElement ? tabelaProdutosElement.querySelector('tbody') : null;
    if (!tbody) return;
    tbody.innerHTML = '';

    produtos.forEach(produto => {
        const tr = document.createElement('tr');
        tr.className = 'hover:bg-gray-50 transition';

        tr.innerHTML = `
                        <td>${produto.nome}</td>
                        <td>R$ ${produto.preco.toFixed(2).replace('.', ',')}</td>
                        <td>${produto.projeto}</td>
                        <td>${produto.fabricante}</td>
                        <td>${produto.unidade}</td>
                        <td>${produto.dataAquisicao}</td>
                        <td class="space-x-2 whitespace-nowrap">
                            <a href="cadastro-produto.html?id=${produto.id}" class="text-white p-1 rounded text-sm bg-green-500 hover:bg-green-600" title="Abrir formulário para editar os dados">Editar</a>
                            <button onclick="adicionarProdutoALista(${produto.id})" class="text-white p-1 rounded text-sm bg-red-600 hover:bg-red-700" title="Adicionar 1 unidade deste item à Lista de Compras">Adicionar à Lista</button>
                            <button onclick="excluirProduto(${produto.id})" class="text-white p-1 rounded text-sm bg-red-500 hover:bg-red-600" title="Excluir o produto do cadastro">Excluir</button>
                        </td>
                `;
        tbody.appendChild(tr);
    });
}

function adicionarProdutoALista(id) {
    const produtos = carregarDados('produtos');
    const produto = produtos.find(p => p.id === id);
    if (!produto) return;

    let listaCompras = carregarDados('listaCompras');
    const itemExistente = listaCompras.produtos.find(item => item.id === id);

    if (itemExistente) {
        itemExistente.quantidade++;
    } else {
        listaCompras.produtos.push({
            id: produto.id,
            nome: produto.nome,
            preco: produto.preco,
            quantidade: 1
        });
    }

    salvarDados('listaCompras', listaCompras);
}

function excluirProduto(id) {
    if (!confirm('CONFIRMAR EXCLUSÃO: Tem certeza que deseja excluir esta peça?')) return;

    let produtos = carregarDados('produtos');
    produtos = produtos.filter(p => p.id !== id);
    salvarDados('produtos', produtos);

    window.location.reload();
}

function resetarProdutos() {
    if (confirm('Tem certeza que deseja RESETAR os dados de Produtos?')) {
        salvarDados('produtos', DADOS_INICIAIS.produtos);
        window.location.reload();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderizarTabelaProdutos();
    const btnResetProdutos = document.getElementById('btn-reset-produtos');
    if (btnResetProdutos) btnResetProdutos.onclick = resetarProdutos;
});