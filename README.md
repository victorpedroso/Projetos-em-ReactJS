# Site escola moppe
=============================================================
# Getting started

## Requeriments

- [Node.js](https://nodejs.org/en) \
Digite os comandos: `node -v` e `npm -v` no terminal e verifique se há o retorno da versão de ambos

- [Git](https://github.com/git-for-windows/git/releases/download/v2.42.0.windows.2/Git-2.42.0.2-64-bit.exe)
Digite o comando: `git -v` no terminal e verifique se há retorno da versão do git instalada\

Em ambas as instalações, caso haja algum erro com o comando, será preciso adicionar a pasta de instalação nas variáveis de ambiente do sistema operacional.

## Commands

Caso não tenha o projeto baixado na máquina: \
Abra o prompt na pasta que deseja baixar o projeto e digite:\
`git clone -b branch-testes https://github.com/timoppe/site_moppe.git`\
O git irá clonar o projeto de desenvolvimento na pasta selecionada\
Acesse a pasta criada pelo git `cd <nome da pasta>` (raiz do projeto).

## `npm install`

Após realizar o clone do projeto, faça a instalação dos pacotes do Node.js\
O Node irá baixar as dependências necessárias que foram utilizadas no desenvolvimento do projeto.
Após finalizar, verifique se a pasta `node_modules` foi criada.

## `npm start`

Após realizar a instalação das dependências, inicie a aplicação\
O comando abre a aplicação React JS em modo de desenvolvedor\
Abra [http://localhost:3000](http://localhost:3000) ou acesse ip da máquina para visualizar a aplicação no browser.

O Node.js compila o código a cada alteração salva\
A página no browser atualiza automaticamente após as alterações\
Os erros de compilação são mostrados no console.

Não fechar o console, ele mantém a aplicação rodando.

## `npm test`

Esse comando é para execução de testes unitários e de integração (recomendado para usuários avançados)\
Inicia o executor de testes no modo de observação interativo\
Consulte a seção sobre [execução de testes](https://facebook.github.io/create-react-app/docs/running-tests) para obter mais informações.

## `npm run build`

Após as alterações no código é preciso criar uma versão de deploy da aplicação React\
O comando constrói o aplicativo para produção na pasta `/build`\
Ele agrupa corretamente o React no modo de produção e otimiza a construção para obter o melhor desempenho.

A compilação é reduzida e os nomes dos arquivos incluem os hashes\
Após a criação da versão de produção, o aplicativo esta pronto para ser implantado.

## Deployment on the WEB server

Para implantar as alterações, siga os passos:
- Verifique no console se não há erros de compilação
- Certifique-se de ter criado a versão de produção da aplicação
- Acesse o ftp do servidor no pasta `/var/www/moppe` e procure a pasta `/build`
- Exclua a pasta `/build` atual e faça o uploiad da nova pasta build criada anteriormente.\
Caso haja erro na exclusão, acesse o servidor via ssh e digite: `cd /var/www/moppe`\
Digite `ls` e confirme se a pasta `/build `se encontra nesse diretório\
Digite `sudo rm -rf build` para excluir a pasta com direitos de root\
Volte ao ftp e verique se a pasta foi excluida e faça o upload da nova\
- Verifique se as alterações do site entraram no ar.
Caso não tenham entrado. volte ao servidor e digite `sudo systemctl reload nginx`.

## Recommendations

Nunca alterar diretamente a branch master sem conhecimento, nela se encontra a aplicação em produção\
Após ter realizado as alterações no código, atualize a aplicação no GitHub\
Sempre suba as alterações realizadas na branch de desenvolvimento `branch-testes`\
Se desejar criar outra branch para testes, digite o comando indicando o nome da branch `git checkout -b <nome da branch>`\
Realize a adição das alterações na stage `git add .`\
Faça o commit das alterações `git commit -m "Mensagem no commit"`\
Suba as alterações para a branch de testes `git push origin branch-testes` ou `git push origin <nome da branch>`\
Se não houverem erros no código e tenha sido realizado todos os teste necessários, realize o merge para a branch de produção:
- No terminal, acesse a branch principal: `git checkout master` e em seguida: `git merge branch-testes`
- Envie as alterações com o comando push e verifique se o merge foi realizado
- Descrever nos commmits as alterações feitas\
- Para correção de bugs ou erros, criar uma nova issue, caso hajam problemas ou bugs relacionados, criar um milestone.

## Learn more

Para saber mais sobre o React JS acesse a [documentação sobre criação do aplicativo React](https://facebook.github.io/create-react-app/docs/getting-started)

Para aprender o React, confira a [documentação do React](https://reactjs.org/)
