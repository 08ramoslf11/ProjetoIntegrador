export default function CustominputLabel(props){
    return(
        <div className={`col-md-${props.col} mb-3`}>
          <label className="form-label" htmlfor={props.id}>{props.texto}</label>
          <input className="form-control" onChange={props.onChange} id={props.id} type="text" />
        </div>
    )
}