# Use Temurin OpenJDK 21 as base image
FROM eclipse-temurin:21-jdk-jammy

# Set working directory inside container
WORKDIR /app

# Copy Maven wrapper and configuration
COPY mvnw ./
COPY .mvn .mvn
COPY pom.xml ./

# Make Maven wrapper executable
RUN chmod +x mvnw

# Download dependencies (cached layer)
RUN ./mvnw dependency:go-offline -B

# Copy application source code
COPY src ./src

# Build the Spring Boot jar and rename it
RUN ./mvnw clean package -DskipTests && cp target/*.jar app.jar

# Expose Spring Boot port
EXPOSE 8080

# Run the application
CMD ["java", "-jar", "app.jar"]