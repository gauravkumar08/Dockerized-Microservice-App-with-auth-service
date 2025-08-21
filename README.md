# 🚀 Microservice App with Docker Compose

This project demonstrates a simple **microservices architecture** using:
- **MongoDB** (database for services)
- **Redis** (caching/session store)
- **Auth Service** (handles user authentication)
- **Post Service** (handles posts management)
- **Nginx Gateway** (API gateway / reverse proxy)


## ⚙️ Services

1. **MongoDB**  
   - Port: `27017`  
   - Data stored in a Docker volume `mongo_data`.

2. **Redis**  
   - Port: `6379`  
   - Used by `auth_service` for caching/sessions.

3. **Auth Service**  
   - Port: `5000` (internal)  
   - Connected to MongoDB + Redis.  
   - Accessible via Nginx at:  
     ```
     http://localhost/auth
     ```

4. **Post Service**  
   - Port: `5001` (internal)  
   - Connected to MongoDB.  
   - Accessible via Nginx at:  
     ```
     http://localhost/posts
     ```

5. **Nginx Gateway**  
   - Port: `80` (external)  
   - Acts as reverse proxy for `auth_service` and `post_service`.

## 🚀 Getting Started

1️⃣ Clone Repository
```bash
git clone https://github.com/yourusername/microservice-app.git
cd microservice-app

2️⃣ Build & Start Services
```bash
docker-compose up -d --build

3️⃣ Verify Running Containers
```bash
docker ps



