import { useState } from "react";
import Article from "./components/Article";
import Header, { Nav } from "./components/Header";

function App() {
  const [mode, setMode] = useState("Welcome");
  const [id, setId] = useState(null);
  let content = null;
  const li = [
    { name: "home", title: "Home", body: "Let's read some articles." },
    {
      name: "about",
      title: "About",
      body: "Do you want to take the next step?",
    },
    { name: "profile", title: "Profile", body: "Hello, there. I'm Charlotte." },
  ];

  if (mode === "Welcome") {
    content = <Article title={"Welcome"} body={"This is dev blog."} />;
  } else if (mode === "Read") {
    // title, body 값 초기화
    let title,
      body = null;
    for (let i = 0; i < li.length; i++) {
      if (li[i].name === id) {
        title = li[i].title;
        body = li[i].body;

        content = <Article title={title} body={body} />;
      }
    }
  }

  return (
    <div className="App p-[40px]">
      <div className="text-3xl font-bold text-indigo-800 py-1">
        React study <span className="text-xl">(24.4.2~)</span>
        <p className="text-xl">
          useState, onClick, onChangeMode, onMouseEnter, onMouseLeave,
          tailwindcss
        </p>
      </div>
      <div className="flex gap-20 items-end py-5 ">
        <Header
          onChangeMode={function () {
            alert("header");
            setMode("Welcome");
          }}
        >
          Welcome
        </Header>
        <Nav
          li={li}
          onChangeMode={(id) => {
            alert(id);
            setMode("Read");
            setId(id);
          }}
        />
      </div>
      {content}
    </div>
  );
}

export default App;
