import React,{useState,useEffect} from 'react'

export default function Singlecolor({alpha,rgb,type,weight,hex,index}) {
    const [alert,setAlert] = useState(false)
    const rgbValue = rgb.join(",")
    useEffect(()=>{
        const timeOut = setInterval(()=>{setAlert(false)},3000)
        return ()=>{
            clearTimeout(timeOut)
        }
    })
  return (
    <article onClick={()=>{
        setAlert(!alert)
        navigator.clipboard.writeText(hex)
    }
        } style={{backgroundColor : `rgb(${rgbValue})`}}className={`color ${ index <= 11 ? 'false' : 'color-light'}`}>
        <p className="percent-value">{weight}</p>
        <p className="color-value">#{hex}</p>
        {alert && <p className="alert">COPIED TO CLIPBOARD</p>}
    </article>
  )
}
