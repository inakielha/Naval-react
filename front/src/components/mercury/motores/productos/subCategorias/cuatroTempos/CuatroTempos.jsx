import s from "../../ProductosMotores.module.css";
import img2 from "../../../../../../assets/mercury/motor.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function CuatroTempos({ isMobile }) {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 1000,
    arrows: false,
    slidesToShow: 3,
    autoplay: true,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  return (
    <>
      {isMobile ? (
        <>
          <div className={s.borde}>
            <div className={s.imgContainer}>
              <img src={img2} alt="promo" />
            </div>
            <div className={s.MotoresInfo}>
              <h4>3.5-60 hp</h4>
              <span>
                El fueraborda más popular en el agua. Sin comparación.
              </span>
              <button>VER MÁS</button>
            </div>
          </div>
          <div className={s.borde}>
            <div className={s.imgContainer}>
              <img src={img2} alt="promo" />
            </div>
            <div className={s.MotoresInfo}>
              <h4>3.5-60 hp</h4>
              <span>
                El fueraborda más popular en el agua. Sin comparación.
              </span>
              <button>VER MÁS</button>
            </div>
          </div>
          <div className={s.borde}>
            <div className={s.imgContainer}>
              <img src={img2} alt="promo" />
            </div>
            <div className={s.MotoresInfo}>
              <h4>3.5-60 hp</h4>
              <span>
                El fueraborda más popular en el agua. Sin comparación.
              </span>
              <button>VER MÁS</button>
            </div>
          </div>
          <div className={s.borde}>
            <div className={s.imgContainer}>
              <img src={img2} alt="promo" />
            </div>
            <div className={s.MotoresInfo}>
              <h4>3.5-60 hp</h4>
              <span>
                El fueraborda más popular en el agua. Sin comparación.
              </span>
              <button>VER MÁS</button>
            </div>
          </div>
          <div className={s.borde}>
            <div className={s.imgContainer}>
              <img src={img2} alt="promo" />
            </div>
            <div className={s.MotoresInfo}>
              <h4>3.5-60 hp</h4>
              <span>
                El fueraborda más popular en el agua. Sin comparación.
              </span>
              <button>VER MÁS</button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={s.container}>
            <Slider className={s.test}  {...settings}>
              <div className={s.test}>
              <div className={s.borde}>
                <div className={s.imgContainer}>
                  <img src={img2} alt="promo" />
                </div>
                <div className={s.MotoresInfo}>
                  <h4>3.5-60 hp</h4>
                  <span>
                    El fueraborda más popular en el agua. Sin comparación.
                  </span>
                  <button>VER MÁS</button>
                </div>
              </div>
              </div>          

              <div className={s.test}>
              <div className={s.borde}>
                <div className={s.imgContainer}>
                  <img src={img2} alt="promo" />
                </div>
                <div className={s.MotoresInfo}>
                  <h4>3.5-60 hp</h4>
                  <span>
                    El fueraborda más popular en el agua. Sin comparación.
                  </span>
                  <button>VER MÁS</button>
                </div>
              </div>              
              </div>

              <div className={s.test}>
              <div className={s.borde}>
                <div className={s.imgContainer}>
                  <img src={img2} alt="promo" />
                </div>
                <div className={s.MotoresInfo}>
                  <h4>3.5-60 hp</h4>
                  <span>
                    El fueraborda más popular en el agua. Sin comparación.
                  </span>
                  <button>VER MÁS</button>
                </div>
              </div>              
              </div>

              <div className={s.test}>
              <div className={s.borde}>
                <div className={s.imgContainer}>
                  <img src={img2} alt="promo" />
                </div>
                <div className={s.MotoresInfo}>
                  <h4>3.5-60 hp</h4>
                  <span>
                    El fueraborda más popular en el agua. Sin comparación.
                  </span>
                  <button>VER MÁS</button>
                </div>
              </div>              
              </div>

              <div className={s.test}>
              <div className={s.borde}>
                <div className={s.imgContainer}>
                  <img src={img2} alt="promo" />
                </div>
                <div className={s.MotoresInfo}>
                  <h4>3.5-60 hp</h4>
                  <span>
                    El fueraborda más popular en el agua. Sin comparación.
                  </span>
                  <button>VER MÁS</button>
                </div>
              </div>              
              </div>

              <div className={s.test}>
              <div className={s.borde}>
                <div className={s.imgContainer}>
                  <img src={img2} alt="promo" />
                </div>
                <div className={s.MotoresInfo}>
                  <h4>3.5-60 hp</h4>
                  <span>
                    El fueraborda más popular en el agua. Sin comparación.
                  </span>
                  <button>VER MÁS</button>
                </div>
              </div>
              </div>
            </Slider>
          </div>
        </>
      )}
    </>
  );
}
