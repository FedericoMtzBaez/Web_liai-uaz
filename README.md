# LIAI - Laboratorio de Invenciones Aplicadas a la Industria | UAZ

Este proyecto es el sitio web oficial del **Laboratorio de Invenciones Aplicadas a la Industria (LIAI)** de la **Universidad Autónoma de Zacatecas (UAZ)**. El sitio está diseñado para mostrar las áreas de especialización, publicaciones, colaboradores, vacantes y proyectos destacados del laboratorio, así como para facilitar el contacto y la difusión de información relevante.

## Tabla de Contenidos
- [Descripción General](#descripción-general)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación y Uso](#instalación-y-uso)
- [Secciones Principales](#secciones-principales)
- [Colaboradores](#colaboradores)
- [Contacto](#contacto)

## Descripción General
El sitio web está orientado a la difusión de las actividades, investigaciones y logros del LIAI. Permite a los visitantes conocer los campos de acción del laboratorio, consultar publicaciones científicas, explorar vacantes de proyectos y contactar al equipo.

## Estructura del Proyecto
```
project/
│
├── index.html                # Página principal del sitio web
├── main.js                   # Script principal (Vite starter, ejemplo)
├── counter.js                # Script auxiliar para contador (Vite starter)
├── package.json              # Configuración de dependencias y scripts
├── netlify.toml              # Configuración de despliegue para Netlify
├── css/                      # Hojas de estilos CSS
│   ├── animations.css
│   ├── components.css
│   ├── layout.css
│   ├── menu-improved.css
│   ├── reset.css
│   ├── styles.css
│   ├── typography.css
│   └── utilities.css
├── js/                       # Scripts JavaScript adicionales
│   ├── animations.js
│   ├── carousel.js
│   ├── collapsibles.js
│   ├── counters.js
│   ├── filters.js
│   ├── forms.js
│   ├── main.js
│   ├── navigation.js
│   └── tabs.js
├── public/                   # Recursos públicos (imágenes, etc.)
├── style.css                 # Hoja de estilos global
├── javascript.svg            # Logo de JavaScript
└── .gitignore                # Exclusiones de Git
```

## Tecnologías Utilizadas
- **HTML5** y **CSS3** para la estructura y estilos del sitio.
- **JavaScript** para la interactividad.
- **Vite** como entorno de desarrollo y empaquetado rápido.
- **Netlify** para despliegue continuo **SOLO PARA Pruebas**.
- **DOCKER** para el deploy final dentro de los servidores de la UAZ
- **Font Awesome** para iconos.

## Instalación y Uso
1. **Clonar el repositorio:**
   ```bash
   git clone <url-del-repositorio>
   cd project
   ```
2. **Instalar dependencias:**
   ```bash
   npm install
   ```
3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
4. **Abrir en el navegador:**
   Visita `http://localhost:5173` (o el puerto que indique Vite).
## Deploy Final
## Despliegue con Docker y Nginx 🐳

Este proyecto utiliza Docker para crear un entorno de producción autocontenido y portátil. Usamos una imagen oficial de Nginx como servidor web por su alta eficiencia y bajo consumo de recursos, ideal para servir sitios estáticos como este.

### Cómo Ejecutar el Proyecto Localmente

- **Tener Docker Desktop instalado y en ejecución.**
1. **Clonar el repositorio:**
   ```bash
    git clone https://github.com/FedericoMtzBaez/Web_liai-uaz.git
    cd Web_liai-uaz
   ```
2. **Construye la imagen de Docker:**
   ```bash
    docker build -t liai-uaz-web .
   ```
3. **Ejecuta el contenedor:**   
   ```bash
    docker run -d -p 8080:80 --name liai-web liai-uaz-web
   ```
4. **¡Listo! Abre tu navegador y visita http://localhost:8080 para ver el sitio en funcionamiento. 🎉**    
## Secciones Principales
- **Inicio:** Presentación y carrusel de imágenes.
- **Acerca de:** Información sobre el laboratorio.
- **Campos de Acción:** Áreas de especialización (Agrotecnología, Civiltrónica, etc.) con pestañas interactivas.
- **Publicaciones:** Listado de artículos y proyectos destacados.
- **Colaboradores:** Información sobre los miembros y colaboradores.
- **Vacantes:** Oportunidades de participación en proyectos.
- **Producción Destacada:** Proyectos y desarrollos relevantes.
- **Contacto:** Formulario y datos de contacto.

## Colaboradores
El sitio está gestionado por el equipo del LIAI-UAZ. Para más información sobre los colaboradores, consulta la sección correspondiente en la página principal.

## Contacto
Para dudas, sugerencias o contacto institucional, utiliza el formulario en la sección "Contacto" del sitio web o escribe a:

- **Correo:** liai@uaz.edu.mx
- **Sitio web UAZ:** [https://www.uaz.edu.mx](https://www.uaz.edu.mx)

---

> Proyecto desarrollado con fines académicos y de difusión científica.
