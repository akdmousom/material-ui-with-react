import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";

const RadioButton = () => {
    return (
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Fruit</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
            >
                <FormControlLabel value="Orange" control={<Radio />} label="Orange" />
                <FormControlLabel value="Mango" control={<Radio />} label="Mango" />
                <FormControlLabel value="Banana" control={<Radio />} label="Banana" />
                <FormControlLabel value="Pineapple" control={<Radio />} label="Pineapple" />
            </RadioGroup>
        </FormControl>
    );
};

export default RadioButton;