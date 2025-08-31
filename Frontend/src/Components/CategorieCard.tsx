const CategorieCard = ({ title, logo }: { title: string; logo: string }) => {
  return (
    <div className="flex items-center justify-start gap-2.5 px-3.5 py-2 bg-neutral-card rounded-lg border-1 border-neutral-border  w-44 cursor-pointer">
      <div className=" overflow-hidden">
        <img
          src={`./src/assets/categories/${logo}.png`}
          alt={title}
          className="w-10"
        />
      </div>
      <p className="font-semibold hover:text-primary duration-300">{title}</p>
    </div>
  );
};

export default CategorieCard;
