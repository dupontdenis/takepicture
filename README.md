# Take Picture App

A simple web application that allows users to capture photos using their webcam and store them with timestamps and custom names/moods.

## Features

- 📸 Capture photos directly from your webcam
- 💾 Store photos in a local database (@seald-io/nedb)
- 🖼️ View all captured photos in a gallery
- 🏷️ Add custom names/moods to each photo
- ⏰ Automatic timestamp tracking

## Technologies Used

- **Backend**: Node.js with Express.js
- **Database**: @seald-io/nedb (maintained fork of NeDB - embedded NoSQL database)
- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **WebRTC**: MediaDevices API for camera access

## Project Structure

```
takepicture/
├── app.js                 # Main application entry point
├── package.json           # Project dependencies
├── controllers/
│   └── pictures.js        # Picture controller logic
├── models/
│   └── Pictures.js        # Database model
├── routes/
│   └── index.js          # API routes
└── public/
    ├── index.html        # Main page (camera interface)
    ├── all.html          # Gallery page (view all photos)
    ├── photo.js          # Camera functionality
    ├── getPictures.js    # Fetch and display photos
    └── style.css         # Styling
```

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd takepicture
```

2. Install dependencies:

```bash
npm install
```

## Usage

1. Start the server:

```bash
node app.js
```

2. Open your browser and navigate to:

```
http://localhost:3000
```

3. **Taking a Picture:**

   - Click "Start Camera" to activate your webcam
   - Enter a name or mood in the input field
   - Click "Click Photo" to capture the image
   - The photo will be saved automatically

4. **Viewing Photos:**
   - Click on "Pictures of you" link in the navigation
   - View all captured photos with their timestamps and moods

## API Endpoints

### GET `/api/pictures`

Retrieve all stored pictures from the database.

**Response:**

```json
[
  {
    "_id": "...",
    "image": "data:image/png;base64,...",
    "mood": "HAPPY",
    "timestamp": 1234567890
  }
]
```

### POST `/api/pictures`

Save a new picture to the database.

**Request Body:**

```json
{
  "image": "data:image/png;base64,...",
  "mood": "HAPPY"
}
```

**Response:**

```json
{
  "image": "data:image/png;base64,...",
  "mood": "HAPPY",
  "timestamp": 1234567890
}
```

## Dependencies

- **express** (^4.18.2) - Fast, unopinionated web framework
- **@seald-io/nedb** (^4.0.4) - Maintained fork of NeDB, embedded persistent database

## Author

SUPERDUPONT

## License

ISC
