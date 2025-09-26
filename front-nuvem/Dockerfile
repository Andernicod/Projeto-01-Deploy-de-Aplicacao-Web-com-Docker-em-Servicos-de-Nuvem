# Definindo a imagem base com o nodeJS
FROM node:18-alpine

# Definindo o app como diretório de trabalho
WORKDIR /app

# Copiando o package json para o /app do container
COPY package.json ./

# Instalando as dependências
RUN npm install

# Copiando toda a aplicação
COPY . .

# Definindo a porta 8080 como variável
ENV PORT=8080

# Executando a build da aplicação
RUN npm run build

# Expondo a porta 8080 ao docker
EXPOSE 8080

# Executando os comandos para inicializar a aplicação no modo de produção
CMD ["npm", "start"]