import React, { useEffect, useRef } from "react";

function Card(props) {
  const imgRef = useRef();

  useEffect(() => {
    const options = {};
    const callback = () => {
      console.log("callback");
    };
    const observer = new IntersectionObserver(callback, options);

    observer.observe(imgRef.current);
  }, []);

  return (
    <div className="Card text-center" ref={imgRef}>
      <img src={props.image} />
      <div className="p-5 font-semibold text-gray-700 text-xl md:text-lg lg:text-xl keep-all">
        {props.children}
      </div>
    </div>
  );
}

export default Card;
