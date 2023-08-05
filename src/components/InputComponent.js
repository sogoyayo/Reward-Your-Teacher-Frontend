import React from 'react';
import {Stack, TextField} from "@mui/material";

const InputComponent = ({   action, label , sx , value }) => {
    return (
        <Stack >
            <Stack direction="row" >
                <TextField
                    fullWidth
                    label={label}
                    id="outlined-size-small"
                    value={value}
                    size="small"
                    color="success"
                    onChange={action}
                    sx={  sx }
                />
            </Stack>
        </Stack>

    );
};

export default InputComponent;
