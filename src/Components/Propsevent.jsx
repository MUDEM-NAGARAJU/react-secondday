import "../css/propsevent.css"

export default function Propsevent({name}){

    let process=(event)=>{

        
        alert(event.target.innerText + "is clicked");

    }

    return(
        <div className="propsevent">
        <button onClick={process}>{name}</button>
        </div>
    );
}