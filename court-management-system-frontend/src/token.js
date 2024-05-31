import { useSelector } from "react-redux";



export default function getToken(){
    const token = useSelector((state)=> state.user.user.token);
    return token;
};