# API Faccat

## Rodando pela primeira vez

    1. Instalar as dependências, comando: npm i
    2. Verificar conexão com o banco de dados no arquivo: app/config/database.json
    3. Verificar o IP no arquivo: .env
    4. Criar as tabelas, comando: npx sequelize-cli db:migrate
    5. Popular as tabelas com dados iniciais, comando: npx sequelize-cli db:seed:all
    6. Iniciar o servidor: npm start
