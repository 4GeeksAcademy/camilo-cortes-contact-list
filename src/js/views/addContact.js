import React, {useContext} from "react";
import { Form } from "../component/form";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useLocation } from "react-router-dom";

export const AddContact = () => {
const {store} = useContext(Context)
const path = useLocation()

    return (
        <div className="container">
            <h1 className="text-center mt-5">{path.pathname == "/add-contact" ? "Add New Contact" : "Edit Contact"}</h1>
            <h3 className={`text-center text-success ${store.hiddenMessage}`} >{path.pathname == "/add-contact" ? "Contact Created Successfully" : "Contact Edited Successfully"}</h3>
            <Form pathname={path.pathname}/>
            <Link to={"/"}>
                <span>or get back to contact</span>
            </Link>
        </div>
    )
}