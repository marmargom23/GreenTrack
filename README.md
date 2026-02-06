# 🌱 GreenTrack — Proyecto Intermodular 2º DAW

GreenTrack es una aplicación web diseñada para ayudar a los usuarios a monitorizar su consumo energético, establecer objetivos mensuales y recibir recomendaciones para mejorar su eficiencia energética.

Este proyecto forma parte de la **Entrega Final del Proyecto Intermodular de 2º DAW**.

---

## 🚀 Tecnologías utilizadas

### **Frontend**
- React
- React Router
- Bootstrap 5
- Axios
- Chart.js

### **Backend**
- Node.js + Express
- MySQL (mysql2)
- JWT (jsonwebtoken)
- bcryptjs
- CORS
- Dotenv

---

## 📁 Estructura del proyecto

```
GreenTrack/
  backend/
  frontend/
  README.md
  .gitignore
```

---

## ⚙️ Instalación y ejecución

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/TU_USUARIO/GreenTrack.git
cd GreenTrack
```

---

# 🗄️ Backend

### 2️⃣ Instalar dependencias

```bash
cd backend
npm install
```

### 3️⃣ Configurar variables de entorno

Crear un archivo `.env` dentro de `/backend`:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=greentrackdb
DB_PORT=3306
PORT=4000
JWT_SECRET=supersecreto
```

### 4️⃣ Ejecutar backend

```bash
npm run dev
```

El backend se ejecutará en:

```
http://localhost:4000
```

---

# 💻 Frontend

### 5️⃣ Instalar dependencias

```bash
cd ../frontend
npm install
```

### 6️⃣ Ejecutar frontend

```bash
npm start
```

El frontend se abrirá en:

```
http://localhost:3000
```

---

## 🔐 Autenticación

El sistema utiliza:

- Registro de usuarios
- Login con JWT
- Protección de rutas privadas
- Almacenamiento del token en localStorage

---

## 📊 Funcionalidades principales

### ✔ Dashboard
- Gráfica del consumo energético
- Último consumo registrado
- Objetivo actual

### ✔ Gestión de consumo
- Añadir consumo mensual
- Ver histórico

### ✔ Gestión de objetivos
- Establecer límite mensual de kWh
- Ver objetivos anteriores

### ✔ Recomendaciones
- Añadir recomendaciones personalizadas
- Ver historial

---

## 🧪 Base de datos

Tablas utilizadas:

- `Usuarios`
- `ConsumoEnergetico`
- `Objetivos`
- `Recomendaciones`

---

## 📦 Entrega en Aules

Para cumplir con el límite de 50 MB:

- **NO subas `node_modules`**
- **NO subas `.env`**
- Entrega un ZIP con:
  - Memoria
  - Enlace a GitHub
  - Capturas
  - Explicación de instalación

---

## 👨‍💻 Autor

**Mario**  
2º DAW — Proyecto Intermodular  
