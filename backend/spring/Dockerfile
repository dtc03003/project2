#백엔드
FROM openjdk:8-jdk

WORKDIR /server

COPY ./build/libs/spring-0.0.1-SNAPSHOT.jar spring.jar

ENTRYPOINT ["java", "-jar", "spring.jar"]
