import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [items, setItem] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?_limit=10")
      .then((response) => response.json())
      .then((json) => setItem(json));
  }, [items]);

  return (
    <div className="App">
      {items.map((item) => {
        return (
          <div className="User_Main" key={item.id}>
            <h3> {item.id}</h3>
            <p>{item.title}</p>
            <img src={item.thumbnailUrl} alt="photos" />
          </div>
        );
      })}
    </div>
  );
}

export default App;
