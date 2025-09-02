const ContactCart = ({
  contact,
}: {
  contact: { title: string; value: string; icon: string };
}) => {
  return (
    <div className="flex items-center justify-center gap-2">
      <div className="w-7 overflow-hidden">
        <img src={contact.icon} alt="" className="w-full" />
      </div>
      <div className="flex flex-col justify-between items-start">
        <p>{contact.title}</p>
        <p className="text-sm text-neutral-secondary">{contact.value}</p>
      </div>
    </div>
  );
};

export default ContactCart;
