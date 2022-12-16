import { Link } from "react-router-dom";
import Ripple from "../Components/RippleAnimation";
import RippleAnimations from "../Components/RippleAnimation";
import { motion } from "framer-motion";
import { useUserAuth } from "../context/UserAuthContext";
import pageone_circle from "../Images/pageone_circle.png";

export default function LandingOne() {
  const { tokenlist } = useUserAuth();
  console.log("token list: ", tokenlist);
  const token = tokenlist[tokenlist.length - 1];
  console.log("token in landing one: ", token);

  // const [error, setError] = useState("");
  // const { anonUser, setTokenFunc } = useUserAuth();
  // window.onload = async () => {
  //   console.log("window onloaded");
  //   try {
  //     const temp = await anonUser();
  //     console.log("anon user signed in");
  //     // console.log("user: ", temp.user.accessToken);
  //     console.log("user id: ", temp.user.auth.lastNotifiedUid);
  //     // console.log("user: ", temp);
  //     const setid = setTokenFunc(temp.user);
  //     console.log("id is now: ", setid);
  //   } catch (err) {
  //     setError(err.message);
  //   }
  // };

  return (
    <motion.div className="min-w-screen min-h-screen bg-blackone flex">
      <Link to="./LandingTwo" className="m-auto z-20">
        <motion.img
          src={pageone_circle}
          className="max-h-[2rem] max-w-[2rem]"
          whileHover={{
            scale: [1, 2, 2],
            rotate: [0, 0, 270],
          }}
          transition={{
            duration: 0.5,
          }}
        />
      </Link>
      <div className="text-whiteone opacity-30 absolute z-10 left-[50%] translate-x-[-50%] top-[30%]">
        CLICK TO BEGIN!
      </div>
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <RippleAnimations />
      </div>
    </motion.div>
  );
}
