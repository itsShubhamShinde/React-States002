import './Result.css'
import ReactMarkdown from 'react-markdown'


export default function Result({MDinput,setMDinput}) {
 return (
  
   <div className='resultcontainer'>
       <ReactMarkdown>{MDinput}</ReactMarkdown>
      
       </div>
 )
}