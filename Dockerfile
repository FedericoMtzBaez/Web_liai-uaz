# Usar una imagen base oficial de Nginx.
FROM nginx:alpine

LABEL maintainer="Fede Mtz Baez"
LABEL version="1.0"
LABEL description="Sitio web para LIAI UAZ."

# Copiar los archivos al contenedor
COPY . /usr/share/nginx/html

# Exponer el puerto
EXPOSE 80