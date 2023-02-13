import React from "react";

const Header = () => {
  return (
    <div className="w-full bg-cyan-600 overflow-hidden text-center py-9 px-5">
      <img
        className="float-left h-14 w-15"
        alt="meme"
        src="./src/assets/images/smile.png"
      />
      <a href="void0" className="float-left text-2xl pl-4 pt-3 text-white">
        Meme Generator
      </a>
    </div>
  );
};

export default Header;
