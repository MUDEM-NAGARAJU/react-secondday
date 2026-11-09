
export default function Test(){
    let names;
    names=["Raju","Rani","Swan","Dolphin"]
    let nmaes_obj=[
        {
            name:"ROCKY",
            age:22,
            role:"SDE 1"
        },
        {
            name:"ROCKY",
            age:24,
            role:"SDE 2"
        },
        {
            name:"ROCKY",
            age:26,
            role:"Data Engineer 1"
        },
        {
            name:"ROCKY",
            age:28,
            role:"Data Engineer 2"
        },
        {
            name:"ROCKY",
            age:30,
            role:"Data Architect"
        }
    ]
    return (

        <div>

            {names.map((i)=>{

                return <h1>Hi {i} !!</h1>

            })}

            {
                nmaes_obj.map((i)=>{
                    return <h1>Hi {i.name} - {i.age} - {i.role}</h1>
                })
            }
        </div>

        
    );
}