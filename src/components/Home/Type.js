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
          
          "Role Title 1",
          "Role Title 2",
          "Role Title 3",
          "Role Title 4",
          "Role Title 5",

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
