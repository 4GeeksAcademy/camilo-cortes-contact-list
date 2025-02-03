import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { useState } from "react";
import { Context } from "../store/appContext";
export default function Form() {
    const { actions, store } = useContext(Context)

    const [inputValue, setInputValue] = useState({
        name: "",
        phone: "",
        email: "",
        address: ""
    })


    const handleSubmit = (e) => {
        e.preventDefault()
        actions.createContact(inputValue)
        console.log(e);
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValue({ ...inputValue, [name]: value })
        console.log(e);

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Full Name</label>
                    <input type="string" class="form-control" required onChange={handleChange} name="name" value={inputValue.name} />

                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email</label>
                    <input type="email" class="form-control" onChange={handleChange} name="email" value={inputValue.email} />

                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Phone</label>
                    <input type="number" class="form-control" required onChange={handleChange} name="phone" value={inputValue.phone} />
                </div>

                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Address</label>
                    <input type="string" class="form-control" onChange={handleChange} name="address" value={inputValue.address} />

                </div>

                <button type="submit" class="btn btn-primary">Submit</button>

            </form>
            <Link to="/">
                <span className="navbar-brand mb-0 h1">React Boilerplate</span>
            </Link>
        </>
    )
}

