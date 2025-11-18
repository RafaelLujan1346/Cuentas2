export default function CreditCard({number,name,date}){
    return(
        <>
            <div className="credit-card">
                <h5>SiXDJSJSTUMAMA</h5>
                <div className="credit-card-number">{number}</div>
                <div className="d-flex justify-content-between">
                    <span>{name}</span>
                    <span>{date}</span>
                </div>
            </div>
        </>
    )
}