import React,{useState} from 'react'
import Values from 'values.js'
import './index.css'
import Singlecolor from './Singlecolor'



function App() {
  const [color,setColor] = useState("")
  const [error, setError] = useState(false)
  const [colorList, setColorList] = useState(new Values('#f15025').all(10))

const hanadlesubmit = (e) =>{
  e.preventDefault()
  try{
    const colorObj = new Values(color).all(10)
    setColorList(colorObj)
    setError(false)
  }
  catch (error){
    setError(true)
    console.log(error)
  }
}
  return (
    <>
   <section className="container">
      <h3>color generator</h3>
      <form onSubmit={hanadlesubmit}>
        <input 
          type="text"
          placeholder='#f15025'
          value={color}
          className={`${error ? 'error' : null}`}
          onChange={(e)=>setColor(e.target.value)}
        />
        <button type='submit' className='btn'>Generate</button>
      </form>
   </section>
   <section className="colors">
   {
     colorList.map((color,index)=>{
       const {alpha,rgb,type,weight} = color

       return <Singlecolor key={index} {...color} hex={color.hex} index={index}/>
     })
   }
 </section>
 </>
  )
}

export default App
