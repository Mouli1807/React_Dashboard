
// Main App component: wraps routes with ThemeProvider
import Routes from './Routes';
import { ThemeProvider } from './context/ThemeContext';


// App component provides theme context to all routes
function App() {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  );
}

export default App;