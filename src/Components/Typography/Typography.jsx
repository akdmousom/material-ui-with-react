import { Box, Typography as Typo } from '@mui/material'
const Typography = () => {
    return (
        <div>

     {/* 
     - With Typography component you can easily write h1 to h6 tag. But you have to add variant property 
     - In variant property you have to give the value like h1,h2,h3....h6
     
     */}
            <Box sx={{ textAlign: "center" }}>
                <Typo sx={{ fontWeight: "bold", fontSize: "40px" }} variant='h1' gutterBottom> h1 Typography Tag </Typo>
            </Box>

        </div>
    );
};

export default Typography;