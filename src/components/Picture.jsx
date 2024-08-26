import styleS from "../styles/Style.module.css";

const Picture =({photographer, src:{large}})=>{
    return(
        <div>
            <div className={styleS.picture}>
            <div className={styleS.imageContainer}>
                 <img src={large} className={styleS.Picture} alt="" />
            </div>
               
                <div className={styleS.info}>
                    <h4 >{photographer}</h4> 
                </div>
                
            </div>
           
        </div>
    )
}

export default Picture;