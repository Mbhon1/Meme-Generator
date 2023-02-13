import React, { useState, useEffect } from "react";

const Form = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImg: "https://i.imgflip.com/30b1gx.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch(`https://api.imgflip.com/get_memes`)
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function getMemeImg() {
    const randomNum = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNum].url;

    setMeme((prevState) => {
      return {
        ...prevState,
        randomImg: url,
      };
    });
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setMeme((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  return (
    <div>
      <div className="grid grid-cols-2 gap-3 px-14 py-9">
        <input
          type="text"
          name="topText"
          placeholder="Top text"
          onChange={handleChange}
          value={meme.topText}
          className="block col-start-1 col-end-2 placeholder-white bg-teal-400 border rounded-md shadow-sm form-input border-slate-600"
        />
        <input
          type="text"
          name="bottomText"
          placeholder="Bottom text"
          onChange={handleChange}
          value={meme.bottomText}
          className="block col-start-2 col-end-7 placeholder-white bg-teal-400 border rounded-md shadow-sm form-input border-slate-600"
        />
        <button
          onClick={getMemeImg}
          className="w-full col-start-1 col-end-7 py-3 text-white rounded-md bg-sky-500 hover:bg-sky-700"
        >
          Get a new meme
        </button>
      </div>
      <div className="relative items-center flex flex-col border-2 border-red-800 mx-5 my-8">
        <h2 className="text-5xl font-extrabold text-white font-outline-2">
          {meme.topText}
        </h2>
        <h2 className=" text-white text-5xl font-extrabold font-outline-2">
          {meme.bottomText}
        </h2>
        <div className="px-10 py-10">
          <img
            src={meme.randomImg}
            alt="meme"
            className="w-full justify-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
