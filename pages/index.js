import { useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
import Content from "./components/layouts/Content";
import NavigateBar from "./components/layouts/NavigateBar";
import useIsomorphicLayoutEffect from "./hooks/useIsomorphicLayoutEffect";

export default function Home({ children }) {
  const [typeRole, setTypeRole] = useState("MAHASISWA");
  const session = useSession();
  const timerRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const sendMessage = (e) => {
    timerRef.current = setTimeout(() => setLoading(true), 5000);
  };

  useIsomorphicLayoutEffect(() => {
    // Clear the interval when the component unmounts
    sendMessage();
  }, [loading]);

  useEffect(() => {
    // Clear the interval when the component unmounts
    return () => clearTimeout(timerRef.current);
  }, []);
  // Find way to get role
  return (
    <>
      <NavigateBar />
      <Content>{children}</Content>
      {/* {!loading && <ThreeDotsWave />}
      {loading && (
        <>
          
        </>
      )} */}
    </>
  );
}
