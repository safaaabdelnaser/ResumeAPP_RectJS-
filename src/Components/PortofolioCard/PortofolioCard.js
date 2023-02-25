export default function PortofolioCard(props) {
    return (
        <>
            <div className="card text-center p-5" style={props.style} >
                <div className="card-body">
                    <h5 className="card-title">{props.value}</h5>
                    <hr />
                </div>
            </div>



        </>)
}