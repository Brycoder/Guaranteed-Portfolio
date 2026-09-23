import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [

// ====================================================================================================================================================

// EDIT THIS PART:
// ADD OR REMOVE AS MANY ROLES AS YOU WANT LIKE SOC ANALYST, TECH SUPPORT, SECURITY ANALYST. JUST MAINTAIN THE EXACT SAME FORMAT STRUCTURE. 
          
          "Ethical Hacker",
          "Penetration Tester",
          "Red Teamer",
          "Threat Hunting",

// ====================================================================================================================================================

          
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
