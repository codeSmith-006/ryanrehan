import React from "react";

const GlowingLogo = () => {
  return (
    <div className="">
      <div className=" cursor-pointer transition-transform duration-300 hover:scale-105">
        {/* Your logo image with simple glow */}
        <img
          className="h-14"
          src="https://i.ibb.co.com/LXzzT9XJ/portfoliologo-removebg-preview.png"
          alt="Portfolio Logo"
          style={{
            filter: `drop-shadow(0 0 15px rgba(59, 130, 246, 0.5))`,
            animation: "simple-glow 2s ease-in-out infinite alternate",
          }}
        />

        {/* Simple shimmer effect */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            background:
              "linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.6) 50%, transparent 60%)",
            animation: "shimmer-slide 3s linear infinite",
          }}
        />
      </div>

      <style jsx>{`
        @keyframes gradient-glow {
          0% {
            filter: drop-shadow(0 0 12px rgba(37, 99, 235, 0.6)); /* blue-600 */
          }
          50% {
            filter: drop-shadow(
              0 0 20px rgba(147, 51, 234, 0.6)
            ); /* purple-600 */
          }
          100% {
            filter: drop-shadow(0 0 12px rgba(37, 99, 235, 0.6)); /* blue-600 */
          }
        }

        @keyframes shimmer-slide {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .glow-gradient {
          animation: gradient-glow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default GlowingLogo;
