# Firebase Connected NodeMCU Park Project

This project integrates Firebase Realtime Database with a NodeMCU-based IoT system to monitor and notify the status of a parking lot. It also uses the Vonage API to send SMS notifications about the parking status.

## Features

- Real-time monitoring of parking lot status using Firebase Realtime Database.
- SMS notifications sent to a predefined phone number using the Vonage API.
- Node.js-based backend for handling Firebase and Vonage integrations.

## Prerequisites

Before setting up the project, ensure you have the following:

- Node.js installed on your system.
- A Firebase project with a Realtime Database configured.
- A Vonage account with API credentials.
- A valid `serviceAccountKey.json` file for Firebase authentication.

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd iot_firebase_park_project
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Add your Firebase service account key:

   - Place your `serviceAccountKey.json` file in the root directory of the project.

4. Configure Vonage API credentials:
   - Update the `apiKey` and `apiSecret` in `index.js` with your Vonage credentials.
   - Replace the `phoneNumber` variable with the recipient's phone number.

## Usage

1. Start the application:

   ```bash
   node index.js
   ```

2. The application will listen for changes in the Firebase Realtime Database and send SMS notifications when the parking lot status changes.

## Project Structure

```
iot_firebase_park_project/
├── index.js                # Main application logic
├── package.json            # Project metadata and dependencies
├── package-lock.json       # Dependency lock file
├── serviceAccountKey.json  # Firebase service account key (not included in the repository)
├── .gitignore              # Files to ignore in version control
└── README.md               # Project documentation
```

## Dependencies

- [firebase-admin](https://www.npmjs.com/package/firebase-admin): Firebase Admin SDK for Node.js.
- [@vonage/server-sdk](https://www.npmjs.com/package/@vonage/server-sdk): Vonage Server SDK for sending SMS.

## Notes

- Ensure that your `serviceAccountKey.json` file is not shared publicly or committed to version control.
- Update the Firebase database URL in `index.js` to match your Firebase project.

## License

This project is licensed under the ISC License.
