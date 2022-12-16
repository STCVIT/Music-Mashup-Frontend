export default function Modal({ show, heading, message, onClose }) {
  if (!show) {
    return null;
  }

  return (
    <div
      className="fixed z-50 left-0 right-0 bottom-0 top-0 bg-black bg-opacity-70 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className=" bg-whiteone lg:w-[40%] w-[60%] rounded-md p-4 text-blackone"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Heading */}
        <div className="text-2xl font-black">{heading}</div>

        {/* Modal Body */}
        <div className="">{message}</div>

        {/* Modal - User Interaction */}
        <button
          className="border-[1px] border-blackone hover:border-whiteone hover:bg-blackone hover:text-whiteone mt-4 rounded-sm px-4 py-1"
          onClick={onClose}
        >
          OK
        </button>
      </div>
    </div>
  );
}
