import { IoMdDoneAll } from "react-icons/io";
function Header(){
    return(
        <div className="header">
            <IoMdDoneAll className="my-icon" />
            <h1 className="main">TODO</h1>
        </div>
    );
}

export default Header;