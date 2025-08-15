import React from "react";

interface ProfileProps {
  src?: string;
  name?: string;
  size?: number;
}

const Profile: React.FC<ProfileProps> = ({ src, name = "User", size = 50 }) => {
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
        {src ? (
          <img
            src={src}
            alt="Profile"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#ddd",
            }}
          />
        )}
      </div>
      <span style={{ fontSize: "1.2rem", fontWeight: 500, marginLeft: "-6px" }}>
        {name}
      </span>
    </div>
  );
};

export default Profile;
