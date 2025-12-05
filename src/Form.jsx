import "./Form.css";
import { useState } from "react";


function Form() {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    esCliente: "",
    mensaje: "",
  });
  const [loading, setLoading] = useState(false);

  const endpoint = "https://script.google.com/macros/s/AKfycbySd4DkJ-D34D0kyUZY3-vGc9B2qxEREUuqvykUL8J8cE72N3FujFlUQXqVQ-6Clp76/exec";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

   const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!form.nombre || !form.apellido || !form.telefono || !form.mensaje) {
      alert("Todos los campos son obligatorios");
      setLoading(false);
      return;
    }

    if (!/^[0-9]{10}$/.test(form.telefono)) {
      alert("El teléfono debe contener 10 números");
      setLoading(false);
      return;
    }

    if (!form.esCliente) {
      alert("Debes seleccionar si ya tienes productos o no");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify(form),
      });

      alert("¡Gracias! En cuando veamos tu mensaje nos contactamos contigo");
      setForm({
        nombre: "",
        apellido: "",
        telefono: "",
        esCliente: "",
        mensaje: "",
      });
    } catch (error) {
      alert("Hubo un error al validar la información, por favor intenta más tarde.");
      console.log(error);
    }
    setLoading(false);
  };


  return (
    <div className="form-container" onSubmit={handleSubmit}>
      <form className="form">
        <p className="title">¿Buscas información o ayuda con algún producto?</p>
        <p className="message">Queremos acompañarte: Cuéntanos qué necesitas y te contactaremos.</p>

        <label>
          <input className="input" type="text" required name="nombre" value={form.nombre} onChange={handleChange} />
          <span>Tu nombre</span>
        </label>

        <label>
          <input className="input" type="text" required name="apellido" value={form.apellido} onChange={handleChange} />
          <span>Tu apellido</span>
        </label>

        <label>
          <input className="input" type="text" required name="telefono" value={form.telefono} onChange={handleChange} />
          <span>Tu teléfono</span>
        </label>

        <div className="flex">
          <span className="subtitle">¿Ya eres parte de la familia Royal Prestige?</span>

          <label className="borderNone">
            <input type="radio" name="esCliente" value="Si" checked={form.esCliente === "Si"} onChange={handleChange} />
            <span>Sí, ya tengo productos</span>
          </label>

          <label className="borderNone">
            <input type="radio" name="esCliente" value="No" checked={form.esCliente === "No"} onChange={handleChange} />
            <span>Todavía no, pero quiero saber más</span>
          </label>
        </div>

        <label>
          <textarea className="input" rows="3" required name="mensaje" value={form.mensaje} onChange={handleChange}>
          </textarea>
          <span>Cuéntanos cómo podemos apoyarte</span>
        </label>

        <button className="submit" type="submit" disabled={loading}>
          {loading ? "Espere un momento..." : "Quiero recibir información"}
        </button>
      </form>
    </div>
  );
}

export default Form;