Em construção

# DSCommerce-Frontend

[![NPM](https://img.shields.io/npm/l/react)]( https://github.com/Hfictus/dscommerce/blob/main/LICENSE)

## Importante: no momento, a aplicação não está disponível para testes online (produção).

## Sobre o projeto:
O projeto DSCommerce-Frontend é um projeto responsivo de loja online para venda de produtos, no qual é implementado um sistema de autenticação e autorização. Ele foi implementado no contexto de curso de Frontend da escola de programação DevSuperior.<br>
Além desse Frontend, também foi implementado o projeto DSCommerce-Backend, também encontrado em um repositório à parte, bem como o projeto DSCommerce, repositório com o projeto em HTML  e CSS.<br>
O sistema possui a área do cliente, com cabeçalho na cor amarela, e a área administrativa, com fundo verde.<br>

## Tecnologias utilizadas:
TypeScript;<br>
React;<br>
Vite;<br>
Yarn.<br>
<br>
## Implantação em produção:
Netlify<br>

## Exemplos de usuários para testes:<br>
Maria: <br>
maria@gmail.com<br>
ROLE_CLIENT<br>
Alex: <br>
alex@gmail.com<br>
ROLE_CLIENT, e ROLE_ADMIN<br>
Senha usada como exemplo para os dois usuários:<br>
123456<br>

## Layout Web e informações sobre casos de uso:<br>
Telas da área do cliente:<br>

Catálogo de produtos (listagem paginada; página inicial):<br>
![Web 1]( https://github.com/Hfictus/images/blob/main/CatalogDSCommerceWeb.png
)<br>
Na tela de catálogo:<br>
há apresentação inicial de listagem de produtos paginada e organizada por nome, em ordem crescente, com 12 produtos por página; <br>
pode-se filtrar a lista por nome de produtos; <br>
pode-se carregar mais produtos, clicando-se no botão Carregar mais, na parte inferior da tela; <br>
o botão Entrar, no cabeçalho, leva à página de login; <br>
o botão com a imagem de carrinho leva para a página do carrinho de compras; <br>
o processo de compra de um produto inicia ao se clicar no card de um deles, dando acesso à tela de detalhes do item. <br>

Filtrar lista por nome de produto: <br>
Inserir nome completo, ou parte, do produto buscado e clicar no botão com imagem de lupa. <br>
Se se quiser apagar o texto, clicar no botão com imagem de X. <br>

Perfis com permissão para acesso: <br>
Anônimo; <br>
Cliente; <br>
Admin. <br>

Dados de cada produto apresentados pelo sistema ao usuário: <br>
nome; <br>
preço; <br>
imagem. <br>

O botão Carregar mais busca os produtos da página seguinte, adicionando-os aos já mostrados na tela. Na última página de uma listagem de produtos, o botão não aparece. <br>
Ao se clicar no card de um dos produtos na página de catálogo, há um direcionamento para a página de detalhes do produto. <br>
<br>

Detalhes do produto:<br>
![Web 2]( https://github.com/Hfictus/images/blob/main/DetailsMyDSCommerce.webp)
<br>
Na tela de detalhes do produto, é possível:<br>
voltar para a tela de catálogo de produtos ao se clicar no botão Início, ou no logo DSCommerce; <br>
acessar a página de login ao clicar no botão Enter; <br>
acessar a página de carrinho de compras ao clicar no botão com imagem de carrinho; <br>
adicionar o produto ao carrinho com o clique no botão Comprar. <br>

Perfis com permissão para acesso: <br>
Anônimo; <br>
Cliente; <br>
Admin. <br>

Dados de cada produto apresentados pelo sistema ao usuário: <br>
nome; <br>
preço; <br>
imagem; <br>
descrição; <br>
categorias. <br>

Ao se fazer o login, aparece o email do usuário sobre o botão Sair, que aparece no lugar do botão Entrar. <br>
Se se clicar no botão com imagem de carrinho sem se ter adicionado nenhum item, a tela de carrinho de compras aparece sem produto nenhum, com uma mensagem indicando que está vazio: Seu carrinho está vazio. <br>

Com o clique no botão Comprar, há acesso à página de carrinho de compras, sendo adicionado ao carrinho o produto escolhido. <br> 

Carrinho de compras (com um produto adicionado):<br>
![Web 3]( https://github.com/Hfictus/images/blob/main/CartMyDSCommerce.webp
)<br>
Na tela de carrinho de compras, é possível:<br>
clicar no botão Continuar comprando, ou no logo DSCommerce, para voltar para a página de catálogo; <br>
clicar no botão para aumentar os itens dos produtos adicionados (+), ou no botão para diminuir (-);<br>
clicar no botão para diminuir itens (-) até que o produto seja excluído do carrinho (quando a quantidade do item for menor do que 1); <br>
clicar no botão Limpar carrinho para que todos os produtos sejam excluídos juntos; <br>
clicar no botão Entrar, para acessar a página de login, se não se estiver com ele já efetuado; <br>
clicar no botão Finalizar pedido para confirmar compra (havendo direcionamento para a tela de login, se ainda não tiver sido feito; ou para a tela de confirmação de pedido). <br>

Perfis com permissão para acesso: <br>
Anônimo; <br>
Cliente; <br>
Admin. <br>

Dados apresentados pelo sistema ao usuário: <br>
nome de cada produto adicionado ao carrinho;<br>
imagem de cada produto adicionado ao carrinho; <br>
quantidade de cada produto adicionado ao carrinho (abaixo do nome do produto); <br>
quantidade de produtos adicionados ao carrinho (no círculo vermelho no botão com imagem de carrinho); <br>
subtotal de cada produto; <br>
total da compra. <br>

Login:<br>
![Web 4]( https://github.com/Hfictus/images/blob/main/LoginMyDSCommerce.webp
)<br>
Na tela de login, é possível:<br>
clicar no botão com imagem de carrinho para acessar o carrinho de compras; <br>
clicar no logo do site para voltar para a página de catálogo; <br>
clicar no botão azul do formulário (Entrar) para dar sequência à compra (com email e senha adicionados ao formulário). <br>

Perfis com permissão para acesso: <br>
Anônimo; <br>
Cliente; <br>
Admin. <br>

Dados apresentados pelo sistema ao usuário: <br>
quantidade de produtos adicionados ao carrinho (círculo vermelho sobre botão com imagem de carrinho). <br>

Dados fornecidos pelo usuário para efetuar login: <br>
email; <br>
senha. <br>

Critérios para validação do formulário de login: <br>
formato correto de email existente no sistema; <br>
senha existente no sistema. <br>

Observação: o usuário anônimo pode acessar o carrinho de compras, sendo direcionado para a tela de login ao clicar no botão Finalizar pedido. <br>
Ao se fazer login no processo de compra, aparece o usuário sobre o botão Sair, que substitui o botão Entrar no cabeçalho.<br>

Com o usuário já logado, havendo produto no carrinho e se clicando em Finalizar pedido, acessa-se a página de confirmação de pedido, com indicação de seu número:<br>
![Web 5]( https://github.com/Hfictus/images/blob/main/OrderConfirmationMyDSCommerce.webp
)<br>
Na tela de confirmação de pedido, com usuário já com login realizado, é possível visualizar os seguintes dados do pedido:<br>
número do pedido (id); <br>
imagem do produto; <br>
nome do produto; <br>
quantidade de cada produto comprado; <br>
subtotais; <br>
total da compra. <br>

Também é possível: <br>
clicar no botão Início, ou no logo do site, para voltar para a página de catálogo; <br>
clicar no botão com imagem de carrinho para acessar uma nova página de carrinho de compras, vazio; <br>
clicar no botão Sair, para fazer logout; <br>

Ao realizar o login, o username aparece no cabeçalho de todas as páginas às quais o usuário tem acesso. <br>
Se o login for feito por usuário com perfil ROLE_ADMIN, aparecerá no cabeçalho botão com imagem de engrenagem, para acessar a área administrativa. <br>
Ao se finalizar uma compra, ou quando o carrinho está vazio, não aparece o círculo vermelho sobre o botão com imagem de carrinho. <br>

Layout da página de carrinho de compras sem itens:<br>
![Web 6]( https://github.com/Hfictus/images/blob/main/CartEmptyMyDSCommerce.webp)<br>
No carrinho, com o usuário já tendo efetuado o login, é possível (além do já dito mais acima):<br>
Clicar no botão sair (desaparecendo o username sobre o botão Sair, que é substituído pelo botão Entrar, não havendo redirecionamento do usuário para outra página).<br>
No exemplo acima, aparece a frase indicando que o carrinho está vazio, não ocorrendo nada ao se clicar no botão Finalizar pedido. <br>


## Área administrativa:<br>
Login efetuado com Alex, com perfil ROLE_ADMIN, além de ROLE_CLIENT.<br>
Imagem de detalhe do cabeçalho da área do cliente, após login efetuado por administrador (com botão de imagem de engrenagem para acessar a área administrativa):<br>

![Web 7]( https://github.com/Hfictus/images/blob/main/ClientHeaderMyDSCommerce.webp)<br>

Tela de boas-vindas, acessada ao se clicar no botão com imagem de engrenagem:<br>
![Web 8]( https://github.com/Hfictus/images/blob/main/AdminWelcomePage.webp)<br>
Na tela de boas-vindas da área administrativa, há:<br>
um logo; <br>
um botão Início (para navegar para esta página a partir de outras); <br>
um botão Produtos (Para navegar para a página do formulário de CRUD; <br>
um botão Sair, para logout; <br>
uma mensagem de boas-vindas com o nome do usuário administrador. <br>

Tela de CRUD:<br>
![Web 9]( https://github.com/Hfictus/images/blob/main/Product%20ListingDSCommerceWeb.png)<br>
Na tela de CRUD, pode-se:<br>
visualizar a listagem de produtos paginada e organizada por nome, em ordem crescente, com 12 produtos por página; <br>
filtrar a lista por nome de produtos (como na tela de catálogo); <br>
carregar mais produtos, clicando-se no botão Carregar mais, na parte inferior da tela (botão que desaparece na última página da listagem); <br>
atualizar dados de um produto específico ao se clicar no botão com imagem de lápis; <br>
inserir dados de um novo produto através do formulário acessado através do botão Novo; <br>
deletar um produto, clicando-se no botão com imagem de lixeira, desde que ele não faça parte de um pedido; <br>
voltar para a página de boas-vindas da área administrativa ao se clicar no botão Início. <br>

Ao se clicar no botão para deletar, aparece uma caixa de confirmação em um modal, para confirmar (Sim, ou Não):<br>
![Web 10]( https://github.com/Hfictus/images/blob/main/DeleteModalMyDSCommerce.webp)<br>

Ao se confirmar a deleção de um produto, se ele estiver vinculado a um pedido, aparece uma outra caixa de aviso em um modal, indicando o erro de integridade referencial (também no centro da página):<br>
![Web 11]( https://github.com/Hfictus/images/blob/main/ConfirmationModalMyDSCommerce.webp
)<br>
Clicando-se em ok, o aviso desaparece.<br>

Ao se deletar um produto que não está em nenhum pedido, ele desaparece da listagem da tela, ficando visível outro que estava na próxima página. <br>

Formulário para inserir produto novo:<br>
![Web 12]( https://github.com/Hfictus/images/blob/main/Product%20FormDSCommerceWeb.png
)<br>
Dados para inserir um novo produto:<br>
nome; <br>
preço; <br>
imagem (URL); <br>
categorias; <br>
descrição. <br>

Se não se atender a algum dos critérios de autenticação de algum dos campos do formulário de inserção de novo produto, a borda fica vermelha, aparecendo uma mensagem de aviso e instrução. <br>
O formulário somente será enviado ao se clicar no botão Salvar se todos os campos forem corretamente preenchidos. <br>
Clicando-se no botão Cancelar, volta-se para a página de CRUD. <br> 

Formulário para atualizar dados de produto existente:<br>
![Web 13]( https://github.com/Hfictus/images/blob/main/FormUpdateProductMyDSCommerce.webp)<br>
Ao se clicar para editar um produto específico, seus dados atuais são mostrados no formulário, podendo sofrer alterações (De resto, não há diferença com o formulário usado para inserir dados de produtos novos).<br>

Critérios de validação de campos: <br>
nome de 3 a 80 caracteres; <br>
preço positivo; <br>
pelo menos uma categoria para cada produto; <br>
um mínimo de 10 caracteres para a descrição. <br>

Apenas o campo de URL da imagem não recebe configuração de validação. <br>

Modelo conceitual:<br>
Ver repositório DSCommerce-Backend.<br>

<!--Modelo para inserir imagens:
![Web 14]( https://url)<br>
-->

## Layout Mobile:
### Área do cliente:
<!-- Forma simples para inserir um conjunto de imagens: -->
<div align="center">
  <img src="https://github.com/Hfictus/images/blob/main/CatalogDSCommerceMobile.png" width="150" align="top" />
  <img src="https://github.com/Hfictus/images/blob/main/Product%20detailsDSCommerceMobile.png" width="150" align="top" />
  <img src="https://github.com/Hfictus/images/blob/main/CartDSCommerceMobile.png" width="150" align="top" />
  <img src="https://github.com/Hfictus/images/blob/main/LoginDSCommerceMobile.png" width="150" align="top" />
  <img src="https://github.com/Hfictus/images/blob/main/ConfirmationDSCommerceMobile.png" width="150" align="top" />
</div>

### Área administrativa:
<div align="center">
  <img src="https://github.com/Hfictus/images/blob/main/Product%20Listing-1DSCommerceMobile.png" width="150" align="top" />
  <img src="https://github.com/Hfictus/images/blob/main/Product%20ListingDSCommerceMobile.png" width="150" align="top" />
  <img src="https://github.com/Hfictus/images/blob/main/Product%20FormDSCommerceMobile.png" width="150" align="top" />
</div>

## Como executar o projeto: <br>
Para o Backend, ver o README do repositório DSCommerce-Backend. <br>
Para o Frontend, neste repositório: <br>
baixar o projeto (como feito para o projeto DSCommerce-Backend); <br>
na pasta raiz do projeto, abrir o terminal e executar o comando “yarn dev”; <br>
no navegador, acessar http://localhost:5173 (para testes locais). <br>

## Tópicos considerados ao longo da construção deste projeto de estudos:<br>
Componentes, Rotas, Props; <br>
Hooks; <br>
Local Storage; <br>
Autenticação e controle de acesso; <br>
Comunicação entre componentes, eventos, context API; <br>
Formulários (CRUD); <br>

### Acesso direto à aplicação em produção (host) (ver):
https://X.netlify.app

### Para clonar repositório:
```bash
git clone git@github.com:Hfictus/DSCommerce-Frontend.git
```

### Perfis de test e dev (ver):

### Variáveis de ambiente para perfis de teste e homologação (test, dev) (ver):

### Host para testes com perfil prod (produção: link para demo da aplicação) (ver):
. host                 | https://x.netlify.app<br>
<br>

## Autor:<br>
Gerson Klauck (Hfictus)

