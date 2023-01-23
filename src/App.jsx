import React from 'react'
import { useForm } from "react-hook-form";


const App = () => {
	const { register, handleSubmit, formState: { errors } } = useForm();

	return (
		<div className="container">
			<div className="row">
				<div className="col-3"></div>
				<div className="col-6 p-2">

					<h3>Formulario:</h3>

					<form >

						<input type="text" />
						<input type="submit" />

					</form>

				</div>
			</div>
		</div>
	)
}

export default App