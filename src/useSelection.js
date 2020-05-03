import { useState } from "react";

export const useSelection = initialValues => {
  const [valuesSelect, changeValues] = useState(initialValues);

  return [
    valuesSelect,
    e => {
      if (e.target.id === "clearSelect") {
        let clearedValuesSelect = new Array(valuesSelect.length).fill(false);
        changeValues(clearedValuesSelect);
      } else {
        const index = parseInt(e.target.id);
        let newValuesSelect = [...valuesSelect];
        newValuesSelect[index] = !newValuesSelect[index];
        changeValues(newValuesSelect);
      }
    }
  ];
};
