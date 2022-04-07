import { useState } from 'react'

const PizzaForm = () => {
	const [address, setAddress] = useState('')
	const [addressTouched, setAddressTouched] = useState(false)

	
	// Valideringsregler:
	// Address får inte vara en tom sträng
	// Bör sluta på ett tal - svårt att kolla
	let addressIsValid = address.trim().length > 0

	return (
		<div className="form">
			<section>
				<p> Leveransadress </p>
				<input type="text"
					onChange={event => setAddress(event.target.value)}
					onBlur={() => setAddressTouched(true)}
					/>
					<p> {addressTouched + ''} </p>
			</section>
		
		</div>
	)
}


export default PizzaForm
