const hardware = [
    {
      "name": "LiDAR",
      "type": "sensor",
      "description": "3D mapping for better self-driving",
      "status": "Review"
    },
    {
      "name": "Wireless Charging",
      "type": "EV technology",
      "description": "Charge your car without a cable",
      "status": "Approved"
    },
    {
      "name": "Heads-Up Display (HUD)",
      "type": "Driver Interface",
      "description": "Projects information onto the windshield for a safer view",
      "status": "Testing"
    },
    {
      "name": "Adaptive Cruise Control (ACC)",
      "type": "Driver Assistance",
      "description": "Maintains a set distance from the car in front",
      "status": "Process"
    },
    {
      "name": "Lane Departure Warning (LDW)",
      "type": "Driver Assistance",
      "description": "Alerts driver if car unintentionally leaves lane",
      "status": "Approved"
    },
    {
      "name": "Panoramic Sunroof",
      "type": "Comfort",
      "description": "Large sunroof providing an open-air feel",
      "status": "Process"
    },
    {
      "name": "Active Noise Cancellation (ANC)",
      "type": "Comfort",
      "description": "Reduces unwanted noise for a quieter cabin",
      "status": "Review"
    },
    {
      "name": "Digital Rearview Mirror",
      "type": "Safety",
      "description": "Provides a wider and clearer view than a traditional mirror",
      "status": "Testing"
    },
    {
      "name": "Automatic Emergency Braking (AEB)",
      "type": "Safety",
      "description": "Applies brakes automatically to avoid collisions",
      "status": "Approved"
    },
    {
      "name": "Hybrid or electric powertrains",
      "type": "Engine & Drivetrain",
      "description": "Combines electric motor with combustion engine for better efficiency",
      "status": "Approved"
    },
    {
      "name": "Turbochargers",
      "type": "Engine & Drivetrain",
      "description": "Forces air into engine for increased power and torque",
      "status": "Testing"
    },
    {
      "name": "Advanced suspension systems",
      "type": "Engine & Drivetrain",
      "description": "Adjusts suspension for smoother ride and better handling",
      "status": "Process"
    },
    {
      "name": "LED headlights",
      "type": "Lighting",
      "description": "Provides brighter and more efficient lighting",
      "status": "Approved"
    },
    {
      "name": "LED taillights",
      "type": "Lighting",
      "description": "Brighter and more visible than traditional taillights",
      "status": "Testing"
    },
    {
      "name": "Ambient lighting",
      "type": "Lighting",
      "description": "Allows driver to customize interior lighting",
      "status": "Process"
    },
    {
      "name": "High-fidelity sound systems",
      "type": "Entertainment",
      "description": "Provides more immersive audio experience",
      "status": "Approved"
    },
    {
      "name": "Larger touchscreens",
      "type": "Entertainment",
      "description": "Makes car's infotainment system easier to use",
      "status": "Testing"
    },
    {
      "name": "Rear-seat entertainment systems",
      "type": "Entertainment",
      "description": "Keeps rear passengers entertained with movies, games, etc.",
      "status": "Process"
    },
    {
      "name": "Wi-Fi hotspots",
      "type": "Connectivity",
      "description": "Allows passengers to connect devices to internet on the go",
      "status": "Approved"
    },
    {
      "name": "Smartphone integration (Apple CarPlay/Android Auto)",
      "type": "Connectivity",
      "description": "Connects smartphone for hands-free calling, navigation, and music",
      "status": "Testing"
    }
]


const software = [
    {
      "name": "Advanced Driver-Assistance Systems (ADAS)",
      "type": "Driver Assistance Software",
      "description": "Suite of features like automatic emergency braking and lane departure warning",
      "status": "High"
    },
    {
      "name": "In-Vehicle Infotainment System (IVI)",
      "type": "Entertainment Software",
      "description": "Provides navigation, music, and other entertainment options",
      "status": "Medium"
    },
    {
      "name": "Vehicle Diagnostics Software",
      "type": "Maintenance Software",
      "description": "Monitors vehicle health and identifies potential issues",
      "status": "High"
    },
    {
      "name": "Cybersecurity Software",
      "type": "Security Software",
      "description": "Protects vehicle from hacking and other cyber threats",
      "status": "High"
    },
    {
      "name": "Car-to-Everything (C2X) Communication Software",
      "type": "Connectivity Software",
      "description": "Allows vehicles to communicate with each other and infrastructure",
      "status": "Medium"
    },
    {
      "name": "Automated Parking Software",
      "type": "Driver Assistance Software",
      "description": "Enables self-parking capabilities",
      "status": "Low" // This technology is still under development
    },
    {
      "name": "Traffic Sign Recognition Software",
      "type": "Driver Assistance Software",
      "description": "Reads traffic signs and alerts the driver",
      "status": "Medium"
    },
    {
      "name": "Driver Monitoring Software",
      "type": "Safety Software",
      "description": "Detects drowsiness or distraction and warns the driver",
      "status": "Medium"
    },
    {
      "name": "Remote Vehicle Diagnostics Software",
      "type": "Maintenance Software",
      "description": "Allows remote access to vehicle health data",
      "status": "High"
    },
    {
      "name": "Over-the-Air (OTA) Software Updates",
      "type": "Software Update System",
      "description": "Enables wireless updates for car's software",
      "status": "High"
    }
  ]
  

export {hardware,software};
    
  