# Library-app-with-docker-compose
Installation and Setup
**Step 1:** Clone the Repository
Clone the project to your local machine:

git clone <repository-url>
cd <repository-folder>

**Step 2:** Start the Application with Docker Compose
Run the following commands to build and start the application:
docker-compose up --build

This command:
Builds the backend, frontend, and PostgreSQL containers.
Starts the application and connects all services.

**Step 3:** Access the Application
Frontend: Open http://localhost:3000 in your browser.
Backend: Visit http://localhost:3001 for the API. The root endpoint (/) confirms the backend is running.
Database: The PostgreSQL container runs in the background.

Here is an example of usage:
![image](https://github.com/user-attachments/assets/136db4e4-75d8-4284-983b-0c55b514c096)

![image](https://github.com/user-attachments/assets/4f0150a0-b72c-4bdc-897f-2b36cf1a404c)
![image](https://github.com/user-attachments/assets/a0e83932-15bb-4233-811e-c1c82d584ef5)
![image](https://github.com/user-attachments/assets/29abb67c-2b23-4370-87f4-a1c1a64f4530)
