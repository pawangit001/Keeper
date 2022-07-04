import react from "react";
import reactDom from "react-dom";
function Footer(){
    const current =new Date().getFullYear();
    return (
    <footer>
   <p> copyright © {current}</p>
    
    </footer>
    );
}
export default Footer;