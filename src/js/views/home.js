import React from "react";
import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import Card from "../component/card";
import { Context } from "../store/appContext"

export const Home = () => {
	const { store, actions } = useContext(Context)

	useEffect(()=>{
		actions.createUser()
		actions.getContact()

	},[])

	return (
	<div className="text-center mt-5">
		<Link to="/form">
		  <button className="btn btn-primary">Create Contact</button>
		</Link>
		{store.listContact.map((data)=>{
			return(
			<Card name={data.name} phone={data.phone} email={data.email} address={data.address} />
		)})}
		
	</div>
    )
}