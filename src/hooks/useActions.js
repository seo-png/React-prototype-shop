import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";

// 상태를 변경하는 함수를 받아서 보내주는 역할을 하는 hook
export default function useActions() {
    const { addToOrder, remove, removeAll } = useContext(AppStateContext);

    return { addToOrder, remove, removeAll };
}