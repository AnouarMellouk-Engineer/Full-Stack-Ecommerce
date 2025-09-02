import ContactList from "./ContactList";

const ContactSection = () => {
  return (
    <div className="bg-teal-100 mt-28 py-5">
      <div className="container flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-xl mb-3.5 font-semibold">
            We're Always Here To Help
          </h2>
          <p className="text-md text-neutral-secondary">
            you can get help by choosing from one of these option
          </p>
        </div>

        <ContactList />
      </div>
    </div>
  );
};

export default ContactSection;
