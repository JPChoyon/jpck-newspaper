import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import qzone1 from "../../../assets/qZone1.png";
import qzone2 from "../../../assets/qZone2.png";
import qzone3 from "../../../assets/qZone3.png";
import adsPhoto from "../../../assets/bg1.png";

const RightItems = () => {
  return (
    <div className="px-4">
      {/* Log in  */}
      <div className="mb-7">
        <h2 className="text-xl font-semibold">Log In</h2>
        <button className="btn btn-outline btn-accent w-full">
          <FaGoogle></FaGoogle>
          Login with Google
        </button>
        <button className="btn btn-outline btn-accent w-full mt-2">
          <FaGithub></FaGithub>
          Login with Github
        </button>
      </div>

      {/* Follow Us */}
      <div className="mb-7">
        <h2 className="text-xl font-semibold">Find Us On</h2>
        <div className="flex items-center gap-3 border-2 rounded-t-xl py-4 text-xl px-2">
          <FaFacebook></FaFacebook>
          <a href="https://www.facebook.com/jpchoyon.khan.130/">Facebook</a>
        </div>
        <div className="flex items-center gap-3 border-x-2  py-4 text-xl px-2">
          <FaTwitter></FaTwitter>
          <a href="https://twitter.com/JPChoyonKhan1">Twitter</a>
        </div>
        <div className="flex items-center gap-3 border-2 rounded-b-xl py-4 text-xl px-2">
          <FaInstagram></FaInstagram>
          <a href="https://www.instagram.com/jpchoyonkhan3/">Instagram</a>
        </div>
      </div>

      {/* Q-zone */}

      <div>
        <h2 className="text-xl font-semibold">Q-Zone</h2>
        <div>
          <img src={qzone1} alt="" />
        </div>
        <div>
          <img src={qzone2} alt="" />
        </div>
        <div>
          <img src={qzone3} alt="" />
        </div>
      </div>
      {/* ads section  */}
      <div>
        <div>
          <img src={adsPhoto} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RightItems;
