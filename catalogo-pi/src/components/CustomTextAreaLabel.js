import handler from "@/pages/api/hello";

export default function CustomTextAreaLabel(props){
    return(
        <div className={`col-md-${props.col} mb-3`}>
          <label className="form-label" htmlfor={props.id}>{props.texto}</label>
          <textarea className="form-control" onChange={props.onChange} id={props.id} rows="3" />
        </div>
    )
}