# [Booby](https://github.com/lucasjcruz/booby) ・ [MTA-File](https://github.com/lucasjcruz)

<!---Esses são exemplos. Veja https://shields.io para outras pessoas ou para personalizar este conjunto de escudos. Você pode querer incluir dependências, status do projeto e informações de licença aqui--->

![GitHub repo size](https://img.shields.io/github/repo-size/lucasjcruz/booby?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/lucasjcruz/booby?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/lucasjcruz/booby?style=for-the-badge)


> Booby é um bot que faz callRemote's entre o Discord e o MTA, utilizando a API do [MTA:SA](https://multitheftauto.com)
### Atualizações

O projeto já está liberado para uso, mas ocorrerá atualizações para melhorar o uso do mesmo.

- [x] Base
- [x] Eventos
- [x] Comandos

### Pré-requisitos

Antes de utilizar esse projeto, verifique se tem os requisitos necessarios:

* Node v16.9.0

## Instalação 

Para instalar o Booby em seu dispositivo, siga essas etapas:


Windows:
```
$ git clone https://github.com/lucasjcruz/booby.git
```
ou

Clique [aqui](https://github.com/lucasjcruz/booby/archive/refs/heads/main.zip)

## Utilizar o Booby

Para usar o Booby, siga estas etapas:

```
$ cd Booby
$ npm install
$ yarn dev
```

## Configuração do Booby no MTA:

Para o os comandos do Booby relacionados ao MTA funcionar, é preciso que:

- Instale esse repositorio -> [bob](https://github.com/lucasjcruz)
- Coloque este repositorio em sua pasta do MTA **(PASTA_DO_MTA/server/mods/deathmatch/resources/[gamemodes]/)**
- Abra o seu servidor -> (PASTA_DO_MTA/server/**MTA Server**)
- E já no servidor, crie uma conta para o Booby. Exemplo:

**No console (F8)**
```
register Booby **SENHA**
```
- Inicie o resource:

**No console (F8)**
```
start bob
```

## Configuração Booby

- Pegue o IP do seu servidor e o portHTTP
- Vá a pasta do Booby e faça as seguintes etapas:

```
1. Abra este arquivo neste local da pasta do Booby -> (src/res/mta.js)
3. Coloque o IP e portHTTP do seu servidor
4. Coloque o username e a senha que foi criada para o Booby
5. Salve e feche
```
