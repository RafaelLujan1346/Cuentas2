
import "@fortawesome/react-fontawesome"
import Sidebar from './../layouts/Sidebar';
import Header from './../layouts/Header';
import Card from './../components/Card';
import CreditCard from './../components/CreditCard';

function Home() {
    return (
        <>
            <div className="d-flex">
                <div className="content-area flex-grow-1">
                    <div className="row g-4">
                        <Card ammount={8470.75} title={"Main balance"} percent={5.2} />
                        <div className="col-md-4">
                            <CreditCard number={"1223 5127 2134 0371"} name={"Amongus"} date={"13/46"} />
                        </div>
                        <div className="col-md-4">
                            <Card ammount={5200.00} title={"Total income"} percent={8.5} />
                        </div>
                        <div className="col-md-4">
                            <div className="card-main">
                                <Card ammount={3750.90} title={"Total Expense"} percent={-4.2} />
                            </div>
                        </div>
                    </div>
            <div className="card-main mt-4">
                        <h5 className="fw-bold mb-3">Recent Transfer Activity</h5>

                        <table className="table align-middle">
                            <thead>
                                <tr>
                                    <th>Date & Time</th>
                                    <th>Description</th>
                                    <th>Account</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr className="recent-transfer-row">
                                    <td>Feb 5, 2025</td>
                                    <td><img src="https://i.pravatar.cc/50?img=32" /> Alex Johnson</td>
                                    <td>Savings (***5678)</td>
                                    <td>$500.00</td>
                                </tr>

                                <tr>
                                    <td>Feb 4, 2025</td>
                                    <td><i className="fa-brands fa-netflix me-2 text-danger"></i> Netflix Billing</td>
                                    <td>Billing</td>
                                    <td>$15.99</td>
                                </tr>

                                <tr className="recent-transfer-row">
                                    <td>Feb 3, 2025</td>
                                    <td><img src="https://i.pravatar.cc/50?img=14" /> John Doe</td>
                                    <td>Savings (***9876)</td>
                                    <td>$450.00</td>
                                </tr>

                            </tbody>
                        </table>

            </div>
                </div>
            </div>

        </>
    )
}

export default Home
