# Proyecto: Gestión Bibliotecaria

El proyecto consiste en una aplicación WEB tipo SPA para la gestión de una biblioteca. Permite administrar **libros**, **autores**, **clientes**, **empleados** y **préstamos**, a través de una interfaz intuitiva con operaciones CRUD completas.

## Tecnologías utilizadas

| Capa | Tecnología |
|------|------------|
| **Frontend** | React 19 + Vite + React Router |
| **Backend / API** | JSON Server (API REST simulada) |
| **Estilos** | W3.CSS + Font Awesome |
| **Runtimes soportados** | Node.js / Deno.js |

## Estructura del proyecto

```
Proyecto_biblio/
├── backend/
│   ├── db/
│   │   └── datos.json        # Base de datos JSON
│   ├── deno.json              # Configuración para Deno
│   └── package.json           # Configuración para Node.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── paginas/       # Páginas principales de la app (Libros, Autores, etc.)
│   │   │   ├── tablas/        # Componentes de tabla con edición y borrado
│   │   │   ├── forms/         # Formularios de registro y actualización
│   │   │   └── NavBar.jsx     # Barra de navegación
│   │   ├── services/          # Servicios de comunicación con la API
│   │   ├── App.jsx            # Componente raíz con rutas
│   │   └── main.jsx           # Punto de entrada
│   ├── package.json
│   └── vite.config.js
└── ...
```

## Requisitos previos

Tener instalado **uno** de los siguientes runtimes:

- [Node.js](https://nodejs.org/) (v18 o superior) con npm
- [Deno](https://deno.land/) (v1.40 o superior)

## Instalación y ejecución

### Clonar el repositorio

```bash
git clone <url-del-repositorio>
cd Proyecto_biblio
```

---

#### 1. Instalar dependencias del backend

```bash
cd backend
npm install
```

> **Nota:** Si usas Deno, puedes omitir este paso. Deno descarga las dependencias automáticamente al ejecutar.

#### 2. Iniciar el servidor API (en una terminal)

Con Node.js:
```bash
npm run back
```

Con Deno:
```bash
# Entra en la carpeta del backend, si no estás en ella
cd backend
deno run back
```

> El servidor se levantará en `http://localhost:52752`

#### 3. Instalar dependencias del frontend (en otra terminal)

Con Node.js:
```bash
cd frontend
npm install
```

Con Deno:
```bash
cd frontend
deno install
# Solo valido de Deno 2.0.0 en adelante
```

#### 4. Iniciar el servidor de desarrollo del frontend

Con Node.js:
```bash
npm run dev
```

Con Deno:
```bash
deno run dev
```

> El frontend estará disponible en `http://localhost:5173`

---

## 🖥️ Uso de la aplicación

1. Abre el navegador en `http://localhost:5173`
2. Usa la **barra de navegación** para moverte entre las secciones
3. Cada sección presenta:
   - Una **tabla** con los registros existentes
   - Botones de **Editar** (verde) y **Borrar** (rojo) por cada registro
   - Un **formulario** debajo de la tabla para registrar o actualizar datos
4. Al presionar **Editar**, el formulario se llena automáticamente con los datos del registro seleccionado
5. Al presionar **Borrar**, se muestra una confirmación antes de eliminar

## 📝 Módulos disponibles

| Módulo | Ruta | Descripción |
|--------|------|-------------|
| Inicio | `/` | Página principal |
| Libros | `/libros` | Gestión de libros (con selección de autor) |
| Autores | `/autores` | Gestión de autores |
| Clientes | `/clientes` | Gestión de clientes/usuarios |
| Empleados | `/empleados` | Gestión de empleados |
| Préstamos | `/prestamos` | Gestión de préstamos (con selección de libro y cliente) |
