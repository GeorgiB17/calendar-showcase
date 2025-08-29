import React from "react";
import type { User } from "./Types";
import cat from "../assets/cat.png";
interface ProfileProps {
  name?: string;
  size?: number;
  user: User | null;
}

const Profile: React.FC<ProfileProps> = ({
  name = "User",
  size = 65,
  user,
}) => {
  return (
    <div style={{ display: "flex", gap: "0", alignItems: "center" }}>
      <div
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          overflow: "hidden",
        }}
      >
        {user ? (
          <img
            src={user.profilePic}
            alt="Profile"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        ) : (
          <img
            src={cat}
            alt="Profile"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        )}
      </div>
      <span style={{ fontSize: "1.2rem", fontWeight: 500, marginLeft: "10px" }}>
        {user ? user.name : name}
      </span>
    </div>
  );
};

export default Profile;
