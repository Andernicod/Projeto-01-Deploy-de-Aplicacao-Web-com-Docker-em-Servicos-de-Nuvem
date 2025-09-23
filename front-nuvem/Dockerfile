# Instalando o nodeJS na máquina virtual
FROM node:18-alpine

# Definindo o app como diretório de trabalho
WORKDIR /app

# Copiando os arquivos essenciais para o app
COPY package.json package.lock.json* ./

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