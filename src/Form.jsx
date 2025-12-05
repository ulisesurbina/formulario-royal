import "./Form.css";

function Form() {
  return (
    <div className="form-container">
      <form class="form">
        <p class="title">¿Buscas información o ayuda con algún producto?</p>
        <p class="message">Queremos acompañarte: Cuéntanos qué necesitas y te contactaremos.</p>
        <label>
          <input class="input" type="text" placeholder="" required="" />
          <span>Tu nombre</span>
        </label>
        <label>
          <input class="input" type="text" placeholder="" required="" />
          <span>Tu apellido</span>
        </label>
        <label>
          <input class="input" type="email" placeholder="" required="" />
          <span>Tu teléfono</span>
        </label>
        <div className="flex">
          <span className="">¿Ya eres parte de la familia Royal Prestige?</span>
          <label className="borderNone">
            <input
              type="radio"
              className=""
              name="gender"
              value="Male"
            />
            <span>Sí, ya tengo productos</span>
          </label>
          <label className="borderNone">
            <input
              type="radio"
              className=""
              name="gender"
              value="Female"
            />
            <span>Todavía no, pero quiero saber más</span>
          </label>
        </div>

        <label>
          <textarea
            class="input"
            placeholder=""
            rows="3"
            required=""
          ></textarea>
          <span>Cuéntanos cómo podemos apoyarte</span>
        </label>
        <button class="submit">Quiero recibir información</button>
      </form>
    </div>
  );
}

export default Form;
