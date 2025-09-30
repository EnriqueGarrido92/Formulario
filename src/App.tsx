import React, { useState, useEffect } from "react";
import "./App.css";

const App: React.FC = () => {
  const [items, setItems] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const storedItems = localStorage.getItem("mi-lista");
    if (storedItems) setItems(JSON.parse(storedItems));
  }, []);

  useEffect(() => {
    localStorage.setItem("mi-lista", JSON.stringify(items));
  }, [items]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  const handleRemove = (index: number) => {
   
    const listItems = document.querySelectorAll("li");
    const item = listItems[index];
    if (item) item.classList.add("remove");
    
    setTimeout(() => {
      setItems(items.filter((_, i) => i !== index));
    }, 300); 
  };

  return (
    <div className="app-container">
      <div className="card">
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Escribe lo que quieras"
          />
          <button type="submit">Añadir</button>
        </form>

        {items.length === 0 ? (
          <p>No hay elementos todavia</p>
        ) : (
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                <span>{item}</span>
                <button onClick={() => handleRemove(index)}>Eliminar</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;
