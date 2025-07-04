
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RotateCcw, Maximize, Minimize } from "lucide-react";

interface ThreeDViewProps {
  title: string;
  image: string;
  className?: string;
}

const ThreeDView: React.FC<ThreeDViewProps> = ({ title, image, className = "" }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    const rotateXValue = (mouseY / rect.height) * 20;
    const rotateYValue = (mouseX / rect.width) * 20;
    
    setRotateX(-rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const reset3D = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className={`${className} ${isFullscreen ? 'fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4' : ''}`}>
      <Card className={`overflow-hidden ${isFullscreen ? 'w-full max-w-4xl h-full max-h-[80vh]' : ''}`}>
        <CardContent className="p-0 relative">
          <div className="absolute top-4 right-4 z-10 flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={reset3D}
              className="bg-white/90 backdrop-blur-sm"
            >
              <RotateCcw className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={toggleFullscreen}
              className="bg-white/90 backdrop-blur-sm"
            >
              {isFullscreen ? <Minimize className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
            </Button>
          </div>
          
          <div
            className="relative w-full h-96 perspective-1000 cursor-move"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="w-full h-full transition-transform duration-200 ease-out preserve-3d"
              style={{
                transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
              }}
            >
              <div className="absolute inset-0 backface-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover rounded-lg shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg" />
              </div>
              
              {/* 3D depth effect */}
              <div 
                className="absolute inset-0 backface-hidden bg-gray-800 rounded-lg"
                style={{ transform: 'translateZ(-20px)' }}
              />
            </div>
          </div>
          
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-xl font-semibold mb-1">{title}</h3>
            <p className="text-sm text-gray-200">Move mouse to explore in 3D</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ThreeDView;
