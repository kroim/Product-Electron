import React, { FunctionComponent, useState, MutableRefObject } from "react";
import Keyboard from "react-simple-keyboard";

const KeyboardWrapper = (props) => {
  const [layoutName, setLayoutName] = useState("default");

  const onKeyPress = (button: string) => {
    if (button === "{shift}" || button === "{lock}") {
      setLayoutName(layoutName === "default" ? "shift" : "default");
    }
  };

  return (
    <Keyboard
      keyboardRef={r => (props.keyboardRef.current = r)}
      layoutName={layoutName}
      inputName={props.inputName}
      onChangeAll={props.onChangeAll}
      onChange={props.onChange}
      onKeyPress={onKeyPress}
      onInit={() =>{
          if(props.init) props.init('');
        }
      }
    />
  );
};

export default KeyboardWrapper;
