import "./ProgressSkills.css"
export default function ProgressSkills(prop)
{
return (<>
<div className="progress">
  <div className="progress-bar " role="progressbar" style={{width:prop.value+`%`}} aria-valuenow={prop.value} aria-valuemin="0" aria-valuemax="100">{prop.name}</div>
</div>

</>)
}