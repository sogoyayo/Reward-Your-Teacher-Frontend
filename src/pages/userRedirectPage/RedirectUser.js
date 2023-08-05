import React from "react";
import { Link } from 'react-router-dom'
import RewardIcon from "../../assets/loginAssets/rewardteacherlogo.svg"
import { Selectionwrapper,LogoWrapper,InputBox, FormWrapper,LineSection,AccountCheck } from './Redirect.styled'

const SignUpSelection = () => {

   
        return(
            <Selectionwrapper>
                <LogoWrapper>
                    <img src={RewardIcon} alt="icon" />
            
                </LogoWrapper>
                <FormWrapper>
                    Welcome!
                    <InputBox>
                          <Link to="/studentsignup"><button>Sign Up as Student</button></Link>
                        </InputBox>
                    <LineSection>
                            <span></span><div>or</div> <span></span>
                    </LineSection>
                    <InputBox>
                          <Link to="/teachersignup"><button>Sign Up as Teacher</button></Link>
                        </InputBox>
                    <AccountCheck>
                                <p>Already have an account?
                                    <Link to="/login" style={{color:"#80B918", textDecoration:"none"}}>Sign In</Link>
                                     </p>
                    </AccountCheck>
                </FormWrapper>
            </Selectionwrapper>
        )
        }


export default SignUpSelection



