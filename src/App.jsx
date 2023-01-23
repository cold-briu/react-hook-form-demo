import React from 'react'
import { useForm } from "react-hook-form";


const App = () => {
	const { register, handleSubmit, formState: { errors } } = useForm();

	const onSubmit = (data) => {
		console.log(data);
	}
	return (
		<div className="container">
			<div className="row">
				<div className="col-3"></div>
				<div className="col-6 p-2">

					<h3>Formulario:</h3>

					<form onSubmit={handleSubmit(onSubmit)}>

						<input className='form-control' placeholder="@username" type="text" {...register("username", { required: true, minLength: 10, maxLength: 10 })} />
						{errors.username && <p>error: {errors.username.message} {errors.username.type}</p>}

						<input className='form-control' placeholder="email" type="text" {...register("email", { required: true, pattern: new RegExp("[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}$") })} />
						{errors.email && <p>error: {errors.email.message} {errors.email.type}</p>}

						<input type="submit" className='btn btn-primary' />

					</form>

				</div>
			</div>
		</div>
	)
}

export default App