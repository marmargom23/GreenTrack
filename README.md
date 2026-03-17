# 🌱 GreenTrack — Gestión Inteligente del Consumo Energético

[![Angular](https://img.shields.io/badge/Angular-21-red?logo=angular&logoColor=white)]()
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.0-brightgreen?logo=springboot&logoColor=white)]()
[![Java](https://img.shields.io/badge/Java-17-orange?logo=oracle&logoColor=white)]()
[![H2 Database](https://img.shields.io/badge/Database-H2-blue)]()
[![License](https://img.shields.io/badge/License-Academic-lightgrey)]()
[![Status](https://img.shields.io/badge/Status-Finalizado-success)]()

---

## 📘 Descripción del Proyecto

GreenTrack es una aplicación web diseñada para que los usuarios puedan:

- Registrar su consumo energético.
- Establecer objetivos mensuales.
- Recibir recomendaciones personalizadas.
- Visualizar su progreso mediante un dashboard moderno.

El sistema está dividido en:

- Frontend: Angular 21 + Angular Material  
- Backend: Spring Boot 3 + Spring Security + JWT  
- Base de datos: H2 (en memoria)

---

## 🖼️ Vista previa del proyecto

### 🔐 Pantalla de Login
![Login](https://dummyimage.com/900x400/222/fff&text=Login+Screen)

### 📊 Dashboard
![Dashboard](https://dummyimage.com/900x400/333/fff&text=Dashboard)

### ⚡ Gestión de Consumos
![Consumos](https://dummyimage.com/900x400/444/fff&text=Consumos)

*(Puedes reemplazar estas imágenes por capturas reales de tu proyecto.)*

---

## 🚀 Características principales

### 🔐 Autenticación y seguridad
- Login y registro con JWT
- Protección de rutas privadas con AuthGuard
- Interceptor que añade el token automáticamente
- Backend protegido con Spring Security

### 🎨 Interfaz moderna
- Modo oscuro
- Angular Material
- Componentes standalone
- SCSS personalizado

### 📊 Funcionalidades
- Dashboard con resumen del consumo
- CRUD de consumos energéticos
- Gestión de objetivos mensuales
- Gestión de recomendaciones
- Filtrado de datos por usuario autenticado

---

## 🧩 Arquitectura del Frontend (Angular 21)
- src/app
- ├─ app.component.*
- ├─ app.routes.ts
- ├─ core/
- │  ├─ guards/
- │  ├─ interceptors/
- │  └─ services/
- ├─ layout/
- ├─ pages/
- ├─ features/
- │  ├─ consumos/
- │  ├─ dashboard/
- │  ├─ objetivos/
- │  └─ recomendaciones/
- ├─ services/
- ├─ models/
- └─ shared/


### Funcionamiento
- El usuario inicia sesión.
- El token se guarda en localStorage.
- El AuthGuard protege las rutas.
- El interceptor añade el token a cada petición.
- Los servicios consumen la API del backend.

---

## 🗄 Arquitectura del Backend (Spring Boot 3)

- com.greentrack.api
- ├─ config/
- ├─ controller/
- ├─ dto/
- ├─ errors/
- ├─ mapper/
- ├─ model/
- ├─ repository/
- ├─ security/
- ├─ service/
- ├─ util/
- └─ validators/


### Funcionamiento
- Spring Security valida el token.
- El servicio obtiene el usuario autenticado.
- Las consultas se filtran por usuario.
- Los mappers convierten entidades ↔ DTOs.
- Se devuelven datos limpios al frontend.

---

## 🗃 Base de datos — H2

Características:
- Base de datos en memoria
- No requiere instalación
- Se crea automáticamente
- Perfecta para proyectos académicos

Consola H2:
- http://localhost:8080/h2-console


---

## ▶ Ejecución del proyecto

### Frontend
- npm install
- ng serve

Disponible en:
http://localhost:4200


### Backend
- mvn clean install
- mvn spring-boot:run

Disponible en:
http://localhost:8080


---

## 📁 Estructura del proyecto

- /frontend
- /src
- angular.json
- package.json

- /backend
- /src
- pom.xml
- application.properties


Carpetas eliminadas:
- node_modules/
- dist/
- target/

---

## 🎯 Funcionamiento general del sistema

1. El usuario se registra o inicia sesión.
2. El backend genera un JWT.
3. El frontend guarda el token.
4. Angular solicita datos al backend.
5. Spring Security valida el token.
6. El servicio obtiene el usuario autenticado.
7. Se devuelven solo los datos del usuario.

---

## 📜 Licencia

Proyecto desarrollado como entrega académica.  
Puede modificarse y adaptarse libremente.

---

## 👤 Autor

Mario  
Proyecto desarrollado para entrega académica.


