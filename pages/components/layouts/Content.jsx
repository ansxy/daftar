import useSWR from "swr";
import MainContent from "./MainContent";

export default function Content({ children = <MainContent /> }) {
  const { data, error } = useSWR("/api/getvacany");
  return (
    <main
      data-theme="mytheme"
      className=" bg-[#FAF9F6] h-screen w-full flex justify-between"
    >
      {children}
    </main>
  );
}
