

# Usar una imagen base oficial de Nginx.

FROM nginx:alpine


LABEL maintainer="Fede Mtz Baez"
LABEL version="1.0"
LABEL description="Sitio web para LIAI UAZ."

COPY . /usr/share/nginx/html
EXPOSE 80
# Copiar los archivos de tu sitio web al directorio correcto de Nginx.

COPY . /usr/share/nginx/html

#Exponer el puerto escucha 80.
EXPOSE 80