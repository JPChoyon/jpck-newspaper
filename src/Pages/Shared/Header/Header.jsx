import logo from "../../../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div className="text-center">
      <div>
        <img className="mx-auto" src={logo} alt="" />
      </div>
      <p className=" my-3 text-gray-800 font-extralight">
        Journalism Without Fear or Favour
      </p>
      <p className="text-xl mb-3">{moment().format("dddd, MMMM D, YYYY, h:mm A")}</p>
    </div>
  );
};

export default Header;