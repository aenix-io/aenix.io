# Служба экзамена. Зависимостей нет вовсе — только стандартная библиотека Node.
FROM node:22-alpine
WORKDIR /app
COPY src/ ./src/
# Работает от непривилегированного пользователя: в кластере с профилем `restricted`
# под от root просто не допустят к запуску.
RUN addgroup -g 10001 app && adduser -D -u 10001 -G app app
USER 10001
EXPOSE 8080
CMD ["node", "src/server.js"]
