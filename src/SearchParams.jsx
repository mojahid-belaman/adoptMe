import { useState } from 'react'
const ANIMALS = ['brid', 'cat', 'dog', 'rabbit', 'raptile']

const SearchParams = () => {
	const [location, setLocation] = useState('')
	const [animal, setAnimal] = useState('')
	const [breed, setBreed] = useState('')
	const breeds = ['Poodle']

	return (
		<div className="search-params">
			<form>
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
			</form>
		</div>
	)
}

export default SearchParams
