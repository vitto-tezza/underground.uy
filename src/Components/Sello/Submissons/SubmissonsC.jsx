import React from "react";
import { useState } from "react";
import "./SubmissonsC.scss";

const SubmissonsC = () => {
  const [response, setResponse] = useState("");
  const [datos, setDatos] = useState({
    inp_name: "",
    inp_email: "",
    inp_mensaje: "",
  });

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();

    fetch("https://formsubmit.co/ajax/vittorio.tezza93@gmail.com", {
      method: "post",
      body: new FormData(event.target),
    })
      .then((res) =>
        res.ok ? setResponse("Mensaje enviado") : Promise.reject(res)
      )
      .finally(() => {
        setDatos({
          inp_name: "",
          inp_business: "",
          inp_mesage: "",
        });
      });
  };

  return (
    <div className="Submissons" id="Contacto">
      <div className="Submissons-Container">
        <h5 className="Submissons-Container__Title">Send us your demo</h5>
        <form
          method="post"
          action=""
          id="form"
          onSubmit={enviarDatos}
          className="Submissons-Container__Form"
        >
          <input
            className="Submissons-Container__Form--Input"
            type="text"
            name="inp_name"
            onChange={handleInputChange}
            value={datos.inp_name}
            required
            placeholder="Name and Surname"
          ></input>
          <input
            className="Submissons-Container__Form--Input"
            type="text"
            name="inp_business"
            onChange={handleInputChange}
            value={datos.inp_business}
            required
            placeholder="Demo name"
          ></input>
          <textarea
            className="Submissons-Container__Form--TextArea"
            value={datos.inp_mesage}
            name="inp_mesage"
            onChange={handleInputChange}
            required
            placeholder="Demo"
          ></textarea>
          <button
            type="submit"
            id="submit"
            className="Submissons-Container__Form--Submit"
          >
            ENVIAR
          </button>
          <div className="Submissons-response">
            <div className="Submissons-response-text" id="contact-response">
              {response}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubmissonsC;
