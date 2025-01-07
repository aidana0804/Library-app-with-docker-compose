import React, { useState, useEffect } from "react";

const App = () => {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/api/books")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error("Error fetching books:", err));
  }, []);
  
  const addBook = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/api/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, author }),
    })
      .then((res) => res.json())
      .then((newBook) => {
        setBooks([...books, newBook]);
        setTitle("");
        setAuthor("");
      })
      .catch((err) => console.error("Error adding book:", err));
  };
  
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Library Management</h1>
      <form onSubmit={addBook} style={styles.form}>
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Add Book
        </button>
      </form>
      <h2 style={styles.subHeader}>Book List</h2>
      <ul style={styles.list}>
        {books.map((book) => (
          <li key={book.id} style={styles.listItem}>
            {book.title} by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#f0f4f8",
    maxWidth: "400px",
    margin: "0 auto",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  header: {
    textAlign: "center",
    color: "#0077b6",
    marginBottom: "20px",
  },
  subHeader: {
    textAlign: "center",
    color: "#0077b6",
    marginTop: "30px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #b0c4de",
    outline: "none",
    fontSize: "14px",
  },
  button: {
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#0077b6",
    color: "white",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "bold",
    transition: "background-color 0.3s",
  },
  list: {
    listStyle: "none",
    padding: "0",
    marginTop: "20px",
  },
  listItem: {
    backgroundColor: "#e1eaf1",
    padding: "10px",
    borderRadius: "5px",
    marginBottom: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
};

export default App;
