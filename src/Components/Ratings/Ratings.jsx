import { Rating, Typography } from "@mui/material";
import { useState } from "react";
import './Ratings.css'


const Ratings = () => {
    const [value, setValue] = useState(0);

    return (
        <div>
            <Typography sx={{ textAlign: 'center' }}>Ratings</Typography>

            <div className="rating">
                <Rating name="simple-rating" value={value} onChange={(event, newValue) => {
                    setValue(newValue)
                }} />
            </div>


        </div>
    );
};

export default Ratings;