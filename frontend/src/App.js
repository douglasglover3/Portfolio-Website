import Home from './Pages/Home'
import Error from './Pages/Error';
import Portfolio from './Pages/Portfolio';

import Sidebar from './Components/Sidebar'

import {StrictMode} from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

function App() {
  return (
    <StrictMode>
		<Router>
			<div style={{display: "flex"}}>
				<Sidebar/>
				<Routes>
					<Route path="/" element={<Home/>}/>
					<Route path="/about" element={<Error errorType="About page"/>}/>
					<Route path="/portfolio" element={<Portfolio/>}/>
					<Route path="/portfolio/professional" element={<Portfolio/>}/>
					<Route path="/portfolio/college" element={<Portfolio/>}/>
					<Route path="/portfolio/other" element={<Portfolio/>}/>
					<Route path="/error" element={<Error errorType="Something went wrong. Refresh the page or try again later."/>}/>
					<Route path="*" element={<Navigate to='/error'/>}/>
				</Routes>
			</div>
		</Router>
	</StrictMode>
  );
}

export default App;
