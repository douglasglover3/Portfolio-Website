import Home from './Pages/Home'
import Error from './Pages/Error';
import Portfolio from './Pages/Portfolio';
import ProjectPage from './Pages/ProjectPage';

import Sidebar from './Components/Sidebar'

import {StrictMode} from "react";
import {HashRouter as Router, Routes, Route, Navigate} from "react-router-dom";

function App() {
  return (
    <StrictMode>
		<Router>
			<div style={{display: "flex"}}>
				<Sidebar/>
				<div style={{display: "flex", flexDirection: "column", maxWidth: "100%", marginRight: "7vh"}}>
					<Routes>
						<Route path="/" element={<Home/>}/>
						<Route path="/portfolio/*" element={<Portfolio/>}/>
						<Route path="/projects/*" element={<ProjectPage/>}/>
						<Route path="/error" element={<Error errorType="Something went wrong. Refresh the page or try again later."/>}/>
						<Route path="*" element={<Navigate to='/'/>}/>
					</Routes>
				</div>
			</div>
		</Router>
	</StrictMode>
  );
}

export default App;
