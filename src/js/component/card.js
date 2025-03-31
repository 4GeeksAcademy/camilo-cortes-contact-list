import React from "react";
import { Link } from "react-router-dom";
import { Modal } from "./modal"

export const Card = (props) => {

    return (
        <div className="card" >
            <div className="row g-0">
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                    <img src="https://picsum.photos/200" className="img-profile" alt="..." />
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text"><i className="bi bi-geo-alt-fill"></i>{props.address}</p>
                        <p className="card-text"><i className="bi bi-telephone-fill"></i>{props.phone}</p>
                        <p className="card-text"><i className="bi bi-envelope-fill"></i>{props.email}</p>
                    </div>
                </div>
                <div className="col-md-2 d-flex justify-content-center align-items-center gap-3 fs-5">
                    <Link className="bi bi-pencil-fill" to={`/edit-contact/${props.id}`}></Link>
                    <Modal id={props.id} />
                </div>
            </div>
        </div>
    )
}