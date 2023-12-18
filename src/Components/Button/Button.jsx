import { Box, Button as Btn, Stack } from "@mui/material"
const Button = () => {
    return (
        <div>
            <Box sx={{display:"flex", justifyContent:"center"}} >
                <Stack sx={{  alignItems:"center", }} spacing={2} direction="row" >
                    <Btn variant="text">Click Me</Btn>
                    <Btn variant="contained">Click Me</Btn>
                    <Btn variant="outlined">Click Me</Btn>
                </Stack>
            </Box>
        </div>
    );
};

export default Button;