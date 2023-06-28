import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

const credentials = {
  passW: "252525",
};

const App = () => {
  const [nombre, setNombre] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (nombre.trim() === "" || nombre.trim().length < 2) {
      return setError("Ingrese nombre válido");
    } else if (pass.trim() === "") {
      return setError("Ingrese nombre válido");
    } else { /* if y dar orden para validar */
      return setSuccess("Ingreso exitoso");
    }
  };

  return (
    <>
      <header className="header-container">
        <h1 className="header-title">
          <b>Estado de los componentes y eventos</b>
        </h1>
      </header>
      <div className="general-container">
        <form onSubmit={handleSubmit}>
          <div className="info">
            <abbr title="Psst! La clave es 75/3, 3 veces y asegurese de ingresar más de 2 caracteres en el nombre">
              <i className="fa-solid fa-circle-info"></i>
            </abbr>
          </div>
          <label htmlFor="">Usuario:</label>
          <br />

          <Input
            style={"input"}
            onChange={(e) => setNombre(e.target.value)}
            typeInput={"text"}
            nombrePlaceholder={"Enter a text"}
            autoComplete={"off"}
          />
          <br />
          <br />
          <br />
          <br />
          <br />
          <label htmlFor="">Password:</label>
          <br />

          <Input
            style={"input"}
            onChange={(e) => setPass(e.target.value)}
            typeInput={"password"}
            nombrePlaceholder={"Access code"}
            autoComplete={"off"}
          />
          <br />

          {nombre.length < 2 || nombre.length == "" ? (
            <p>{error}</p>
          ) : (
            <p>{success}</p>
          )}
          <br />
          <div className="buttons">
            <Button
              typeB={"reset"}
              styleButton={"btn btn-primary btn-sm"}
              text={"Ingress"}
            ></Button>
            {nombre.trim() !== "" && pass === credentials.passW ? (
              <Button
                typeB={"submit"}
                styleButton={"btn btn-success btn-sm"}
                text={"Ingresar"}
              ></Button>
            ) : null}
          </div>
        </form>
      </div>
    </>
  );
};

export default App;
