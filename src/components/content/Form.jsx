import React from "react";
import { createOrdenDeCompra } from "../../utils/Firebase";
import { CarritoContext } from "../context/CarritoContext";
import { useContext } from "react";
import { useOrderForm } from "../hooks/useOrderForm";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../../css/form.css";

const initialForm = {
  address: "",
  dni: "",
  email: "",
  nombre: "",
  surname: "",
};

const validationForm = (form) => {
  let error = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexDni = /^[\d]{1,3}\.?[\d]{3,3}\.?[\d]{3,3}$/;

  if (!form.nombre.trim()) {
    error.nombre = "El campo Nombre es requerido";
  } else if (!regexName.test(form.nombre.trim())) {
    error.nombre = "El campo Nombre solo acepta letras y espacios en blanco";
  }
  if (!form.surname.trim()) {
    error.surname = "El campo Apellido es requerido";
  } else if (!regexName.test(form.surname.trim())) {
    error.surname = "El campo Nombre solo acepta letras y espacios en blanco";
  }
  if (!form.dni.trim()) {
    error.dni = "El campo Dni es requerido";
  } else if (!regexDni.test(form.dni.trim())) {
    error.dni = "Minimo un millon (7 digitos), maximo 999 millones (9 digitos)";
  }
  if (!form.email.trim()) {
    error.email = "El campo Email es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    error.email = "El campo Email es incorrecto";
  }
  if (!form.address.trim()) {
    error.address = "El campo Dirección es requerido";
  }

  return error;
};

const Form = () => {
  let navigate = useNavigate();
  const { form, error, handleChange, handleBlur } = useOrderForm(
    initialForm,
    validationForm
  );

  const { totalPrice, vaciarCarrito, updateStock } = useContext(CarritoContext);
  const datosForm = React.useRef();
  const consultarForm = (e) => {
    e.preventDefault();
    const dataForm = new FormData(datosForm.current);
    const lastData = Object.fromEntries(dataForm);
    const { address, dni, email, nombre, surname } = lastData;
    handleBlur(e);
    if (form.nombre !== "") {
      if (Object.keys(error).length === 0) {
        createOrdenDeCompra(totalPrice, nombre, surname, email, dni, address)
          .then((item) => {
            Swal.fire({
              icon: "success",
              title: "Compra realizada!",
              text: `Su id de compra: ${item.id}`,
              confirmButtonText: "Volver",
            });
            updateStock();
            vaciarCarrito();
          })
          .then(
            setTimeout(() => {
              navigate("/");
            }, 3000)
          );
      }
    }
  };

  return (
    <div className="main">
      <form onSubmit={consultarForm} ref={datosForm} className="boxform">
        <h2>Verificar Compra</h2>
        <div className="inputbox">
          <label htmlFor="nombre" className=""></label>
          <input
            type="text"
            required
            className=""
            name="nombre"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.name}
          />
          <span>Nombre</span>
          {error.nombre && <p>{error.nombre}</p>}
        </div>
        <div className="inputbox">
          <label htmlFor="surname" className=""></label>
          <input
            type="text"
            className=""
            required
            name="surname"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.surname}
          />
          <span>Apellido</span>
          {error.surname && <p>{error.surname}</p>}
        </div>
        <div className="inputbox">
          <label htmlFor="email" className=""></label>
          <input
            type="email"
            className=""
            required
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.email}
          />
          <span>Email</span>
          {error.email && <p>{error.email}</p>}
        </div>
        <div className="inputbox">
          <label htmlFor="dni" className=""></label>
          <input
            type="text"
            required
            className=""
            name="dni"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.dni}
          />
          <span>Dni</span>
          {error.dni && <p>{error.dni}</p>}
        </div>
        <div className="inputbox">
          <label htmlFor="address" className=""></label>
          <input
            type="text"
            className=""
            required
            name="address"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.address}
          />
          <span>Direccion</span>
          {error.address && <p>{error.address}</p>}
        </div>
        <div>
          <button type="submit" className="emptycart-button">
            Enviar formulario
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
