// Aqui estamos dizendo qual imagem base queremos utilizar para construit nossa aplicação, nesse caso estamos utilizando a imagem do node na versão 18 com alpine, quando utilizamos o alpine estamos utilizando uma imagem mais leve, o que é recomendado para produção, pois ela tem menos vulnerabilidades e é mais rápida para iniciar.
FROM node:18-alpine;

// Aqui estamos definindo o diretorio de trabalho dentro do container, ou seja, onde os arquivos da nossa aplicação vão ficar dentro do container, nesse caso estamos utilizando o diretório /app.
WORKDIR /app;

// Aqui estamos copiando os arquivos de dependência para o container.
COPY package*.json ./

// Aqui estamos copiando os arquivos da pasta prisma para o container.
COPY prisma ./prisma/

// Aquis estamos instalando as dependencias do projeto.
RUN npm install;

// Aqui estamos copiando o restante do codigo do projeto.
COPY . .;

// Estamos gerando o cliente prisma para a base funcionar
RUN npx prisma generate;

// Expondo a porta que a API utiliza.
EXPOSE 3000;

// Aqui são os comando que o Docker vai utilizar para iniciar a API.
CMD ["npm", "run", "dev"];