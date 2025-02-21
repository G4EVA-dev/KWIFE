// VocabCard.js
import { useState } from "react";

function VocabCard({ word, translation, image }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform duration-300 transform hover:scale-105"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="relative p-4 pb-[100%]">
        {!isFlipped ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
            {image&&<img
              src={image}
              alt={word}
              className="w-21 h-21 mb-3  rounded-[3px] "
            />}
            <h3 className="text-xl font-bold text-center">{translation}</h3>
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-blue-100 p-4">
            <p className="text-lg text-center">{word}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default VocabCard;


// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// function VocabCard({ word, translation, image }) {
//   const [isFlipped, setIsFlipped] = useState(false);
//   const [isSpeaking, setIsSpeaking] = useState(false);
//   const [voices, setVoices] = useState([]);

//   useEffect(() => {
//     const handleVoicesChanged = () => {
//       const availableVoices = window.speechSynthesis.getVoices();
//       setVoices(availableVoices);
//     };

//     // Load voices initially
//     handleVoicesChanged();

//     // Listen for voice changes
//     window.speechSynthesis.onvoiceschanged = handleVoicesChanged;

//     // Clean up the event listener on unmount
//     return () => {
//       window.speechSynthesis.onvoiceschanged = null;
//     };
//   }, []);

//   const speakWord = (text, lang) => {
//     if (isSpeaking) {
//       window.speechSynthesis.cancel();
//     }

//     const utterance = new SpeechSynthesisUtterance(text);
//     utterance.lang = lang;
//     utterance.rate = 0.8; // Slightly slower rate for clarity

//     utterance.onstart = () => setIsSpeaking(true);
//     utterance.onend = () => setIsSpeaking(false);

//     if (voices.length > 0) {
//       // Optionally set a specific voice if needed
//       const selectedVoice = voices.find(
//         (voice) => voice.lang === lang && voice.name.includes("Google")
//       );
//       if (selectedVoice) {
//         utterance.voice = selectedVoice;
//       }
//     }

//     window.speechSynthesis.speak(utterance);
//   };

//   return (
//     <div className="flex flex-col">
//       <motion.div
//         className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         onClick={() => setIsFlipped(!isFlipped)}
//       >
//         <div className="p-4">
//           {!isFlipped ? (
//             <>
//               <h3 className="text-xl font-bold mb-2">{word}</h3>
//               {image && (
//                 <img
//                   src={image}
//                   alt={word}
//                   className="w-full h-32 object-cover mb-2"
//                 />
//               )}
//             </>
//           ) : (
//             <p className="text-lg">{translation}</p>
//           )}
//         </div>
//       </motion.div>
//       <div className="flex mt-2">
//         <button
//           onClick={() => speakWord(word, "en-US")}
//           className="w-1/2 bg-blue-500 text-white p-2 hover:bg-blue-600 transition duration-300 rounded-l"
//           disabled={isSpeaking}
//         >
//           Speak Mokpe
//         </button>
//         <button
//           onClick={() => speakWord(translation, "en-US")}
//           className="w-1/2 bg-green-500 text-white p-2 hover:bg-green-600 transition duration-300 rounded-r"
//           disabled={isSpeaking}
//         >
//           Speak English
//         </button>
//       </div>
//     </div>
//   );
// }

// export default VocabCard;

