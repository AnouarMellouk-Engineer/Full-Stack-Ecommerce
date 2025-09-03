const FooterLinks = () => {
  return (
    <div className="flex items-start justify-between flex-1">
      <div className="flex flex-col items-center  md:items-start justify-start gap-3.5">
        <h2 className="mb-2 text-lg ">footer</h2>
        <ul className=" text-neutral-secondary">
          <li>link</li>
          <li>link</li>
          <li>link</li>
        </ul>
      </div>
      <div className="flex flex-col items-center  md:items-start justify-start gap-3.5">
        <h2 className="mb-2 text-lg">footer</h2>
        <ul className=" text-neutral-secondary">
          <li>link</li>
          <li>link</li>
        </ul>
      </div>
      <div className="flex flex-col items-center  md:items-start justify-start gap-3.5">
        <h2 className="mb-2 text-lg">footer</h2>
        <ul className=" text-neutral-secondary">
          <li>link</li>
          <li>link</li>
          <li>link</li>
        </ul>
      </div>
    </div>
  );
};

export default FooterLinks;
