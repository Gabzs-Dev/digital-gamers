
# Etapa 1: construir a aplicação React/Vite
FROM node:22-alpine AS build

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as dependências conforme o package-lock.json
RUN npm ci

# Copia os demais arquivos do projeto
COPY . .

# Gera a versão de produção
RUN npm run build

# Etapa 2: disponibilizar a aplicação com Nginx
FROM nginx:alpine

# Copia o resultado da construção para o Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Informa a porta utilizada pela aplicação
EXPOSE 80

# Inicia o servidor Nginx
CMD ["nginx", "-g", "daemon off;"]
