import { useState, useContext, useRef } from "react";

export default function CustomButton({ description, description2 }) {
  const [hidden, setHidden] = useState(false);
  const [hidden2, setHidden2] = useState(true);
  let showhide = () => {
    if (hidden) {
      setHidden(true);
      setHidden2(false);
    } else {
      setHidden(true);
      setHidden2(false);
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

      <button type="button" class="btn btn-success" hidden={hidden2}>
        {description2}
      </button>
    </>
  );
}
