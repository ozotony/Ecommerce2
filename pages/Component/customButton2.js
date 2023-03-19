import { useState, useContext, useRef } from "react";

export default function CustomButton2({ description }) {
  const [hidden, setHidden] = useState(true);

  let showhide = () => {
    if (hidden) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  };
  return (
    <>
      <button
        type="button"
        class="btn btn-success"
        hidden={hidden}
        onClick={() => showhide()}
      >
        {description}
      </button>
    </>
  );
}
