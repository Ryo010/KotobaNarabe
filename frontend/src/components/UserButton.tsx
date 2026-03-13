import { useUser, useClerk } from "@clerk/clerk-react";
import { useState } from "react";
import { useEffect, useRef } from "react";
import '../styles/userbutton.css'

export default function CustomUserButton() {
  const { user } = useUser();
  const { signOut } = useClerk();
  const [open, setOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handler = (e: MouseEvent) => {
        if (ref.current && !ref.current.contains(e.target as Node)) {
          setOpen(false);
        }
      };

      document.addEventListener("mousedown", handler);
      return () => document.removeEventListener("mousedown", handler);
    }, []);

  if (!user) return null;

  return (
   <div className="mainProfile" ref={ref}>
    <div className="mainProfile">
      <div className="profile">

        <button
          className="profileBtn"
          onClick={() => setOpen(!open)}
        >
          <img
            src={user.imageUrl}
            alt="profile"
            className="avatar"
          />
        </button>
      </div>


     <div className={`profileInfoPanel ${open ? "open" : ""}`}>
        <div className="profileMenu">

            <div className="profileInfo">
               <img
                  src={user.imageUrl}
                  alt="profile"
                  className="avatarDropDown"
                />
              <p className="profUsername">{user.fullName}</p>
              <p className="joinDate">Joined : {user.createdAt ? user.createdAt.toLocaleDateString() : ''}</p>
              <p className="profEmail">{user.primaryEmailAddress?.emailAddress}</p>

              <button className ='signOutBtn' onClick={() => signOut()}>
              Sign out
            </button>

            </div>
          </div>
        
      </div>
    </div>
    </div>

  );
}