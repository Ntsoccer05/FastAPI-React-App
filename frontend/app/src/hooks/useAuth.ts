import axios from "axios"
import { useCallback, useEffect, useState } from "react"
import {User} from "../../types/api/user"
import { selectorFamily } from "recoil"
import useSWR, { useSWRConfig } from 'swr';

export const useAuth = () =>{
    // TODO 仮のユーザデータ
    // const [loginUser, setLoginUser]= useState<User | undefined>(undefined)
    // let loginUserdata:User | undefined = {
    //     id: 1,
    //     name:"test1",
    //     email:"test1@email.com",
    //     img: "aaa",
    //     is_admin: false
    // }
    const Domain = "http://localhost:3300";

    // fastapiから取得した場合はuseSWRを使用
    const fetcher = (url:string) => axios.get(url).then(res => res.data)
    // 変数名dataをloginUserに変更
    const { data:loginUser, error, isLoading } = useSWR(Domain, fetcher);

    // TODO ユーザーデータ取得
    const getLoginUser = useCallback(() => {
        // axios.get<User>("")
        // .then((res) => {
            // data = res.data
            // setLoginUser({
            //     id: 1,
            //     name:"test1",
            //     email:"test1@email.com",
            //     img: "aaa",
            //     is_admin: false
            // })
        // }).catch((err) => {
            // data = undefined
        // })
    },[])

    const { cache } = useSWRConfig();
    const logout = useCallback(() => {
        cache.delete(Domain)
    },[])

    //レンダリング時に最初の一回だけ実行
    // useEffect(()=>{
    //     getLoginUser()
    // },[])

    // 未ログイン時のメニューを表示したい場合に設定
    // loginUserdata = undefined
    return {loginUser, logout}
}