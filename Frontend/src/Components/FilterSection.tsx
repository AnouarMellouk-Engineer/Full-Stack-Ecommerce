import { ChevronDown } from "lucide-react";

const FilterSection = ({ title, opt }: { title: string; opt: string[] }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-lg">{title}</h3>
        <ChevronDown />
      </div>

      <ul className="flex justify-start items-center gap-3 flex-wrap">
        {opt.map((op: string) => (
          <li className="px-2.5 py-2 border-1 border-neutral-border rounded-md text-shadow-neutral-secondary">
            {op}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterSection;
