import s from "./ProductosMotores.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

import CuatroTempos from "./subCategorias/cuatroTempos/CuatroTempos";
import MercuryUniversity from "./subCategorias/mercuryUniversity/mercuryUniversity";
import Seapro from "./subCategorias/seaPro/seaPro";

export default function ProductosMotores({isMobile}) {
  const [category, setCategory] = useState("cuatro tiempos");
  const handleCategory = (e) => {
    let category = e.target.innerText.toLowerCase();
    setCategory(category);
  };
  const settings = {
    // dots: true,
    infinite: true,
    speed: 1000,
    arrows: false,
    slidesToShow: 3,
    // autoplay: true,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  return (
    <div className={s.section}>
      <div className={s.textCont}>
        <div className={s.categorias}>
          <span
            onClick={(e) => handleCategory(e)}
            style={
              category === "cuatro tiempos"
                ? {
                    color: "#DF0404",
                  }
                : {}
            }
          >
            Cuatro Tiempos
          </span>
          <span
            onClick={(e) => handleCategory(e)}
            style={
              category === "sea pro"
                ? {
                    color: "#DF0404",
                  }
                : {}
            }
          >
            Sea Pro
          </span>
          <span
            onClick={(e) => handleCategory(e)}
            style={
              category === "verado"
                ? {
                    color: "#DF0404",
                  }
                : {}
            }
          >
            Verado
          </span>
          <span
            onClick={(e) => handleCategory(e)}
            style={
              category === "dos tiempos"
                ? {
                    color: "#DF0404",
                  }
                : {}
            }
          >
            Dos Tiempos
          </span>
          <span
            onClick={(e) => handleCategory(e)}
            style={
              category === "racing"
                ? {
                    color: "#DF0404",
                  }
                : {}
            }
          >
            Racing
          </span>
        </div>
      </div>
      {/* <div className={s.productos}> */}
      <div className={s.motoresContainer}>

      {category === "cuatro tiempos" && <CuatroTempos isMobile={isMobile}/>}
      {category === "sea pro" && <Seapro isMobile={isMobile}/>}
      {category === "verado" && <Seapro isMobile={isMobile}/>}
      {category === "dos tiempos" && <CuatroTempos isMobile={isMobile}/>}
      {category === "racing" && <Seapro isMobile={isMobile}/>}
      </div>


      <MercuryUniversity/>
    </div>
  );
}
