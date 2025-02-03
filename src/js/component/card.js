import React from "react"
import { Link } from "react-router-dom"
export default function Card(props) {
    return (
        <div className="card mb-3" >
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="..." class="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">{props.address}</p>
                        <p className="card-text">{props.phone}</p>
                        <p className="card-text">{props.email}</p>
                    </div>
                    <Link>
                        <button className="btn btn-primary" to={`edit-contact`} >edit</button>
                    </Link>

                </div>
            </div>
        </div>
    )
}