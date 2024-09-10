# Usando uma imagem base do Node.js
FROM node:18

# Definindo o diretório de trabalho no contêiner
WORKDIR /app

# Copiando o package.json e o package-lock.json (ou yarn.lock)
COPY package*.json ./
COPY yarn.lock ./

# Instalando as dependências
RUN npm install

# Copiando o restante do código da aplicação
COPY . .

# Expondo a porta que o Vite utiliza
EXPOSE 5173

# Configurando o Vite para ouvir em todas as interfaces de rede
CMD ["npm", "run", "dev", "--", "--host"]
