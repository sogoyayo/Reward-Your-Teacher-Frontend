import axios from "../../api/axios";


//FUNCTION TO GET WALLET BALANCE
export const getWalletBalance = async () => {
    try {
    const response = await axios.get("api/wallet")
    console.log(response.data);
    return response.data;
    } catch (error) {
    console.log(error);
    };  
};
export const getTotalMoneySent = async () => {
    try {
        const response = await axios.get("api/total-amount")
        console.log(response.data);
        return response.data;
        } catch (error) {
        console.log(error);
        }; 
}