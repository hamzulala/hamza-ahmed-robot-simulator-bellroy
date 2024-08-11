import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  const sectionsRef = useRef([]); // Ref array to store multiple section refs
  const [visibleSections, setVisibleSections] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => [...prev, entry.target]);
            observer.unobserve(entry.target); // Stop observing once it's visible
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      if (sectionsRef.current) {
        sectionsRef.current.forEach((section) => {
          if (section) observer.unobserve(section);
        });
      }
    };
  }, []);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
      <motion.h1
        ref={(el) => (sectionsRef.current[0] = el)}
        initial="hidden"
        animate={
          visibleSections.includes(sectionsRef.current[0])
            ? "visible"
            : "hidden"
        }
        variants={fadeInVariants}
        className="text-3xl font-bold text-gray-800 mb-4"
      >
        About this application
      </motion.h1>

      <motion.p
        ref={(el) => (sectionsRef.current[1] = el)}
        initial="hidden"
        animate={
          visibleSections.includes(sectionsRef.current[1])
            ? "visible"
            : "hidden"
        }
        variants={fadeInVariants}
        className="text-gray-700 mb-4"
      >
        This project is a <strong>Robot Simulator</strong> built using{" "}
        <strong>React</strong> and <strong>Three.js</strong>. It was developed
        as a coding exercise for <strong>Bellroy</strong>. The application
        simulates a robot moving on a 5x5 grid, with the ability to rotate and
        move forward in any of the four cardinal directions (North, East, South,
        West). Additionally, the simulation is rendered in 3D using Three.js,
        allowing for a visually interactive experience.
      </motion.p>

      <motion.h2
        ref={(el) => (sectionsRef.current[2] = el)}
        initial="hidden"
        animate={
          visibleSections.includes(sectionsRef.current[2])
            ? "visible"
            : "hidden"
        }
        variants={fadeInVariants}
        className="text-2xl font-bold text-gray-800 mb-2"
      >
        Features
      </motion.h2>
      <motion.ul
        ref={(el) => (sectionsRef.current[3] = el)}
        initial="hidden"
        animate={
          visibleSections.includes(sectionsRef.current[3])
            ? "visible"
            : "hidden"
        }
        variants={fadeInVariants}
        className="list-disc list-inside text-gray-700 mb-4"
      >
        <li>
          <strong>Grid-Based Navigation:</strong> The robot can move forward and
          rotate left or right within a 5x5 grid.
        </li>
        <li>
          <strong>3D Rendering:</strong> The robot and a static model are
          rendered in 3D using Three.js, providing a visually appealing
          simulation.
        </li>
        <li>
          <strong>Responsive Controls:</strong> The user can control the robot's
          movement and orientation through buttons that trigger the
          corresponding actions.
        </li>
        <li>
          <strong>Real-Time Position Update:</strong> The robot's current
          position and orientation are displayed in real-time.
        </li>
      </motion.ul>

      <motion.h2
        ref={(el) => (sectionsRef.current[4] = el)}
        initial="hidden"
        animate={
          visibleSections.includes(sectionsRef.current[4])
            ? "visible"
            : "hidden"
        }
        variants={fadeInVariants}
        className="text-2xl font-bold text-gray-800 mb-2"
      >
        Tech Stack
      </motion.h2>
      <motion.ul
        ref={(el) => (sectionsRef.current[5] = el)}
        initial="hidden"
        animate={
          visibleSections.includes(sectionsRef.current[5])
            ? "visible"
            : "hidden"
        }
        variants={fadeInVariants}
        className="list-disc list-inside text-gray-700 mb-4"
      >
        <li>
          <strong>React:</strong> For building the user interface and managing
          component state.
        </li>
        <li>
          <strong>Three.js:</strong> For 3D rendering and visualization of the
          robot and static models.
        </li>
        <li>
          <strong>Framer Motion:</strong> For animations and transitions in the UI.
        </li>
        <li>
          <strong>Jest:</strong> For unit testing the robot's movement and
          rotation logic.
        </li>
      </motion.ul>

      <motion.h2
        ref={(el) => (sectionsRef.current[6] = el)}
        initial="hidden"
        animate={
          visibleSections.includes(sectionsRef.current[6])
            ? "visible"
            : "hidden"
        }
        variants={fadeInVariants}
        className="text-2xl font-bold text-gray-800 mb-2"
      >
        Project Structure
      </motion.h2>
      <motion.pre
        ref={(el) => (sectionsRef.current[7] = el)}
        initial="hidden"
        animate={
          visibleSections.includes(sectionsRef.current[7])
            ? "visible"
            : "hidden"
        }
        variants={fadeInVariants}
        className="bg-gray-200 p-4 rounded mb-4 overflow-x-auto"
      >
        <code className="text-gray-700">
          {`
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
          `}
        </code>
      </motion.pre>

      <motion.h2
        ref={(el) => (sectionsRef.current[8] = el)}
        initial="hidden"
        animate={
          visibleSections.includes(sectionsRef.current[8])
            ? "visible"
            : "hidden"
        }
        variants={fadeInVariants}
        className="text-2xl font-bold text-gray-800 mb-2"
      >
        Installation and Setup
      </motion.h2>
      <motion.ol
        ref={(el) => (sectionsRef.current[9] = el)}
        initial="hidden"
        animate={
          visibleSections.includes(sectionsRef.current[9])
            ? "visible"
            : "hidden"
        }
        variants={fadeInVariants}
        className="list-decimal list-inside text-gray-700 mb-4"
      >
        <li>
          <strong>Clone the Repository:</strong>
        </li>
        <motion.pre
          initial="hidden"
          animate={
            visibleSections.includes(sectionsRef.current[9])
              ? "visible"
              : "hidden"
          }
          variants={fadeInVariants}
          className="bg-gray-200 p-4 rounded mb-4 overflow-x-auto"
        >
          <code className="text-gray-700">
            {`
git clone https://github.com/hamzulala/hamza-ahmed-robot-simulator-bellroy.git
cd robot-simulator
            `}
          </code>
        </motion.pre>
        <li>
          <strong>Install Dependencies:</strong>
        </li>
        <motion.pre
          initial="hidden"
          animate={
            visibleSections.includes(sectionsRef.current[9])
              ? "visible"
              : "hidden"
          }
          variants={fadeInVariants}
          className="bg-gray-200 p-4 rounded mb-4 overflow-x-auto"
        >
          <code className="text-gray-700">
            {`
npm install
            `}
          </code>
        </motion.pre>
        <li>
          <strong>Run the Application:</strong>
        </li>
        <motion.pre
          initial="hidden"
          animate={
            visibleSections.includes(sectionsRef.current[9])
              ? "visible"
              : "hidden"
          }
          variants={fadeInVariants}
          className="bg-gray-200 p-4 rounded mb-4 overflow-x-auto"
        >
          <code className="text-gray-700">
            {`
npm start
            `}
          </code>
        </motion.pre>
        <li>
          <strong>Run Tests:</strong>
        </li>
        <motion.pre
          initial="hidden"
          animate={
            visibleSections.includes(sectionsRef.current[9])
              ? "visible"
              : "hidden"
          }
          variants={fadeInVariants}
          className="bg-gray-200 p-4 rounded mb-4 overflow-x-auto"
        >
          <code className="text-gray-700">
            {`
npm test
            `}
          </code>
        </motion.pre>
      </motion.ol>

      <motion.h2
        ref={(el) => (sectionsRef.current[10] = el)}
        initial="hidden"
        animate={
          visibleSections.includes(sectionsRef.current[10])
            ? "visible"
            : "hidden"
        }
        variants={fadeInVariants}
        className="text-2xl font-bold text-gray-800 mb-2"
      >
        Usage
      </motion.h2>
      <motion.ul
        ref={(el) => (sectionsRef.current[11] = el)}
        initial="hidden"
        animate={
          visibleSections.includes(sectionsRef.current[11])
            ? "visible"
            : "hidden"
        }
        variants={fadeInVariants}
        className="list-disc list-inside text-gray-700 mb-4"
      >
        <li>
          <strong>Move Forward:</strong> Click the "Move Forward" button to move
          the robot one step in the direction it is facing.
        </li>
        <li>
          <strong>Rotate Left:</strong> Click the "Rotate Left" button to rotate
          the robot 90 degrees counterclockwise.
        </li>
        <li>
          <strong>Rotate Right:</strong> Click the "Rotate Right" button to
          rotate the robot 90 degrees clockwise.
        </li>
        <li>
          <strong>3D View:</strong> The robot's position is updated in real-time
          in the 3D view, along with the static model placed on the scene.
        </li>
      </motion.ul>

      <motion.h2
        ref={(el) => (sectionsRef.current[12] = el)}
        initial="hidden"
        animate={
          visibleSections.includes(sectionsRef.current[12])
            ? "visible"
            : "hidden"
        }
        variants={fadeInVariants}
        className="text-2xl font-bold text-gray-800 mb-2"
      >
        Implementation Details
      </motion.h2>
      <motion.p
        ref={(el) => (sectionsRef.current[13] = el)}
        initial="hidden"
        animate={
          visibleSections.includes(sectionsRef.current[13])
            ? "visible"
            : "hidden"
        }
        variants={fadeInVariants}
        className="text-gray-700 mb-4"
      >
        The robot's movement and rotation logic are decoupled from the rendering
        logic, making the codebase modular and easy to test. Three.js is used to
        render a 3D environment where the robot and a static model (e.g., an
        Apple Watch model) are displayed. This adds a layer of interactivity and
        visualization to the simulation. Jest is used to ensure the core logic
        of the robot's movements and rotations are functioning correctly through
        unit tests.
      </motion.p>

      <motion.h2
        ref={(el) => (sectionsRef.current[14] = el)}
        initial="hidden"
        animate={
          visibleSections.includes(sectionsRef.current[14])
            ? "visible"
            : "hidden"
        }
        variants={fadeInVariants}
        className="text-2xl font-bold text-gray-800 mb-2"
      >
        Future Enhancements
      </motion.h2>
      <motion.ul
        ref={(el) => (sectionsRef.current[15] = el)}
        initial="hidden"
        animate={
          visibleSections.includes(sectionsRef.current[15])
            ? "visible"
            : "hidden"
        }
        variants={fadeInVariants}
        className="list-disc list-inside text-gray-700 mb-4"
      >
        <li>
          <strong>Boundaries:</strong> Implement logic to prevent the robot from
          moving out of the 5x5 grid.
        </li>
        <li>
          <strong>Additional Controls:</strong> Add buttons to reset the robot's
          position or change the grid size dynamically.
        </li>
        <li>
          <strong>Enhanced 3D Models:</strong> Include more complex models or
          animations to enrich the 3D simulation experience.
        </li>
        <li>
          <strong>Mobile Responsiveness:</strong> Optimize the application for
          mobile devices, ensuring a seamless experience across all screen
          sizes.
        </li>
      </motion.ul>

      <motion.h2
        ref={(el) => (sectionsRef.current[16] = el)}
        initial="hidden"
        animate={
          visibleSections.includes(sectionsRef.current[16])
            ? "visible"
            : "hidden"
        }
        variants={fadeInVariants}
        className="text-2xl font-bold text-gray-800 mb-2"
      >
        Acknowledgments
      </motion.h2>
      <motion.p
        ref={(el) => (sectionsRef.current[17] = el)}
        initial="hidden"
        animate={
          visibleSections.includes(sectionsRef.current[17])
            ? "visible"
            : "hidden"
        }
        variants={fadeInVariants}
        className="text-gray-700 mb-4"
      >
        <strong>3D Models:</strong> The 3D Models are purchased and downloaded
        from Sketchfab, and the licenses for them are within their respective
        licenses in the{" "}
        <code className="bg-gray-200 px-1 rounded">/public</code> folder.
      </motion.p>

      <motion.h2
        ref={(el) => (sectionsRef.current[18] = el)}
        initial="hidden"
        animate={
          visibleSections.includes(sectionsRef.current[18])
            ? "visible"
            : "hidden"
        }
        variants={fadeInVariants}
        className="text-2xl font-bold text-gray-800 mb-2"
      >
        Contact
      </motion.h2>
      <motion.p
        ref={(el) => (sectionsRef.current[19] = el)}
        initial="hidden"
        animate={
          visibleSections.includes(sectionsRef.current[19])
            ? "visible"
            : "hidden"
        }
        variants={fadeInVariants}
        className="text-gray-700"
      >
        For any questions or feedback, please contact Hamza Ahmed at{" "}
        <a href="mailto:Hamzaunaiz@gmail.com" className="text-blue-500">
          Hamzaunaiz@gmail.com
        </a>
        .
      </motion.p>
    </div>
  );
};

export default AboutMe;
