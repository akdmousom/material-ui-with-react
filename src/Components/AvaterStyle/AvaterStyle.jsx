import { Avatar, Box } from "@mui/material";

const AvaterStyle = () => {
    return (
        <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", margin:"10px 0"}}>
            <Avatar alt="Porfile Img" src="https://images.pexels.com/photos/19500113/pexels-photo-19500113/free-photo-of-a-woman-in-a-black-robe-holding-a-vr-headset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" sx={{width:40, height: 40, }}/>

            
            
        </Box>
    );
};

export default AvaterStyle;