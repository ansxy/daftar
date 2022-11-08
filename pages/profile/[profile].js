import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Home from "..";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Profile() {
  const { data: session } = useSession();
  const [profileData, setProfileData] = useState({
    about: "",
    experince: "",
    contact: "",
    email: "",
  });
  const [experince, setExperince] = useState();

  useEffect(() => {
    if (!session) {
      return;
    }
    const res = session.about.experince.split(",");
    return setExperince(res);
  }, [session]);

  const handleContact = (e) => {
    e.preventDefault();
  };
  const handleProfileChange = (e) => {
    e.preventDefault();
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = fetch(`/api/user/profile/${session.user.email}`);
  };

  return (
    <Home>
      <div className="flex flex-col w-full">
        <section className="carousel-item w-full flex flex-col mb-5">
          <img
            src="https://placeimg.com/800/200/arch"
            className="w-full h-3/4"
            alt="cover"
          />
          <div className="avatar relative">
            <div className="w-[1/6/2] absolute ring ring-primary ring-offset-base-100 ring-offset-2 -top-24 left-16 rounded-full">
              <img
                src="https://placeimg.com/192/192/people"
                className="obeject-fit"
              />
            </div>
          </div>
        </section>
        {!session ? (
          <></>
        ) : (
          <section
            data-theme="mytheme"
            className="w-full h-full mt-10 bg-[#FAF9F6]"
          >
            <div className="flex flex-row h-1/3">
              <div className="flex flex-col w-1/2 ml-24 ">
                <h1 className="font-bold text-2xl">{session.user.name}</h1>
                <p className="font-light">{session.about.about}</p>
              </div>
              <div className="flex flex-col w-1/2">
                <div className="flex flex-row w-full justify-center">
                  <h1 className="font-bold text-2xl">Kontak</h1>
                </div>
              </div>
            </div>
            <div className="divider w-1/2 ml-24"></div>
            <div className=" flex flex-col w-1/2 ml-24">
              {!session ? (
                <>
                  <div role="status" class="max-w-sm animate-pulse">
                    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                    <span class="sr-only">Loading...</span>
                  </div>
                </>
              ) : (
                <>
                  {session.user.role === "UKM" ? (
                    <>
                      <h1 className="font-bold text-2xl"> Pengalaman </h1>
                      {!experince ? (
                        <></>
                      ) : (
                        <ul>
                          {experince.map((data, i) => (
                            <li key={i}>{data}</li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <>
                      <h1 className="font-bold text-2xl">
                        {" "}
                        Pendaftaran yang sedang dibuka{" "}
                      </h1>
                      <ul>
                        <li>Peserta</li>
                        <li>Anggota</li>
                        <li>Ketua</li>
                      </ul>
                    </>
                  )}
                </>
              )}
            </div>
            {/* The button to open modal */}
            <div className="flex flex-row-reverse">
              <a href="#my-modal-2" className="btn mr-10">
                Edit Profile
              </a>
            </div>
            <div className="modal" id="my-modal-2">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Edit Your Profile</h3>
                <div className="modal-action flex flex-col">
                  <form className="" method="POST">
                    <div className="form-control mb-10">
                      <label className="input-group input-group-vertical">
                        <span>About</span>
                        <textarea
                          className="textarea"
                          name="about"
                          maxLength={2000}
                          onChange={handleProfileChange}
                          placeholder="Bio"
                        ></textarea>
                      </label>
                    </div>
                    <div
                      className="form-control mb-10 tooltip w-full"
                      data-tip="Pisahkan data dengan koma"
                    >
                      <label className="input-group input-group-vertical">
                        <span>Pengalaman</span>
                        <textarea
                          className="textarea"
                          name="experince"
                          onChange={handleProfileChange}
                          placeholder="Bio"
                        ></textarea>
                      </label>
                    </div>
                    <div className="form-control mb-10">
                      <label className="input-group input-group-vertical">
                        <span>Foto Profile</span>
                        <input
                          type="file"
                          className="file-input w-full max-w-xs"
                        />
                      </label>
                    </div>
                    <div className="form-control mb-10">
                      <label className="input-group input-group-vertical">
                        <span>Foto Landscape</span>
                        <input
                          type="file"
                          className="file-input w-full max-w-xs"
                        />
                      </label>
                    </div>
                  </form>
                  <div className="flex flex-row-reverse">
                    <a href="#" className="btn btn-warning ml-2">
                      Keluar
                    </a>
                    <a href="#" className="btn">
                      Simpan
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </Home>
  );
}
