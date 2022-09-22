import help_content from "../Images/help_content.png";
import help_content_sm from "../Images/help_content_sm.png";

export default function Help() {
  return (
    <div className="bg-whiteone h-screen w-screen">
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] my-auto w-[80%] md:w-[90%]">
        <img
          alt="Help Content"
          src={help_content}
          className="hidden md:block"
        />
        <img
          alt="Help Content Small"
          src={help_content_sm}
          className="md:hidden mx-auto w-[85%]"
        />
      </div>
    </div>
  );
}
