import { useRouter } from "next/router";
import useSWR from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json());
export default function DetailBar(props) {
  const router = useRouter();
  const { data, error } = useSWR(
    `/api/user/profile/${props.data.AuthorOrganizationEmail}`,
    fetcher
  );
  return (
    <div className="laptop:flex flex-col w-full h-full bg-slate-300 shadow-md smartphone:hidden">
      <section className="flex flex-col justify-center place-items-center w-full  ">
        <div className="avatar h-36 mt-[2.625rem]">
          <div className="w-full rounded-xl">
            <img src="https://placeimg.com/192/192/people" />
          </div>
        </div>
        <h1 className="mt-2 font-bold">{props.data.name}</h1>
        {!data ? <></> : <h2>{data.user.name}</h2>}
      </section>
      <div className="divider font-semibold ">Requirment</div>
      {/* Need Be Fixed When it overflow */}
      <div className="w-full">
        <ol className="ml-5 list-inside list-disc flex flex-col">
          <li className="truncate ...">Mahasiswa Aktif 2022</li>
          <li>A</li>
          <li>A</li>
          <li>A</li>
          <li>A</li>
          <li>A</li>
          <li>A</li>
        </ol>
      </div>
      <div className="divider font-semibold">About The Job</div>
      <div className="ml-5 mr-5 flex">
        <p className="break-words">{props.data.description}</p>
      </div>
      <section className="flex h-1/6 justify-center place-items-center">
        <button
          className="btn btn-active btn-primary"
          onClick={() =>
            router.replace({
              pathname: `/daftar/${data ? data.user.name : null}`,
              query: { id: data ? props.data.id : null },
            })
          }
        >
          Daftar
        </button>
      </section>
    </div>
  );
}
