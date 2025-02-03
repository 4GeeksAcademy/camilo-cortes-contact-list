
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			listContact: [],

		},
		actions: {
			getContact: async () => {
				const requestOptions = {
					method: "GET",
					redirect: "follow"
				};

				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/camilocortes/contacts", requestOptions);
					const result = await response.json();
					setStore({ listContact: result.contacts })
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
					const response = await fetch("https://playground.4geeks.com/contact/agendas/camilocortes", requestOptions);


				} catch (error) {
					console.error(error);
				};
			},
			createContact: async (inputValue) => {
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
					const response = await fetch("https://playground.4geeks.com/contact/agendas/camilocortes/contacts", requestOptions);
					const result = await response.json();
					console.log(result)
				} catch (error) {
					console.error(error);
				};

			},


		}
	};
};

export default getState;
