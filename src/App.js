import React, { useState} from 'react'
import './App.css'

function App ()  {
  const [selected, setSelected] = useState(null)


  const toggle = (i) => {
    if (selected === i){
      return setSelected(null)
    }

    setSelected(i)

  }

  return (
    <div className='faq'>
      <div className='accordion'><center><h1>FAQ</h1></center>
        {data.map((item, i) => (
          <div className='item'>
            <div className='title' onClick={() => toggle(i)}>
              <h3>{item.question}</h3>
              <span>{selected === i ? '-':'+'}</span>
            </div>
            <div className={selected === i ? 'content show':'content'}>{item.answer}</div>
          </div>
        ))}
      
      </div>
    </div>
  )
}

const data = [
  {
    question: 'What is web Development..?',
    answer: 'it"s the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience. Web developers, or devs, do this by using a variety of coding languages.',
     
  },
  {
    question: 'What is CSS..? ',
    answer:' Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media',
  },
  {
    question: 'What is React..?',
    answer: 'The React. js framework is an open-source JavaScript framework and library developed by Facebook. It is used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript',

  },
  {
    question:'What is Javascript..?',
    answer: 'JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.',

  },
  {
    question: 'What are the Frontend Languages..?',
    answer: 
    '1.Cascading Style Sheets (CSS),2.JavaScript,3.React,4.ngular,5.Vue,6jQuery,7.Swift,8.HyperText Markup Language (HTML).',

  },
]


export default App
