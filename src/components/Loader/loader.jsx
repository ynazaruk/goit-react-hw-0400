import { RotatingLines } from "react-loader-spinner";
import css from "./Loader.module.css"

export default function Loader() { 
    return (
    <div className={css.loader}>
        <RotatingLines
  visible={true}
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="tail-spin-loading"
  radius="1"
  wrapperStyle={{}}
  wrapperClass=""
  />
    </div>
    )
    
}