import { useEffect, useState } from 'react'
import './App.css'
import Button from './Components/Button/Button'
import ButtonGroups from './Components/Button/ButtonGroups'
import Subtitle from './Components/Subtitle/Subtitle'
import Typography from './Components/Typography/Typography'
import SkeletonLoad from './Components/Skeleton/SkeletonLoad'
import { Box } from '@mui/material'
import AvaterStyle from './Components/AvaterStyle/AvaterStyle'
import RadioButton from './Components/RadioButton/RadioButton'
import Ratings from './Components/Ratings/Ratings'


function App() {

  const [loading, setLoading] = useState(true);

  const [data,setData] = useState();

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res =>{ 
      setLoading(false)  
      return res.json()
    })
    .then(data => setData(data))
  },[])
 console.log(data);

if (loading) {
  return(
    <Box sx={{display:"flex", justifyContent:"center"}}>
      <SkeletonLoad/>
    </Box>
  )
}

  return (
    <>
      
      <Typography/>
      <Subtitle/>
      <Button/>
      <ButtonGroups/>
      <AvaterStyle/>
      <RadioButton/>
      <Ratings/>
      
     
    </>
  )
}

export default App
