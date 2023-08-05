import React from 'react';
import {Button} from "@mui/material";
import {LoadingButton} from "@mui/lab";

const SubmitButtonComponent = ({ loading  }) => {
    return (
            <LoadingButton  variant="contained" loading={loading} color="success" fullWidth type="submit"> Update </LoadingButton>
    );
};

export default SubmitButtonComponent;
