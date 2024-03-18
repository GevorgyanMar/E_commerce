import React, { FC, useState } from "react";
import { UserType } from "../../types/types";
import ProfileField from "./ProfileFiled";
import { updateUser } from "../../service/authService";
import { getUserInfoFromLocalStorage } from "../../utilities/utilities";
import Image from "../Image/Image";

const Profile: FC = () => {
  const storedUser = getUserInfoFromLocalStorage() as UserType;
  const [formData, setFormData] = useState<UserType>(storedUser);

  const handleChange = (fieldName: string, value: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName as keyof UserType]: value || "",
    }));
  };

  const handleSave = async () => {
    try {
      const userId = formData.id;
      const updatedUserData: UserType = formData;
      if (userId) {
        await updateUser(+userId, updatedUserData);
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div>
      <h2>User Profile</h2>
      <Image src={formData.imageUrl} alt="image" />
      <form>
        {Object.keys(formData).map((key) => {
          return (
            <ProfileField
              key={key}
              name={key}
              value={formData[key as keyof UserType] || ""}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(key, e.target.value)
              }
            />
          );
        })}
      </form>
      <button className="G-btn" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default Profile;
