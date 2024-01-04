import s from "./imgOpen.module.css"
import { GrFormClose, GrClose } from "react-icons/gr"
import { AiOutlineClose } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { BLACK_BACKGROUND } from "../../../../redux/actions/actions"
import { pathImages } from "../../../../pathImages"


export default function ImgOpenColors({ src, setImagen, imagen }) {
    const dispatch = useDispatch()
    const closeDialog = (e) => {
        console.log(e)
        if (imagen.open && e.target.id === "close") {
            setImagen({ ok: false, src: "" })
            dispatch(BLACK_BACKGROUND("neutral"))
        }
    }
    return (
        <div className={s.imgDialog} id="close" onClick={(e) => closeDialog(e)}>
            <div className={s.imgContainer}>
                <img src={pathImages +src} alt="" />
            </div>
            <div className={s.close}>
                <AiOutlineClose id="close" onClick={(e) => closeDialog(e)} className={s.icon} color="#fff" />
            </div>
        </div>
    )
}