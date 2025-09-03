import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <div className="bg-white py-6 shadow-md shadow-gray-300/60">
      <div className="container">
        <div className="mb-7 flex flex-col md:flex-row items-stretch justify-between ">
          <div className="flex flex-col justify-between items-center md:items-start flex-2 gap-6 md:gap-0 mb-5 md:mb-0 ">
            <h3 className="text-xl text-primary font-bold  lg:text-3xl  ">
              TechNova
            </h3>
            <div className="flex items-center justify-center gap-5">
              <div className="w-6 overflow-hidden">
                <img
                  src="./src/assets/media/icons8-facebook-50.png"
                  alt=""
                  className="w-full"
                />
              </div>
              <div className="w-6 overflow-hidden">
                <img
                  src="./src/assets/media/icons8-instagram-50.png"
                  alt=""
                  className="w-full"
                />
              </div>
              <div className="w-6 overflow-hidden">
                <img
                  src="./src/assets/media/icons8-linkedin-50 (1).png"
                  alt=""
                  className="w-full"
                />
              </div>
            </div>
          </div>
          <FooterLinks />
        </div>
        <p className="text-center">@2025 TechNova all right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
