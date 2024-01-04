import s from "./image.module.css"
import { GrFormClose, GrClose } from "react-icons/gr"
import { AiOutlineClose } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { BLACK_BACKGROUND } from "../../../../redux/actions/actions"
export default function ImageOpen({ src, setImagen, imagen }) {
    const dispatch = useDispatch()
    const closeDialog = (e) => {
        if (imagen.open && e.target.id === "close") {
            setImagen({ ok: false, src: "" })
            dispatch(BLACK_BACKGROUND("neutral"))
        }
    }
    return (
        <div className={s.imgDialog} id="close" onClick={(e) => closeDialog(e)}>
            <div className={s.imgContainer}>
                <img src={src} alt="" />
            </div>
            <div className={s.close}>
                <AiOutlineClose id="close" onClick={(e) => closeDialog(e)} className={s.icon} color="#fff" />
            </div>
        </div>
    )
}