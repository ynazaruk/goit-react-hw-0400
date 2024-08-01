import { TailSpin } from "react-loader-spinner";
import css from "./Loader.module.css"

export default function Loader() { 
    <div className={css.loader}>
        <TailSpin
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
    
}