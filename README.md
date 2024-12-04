# Express HTTP Methods Project

## **Project Overview**

This project demonstrates how to implement basic HTTP methods (GET and POST) using Express.js. It includes handling URL and query parameters, parsing JSON data, and error handling, with a bonus feature to fetch jokes from an external API.

---

## **Setup and Configuration**

### **1. Clone the Repository**

Clone this repository to your local machine:

```bash
git clone <repository-url>
cd express-http-methods
```

### **2. Initialize the Project**

Ensure you have Node.js installed. Run the following command to generate project files:

```bash
npm init -y
```

### **3. Install Dependencies**

Install Express, the core library for building the server:

```bash
npm install express
```

### **4. Update `package.json`**

Ensure the `type` field in `package.json` is set to `module` for ES module support:

```json
{
  "type": "module"
}
```

---

## **Implementing Routes**

### **1. Middleware**

The server uses middleware to parse JSON data in incoming requests:

```javascript
app.use(express.json());
```

### **2. Routes**

#### **GET `/`**

- **Description**: Returns a welcome message.
- **Response**:
  ```plaintext
  Welcome to Random Thoughts!
  ```

#### **GET `/about`**

- **Description**: Returns information about the project.
- **Response**:
  ```json
  {
    "message": "A blog exploring diverse interests, including recipes, languages, and coding."
  }
  ```

#### **POST `/contact`**

- **Description**: Accepts JSON data and returns a confirmation.
- **Request Example**:
  ```json
  {
    "name": "John Doe",
    "email": "johndoe@example.com"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Contact received.",
    "data": {
      "name": "John Doe",
      "email": "johndoe@example.com"
    }
  }
  ```

#### **GET `/user/:id`**

- **Description**: Handles dynamic URL parameters.
- **Response Example**:
  ```json
  {
    "message": "User ID received: 12345"
  }
  ```

#### **GET `/search`**

- **Description**: Handles query parameters for search functionality.
- **Example Request**: `/search?term=spanish&sort=languages`
- **Response**:
  ```json
  {
    "message": "Search Query received: term=spanish, sort=languages"
  }
  ```

#### **GET `/joke` (Bonus)**

- **Description**: Fetches a random joke from an external API.
- **Response Example**:
  ```json
  {
    "id": 123,
    "type": "general",
    "setup": "Why don’t skeletons fight each other?",
    "punchline": "They don’t have the guts."
  }
  ```

### **3. Catch-All Route**

Handles undefined routes with a 404 error:

```json
{
  "error": 404,
  "message": "Route not found."
}
```

---

## **Handling URL and Query Parameters**

### **URL Parameters**

- Example: `/user/:id` handles dynamic IDs passed in the URL.
- Use Case: Fetching user-specific data based on ID.

### **Query Parameters**

- Example: `/search` processes search terms and sorting preferences.
- Use Case: Filter or sort data based on user input.

---

## **Testing**

### **Testing Tool**

This project was tested using [Thunder Client](https://www.thunderclient.io/), a lightweight VS Code extension for API testing.

### **Test Cases**

#### **POST `/contact`**

![alt text](<Screenshot 2024-12-03 215542.png>)

#### **GET `/user/:id`**

![alt text](<Screenshot 2024-12-03 215834.png>)

#### **GET `/search`**

![alt text](<Screenshot 2024-12-03 220320.png>)

#### **GET `/joke`**

![alt text](<Screenshot 2024-12-04 125616.png>)

#### **Invalid Route**

- Try accessing an undefined route, e.g., `/undefined`.
  ![alt text](<Screenshot 2024-12-03 220846.png>)

---

## **References**

- [Node.js Fetch API Example](https://deadsimplechat.com/blog/nodejs-fetch-api/)
- [Mastering Express.js Error Handling](https://www.turing.com/kb/how-to-master-express-js-error-handling)

---

## **Running the Server**

Start the server:

```bash
node index.js
```

Visit the server at `http://localhost:3000`.

---
