// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EarthquakeMap from './components/EarthquakeMap';
import './App.css';

function App() {
  const [earthquakes, setEarthquakes] = useState([]);
  const [filters, setFilters] = useState({
    starttime: '2023-01-01',
    endtime: '2023-12-31',
    minmagnitude: 4,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchEarthquakes = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        'https://earthquake.usgs.gov/fdsnws/event/1/query',
        {
          params: {
            format: 'geojson',
            starttime: filters.starttime,
            endtime: filters.endtime,
            minmagnitude: filters.minmagnitude,
            limit: 1000,
          },
        }
      );
      setEarthquakes(response.data.features);
    } catch (err) {
      setError('Failed to fetch earthquake data.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEarthquakes();
    // Optional: Fetch data every 5 minutes for real-time updates
    const interval = setInterval(fetchEarthquakes, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleApplyFilters = () => {
    fetchEarthquakes();
  };

  return (
    <div className="App">
      <header>
        <h1>Earthquake Visualizer</h1>
      </header>
      <div className="filters">
        <label>
          Start Date:
          <input
            type="date"
            name="starttime"
            value={filters.starttime}
            onChange={handleFilterChange}
          />
        </label>
        <label>
          End Date:
          <input
            type="date"
            name="endtime"
            value={filters.endtime}
            onChange={handleFilterChange}
          />
        </label>
        <label>
          Minimum Magnitude:
          <input
            type="number"
            name="minmagnitude"
            value={filters.minmagnitude}
            onChange={handleFilterChange}
            min="0"
            step="0.1"
          />
        </label>
        <button onClick={handleApplyFilters}>Apply Filters</button>
      </div>
      {loading && <p>Loading earthquake data...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && <EarthquakeMap earthquakes={earthquakes} />}
      <footer>
        <p>
          Data Source: <a href="https://earthquake.usgs.gov/">USGS</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
