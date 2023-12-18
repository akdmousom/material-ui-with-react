import { Box, Button, ButtonGroup } from "@mui/material";

const ButtonGroups = () => {
    return (
        <div>
            <Box sx={{display:"flex", justifyContent:"center", marginTop:"10px" }}>
                <ButtonGroup variant="contained">
                    <Button>Button 1</Button>
                    <Button>Button 2</Button>
                    <Button>Button 3</Button>
                </ButtonGroup>
            </Box>
        </div>
    );
};

export default ButtonGroups;