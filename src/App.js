import React from 'react';
import { BrowserRouter as Router, Route as Route, Link as Link } from 'react-router-dom'

import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Produtos from './pages/Produtos'

function App() {
	return (
	<Router>
	<div>
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<Link className="navbar-brand" to="/">Gerenciador de Produtos</Link>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNavDropdown">
				<ul className="navbar-nav">
					<li className="nav-item active">
						<Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/produtos">Produtos</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/sobre">Sobre</Link>
					</li>
					
					{/* <li className="nav-item dropdown">
						<a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							Dropdown link
						</a>
						<div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
							<a className="dropdown-item" href="#">Action</a>
							<a className="dropdown-item" href="#">Another action</a>
							<a className="dropdown-item" href="#">Something else here</a>
						</div>
					</li> */}
					
				</ul>
			</div>
		</nav>

		<div className="container-fluid">
					<Route exact path='/' component={Home} />
					<Route exact path='/sobre' component={Sobre} />
					<Route path='/Produtos' component={Produtos} />
		</div>

	</div>
	</Router>
	);
}

export default App;
