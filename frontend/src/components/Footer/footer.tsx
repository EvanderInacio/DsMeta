import { FiGithub } from "react-icons/fi";
import './style.css'

function Footer() {
  return (
    <footer>
       <div className="footer_divider"></div>
       <p className="footer_copy"> Evander Inácio 2022 
       <a className="footer_link" href="https://github.com/EvanderInacio/DsMeta" target="_blank">
       <FiGithub size={22}/></a>
       </p>
    </footer>
  )
}

export default Footer