import Home from './Pages/Home'
import Error from './Pages/Error';

import Sidebar from './Components/Sidebar'

import {StrictMode} from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

function App() {
  return (
    <StrictMode>
		<Router>
			<div style={{ display: "flex", height:"100%", maxWidth:"100%"}}>
				<Sidebar/>
				<Routes>
					<Route path="/" element={<Home/>}/>
					<Route path="/about" element={<Error errorType="About page"/>}/>
					<Route path="/portfolio" element={<Error errorType="Portfolio page"/>}/>
					<Route path="/portfolio/professional" element={<Error errorType="Portfolio Professionalpage"/>}/>
					<Route path="/portfolio/college" element={<Error errorType="Portfolio College page"/>}/>
					<Route path="/portfolio/other" element={<Error errorType="Portfolio Other page"/>}/>
					<Route path="/error" element={<Error errorType="Something went wrong. Refresh the page or try again later."/>}/>
					<Route path="*" element={<Navigate to='/error'/>}/>
				</Routes>
			</div>
		</Router>
	</StrictMode>
  );
}

export default App;
