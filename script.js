// Método simples
let titulo = document.createElement('h1');
titulo.id = 'titulo';
titulo.textContent = 'Produtos';

document.body.appendChild(titulo);

let produtoUm = document.createElement('div');
produtoUm.id = 'produto-um';
document.body.appendChild(produtoUm);

let subTituloGameBoy = document.createElement('h3');
subTituloGameBoy.id ='sub-titulo';
subTituloGameBoy.textContent = 'Game Boy Advance';

let imagemGameBoy = document.createElement('img');
imagemGameBoy.id = 'imagem';
imagemGameBoy.src = 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSlryN-UmGUupt-lzuCogzQGxLeqvnI2F_LQXdk-Uymhe4v0S6QYZgJ-71DuuiSc04gf6KujgRt7U1WSR1KYILXK_VDgtglnljymKG9e3njv1OcnRC2GAZ85G6PTFpy2i6_R0P7wttBOaM&usqp=CAc';

let precoGameBoy = document.createElement('p');
precoGameBoy.id = 'preco';
precoGameBoy.textContent = 'Preço: US$ 99,99';

let descricaoGameBoy = document.createElement('p');
descricaoGameBoy.id = 'descricao';
descricaoGameBoy.textContent = 'Descrição: Game Boy Advance é um console de jogos eletrônicos da Nintendo, lançado em 1989.';

produtoUm.append(subTituloGameBoy, imagemGameBoy, precoGameBoy, descricaoGameBoy);

// Método complexo

let produtoDois = document.createElement('div');
produtoDois.id = 'produto-dois';
document.body.appendChild(produtoDois);

produtoDois.innerHTML = `
    <h3 id="sub-titulo">Xbox Series S</h3>
    <img src="https://i5.walmartimages.com/seo/Microsoft-Xbox-Series-S-1TB-Video-Game-Console_c9e649d7-388d-4bf6-aff6-2df5032bddbf.57c72764f73810287db93f4b296936fc.webp?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF" width="200px">
    <p id="preco">Preço: US$ 339,99</p>
    <p id="descricao">Xbox Series S - 1 TB (preto) Experimente velocidade e desempenho de última geração com o Xbox Series S em Carbon Black, com um SSD de 1 TB.</p>
`