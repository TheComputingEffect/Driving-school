"use client";

import React, { useEffect, useState } from "react";

export default function ProcessLogoPage() {
  const [status, setStatus] = useState("Loading and processing logo...");

  useEffect(() => {
    const img = new Image();
    img.src = "/logo_KPD.png";
    img.onload = async () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        setStatus("Failed to get 2d canvas context");
        return;
      }
      
      // Draw image
      ctx.drawImage(img, 0, 0);
      
      // Get image pixels
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imgData.data;
      
      // Iterate pixels and make white/near-white transparent
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        
        // If it is white/near-white (RGB > 240)
        if (r > 240 && g > 240 && b > 240) {
          data[i + 3] = 0; // set alpha transparent
        }
      }
      
      // Put image data back
      ctx.putImageData(imgData, 0, 0);
      
      // Get base64 Data URL
      const dataUrl = canvas.toDataURL("image/png");
      
      // Send to API to save
      try {
        setStatus("Saving processed image to server...");
        const response = await fetch("/api/save-logo", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ image: dataUrl }),
        });
        
        const result = await response.json();
        if (result.success) {
          setStatus("Success! logo_KPD_transparent.png has been saved to the public folder.");
        } else {
          setStatus("Failed to save: " + result.error);
        }
      } catch (err: any) {
        setStatus("Network error saving logo: " + err.message);
      }
    };
    
    img.onerror = () => {
      setStatus("Failed to load /logo_KPD.png");
    };
  }, []);

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif", textAlign: "center" }}>
      <h1>Logo Transparency Processor</h1>
      <p style={{ fontSize: "18px", fontWeight: "bold" }}>{status}</p>
    </div>
  );
}
