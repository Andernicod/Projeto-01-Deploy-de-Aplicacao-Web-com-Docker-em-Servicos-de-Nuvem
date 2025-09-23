# Instalando a imagem docker com o java 17 e maven
FROM maven:3.8.5-openjdk-17

# Definindo o app como diretório de trabalho
WORKDIR /app

# Copiando as dependências do pom.xml
COPY pom.xml .

RUN mvn dependency:go-offline

# Copiando os arquivos da aplicação
COPY src ./src

# Executando o build da aplicação
RUN mvn clean package -DskipTests

# Expondo a porta 25000 ao docker
EXPOSE 25000

# Executando os comandos para iniar a aplicação
CMD [ "java", "-jar", "target/webapp-springboot3-1.0.0.jar" ]