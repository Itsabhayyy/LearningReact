const Footer=()=>{
   return <>
    <div>chal bhai</div>
    <div>Niche UTar</div>
    </>
}

const Heading=(props)=>{
    
    return <>
        {props.arr.map((val)=>{
           return <p key={val} >{val}</p>
        })}
    </>
}

let root=ReactDOM.createRoot(document.querySelector("#root"))
let arr=["blue","grey","violet"]
root.render(<>
<Heading arr={arr} />
<Footer />
</>)
let footroot=ReactDOM.createRoot(document.querySelector("#footer"))
footroot.render(<Footer />)
function Me(){
    return <>
    <p>Hellow this is from the function me</p>
    <div>hey dear</div>
    </>
}
let meet=ReactDOM.createRoot(document.querySelector("#below"))

const brand=
React.createElement("button",{id:"hel", onClick:()=>alert("button clicked")},"clickMe")

meet.render(<>{<Me />} {brand}</>)