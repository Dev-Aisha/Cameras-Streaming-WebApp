
# Cameras Streaming WebApp🎦📍

A responsive React web application for monitoring camera streams on an interactive Mapbox GL map.

## Features

- Displays a full interactive map using *Mapbox GL* 🗺️
- Clickable markers for each camera (based on latitude & longitude)
- When a camera is selected, a live HLS stream is displayed in a side panel📷
- Close button to hide video and return to full map view

## Screenshots

### Full Map View
![Full Map View](https://github.com/user-attachments/assets/dbcc229c-775d-4626-ba73-4084f320e6e1)

### Video Panel After Camera Selection
![Video Panel After Camera Selection](https://github.com/user-attachments/assets/752f6d8b-c751-444a-b4ac-63254c3f3740)


## Getting Started

### 1. Clone the repository

```
git clone https://github.com/Dev-Aisha/Cameras-Streaming-WebApp.git
cd Cameras-Streaming-WebApp
```


### 2. Install dependencies

```bash
npm install
```


### 3. Configure your Mapbox Token

> To use the Mapbox map, you need a valid [Mapbox](https://account.mapbox.com/) access token.

- Create a file called `.env.local` in the root directory
- Add your token like this:


`REACT_APP_MAPBOX_TOKEN=your_mapbox_token_here`


Then make sure you are using the token inside `Map.js` like this:


`mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN`;


### 4. Start the mock API server

```bash
npm run mock-api
```

### 5. Start the React app

```bash
npm start
```
