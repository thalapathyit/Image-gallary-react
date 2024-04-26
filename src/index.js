import React from "react"
import ReactDOM from "react-dom"
import one from "./assets/images/perfume-1.png"
import two from "./assets/images/perfume-2.png"
import three from "./assets/images/perfume-3.png"
import four from "./assets/images/perfume-4.png"
import five from "./assets/images/perfume-5.png"
import six from "./assets/images/perfume-6.png"
import './style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
function Parent(props)
{
return(
  <div style={{background:"pink"}} class="hulk">
     <div>
      <h1>{props.p}</h1>
      <p>{props.pname}</p>
    </div>
    <div>
      <h1>{props.dog}</h1>
      <p>{props.dogname}</p>
    </div>
    <div>
      <h1>{props.cat}</h1>
      <p>{props.catname}</p>
    </div>
    <div>
      <h1>{props.elep}</h1>
      <p>{props.elepname}</p>
    </div>
    <div>
      <h1>{props.lion}</h1>
      <p>{props.lionname}</p>
    </div>
    <div>
      <h1>{props.beep}</h1>
      <p>{props.beepname}</p>
    </div>
    <div>
      <h1>{props.sas}</h1>
      <p>{props.sasname}</p>
    </div>
    <div>
      <h1>{props.ep}</h1>
      <p>{props.epname}</p>
    </div>
</div>
)
}

var arr=[
  {
    dog:<img src={one} alt="one"></img>,
    dogname:"DOG ANIMAL",
    cat:<img src={two} alt="two"></img>,
    catname:"DOG ANIMAL",
   elep:<img src={three} alt="three"></img>,
    elepname:"DOG ANIMAL",
    lion:<img src={four} alt="four"></img>,
    lionname:"DOG ANIMAL",
    beep:<img src={five} alt="five"></img>,
    beepname:"DOG ANIMAL",
    sas:<img src={six} alt="six"></img>,
    sasname:"DOG ANIMAL",
    ep:<img src={three} alt="three"></img>,
    epname:"DOG ANIMAL",
    p:<img src={five} alt="five"></img>,
    pname:"DOG ANIMAL",
  }
 
 
]
root.render(
  <div>
  {
  arr.map(function(item)
{
  return(
    <div>
    <Parent 
    dog={item.dog} dogname={item.dogname}
    cat={item.cat} catname={item.catname}
    elep={item.elep} elepname={item.elepname}
    lion={item.lion} lionname={item.lionname}
    beep={item.beep} beepname={item.lionname}
    sas={item.sas} sasname={item.sasname}
    ep={item.ep} epname={item.epname}
    p={item.p} pname={item.pname}
    ></Parent>
    </div>

  )
})

  }
</div>
)