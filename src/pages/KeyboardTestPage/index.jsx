import { memo, useEffect, useState } from "react";
import PageHeading from "@/components/Common/PageHeading";
import classes from "./style.module.scss";

const KeyboardTestPage = () => {
  const [event, setEvent] = useState(null);
  const [clickedButtons, setClickedButtons] = useState([]);

  const handleKeyboardEvent = (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log(event);
    setEvent(event);
    setClickedButtons((state) => [...state, event.code || event.key]);
  };

  const getColspan = (button) => {
    switch (button) {
      case "Space":
        return 7;

      case "ShiftLeft":
        return 2;

      case "ShiftRight":
        return 2;

      case "Numpad0":
        return 2;

      default:
        return 1;
    }
  };

  const getRowspan = (button) => {
    switch (button) {
      case "Enter":
        return 2;

      case "NumpadAdd":
        return 2;

      case "NumpadEnter":
        return 2;

      default:
        return 1;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboardEvent);
    return () => document.removeEventListener("keydown", handleKeyboardEvent);
  });

  return (
    <div className={classes.keyboardHelperPage}>
      <PageHeading>Keyboard Test</PageHeading>
      <div className={classes.container}>
        {event ? <p>You pressed {event?.code}</p> : <p>Press any key to see the information</p>}
        <table className="table table-bordered">
          <tbody>
            {BUTTONS.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((button, colIndex) => (
                  <td
                    // data-button={button}
                    align="center"
                    key={colIndex}
                    colSpan={getColspan(button)}
                    rowSpan={getRowspan(button)}
                    style={{
                      verticalAlign: "middle",
                      background: clickedButtons.includes(button) ? "lightblue" : "transparent",
                    }}
                  >
                    <span className="d-block p-3">{button}</span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default memo(KeyboardTestPage);

const BUTTONS = [
  [
    "Escape",
    "F1",
    "F2",
    "F3",
    "F4",
    "F5",
    "F6",
    "F7",
    "F8",
    "F9",
    "F10",
    "F11",
    "F12",
    "",
    "",
    "ScrollLock",
    "Pause",
    "",
    "",
    "",
    "",
  ],
  [
    "Backquote",
    "Digit1",
    "Digit2",
    "Digit3",
    "Digit4",
    "Digit5",
    "Digit6",
    "Digit7",
    "Digit8",
    "Digit9",
    "Digit0",
    "Minus",
    "Equal",
    "Backspace",
    "Insert",
    "Home",
    "PageUp",
    "NumLock",
    "NumpadDivide",
    "NumpadMultiply",
    "NumpadSubtract",
  ],
  [
    "Tab",
    "KeyQ",
    "KeyW",
    "KeyE",
    "KeyR",
    "KeyT",
    "KeyY",
    "KeyU",
    "KeyI",
    "KeyO",
    "KeyP",
    "BracketLeft",
    "BracketRight",
    "Enter",
    "Delete",
    "End",
    "PageDown",
    "Numpad7",
    "Numpad8",
    "Numpad9",
    "NumpadAdd",
  ],
  [
    "CapsLock",
    "KeyA",
    "KeyS",
    "KeyD",
    "KeyF",
    "KeyG",
    "KeyH",
    "KeyJ",
    "KeyK",
    "KeyL",
    "Semicolon",
    "Quote",
    "Backslash",
    "",
    "",
    "",
    "Numpad4",
    "Numpad5",
    "Numpad6",
  ],
  [
    "ShiftLeft",
    "KeyZ",
    "KeyX",
    "KeyC",
    "KeyV",
    "KeyB",
    "KeyN",
    "KeyM",
    "Comma",
    "Period",
    "Slash",
    "ShiftRight",
    "",
    "ArrowUp",
    "",
    "Numpad1",
    "Numpad2",
    "Numpad3",
    "NumpadEnter",
  ],
  [
    "ControlLeft",
    "MetaLeft",
    "AltLeft",
    "Space",
    "AltRight",
    "MetaRight",
    "ContextMenu",
    "ControlRight",
    "ArrowLeft",
    "ArrowDown",
    "ArrowRight",
    "Numpad0",
    "NumpadDecimal",
  ],
];
