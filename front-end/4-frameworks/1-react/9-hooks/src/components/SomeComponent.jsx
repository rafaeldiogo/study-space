import { forwardRef, useImperativeHandle, useRef } from "react";

export const SomeComponent = forwardRef((props, ref) => {
  const localInpurRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      validate: () => {
        if (localInpurRef.current.value.length > 3) {
          localInpurRef.current.value = "";
        }
      },
    };
  });

  return (
    <div>
      <p>Insira no máxima 3 caracteres</p>
      <input type="text" ref={localInpurRef} />
    </div>
  );
});
