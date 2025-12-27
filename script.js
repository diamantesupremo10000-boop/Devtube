// DATOS REALES DE TUS PROYECTOS
// Usamos imágenes de placeholder temáticas para que se vea profesional sin screenshots
const projects = [
    {
        title: "ToDo List FullStack con API REST",
        channel: "Productividad",
        views: "1.2k vistas",
        date: "hace 2 días",
        duration: "Node.js",
        thumbnail: "Devtube/script.js/Microsoft_To-Do_icon.svg.png55a3&query=To+do+listc7-b908-d5e7c26755a3&query=To+do+list", 
        url: "https://to-do-list-92jq.onrender.com",
        avatarColor: "#2ecc71"
    },
    {
        title: "Plataforma de Blog Markdown (SPA)",
        channel: "CMS Personal",
        views: "850 vistas",
        date: "hace 1 semana",
        duration: "SQLite",
        thumbnail: "https://via.placeholder.com/640x360/8e44ad/ffffff?text=Blog+Markdown",
        url: "https://mi-blog-personal-e17g.onrender.com",
        avatarColor: "#9b59b6"
    },
    {
        title: "Rastreador de Finanzas Personales",
        channel: "Fintech",
        views: "2.5k vistas",
        date: "hace 3 semanas",
        duration: "Express",
        thumbnail: "https://via.placeholder.com/640x360/c0392b/ffffff?text=Finance+Tracker",
        url: "https://mi-finanzas-app-0xs8.onrender.com",
        avatarColor: "#e74c3c"
    }
];

const videoGrid = document.getElementById('videoGrid');
const searchInput = document.getElementById('searchInput');

// Función para renderizar proyectos
function renderProjects(data) {
    videoGrid.innerHTML = ''; // Limpiar grid

    data.forEach(project => {
        const card = document.createElement('div');
        card.classList.add('video-card');
        
        // Al hacer click, abrir el proyecto en una pestaña nueva
        card.onclick = () => {
            window.open(project.url, '_blank');
        };

        card.innerHTML = `
            <div class="thumbnail-container">
                <img src="${project.thumbnail}" alt="${project.title}">
                <div class="duration">${project.duration}</div>
            </div>
            <div class="video-info">
                <div class="channel-avatar" style="background-color: ${project.avatarColor}"></div>
                <div class="video-details">
                    <div class="video-title">${project.title}</div>
                    <div class="channel-name">${project.channel}</div>
                    <div class="views-date">${project.views} • ${project.date}</div>
                </div>
            </div>
        `;

        videoGrid.appendChild(card);
    });
}

// Renderizar al inicio
renderProjects(projects);

// Funcionalidad de Búsqueda
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    const filteredProjects = projects.filter(project => 
        project.title.toLowerCase().includes(searchTerm) || 
        project.duration.toLowerCase().includes(searchTerm) ||
        project.channel.toLowerCase().includes(searchTerm)
    );

    renderProjects(filteredProjects);
});
