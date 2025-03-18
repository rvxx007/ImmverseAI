"use client";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import userImg from "../../public/userimg.svg";
import { fbApp } from "../../firebaseConfig";

const UserProfile = ({ obj }) => {
  const auth = getAuth(fbApp);
  const router = useRouter();
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        router.push("/");
      }
    });

    return () => unsubscribe();
  }, [auth, router]);

  const handleClickLogout = async () => {
    try {
      localStorage.removeItem("userData");
      await signOut(auth);
      window.location.reload()
      router.push("/");
    } catch (error) {
      console.error("Error Logout: " + error.message);
    }
  };

  return (
    <div className=" user-profile-section position-absolute">
      <div className="ups-div">
        <Image
          className="hs-profile-img"
          src={obj.picUrl || userImg}
          width={100}
          height={100}
          alt={"Profile Picture"}
        />
        <div>
          <h4>{obj.name}</h4>
          <span>
            <Link
              className="ups-email-txt"
              href={`mailto:${obj.email}`}
              target="_blank"
            >
              {obj.email}
            </Link>
          </span>
        </div>
      </div>
      <div>
        <button onClick={handleClickLogout} className="logout-btn">
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
