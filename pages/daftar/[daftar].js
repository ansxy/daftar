import { useRouter } from "next/router";
import useSWR from "swr";
import Home from "..";

const fetcher = (url) => fetch(url).then((res) => res.json());
export default function Daftar(props) {
  const router = useRouter();
  const { data, error } = useSWR(`/api/ukm/detail/${router.query.id}`, fetcher);
  ``;
  return (
    <Home>
      <div
        data-theme="mytheme"
        className="w-full bg-secondary flex justify-center place-items-center"
      >
        <section
          data-theme="mytheme"
          className="w-1/2 bg-primary/75 drop-shadow-xl flex flex-col rounded-xl "
        >
          <div
            data-theme="mytheme"
            className="bg-warning rounded-t-xl mb-10 mt-5 p-1.5 w-full"
          >
            {data ? (
              <h1 className="text-white font-bold text-5xl font-sans">
                {data.detail.name}
              </h1>
            ) : (
              <></>
            )}
            <p className="text-white font-sans font-thin p-1.5">
              {router.query.daftar}
            </p>
          </div>
          <form method="post" className="p-3.5">
            <div
              className="form-control tooltip tooltip-warning mb-2 w-full"
              data-tip="Maksimal panjang 1000 karakter"
            >
              <label className="input-group input-group-vertical">
                <span>Motivation Latter</span>
                <div className="flex h-96">
                  <textarea
                    className="textarea w-full resize-none"
                    maxLength={10000}
                    placeholder="Motivation Latter"
                    name="motlet"
                  ></textarea>
                </div>
              </label>
            </div>
            <div className="form-control mb-10 w-full">
              <label className="input-group input-group-vertical ">
                <span>Foto KTM</span>
                <input type="file" className="file-input w-full" />
              </label>
            </div>
            <div className="flex flex-row-reverse">
              <button data-theme="mytheme" className="btn btn-[base-100]">
                KIRIM
              </button>
            </div>
          </form>
        </section>
      </div>
    </Home>
  );
}
