# Vue App Frameworks
Proyecto de ejemplo para la clase de Frameworks, consumiendo una API REST de productos y categorías. La interfaz usa Vue 3 con Vite y muestra cómo hacer peticiones `fetch`, manejar estados de carga y enrutar con Vue Router.

## Requisitos
- Node.js 18+ y npm.
- Backend disponible en `http://localhost:8000/api/v1/` con los recursos `categories/` y `products/` (puede ser Django/DRF u otra API). Asegúrate de iniciarlo antes de correr el front.

## Instalación
```bash
npm install
```

## Ejecutar en desarrollo
```bash
npm run dev
```
Abre el enlace que imprime Vite (por defecto `http://localhost:5173`).

## Scripts útiles
- `npm run dev`: servidor de desarrollo con recarga en caliente.
- `npm run build`: genera los archivos optimizados para producción.
- `npm run lint`: revisión con ESLint.

## Qué incluye
- **Rutas**: `Home`, `Categorias`, `Productos` configuradas en `src/router/index.js`.
- **Consumo de API**: componentes `CategoryList.vue` y `ProductList.vue` usan `fetch` a `http://localhost:8000/api/v1/categories/` y `http://localhost:8000/api/v1/products/`, mostrando estados de carga y error. En la siguiente sesión se migrará a `axios` para ilustrar interceptores, manejo de cabeceras y baseURL.
- **Componentes base**: tarjetas simples (`CategoryCard.vue`, `ProductCard.vue`) listas para reutilizarse.

## Ajustar la URL de la API
Si tu backend expone otra ruta o puerto, modifica la URL en:
- `src/components/Category/CategoryList.vue`
- `src/components/Product/ProductList.vue`

Ejemplo rápido:
```js
fetch('http://localhost:3000/api/categories/')
```

## Flujo sugerido para la clase
1) Levantar el backend y probar los endpoints `GET /categories/` y `GET /products/`.
2) Ejecutar el front con `npm run dev` y navegar a `Categorias` y `Productos`.
3) Personalizar las tarjetas (`Card`) para mostrar más datos o estilos.
