import { AddSinhVienAction, DeleteSinhVienAction, GetListSinhVienAction, LoadingSinhVienAction } from "./action";

export type GetListSVDispatchType = (args: GetListSinhVienAction) => GetListSinhVienAction
export type AddSVDispatchType = (args: AddSinhVienAction) => AddSinhVienAction
export type DeleteSVDispatchType = (args: DeleteSinhVienAction) => DeleteSinhVienAction;
export type LoadingSvDispatchType = (args: LoadingSinhVienAction) => LoadingSinhVienAction;