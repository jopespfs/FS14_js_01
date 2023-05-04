# Git

## Configuração de usuário
Fonte: [configuração de git](https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Configura%C3%A7%C3%A3o-Inicial-do-Git)

### 1.1. Setando user
```js
git config --global user.name "jopespfs"
``` 
### 1.2. Setando email
```js
git config --global user.email "juaumpedro2@gmail.com"
``` 
## Subir Alterações para o repositório remoto

### 2 - Verificar as alterações
```
git status
```
### 3 - Adicionar as alterações que serão enviadas
```
git add .
```
### 4 - Verificar as alterações
```
git status
```
### 4 - Preparar as alterações a serem enviadas
```
git commit -m "comentario"
```
### 5 - Verificar as alterações
```
git status
```
### 6 - Envia as alterações
```
git push
```