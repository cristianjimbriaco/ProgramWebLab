# ProgramWebLab
Hollow News

Hollow News es una página web dedicada a la difusión de contenido relacionado con el videojuego Hollow Knight y su esperada secuela Silksong. Su propósito principal es permitir que los usuarios consulten noticias, compartan publicaciones personales y se mantengan actualizados sobre este universo.

Tecnologías utilizadas
HTML5: Para la estructura semántica del contenido.
CSS3: Para los estilos personalizados y tematización con los colores y estética del videojuego.
Bootstrap 5: Para diseño responsivo y componentes predefinidos reutilizables (navbar, cards, formularios, etc).
JavaScript: Para manejar eventos del formulario, solicitudes HTTP y dinámica del contenido.
Fetch API: Para enviar formularios simulados a https://jsonplaceholder.typicode.com/posts.
LocalStorage: Para almacenar publicaciones y datos del usuario sin necesidad de un backend real.
Github: Como control de versiones.
Estructura del proyecto

HollowNews/
├── index.html                     # Página principal con noticias y publicaciones
├── README.md                      # Este archivo
├── shared/
│   ├── components/                # Fragmentos HTML reutilizables (header, navbar, footer)
│   │   ├── header.html
│   │   ├── navbar.html
│   │   └── footer.html
│   ├── css/
│   │   ├── vars.css              # Variables globales (colores, fuentes, etc.)
│   │   └── common.css            # Estilos globales compartidos
│   └── js/
│       ├── injector.js           # Carga dinámica de componentes compartidos
│       ├── formHandler.js        # Envío de formularios y guardado en localStorage
│       └── mostrarPublicaciones.js # Renderizado dinámico en la página principal
├── assets/
│   ├── fonts/                    # Fuentes personalizadas
│   ├── icons/                    # Íconos SVG
│   └── img/                      # Imágenes optimizadas
└── views/
    ├── config/
    │   ├── config.html           # Vista de configuración de perfil
    │   └── config.css
    ├── contact/
    │   ├── contact.html          # Vista de contacto
    │   └── contact.css
    └── share/
        ├── share.html           # Vista de compartir publicaciones
        └── share.css

Decisiones arquitectónicas

Separación de componentes: Se crearon fragmentos reutilizables como header, navbar y footer para facilitar el mantenimiento. Esto permite cambiar una vez y que afecte a todas las vistas.

Organización modular: Cada vista (contact, config, share) tiene su propia carpeta con su HTML y CSS específico. Esto mejora la escalabilidad y claridad del proyecto.

Uso de shared: Todos los recursos reutilizables están agrupados en shared/, facilitando el acceso a estilos comunes, JS compartido y componentes HTML.

Diseño responsivo: Se utilizó Bootstrap Grid y Media Queries para asegurar una buena experiencia en desktop, tablet y móvil.

Simplicidad de backend: Dado que el enfoque es académico y no requiere base de datos real, se utilizó fetch contra un endpoint simulado y localStorage para persistencia en el navegador.

Cómo ejecutar el proyecto

Clona o descarga el repositorio.
Abre el archivo index.html en tu navegador.
Navega entre las páginas desde el menú principal.
No se requiere servidor o backend, ya que todo se ejecuta localmente desde el navegador.
Características destacadas
Sistema de publicaciones tipo foro
Estilo visual adaptado al universo de Hollow Knight
Componentes reutilizables y buen uso de semántica HTML
Formularios funcionales con simulación de backend y almacenamiento local