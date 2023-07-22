import { useDispatch, useSelector } from "react-redux";
// import { IRootState } from "../store";
// import { ISinhVien, deleteSinhVien, fetchSinhViensAction, loadingSinhVien } from "../store/sinhvien/action";
import { Dispatch } from "redux";
import { useEffect, useState } from "react";
import FormSinhVien from "./FormSinhVien";
import { IRootState } from "../../../store";
import { ISinhVien, deleteSinhVien, detailSinhVien, fetchSinhViensAction, loadingSinhVien } from "../../../store/sinhvien/action";


const ShowSinhVien = () => {
    // len rootstate de lay ve state cua cac feature minh mong muon
    const dispatch: Dispatch<any> = useDispatch()

    const sinhvienState = useSelector(
        (state: IRootState) => state.sinhvien,
    ) 
    const abortController = new AbortController();

    useEffect(() => {
        dispatch(loadingSinhVien(true));
        dispatch(fetchSinhViensAction());
    }, [dispatch]);

    if (!sinhvienState.isDataLoaded) {
        return <div>Loading...</div>;
    }
    const handleDeleteSV = (sv: ISinhVien) => {
        dispatch(deleteSinhVien(sv));
    }
    const handleDetailSV = (sv: ISinhVien) => {
        dispatch(detailSinhVien(sv));
    }

    return (
        <>
            <FormSinhVien/>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-left text-sm font-light">
                                <thead className="border-b font-medium dark:border-neutral-500">
                                    <tr>
                                        <th scope="col" className="px-6 py-4">ID</th>
                                        <th scope="col" className="px-6 py-4">Ten</th>
                                        <th scope="col" className="px-6 py-4">Nam Sinh</th>
                                        <th scope="col" className="px-6 py-4">Hanh Dong</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sinhvienState.sinhviens.map((sv, index) => {
                                        return <tr key={index} className="border-b dark:border-neutral-500">
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">{sv.id}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{sv.ten}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{sv.namsinh}</td>
                                            <td className="whitespace-nowrap px-6 py-4">
                                                <button onClick={event => handleDeleteSV(sv)}>Xóa</button>
                                                <button onClick={event => handleDetailSV(sv)}>Edit</button>
                                                 </td>
                                        </tr>

                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ShowSinhVien;