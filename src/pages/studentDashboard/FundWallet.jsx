import * as React from "react";
import axios from "../../api/axios";
import { FormStyle } from './Studentdashboard.style'


function FundWallet() {

  const [amount, setAmount] = React.useState(0);
  const [email, setEmail] = React.useState('');
    const handleAmountChange = async (e) => {
        e.preventDefault();
        setAmount(e.target.value);
        console.log(amount);
    };
    const handleEmailChange = async (e) => {
      e.preventDefault();
      setEmail(e.target.value);
      console.log(email);
  };
    const handlePayment = async (e) => {
      try{
        e.preventDefault();
        const data = {
          amount,
          email
        };
        console.log(data);
        const response = await axios.post("api/make-payment", data);
        const checkoutUrl = response.data.data.authorization_url; 
        
        window.location.href = checkoutUrl;
        return response.data;
      }
      catch(error){
        console.log(error);
      }
    };
  
  return (
    <>
      <FormStyle>
    <form>
        <div className="payment-data-form">
            <p className='modal-title'>Fund Your Wallet</p><br/>
            <input type="text" className="payment-data-form input" id="amount" placeholder="Enter amount"
              onChange={(e) => handleAmountChange(e)} />
            <input type="text" className="payment-data-form input" id="amount" placeholder="Enter email"
              onChange={(e) => handleEmailChange(e)} />
            <button type="submit" className="btn btn-primary" onClick={handlePayment}>Fund Wallet</button>
        </div>
    </form>
    </FormStyle>
    </>
  );
}

export default FundWallet;
