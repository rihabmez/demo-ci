# Utilisez une image de node.js en tant que base
FROM node:14

# Copiez le contenu du répertoire actuel dans le conteneur à /app
COPY .. /app

# Définissez le répertoire de travail
WORKDIR /app

# Installez les dépendances de l'application
RUN npm install

# Exposez le port 3000 sur le conteneur
EXPOSE 3000

# Démarrez l'application en utilisant la commande npm start
CMD ["npm", "start"]
