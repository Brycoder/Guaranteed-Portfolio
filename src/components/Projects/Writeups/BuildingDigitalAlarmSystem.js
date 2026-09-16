import React from "react";
import WriteupTemplate from "./WriteupTemplate";
import WriteupPDF from "./WriteupPDF";
import pdf from "../../../Assets/Project-Writeups-PDF/Placeholder_Writeup.pdf";

// EDIT THIS PART:
// 1. Upload your project's PDF write-up to: src/Assets/Project-Writeups-PDF
// 2. Change the import above (Placeholder_Writeup.pdf) to the exact file name of your uploaded PDF.
//    Do not change anything else on that line.
// That is it, you no longer need to write any HTML for your write-up, just upload the PDF.

function BuildingDigitalAlarmSystem() {
  return (
    <WriteupTemplate>
      <WriteupPDF pdf={pdf} />
    </WriteupTemplate>
  );
}

export default BuildingDigitalAlarmSystem;
