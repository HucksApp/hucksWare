import React,{useEffect,useState} from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import {  withStyles } from '@material-ui/core/styles';
import '../Styles/slider.css'



const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 30,
    borderTopRightRadius:5,
    borderBottomRightRadius:5
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    backgroundColor: ' #7b7b7b',

  },
}))(LinearProgress)










const SliderComp = (props) => {








  const [progress, setProgress] = useState(0);



  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(props.percent);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, []);


  return (
   
    <div  className='slider'>
      <p>{props.skill} </p>
      <BorderLinearProgress  variant='determinate' value={progress} />
      <Typography style={{fontSize:"30px",color:'#616161'}} variant='h3' >{`${Math.round(progress,)}%`}</Typography>
    </div>
  );
}

export default SliderComp;
