import { FC, useEffect, useState } from "react";

interface Iprops {
    name: string,
    type : number,

}

const PropDemo: FC<Iprops> = ({name,type}) => {
    const [so1,setSo1] = useState<number>(0);
    const [so2,setSo2] = useState<number>(0);
    const [tong,setTong] = useState<number>(0);
    const [luaChon,setLuaChon] = useState<number>(0);
    const [errors, setErrors] = useState<string[]>(["1","2"]);

    // setErrors([]);
     console.log(errors);
    //    useEffect(() => {
    //     console.log('useEffect chay khi deps thay doi => ', so1)
    //     console.log('useEffect chay khi deps thay doi => ', so2)
    //     setTong(10);
    //     // const searchRealtime = async () => {
    //     //     const profile = await fetch('/searchProfileByTen')
    //     //     setNameCallApiSearch(profile)
    //     // }
    //     // searchRealtime()
    // }, [so1,so2])
    useEffect(() => {
        console.log('useEffect chay khi co event cua221312 component')
        // setFullName({name:'TrungHC',familyName: 'HCT'});
    })
    const handleSo1 = () => {

    }
    const handleSo2 = () => {

    }
    const handleTinhTong = (event:any) => {
        console.log(luaChon);
        setTong(so1+so2);
    }
    return (
        <>
        <input type="text" onChange={(event) => setSo1(+event.target.value)} />
        <input type="text" onChange={(event) => setSo2(+event.target.value)}/>
        <select onChange={(event) => setLuaChon(+event.target.value)}>
            <option value={1}>AAAA</option>
            <option value={2}>AAAA</option>
        </select>
        <input type="submit" onClick={handleTinhTong}/>
        <h1>Tên tôi là {name} và tên tôi là {tong}</h1></>
    );
}

export default PropDemo;