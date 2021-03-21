import React from 'react'
import {useEffect,useState} from 'react'

const spanStyles = ({ width, backgroundColor }) => ({
    backgroundColor,
    width: `${width}%`,
    position: 'absolute',
    left: 0,
    height: '100%',
    transition: 'all 0.25s ease-in-out',
  });
const Topprogressbar = ({count}) => {
    const [calc, setCalc] = useState({current: 0 });
    const [topwidth, setTopwidth]= useState(0)
    useEffect(() => {
        if (count !== 0) {
          let current = (count / 20) * 100;
            setTopwidth(current)
          setCalc({current: Math.round(current) });
          console.log(topwidth)
          
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [count]);
    return (
        <div  style={{
            width: 600,
            position: 'relative',
            height: 20,
           
            overflow: 'hidden',
          }}>
            <span style={spanStyles({ width:calc.current, backgroundColor: 'rgba(0,0,0,0.5)' })} />
        </div>
    )
}

export default Topprogressbar
