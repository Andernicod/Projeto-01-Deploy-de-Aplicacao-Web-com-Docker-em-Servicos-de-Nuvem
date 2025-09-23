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

FROM openjdk:17-jre-slim

WORKDIR /app

# Copia APENAS o arquivo .jar gerado no estágio anterior
COPY --from=builder /app/target/webapp-springboot3-1.0.0.jar app.jar

EXPOSE 25000

# Comando para iniciar a aplicação
ENTRYPOINT [ "java", "-jar", "app.jar" ]