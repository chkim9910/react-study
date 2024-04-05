import { useState } from "react";

export function Nav(props) {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <ul className="flex gap-8">
      {props.li.map((item, index) => (
        <li key={index}>
          <a
            id={item.name}
            href={"/" + item.name}
            onClick={(e) => {
              e.preventDefault();
              props.onChangeMode(e.target.id);
            }}
            onMouseEnter={(e) => {
              setActiveItem(e.target.id);
            }}
            onMouseLeave={() => {
              setActiveItem(null);
            }}
            className="hover:text-indigo-500 transition-all"
          >
            {item.name}
          </a>
          <div
            className={`h-0.5 bg-indigo-500 rounded-sm scale-0 ${activeItem === item.name ? "scale-100 transition-all" : "scale-0"}`}
          ></div>
        </li>
      ))}
    </ul>
  );
}

export default function Header(props) {
  return (
    <>
      <header className="flex gap-20 items-end ">
        <h1
          className="text-2xl font-bold"
          onClick={function (e) {
            e.preventDefault();
            props.onChangeMode();
          }}
        >
          {props.children}
        </h1>
      </header>
    </>
  );
}
