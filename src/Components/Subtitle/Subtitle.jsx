import { Box, Typography } from "@mui/material";

const Subtitle = () => {
    return (
        <div>
            <Box sx={{textAlign:'center'}}>
                <Typography sx={{color:"darkolivegreen"}} variant="subtitle1">subtitle1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, maxime!
                <hr />
                </Typography>
                <Typography sx={{color:"blueviolet"}} variant="subtitle2">subtitle2: Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, maxime!
                </Typography>
                <hr />
            </Box>
        </div>
    );
};

export default Subtitle;
