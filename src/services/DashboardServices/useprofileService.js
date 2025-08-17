 import { useApi } from "../../hooks/useApi";


 export function useProfileService(){
    const api = useApi();

    const getProfile= async()=>{
        return await api.get("/profile");
    }

    const updateProfile= async(data)=>{
        return await api.put("/profile",data);
    }
    return {getProfile,updateProfile};
}

 