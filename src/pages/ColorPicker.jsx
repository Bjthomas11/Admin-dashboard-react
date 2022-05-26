import React from "react";
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Page,
  Search,
  Inject,
  Toolbar
} from "@syncfusion/ej2-react-grids";
import { Header } from "../components";

const ColorPicker = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-whate rounded-3xl">
      <Header title="Color Picker" category="Apps" />
    </div>
  );
};

export default ColorPicker;
