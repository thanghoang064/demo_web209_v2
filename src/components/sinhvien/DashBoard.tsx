import {  useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../store";
import {ISinhVien, deleteSinhVien, fetchSinhViensAction} from "../../store/sinhvien/action";
import { Dispatch } from "redux";
import {useEffect, useState} from "react";

const Dashboard = () => {
    // len rootstate de lay ve state cua cac feature minh mong muon
    const dispatch: Dispatch<any> = useDispatch()

    const sinhvienState = useSelector(
        (state: IRootState) => state.sinhvien,
    )
    useEffect(() => {

            dispatch(fetchSinhViensAction());

    }, []);
    if (!sinhvienState.isDataLoaded) {
        return <div>Loading...</div>;
    }
    const handleDeleteSV = (sv:ISinhVien) => {
        dispatch(deleteSinhVien(sv));
    }


    return (
        <>
            <h1>Dashboard</h1>
            <table border={1}>


                  <tr>
                      <td>ID</td>
                      <td>Ten</td>
                      <td>Nam Sinh</td>
                      <td>Hanh dong</td>
                  </tr>

            {sinhvienState.sinhviens.map((sv, index) => {
                return  <tr key={index}>
                    <td>{sv.id}</td>
                    <td>{sv.ten}</td>
                    <td>{sv.namsinh}</td>
                    <td><button onClick={event => handleDeleteSV(sv)}>Xóa</button> </td>
                </tr>

            })}
            </table>
        </>
    );
}
export default Dashboard;