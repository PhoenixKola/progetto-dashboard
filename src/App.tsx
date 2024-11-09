import './App.scss';
import Navbar from './components/Navbar';
import UserDashboard from './components/Users/UserDashboard';

function App() {
  return (
    <div style={{height: '100vh'}}>
      <Navbar />
      <UserDashboard />
    </div>
  );
}

export default App;
