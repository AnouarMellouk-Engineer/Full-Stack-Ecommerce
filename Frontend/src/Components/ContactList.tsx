import ContactCart from "./ContactCart";

const ContactList = () => {
  const contactInfo: { title: string; value: string; icon: string }[] = [
    {
      title: "Help",
      value: "TechNova.Support",
      icon: "./src/assets/contact/icons8-question-100.png",
    },
    {
      title: "Email",
      value: "TeckStore@gmail.com",
      icon: "./src/assets/contact/icons8-email-50 (1).png",
    },
    {
      title: "Phone",
      value: "+ 213 6 65 23 88 30",
      icon: "./src/assets/contact/icons8-phone-100.png",
    },
  ];

  const contactList = contactInfo.map((c) => (
    <ContactCart contact={c} key={c.title} />
  ));
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
      {contactList}
    </div>
  );
};

export default ContactList;
