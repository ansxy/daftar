import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());
export default async function GetProfile(url) {
  const { data, error } = useSWR(`/api/user/profile/${url}`, fetcher);
  return data;
}
