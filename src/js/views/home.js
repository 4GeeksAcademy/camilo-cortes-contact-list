import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Card } from "../component/card";
import { Context } from "../store/appContext";


export const Home = () => {

	const { store, actions } = useContext(Context)

	useEffect(() => {
		actions.createUser()
		actions.getContactList()
	}, [store.deleteStatus])

	return (
		<div className="container">
			<div className="d-flex flex-row-reverse">
				<Link to="/add-contact">
					<button className="btn btn-primary my-2">Add new Contact</button>
				</Link>
			</div>
			{store.contactList.length > 0 ? store.contactList.map((data) => {
				return (
					<Card address={data.address} email={data.email} name={data.name} phone={data.phone} id={data.id} />
				)
			}) : "NO HAY CONTACTOS CREADOS, POR FAVOR AGREGUE UNO"
			}
		</div>
	);
}