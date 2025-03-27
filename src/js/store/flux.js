const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contactList: [],
			hiddenMessage: "hidden",
			deleteStatus: false
		},
		actions: {
			getContactList: async () => {
				const requestOptions = {
					method: "GET",
					redirect: "follow"
				};

				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/PabloQuerales/contacts/", requestOptions);
					const result = await response.json();
					setStore({ contactList: result.contacts, hiddenMessage: "hidden", deleteStatus: false })

				} catch (error) {
					console.error(error);
				};
			},

			createUser: async () => {
				const requestOptions = {
					method: "POST",
					redirect: "follow"
				};

				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/PabloQuerales", requestOptions);
				} catch (error) {
					console.error(error);
				}
			},

			postContact: async (inputValue) => {
				const myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				const raw = JSON.stringify({
					"name": `${inputValue.name}`,
					"phone": `${inputValue.phone}`,
					"email": `${inputValue.email}`,
					"address": `${inputValue.address}`
				});
				const requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/PabloQuerales/contacts", requestOptions);
					if (response.status == 201) {
						setStore({ hiddenMessage: "" })
					} else {
						setStore({ hiddenMessage: "hidden" })
					}
				} catch (error) {
					console.error(error);
				};
			},
			deleteContact: async (id) => {
				const requestOptions = {
					method: "DELETE",
					redirect: "follow"
				};
				try {
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/PabloQuerales/contacts/${id}`, requestOptions)
					if (response.status == 204) {
						setStore({ deleteStatus: true })
					}

				} catch (error) {
					console.error(error);
				};
			},
			editContact: async (id, inputValue) => {
				const myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				const raw = JSON.stringify({
					"name": `${inputValue.name}`,
					"phone": `${inputValue.phone}`,
					"email": `${inputValue.email}`,
					"address": `${inputValue.address}`
				});

				const requestOptions = {
					method: "PUT",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				try {
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/PabloQuerales/contacts/${id}`, requestOptions);
					if (response.status == 200) {
						setStore({ hiddenMessage: "" })
					} else {
						setStore({ hiddenMessage: "hidden" })
					}
				} catch (error) {
					console.error(error);
				}
			}
		},
	};
};

export default getState;