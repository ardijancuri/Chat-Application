import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import './App.css';

export function App() {
	if (!localStorage.getItem('username')) return <LoginForm />;

	return (
		<ChatEngine
			height='100vh'
			userName={localStorage.getItem('username')}
			userSecret={localStorage.getItem('password')}
			projectID='a8d3458b-53e3-46ec-988b-59300acf133d'
		/>
	);
}

export default App;