import { useEffect, useState } from 'react'
import useBreedList from './useBreedList'
import Result from './Result'
const ANIMALS = ['brid', 'cat', 'dog', 'rabbit', 'raptile']

const SearchParams = () => {
	const [pets, setPet] = useState([])
	const [location, setLocation] = useState('')
	const [animal, setAnimal] = useState('')
	const [breed, setBreed] = useState('')
	const { breeds } = useBreedList(animal)

	useEffect(() => {
		requestPet()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	async function requestPet() {
		const res = await fetch(
			`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
		)
		const json = await res.json()
		setPet(json.pets)
	}
	function onSubmit(e) {
		e.preventDefault()
		requestPet()
	}

	return (
		<div className="search-params">
			<form onSubmit={onSubmit}>
				<label htmlFor="location">
					Location
					<input
						type="text"
						value={location}
						placeholder="Location"
						onChange={(e) => setLocation(e.target.value)}
					/>
				</label>
				<label htmlFor="animal">
					Animal
					<select
						name="animal"
						value={animal}
						onChange={(e) => {
							setAnimal(e.target.value)
							setBreed('')
						}}
					>
						<option />
						{ANIMALS.map((ele) => (
							<option key={ele}>{ele}</option>
						))}
					</select>
				</label>
				<label htmlFor="breed">
					Breed
					<select
						name="breed"
						disabled={breeds.length === 0}
						value={breed}
						onChange={(e) => setBreed(e.target.value)}
					>
						<option />
						{breeds.map((ele) => (
							<option key={ele}>{ele}</option>
						))}
					</select>
				</label>
				<button>Submit</button>
			</form>
			<Result pets={pets} />
		</div>
	)
}

export default SearchParams
