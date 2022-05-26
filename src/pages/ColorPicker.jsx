import React from "react";
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";
import { Header } from "../components";

const ColorPicker = () => {
  const change = (args) => {
    document.getElementById("preview").style.backgroundColor =
      args.currentValue.hex;
  };
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-whate rounded-3xl">
      <Header title="Color Picker" category="App" />
      <div className="text-center">
        <div id="preview"></div>
        <div className="flex justify-center items-center gap-20 flex-wrap">
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Palette</p>
            <ColorPickerComponent
              id="inline-palette"
              mode="Palette"
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
            />
          </div>
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Picker</p>
            <ColorPickerComponent
              id="inline-picker"
              mode="picker"
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
