# Use OpenJDK 21 as base
FROM openjdk:21-jdk-slim

# Set working directory
WORKDIR /app

# Copy Maven wrapper and config
COPY mvnw ./
COPY .mvn .mvn
COPY pom.xml ./

# Ensure mvnw is executable
RUN chmod +x mvnw

# Download dependencies
RUN ./mvnw dependency:go-offline -B

# Copy source
COPY src ./src

# Package the app and rename jar
RUN ./mvnw clean package -DskipTests && cp target/*.jar app.jar

# Expose Spring Boot’s default port
EXPOSE 8080

# Run the jar
CMD ["java", "-jar", "app.jar"]1
