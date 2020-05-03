import { useState } from "react";

export const useForm = initialValues => {
  const [values, changeValues] = useState(initialValues);

  return [
    values,
    e => {
      const target = e.target;
      const value = target.type === "checkbox" ? target.checked : target.value;
      const name = target.name;
      changeValues({ ...values, [name]: value });
    }
  ];
};
