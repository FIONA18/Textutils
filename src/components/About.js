import React from 'react'

export default function About(props) {

let myStyle =
{
    color:props.mode==='dark'? 'white':'#18185a',
    backgroundColor:props.mode==='dark'? '#18185a':'white'
}

// const [myStyle, setStyle] = useState({
//     color:'black',
//     backgroundColor:'white'
// })
// const ToggleMode=()=>
// {
//     if(myStyle.color ==='black')
//     {
//         setStyle({
//             color:'white',
//             backgroundColor:'black'
//         })
//     }
//     else
//     {
//         setStyle({
//             color:'black',
//             backgroundColor:'white'
//         })
//     }
// }

    

  return (
    <div className='container py-1' style={myStyle}>
        <h1 className='my-2'>About Us</h1>
       <div className="accordion my-1   " id="accordionExample">
            <div className="accordion-item" >
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                    Intro
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                TextUtils is a ReactJs website built primarily to do various operations on regular typed text. You can safely use WordPad or NotePad for text drafting, and saving, but TextUtils offers much more than simple text drafting and formatting. TextUtils can convert your text to any case in just one simple click of a button. It can extract links and numbers safely from a labyrinth of random text or sophisticated documentation. It has an improved property of base64 encoding, reversal of your inputted text.You can even remove whitespaces from your scripted documents, and wear up your earphones to listen to it, instead of straining your eyes! It does a detailed analyzing of your text, and provides an output of words, and characters, along with reading time as well. The best part of TextUtils is that it is an open source project, as a result, dozens of new features are in the upcoming, which definitely makes it a cut above the rest.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                    Credits
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                <strong>Code with Harry</strong>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                    Developed By
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>Fiona Lishal D'Souza</strong> 
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

