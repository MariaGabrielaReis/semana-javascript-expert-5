<p align="center">
  <img alt="Banner Semana JS Expert" title="Semana JS Expert" src="./resources/banner.png" />
</p>

<p align="center">
  <a href="#projeto">Sobre a aplicação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#demo">Demonstração</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#requisitos">Como rodar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#licenca">Licença</a>
</p>

<span id="projeto">
  
## :bookmark_tabs: Sobre a aplicação
A quinta Semana JavaScript Expert tem como objetivo aplicar conceitos avançados do JavaScript a partir do desenvolvimento com TDD (Test Driven Development) um clone do Google Drive, plataforma que possibilita o upload de arquivos na nuvem, projetada e mantida pela Google.

### :hammer_and_wrench: Tecnologias
As seguintes tecnologias e ferramentas estão sendo utilizadas neste projeto:
    
<img src="https://img.shields.io/badge/HTML5-20232A?style=for-the-badge&logo=html5&logoColor=E34F26" alt="HTML5" /> <img src="https://img.shields.io/badge/CSS3-20232A?style=for-the-badge&logo=css3&logoColor=1572B6" alt="CSS3" /> <img src="https://img.shields.io/badge/JavaScript-20232A?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="Javascript" /> <img src="https://img.shields.io/badge/Node.js-20232A?style=for-the-badge&logo=nodedotjs&logoColor=339933" alt="Node.js"/> <img src="https://img.shields.io/badge/Jest-20232A?style=for-the-badge&logo=jest&logoColor=C21325" alt="Jest"/>
 
### :heavy_check_mark: Checklist Features

- API
    - [X] [AULA 01] Deve listar arquivos baixados
    - [ ] Deve receber stream de arquivos e salvar em disco 
    - [ ] Deve notificar sobre progresso de armazenamento de arquivos em disco 
    - [ ] Deve permitir upload de arquivos em formato image, video ou audio
    - [ ] Deve atingir 100% de cobertura de código em testes

- App 
    - [ ] Deve listar arquivos baixados
    - [ ] Deve permitir fazer upload de arquivos de qualquer tamanho
    - [ ] Deve ter função de upload via botão
    - [ ] Deve exibir progresso de upload 
    - [ ] Deve ter função de upload via drag and drop


<span id="demo">
  
## :desktop_computer: Demonstração
Abaixo é possível encontrar uma demonstração das funcionalidades do projeto desenvolvido, onde o layout foi adaptado a partir do projeto de [Leonardo Santo](https://github.com/leoespsanto), disponível através [deste link](https://codepen.io/leoespsanto/pen/KZMMKG). 
  
<p align="center">
  <img alt="Demonstração" src="./resources/demo.gif" />
</p>

<span id="requisitos">

## :gear: Como rodar
Com o [Node](https://nodejs.org/en/) instalado em sua máquina, baixe ou clone este repositório e siga o passo a passo descrito abaixo, pelo terminal:
```bash
# Acesse a pasta da API
$ cd semana-javascript-expert-5/aulas/aula01/gdrive-webapi

# Instale as dependências do projeto
$ npm install

# Rode todos os testes existentes
$ npm run test

# Inicie o projeto
$ npm start
```
Neste momento o servidor estará ativo e para utilizá-lo acesse [https://localhost:3000](https://localhost:3000).

<span id="licenca">

## :page_with_curl: Licença
Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

[![image](https://img.shields.io/badge/✨%20Maria%20Gabriela%20Reis,%202021-LinkedIn-009973?style=flat-square)](https://www.linkedin.com/in/mariagabrielareis/)
