import QRCode from "../assets/image-qr-code.png";
const QRComponent = () => {
  return (
    <div
      id="conatiner"
      className="m-2 p-2 mt-8 bg-white rounded-2xl w-[80%] md:w-[20%] h-[50%] shadow-lg"
    >
      <div id="img-container" className="m-2 rounded-2xl overflow-hidden">
        <img src={QRCode} alt="qr" />
      </div>
      <div id="content-container" className="m-2 p-2 text-center">
        <h1 className="p-2 font-bold text-lg">
          Improve your front-end skills by building projects.
        </h1>
        <p className="p-2 font-normal text-[15px] text-gray-400">
          Scan the QR code to visit Frontend Mentors and take your coding skills
          to next level.
        </p>
      </div>
    </div>
  );
};

export default QRComponent;
