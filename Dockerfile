# Usa una imagen oficial de Node.js como base
FROM node:14

# Configura el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json al contenedor
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos al contenedor
COPY . .

# Expone el puerto 3000
EXPOSE 3000

# Inicia la aplicación al ejecutar el contenedor
CMD [ "npm", "start" ]
