import { useState } from 'react';

function InputCreate() {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const urlApiCreate = 'http://localhost:3000/create';
    const payload = { title };

    try {
      const response = await fetch(urlApiCreate, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Item created:", data);
      } else {
        console.error("Error creating item:", response.statusText);
      }

      setTitle("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Escribe una tarea"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}

export default InputCreate;
