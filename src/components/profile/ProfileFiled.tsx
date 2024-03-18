import React, { FC } from "react";

interface ProfileFieldProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProfileField: FC<ProfileFieldProps> = ({ name, value, onChange }) => {
  return (
    <>
      {name !== "image" ? (
        <div className="G-input">
          <label htmlFor={name}>{name}</label>
          <input
            type="text"
            id={name}
            name={name}
            value={value}
            onChange={onChange}
          />
        </div>
      ) : null}
    </>
  );
};

export default ProfileField;
