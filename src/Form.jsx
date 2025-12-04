import "./Form.css";

function Form() {
  return (
    <div>
      <form class="form">
        <p class="title">Necesitas ayuda, registrate y te contactaremos</p>
        <p class="message">Ingresa tus datos para conocer más sobre la marca</p>
        <label>
          <input class="input" type="text" placeholder="" required="" />
          <span>Nombre</span>
        </label>
        <label>
          <input class="input" type="text" placeholder="" required="" />
          <span>Apellido</span>
        </label>
        <label>
          <input class="input" type="email" placeholder="" required="" />
          <span>Número de teléfono</span>
        </label>
        <div className="flex">
          <span className="">¿Eres cliente de la marca?:</span>
          <label className="">
            <input
              type="radio"
              className=""
              name="gender"
              value="Male"
            />
            <span className="">Sí</span>
          </label>

          <label className="">
            <input
              type="radio"
              className=""
              name="gender"
              value="Female"
            />
            <span className="">No</span>
          </label>
        </div>

        <label>
          <textarea
            class="input"
            placeholder=""
            rows="3"
            required=""
          ></textarea>
          <span>Comentarios</span>
        </label>
        <button class="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Form;
