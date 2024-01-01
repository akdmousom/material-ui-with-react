import { VolumeDown, VolumeUp } from "@mui/icons-material";
import { Slider, Stack } from "@mui/material";
import { useState } from "react";

const SlideOptionButton = () => {
    const [volumeValue, setVolumeValue] = useState(0);

    const handleValueChange = (e)=>{
        const newValue = e.target.value;
        console.log(newValue);
        setVolumeValue(newValue)
    }
  
    return (
        <div>

            {/* <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                <VolumeDown />
                <Slider aria-label="Volume" value={value} onChange={(e,newValue)=>{
                    setVolumeValue(newValue)
                }} />
                <VolumeUp />
            </Stack> */}

            <Stack direction={'row'} spacing={2} width={'300px'} alignItems="center" >
                <VolumeDown/>
                <Slider   value={volumeValue} onChange={handleValueChange} />
                <VolumeUp/>
            </Stack>

        </div>
    );
};

export default SlideOptionButton;