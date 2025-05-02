import { useState } from 'react';

const DropdownMenu = ({ title, items }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="text-black font-semibold uppercase px-4 py-2">
        {title}
      </button>
      <div
        className={`absolute top-full left-0 mt-1 w-48 bg-white shadow-lg border rounded z-50 transition-all duration-200 ${
          open ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <ul className="py-2">
          {items.map((item, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer whitespace-nowrap"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;