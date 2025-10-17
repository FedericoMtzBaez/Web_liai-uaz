

# Usar una imagen base oficial de Nginx.

FROM nginx:alpine
LABEL authors="fede"

# Copiar los archivos de tu sitio web al directorio correcto de Nginx.

COPY . /usr/share/nginx/html

#Exponer el puerto escucha 80.
EXPOSE 80