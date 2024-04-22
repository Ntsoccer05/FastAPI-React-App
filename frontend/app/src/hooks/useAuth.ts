import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { User } from "../../types/api/user";
import useSWR, { useSWRConfig } from "swr";

export const useAuth = () => {
  const Domain = "http://localhost:3300";

  const [getData, setGetData] = useState<boolean>(false);

  // fastapiから取得した場合はuseSWRを使用
  const fetcher = async (url: string) =>
    await axios.get(url).then((res) => {
      setGetData(true);
      return res.data;
    });
  // 変数名dataをloginUserに変更
  const { data: loginUser, error, isLoading } = useSWR(Domain, fetcher);

  const { cache } = useSWRConfig();
  // const loginUser = cache.get(Domain)
  const logout = useCallback(() => {
    cache.delete(Domain);
  }, []);

  return { loginUser, getData, logout };
};
