import styleS from "../styles/Style.module.css";
import Picture from "../components/Picture"

const Homepage = ({data})=>{
    // console.log(data);
    return (
        <div className={styleS.pictures}>
        
        {
            data.map((item,index)=>(
              <Picture key={index} {...item}/>    
            ))
           
        }
       
        </div>
    )
}

export default Homepage;