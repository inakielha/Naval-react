import s from "./Concesionarios.module.css";
import img from "../../../assets/Imagen 318.jpg";
import { IconContext } from "react-icons";
import { BiSearch } from "react-icons/bi";
import { useRef } from "react";

export default function Concesionarios() {
  const inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <section className={s.section}>
      <div className={s.imgContainer}>
        <img src={img} alt="barco" />
      </div>
      <div className={s.texto}>
        <h3>LOS MEJORES PRODUCTOS TIENEN A LOS MEJORES VENDEDORES. </h3>
        <span>
          Cuando fabrica los mejores productos marítimos del mundo, solo quiere
          que lo representen los mejores vendedores. Por eso nos aseguramos de
          que los vendedores de Mercury sean los mejores equipados para las
          ventas y el servicio de nuestros productos. Y con miles de vendedores
          en todo el mundo, puede estar tranquilo de que siempre estaremos cerca
          para ayudarlo a navegar a lo grande.
        </span>
      </div>
      <div className={s.tienda}>
        <h3>Bienvenidos a la tienda Mercury.</h3>

        <div className={s.inputCont} onClick={handleClick}>
          <IconContext.Provider value={{ className: s.icon, size: "0.7em" }}>
            <BiSearch />
          </IconContext.Provider>
          <input
            ref={inputRef}
            type="text"
            placeholder=" Ingrese la zona"
          />
        </div>

        <div className={s.inputCont} onClick={handleClick}>
          <IconContext.Provider value={{ className: s.icon, size: "0.7em" }}>
            <BiSearch />
          </IconContext.Provider>
          <input
            ref={inputRef}
            type="text"
            placeholder=" Ingrese el nombre"
          />
        </div>
      </div>
      <div className={s.map}>
        <div className={s.botones}>
            <button>Toda la red</button>
            <button>Concesionarios</button>
            <button>Servicios</button>
        </div>
      </div>
    </section>
  );
}
