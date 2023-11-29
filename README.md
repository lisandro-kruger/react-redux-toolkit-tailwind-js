## Proyecto de Aplicación de Tareas CRUD
Este proyecto es una aplicación de lista de tareas construida con React y Redux Toolkit. La aplicación permite a los usuarios crear, editar y eliminar tareas.

[Ver la Aplicación de Tareas con Redux Toolkit](https://react-redux-toolkit-tailwind-js.netlify.app/)

## Estructura del proyecto
El proyecto consta de cinco componentes principales:

### tasksSlice.jsx
Este archivo define las acciones y el reductor para las tareas. Las acciones incluyen agregar, editar y eliminar tareas. El estado inicial se establece con dos tareas de ejemplo.

### store.jsx
Este archivo configura el almacenamiento de Redux para la aplicación. Importa el reductor de tareas y lo agrega al almacenamiento.

### TaskForm.jsx
Este componente es un formulario que permite a los usuarios crear o editar tareas. Utiliza los hooks de React para manejar el estado del formulario y los hooks de Redux para despachar acciones.

### TasksList.jsx
Este componente muestra una lista de todas las tareas. Los usuarios pueden editar o eliminar tareas desde esta lista.

### App.jsx
Este componente es el componente principal de la aplicación. Define las rutas para la lista de tareas y el formulario de tareas.

### main.jsx
Este archivo es el punto de entrada de la aplicación. Renderiza el componente App y proporciona el almacenamiento de Redux a la aplicación.
