Earthquake Visualizer
Overview
The Earthquake Visualizer is an interactive web application designed to display real-time and historical earthquake data on a map. Users can explore seismic activity globally, filter data by various parameters, and view detailed information for each earthquake event. This project is built with React and integrates mapping and data visualization tools to provide an engaging user experience.

Features
Map Display: Visualize earthquake locations on an interactive map with markers indicating magnitude and depth.
Filters: Filter earthquakes by date range, magnitude, depth, etc.
Real-Time Updates: Optionally display real-time or near-real-time data.
Detailed Information: Clickable markers provide comprehensive data on individual earthquakes.
Animations: View earthquake occurrences as a time-lapse.
Responsive Design: Works seamlessly across different devices.
Data Source
The visualizer uses earthquake data from the U.S. Geological Survey (USGS) Earthquake API. Data is retrieved in GeoJSON format to enable straightforward integration with mapping libraries.

Example API Request:

https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2023-01-01&endtime=2023-12-31&minmagnitude=4
This request fetches earthquake data for the year 2023 with a minimum magnitude of 4.

