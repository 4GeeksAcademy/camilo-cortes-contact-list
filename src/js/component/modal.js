import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Modal = (props) => {
	const { actions } = useContext(Context)

	const handleDelete = () => {
		actions.deleteContact(props.id)
	}
	return (
		<>
			<i className="bi bi-trash-fill" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
			<div
				className="modal fade"
				id="exampleModal"
				tabIndex="-1"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">
								Eliminar contacto
							</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div className="modal-body">Estás seguro que deseas eliminar este contacto?</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								data-bs-dismiss="modal"
							>
								Cancelar
							</button>
							<button type="button" data-bs-dismiss="modal" className="btn btn-danger" onClick={handleDelete}>
								Eliminar Contacto
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};