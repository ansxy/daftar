import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { useSession } from "next-auth/react";
import { useState } from "react";
import Home from ".";

export default function RegisterVacany() {
  const { data: session } = useSession();
  const [requirement, setRequirments] = useState([]);
  const [toast, seToast] = useState(false);
  const [data, setData] = useState({
    email: "",
    name: "",
    description: "",
    requirements: "",
    expires: "",
  });
  const [value, setValue] = useState(dayjs("2014-08-18T21:11:54"));

  const handleTime = (newValue) => {
    setValue(newValue);
    setData({
      ...data,
      expires: value.toISOString(),
    });
  };
  const handleRequirement = (e) => {
    setData({ ...data, requirements: e.target.value });
    setRequirments(e.target.value.split(","));
  };
  const handleChange = (e) => {
    setData({
      ...data,
      email: session ? session.user.email : null,
    });
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/api/ukm/registervacany", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    seToast(true);
    setTimeout(() => {
      seToast(false);
    }, 3000);
  };
  return (
    <Home>
      <div
        data-theme="mytheme"
        className="w-full bg-secondary flex justify-center place-items-center"
      >
        <section
          data-theme="mytheme"
          className="w-1/2 bg-primary/75 drop-shadow-xl flex flex-col rounded-xl h-4/5 "
        >
          <div
            data-theme="mytheme"
            className="bg-warning rounded-t-xl mb-10 mt-5 p-1.5 w-full"
          >
            <h1 className="text-white font-bold text-5xl font-sans">
              Vacany Information
            </h1>
            <p className="text-white font-sans font-thin p-1.5">
              Fill out few details for make your vacany public
            </p>
          </div>
          <form method="post" onSubmit={handleSubmit} className="p-3.5">
            <div className="form-control mb-2">
              <label className="input-group input-group-vertical">
                <span>Vacany Name</span>
                <input
                  type="text"
                  placeholder="Anggota Divisi Humas"
                  className="input"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div
              className="form-control tooltip tooltip-warning mb-2 w-full"
              data-tip="Maksimal panjang 1000 karakter"
            >
              <label className="input-group input-group-vertical">
                <span>Description</span>
                <textarea
                  className="textarea resize-none"
                  maxLength={1000}
                  placeholder="Bio"
                  value={data.description}
                  onChange={handleChange}
                  name="description"
                ></textarea>
              </label>
            </div>
            <div
              className="form-control tooltip tooltip-warning tooltip-bottom w-full mb-2 "
              data-tip="Setiap Ketentuanya Pisah Dengan Koma"
            >
              <label className="input-group input-group-vertical">
                <span>Requirements</span>
                <input
                  type="text"
                  placeholder="Mahasiswa 2022,Teknik Industri"
                  className="input"
                  value={requirement}
                  name="requirements"
                  onChange={handleRequirement}
                />
              </label>
              <div className="flex flex-row bg-black">
                {requirement.map((item) => {
                  <div className="badge badge-info gap-2 m-5" key={item}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-4 h-4 stroke-current cursor-pointer"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                    {item}
                  </div>;
                })}
              </div>
            </div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <div className="flex flex-col bg-[#A9C3D1] rounded-t-md  rounded-b-md ">
                <span className="ml-4">Tanggal Dan Waktu Terakhir</span>
                <DateTimePicker
                  value={value}
                  className=" text-white bg-[#E1EAEF] rounded-b-md"
                  onChange={handleTime}
                  renderInput={(params) => <TextField {...params} />}
                />
              </div>
            </LocalizationProvider>
            <div className="flex flex-row-reverse mt-10">
              <button data-theme="mytheme" className="btn btn-[base-100]">
                KIRIM
              </button>
            </div>
          </form>
        </section>
      </div>
      {toast && (
        <div className="toast toast-end">
          <div className="alert alert-success ">
            <div>
              <span>Berhasil Membuat Pendaftaran</span>
            </div>
          </div>
        </div>
      )}
    </Home>
  );
}
