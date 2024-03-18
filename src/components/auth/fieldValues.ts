interface Field {
  name: string;
  type: string;
  placeholder: string;
  value: string;
}

export const signInField: Field[] = [
  {
    name: "email",
    type: "email",
    placeholder: "Email",
    value: "",
  },
  {
    name: "password",
    type: "password",
    placeholder: "Password",
    value: "",
  },
];

export const signUpField: Field[] = [
  {
    name: "firstName",
    type: "string",
    placeholder: "FirstName",
    value: "",
  },
  {
    name: "lastName",
    type: "string",
    placeholder: "LastName",
    value: "",
  },
  {
    name: "image",
    type: "file",
    placeholder: "",
    value: "",
  },
  {
    name: "email",
    type: "email",
    placeholder: "Email",
    value: "",
  },
  {
    name: "password",
    type: "password",
    placeholder: "Password",
    value: "",
  },
  {
    name: "phone",
    type: "phone",
    placeholder: "Phone",
    value: "",
  },
];
