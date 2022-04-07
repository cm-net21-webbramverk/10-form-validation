import { useState } from 'react'

// Tips: börja med en separat designskiss
// https://codepen.io/david-zocom/pen/xxpWpRq?editors=1100


const PizzaForm = () => {
	const [address, setAddress] = useState('')
	const [addressTouched, setAddressTouched] = useState(false)

	
	// Valideringsregler:
	// Address får inte vara en tom sträng
	// Bör sluta på ett tal - svårt att kolla
	let addressIsValid = address.trim().length > 0
	let addressMessage = ''
	let addressCss = ''
	if( addressTouched ) {
		addressCss = addressIsValid ? 'valid' : 'invalid'
		addressMessage = addressIsValid ? '' : 'Vi behöver din adress för att kunna leverera pizzan.'
	}

	return (
		<div className="form">
			<section className={addressCss}>
				<label> Leveransadress </label>
				<input type="text"
					onChange={event => setAddress(event.target.value)}
					onBlur={() => setAddressTouched(true)}
					/>
					<p className="message"> {addressMessage} </p>
			</section>
		
		</div>
	)
}


export default PizzaForm
