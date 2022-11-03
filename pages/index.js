import { useSession } from "next-auth/react";
import { useState } from "react";
import Content from "./components/layouts/Content";
import NavigateBar from "./components/layouts/NavigateBar";

export default function Home() {
  const [typeRole, setTypeRole] = useState("MAHASISWA");
  const session = useSession();
  // Find way to get role
  return (
    <>
      {session.status === "loading" ? (
        <div>loading</div>
      ) : (
        <>
          {typeRole === "UKM" ? (
            <div> ini UKM </div>
          ) : (
            <>
              <NavigateBar />
              <Content />
            </>
          )}
        </>
      )}
    </>
  );
}
