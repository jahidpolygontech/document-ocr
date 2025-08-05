import React from "react";

export function formatStringSize (location: string | undefined, length: number){
    if (!location) return "";
  
    const words = location.split(" ");
    const chunks: string[] = [];
    let currentLine = "";
  
    words.forEach((word) => {
      if (word.length > length && currentLine === "") {
        chunks.push(word);
      }
      else if (currentLine.length + word.length + 1 > length) {
        chunks.push(currentLine);
        currentLine = word;
      }
      else {
        currentLine += (currentLine ? " " : "") + word;
      }
    });
  
    if (currentLine) {
      chunks.push(currentLine);
    }
  
    return chunks.map((chunk, index) => (
      <React.Fragment key={index}>
        {chunk}
        <br />
      </React.Fragment>
    ));
  };