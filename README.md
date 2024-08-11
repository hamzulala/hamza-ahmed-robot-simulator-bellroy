# Robot Simulator

This project is a **Robot Simulator** built using **React** and **Three.js**. It was developed as a coding exercise for **Bellroy**. The application simulates a robot moving on a 5x5 grid, with the ability to rotate and move forward in any of the four cardinal directions (North, East, South, West). Additionally, the simulation is rendered in 3D using Three.js, allowing for a visually interactive experience.

## Features

- **Grid-Based Navigation**: The robot can move forward and rotate left or right within a 5x5 grid.
- **3D Rendering**: The robot and a static model are rendered in 3D using Three.js, providing a visually appealing simulation.
- **Responsive Controls**: The user can control the robot's movement and orientation through buttons that trigger the corresponding actions.
- **Real-Time Position Update**: The robot's current position and orientation are displayed in real-time.

## Tech Stack

- **React**: For building the user interface and managing component state.
- **Three.js**: For 3D rendering and visualization of the robot and static models.
- **Jest**: For unit testing the robot's movement and rotation logic.

## Project Structure

```
public/
|
├── apple_watch_7/              # Apple Watch 3D Model
├── delivery_robot/             # Robot 3D Model
src/
│
├── components/
│   ├── grid/
│   │   └── grid.js              # Grid component (optional if used)
│   ├── controls/
│   │   └── controls.js          # Control buttons for robot movement
│   ├── robotRenderer/
│   │   └── robotRenderer.js     # 3D rendering logic for the robot and static model
│   └── coordinateViewer/
│       └── coordinateViewer.js  # Displays robot's current position and direction
│
├── robotLogic.js                # Logic for robot movement and rotation
├── robotLogic.test.js           # Unit tests for robot logic
└── App.js                       # Main application component
```

## Installation and Setup

To run this application locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone [https://github.com/hamzulala/hamza-ahmed-robot-simulator-bellroy.git]
   cd robot-simulator
   ```

2. **Install Dependencies**:
   Ensure you have Node.js installed, then run:
   ```bash
   npm install
   ```

3. **Run the Application**:
   Start the development server:
   ```bash
   npm start
   ```
   The application will be available at `http://localhost:3000`.

4. **Run Tests**:
   To run the unit tests:
   ```bash
   npm test
   ```

## Usage

- **Move Forward**: Click the "Move Forward" button to move the robot one step in the direction it is facing.
- **Rotate Left**: Click the "Rotate Left" button to rotate the robot 90 degrees counterclockwise.
- **Rotate Right**: Click the "Rotate Right" button to rotate the robot 90 degrees clockwise.
- **3D View**: The robot's position is updated in real-time in the 3D view, along with the static model placed on the scene.

## Implementation Details

- The robot's movement and rotation logic are decoupled from the rendering logic, making the codebase modular and easy to test.
- Three.js is used to render a 3D environment where the robot and a static model (e.g., an Apple Watch model) are displayed. This adds a layer of interactivity and visualization to the simulation.
- Jest is used to ensure the core logic of the robot's movements and rotations are functioning correctly through unit tests.

## Future Enhancements

- **Boundaries**: Implement logic to prevent the robot from moving out of the 5x5 grid.
- **Additional Controls**: Add buttons to reset the robot's position or change the grid size dynamically.
- **Enhanced 3D Models**: Include more complex models or animations to enrich the 3D simulation experience.
- **Mobile Responsiveness**: Optimize the application for mobile devices, ensuring a seamless experience across all screen sizes.

## Acknowledgments

- **3D Models**: The 3D Models are purchased and downloaded from Sketchfab and the licences for it are within its respective licences in the `/public` folder

## Contact

For any questions or feedback, please contact Hamza Ahmed at Hamzaunaiz@gmail.com

---
