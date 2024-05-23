function MyButton() {
	function handleClick() {
		alert('You clicked me!')
	}

	return <button onClick={handleClick}>Click me</button>
}

function MyApp() {
	return (
		<div>
			<h1>Welcome to my ap</h1>
			<MyButton />
		</div>
	)
}
const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(<MyApp />)
