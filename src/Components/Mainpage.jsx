import Test from './Test.jsx'
import Propsevent from './Propsevent.jsx'
import Props from "./Props.jsx"
export default function Mainpage(){

    return (
        <div className="mainpage">

            <Propsevent name="Raju"/>
            <Propsevent name="Rocky"/>
            <Props name="Rocky" age= {22}/>

        </div>
    );

}