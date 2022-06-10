 # gitHub-list

Tentei publicar no heroku, mas por algum motivo não quis fazer deploy então abaixo das tecnologias deixarei as instruções.

Tecnologias ultilizadas no projeto:
- React
- Node

Libs ultilizadas:
- Material UI
- Axios
- Router
- Styled-components
- Hooks(useState, useContext, useEffect)
- Cors
- Express

# Como rodar
1 - Fazer o git clone <br>
2 - Abrir no vs code (comando: code .) <br>
3 - Abrir um terminal dentro da pasta server <br>
4 - Digitar o comando: npm start <br>
5 - Abra um segundo terminal dessa vez dentro da pasta client <br>
6 - Digitar o comando: npm install <br>
7 - Digitar o comando: npm start <br>
8 - A aplicação deve estar rodando <br>



https://user-images.githubusercontent.com/99160023/172966606-18fbae18-1142-4c17-a056-0e7f9bd0dbc3.mp4



## Como usar
>**Login**
Criei a aplicação para ser mais real possível, então o menu tem validação de formulário e de usuários, o usuário que criei foi o adm:
Login: adm@gmail.com
Senha: adm123
se for inserido uma conta incorreta, o login estará bloqueado.

>**Busca**
quando o login for feito o acesso a repositórios iniciais, você pode pesquisar por algum repositório específico de 3 formas diferentes, por nome do repositório, por nome do autor, pelo link da aplicação, ou uma quarta que digitando uma letra será feita uma busca de include.

>**Incluir novos repositórios**
Criei umas pseudo api para as requisições, e a de incluir um novo card é bem simples, é somente necessário colar o link do repositório desejado, já que tem ligação com a api do github e funciona com qualquer repositório, se for digitado um repositório inexistente o erro será notado, e nada será incluído.
