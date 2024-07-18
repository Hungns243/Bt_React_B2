import React, { useState } from "react";

const BaiTapGlasses = () => {
  const [selectGlasses, setSelectGlasses] = useState({
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "./public/glassesImage/v1.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    setSelectGlasses: "g1.jpg",
  });

  const arrButton = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./public/glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      setSelectGlasses: "g1.jpg",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./public/glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      setSelectGlasses: "g2.jpg",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./public/glassesImage/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      setSelectGlasses: "g3.jpg",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./public/glassesImage/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      setSelectGlasses: "g4.jpg",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./public/glassesImage/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      setSelectGlasses: "g5.jpg",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./public/glassesImage/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      setSelectGlasses: "g6.jpg",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./public/glassesImage/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      setSelectGlasses: "g7.jpg",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./public/glassesImage/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      setSelectGlasses: "g8.jpg",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./public/glassesImage/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      setSelectGlasses: "g9.jpg",
    },
  ];

  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: "url(public/glassesImage/background.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h2 className="text-center text-2xl font-bold">Bai tap Glasses</h2>
      <div className="container h-full">
        <div className="flex justify-center items-center">
          {/* phan ben trai */}
          <div className="w-1/3 relative border rounded-lg">
            <img className="w-full" src={`./public/glassesImage/model.jpg`} alt="" />

            <div className="absolute top-1/4 left-1/4 ">
              <img className="opacity-80" src={selectGlasses.url} alt="" width={250} />
            </div>
            <div className="absolute bottom-0 bg-orange-300 w-full h-1/4 bg-opacity-60 ">
            <p className="text-3xl font-bold text-red-600">{selectGlasses.name}</p>
            <p className="text-white font-bold">{selectGlasses.desc}</p>
            </div>
          </div>
          {/* phan ban phai */}
          <div className="w-2/3 grid grid-cols-6 gap-3 mx-8">
            {arrButton.map((item, index) => {
              return (
                <button
                  onClick={() => {
                    setSelectGlasses(item);
                  }}
                  className="rounded-lg border border-black"
                >
                  <img src={item.url} alt="" />
                  {/* <p>alo</p> */}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaiTapGlasses;
