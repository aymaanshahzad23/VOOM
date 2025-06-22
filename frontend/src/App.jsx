// import Map from './components/Map';
import PickupDropForm from './components/PickupDropForm';
import './App.css';

export default function App() {
  return (
    <div className="app-wrapper">
      {/* Header */}
      <header className="header">
        🚖 VOOM – Compare Cab Fares Across Ola, Uber & Rapido
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Form Section */}
        <div className="form-section">
          <PickupDropForm />
        </div>

        {/* Map Section (Placeholder) */}
        <div className="map-section">
          {/* <Map /> */}
        </div>
      </main>
    </div>
  );
}
