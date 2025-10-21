// Espera a que todo el HTML esté cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. TUS DATOS ---
    // Aquí centralizas toda la información.
    // Si no hay enlace, pon 'null'.
    const universidades = [
        {
            nombre: "Universidad Autónoma de Zacatecas",
            logo: "logos/logoUAZ.png",
            alt: "Logo Universidad Autónoma de Zacatecas",
            colaboradores: [
                { nombre: "Dr. Luis Octavio Solis Sánchez", scholar: "https://scholar.google.com/citations?hl=es&user=rFbrKewAAAAJ&view_op=list_works&sortby=pubdate" },
                { nombre: "Dr. José Ismael de la Rosa Vargas", scholar: "https://scholar.google.com/citations?hl=es&user=gKYHISwAAAAJ&view_op=list_works&sortby=pubdate" },
                { nombre: "Dr. José Antonio Rodríguez Rodríguez", scholar: "https://scholar.google.com/citations?hl=es&user=iEzFPw8AAAAJ&view_op=list_works&sortby=pubdate" },
                { nombre: "Dr. Alfredo Lara Herrera", scholar: "https://scholar.google.com/citations?user=tGFQvy0AAAAJ&hl=en" }, // Puedes usar '#' como placeholder
                { nombre: "Dra. Valeria Maeda Gutiérrez", scholar: "https://scholar.google.com/citations?hl=es&user=g4FCiQQAAAAJ&view_op=list_works&sortby=pubdate" }
            ]
        },
        {
            nombre: "Universidad Autónoma de Querétaro",
            logo: "logos/logoUAQ.jpg",
            alt: "Logo Universidad Autónoma de Querétaro",
            colaboradores: [
                { nombre: "Dr. Genaro Martín Soto Zarazua", scholar: "https://scholar.google.com/citations?user=1f71mxwAAAAJ&hl=es" },
                { nombre: "Dr. Juvenal Rodríguez Reséndiz", scholar: "http://juvenal.mx/" }
            ]
        },
        {
            nombre: "West Virginia University",
            logo: "logos/logoWVU.png",
            alt: "Logo West Virginia University",
            colaboradores: [
                { nombre: "Dr. Sven Verlinden", scholar: "https://www.davis.wvu.edu/faculty-staff/directory/sven-verlinden" }
            ]
        },
        {
            nombre: "Huazhong Agricultural University",
            logo: "logos/logoHAU.jpg",
            alt: "Logo Huazhong Agricultural University",
            colaboradores: [
                { nombre: "Dra. Xizi Chen", scholar: "https://faculty.hzau.edu.cn/chenxizi/en/index/246627/list/index.htm" }
            ]
        },
        {
            nombre: "Tlachia Systems, CRD Ingeniería y Consultoría",
            logo: "logos/logoTS.png",
            alt: "Logo Tlachia Systems",
            colaboradores: [
                { nombre: "M.C. David Duarte Correa", scholar: "https://tlachia.com/home/" }
            ]
        }
    ];

    // --- 2. LA LÓGICA PARA "PINTAR" EL HTML ---

    // Obtenemos el contenedor que dejamos en el HTML
    const container = document.getElementById('colaboradores-grid');
    if (!container) return; // Buena práctica: salir si no se encuentra el contenedor

    // Recorremos cada universidad para crear su tarjeta
    universidades.forEach(uni => {

        // Creamos los <p> para cada colaborador de esta universidad
        const colaboradoresHtml = uni.colaboradores.map(col => {

            // Creamos el enlace de Scholar SÓLO si existe
            const scholarLink = col.scholar
                ? `<a href="${col.scholar}" target="_blank" rel="noopener noreferrer" aria-label="Perfil de Google Scholar" class="scholar-link">
             <i class="fa-solid fa-graduation-cap"></i>
           </a>`
                : ''; // Si es 'null', no añade nada

            // Devolvemos el párrafo completo
            return `<p class="team-position">${col.nombre} ${scholarLink}</p>`;

        }).join(''); // Unimos todos los párrafos en un solo bloque de texto


        // Creamos la tarjeta completa de la universidad
        const universityCardHtml = `
      <div class="team-card">
        <div class="team-info">
          <div class="university-header">
            <img src="${uni.logo}" alt="${uni.alt}" class="university-logo">
            <h3>${uni.nombre}</h3>
          </div>
          ${colaboradoresHtml}
        </div>
      </div>
    `;

        // Añadimos la tarjeta de esta universidad al contenedor
        container.innerHTML += universityCardHtml;
    });

});