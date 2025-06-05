
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Palette, Heart, Copy, RefreshCw, Download } from "lucide-react";
import { toast } from "sonner";

interface ColorPalette {
  id: number;
  name: string;
  theme: string;
  colors: string[];
  description: string;
}

const ColorPaletteGenerator = () => {
  const [selectedPalette, setSelectedPalette] = useState<ColorPalette | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);

  const predefinedPalettes: ColorPalette[] = [
    {
      id: 1,
      name: "Romantic Blush",
      theme: "Classic Romance",
      colors: ["#FFE4E1", "#FFC0CB", "#FF69B4", "#DC143C", "#8B0000"],
      description: "Soft pinks and roses perfect for romantic ceremonies"
    },
    {
      id: 2,
      name: "Royal Elegance",
      theme: "Luxury",
      colors: ["#F8F8FF", "#E6E6FA", "#9370DB", "#4B0082", "#2E0854"],
      description: "Deep purples and lavenders for regal celebrations"
    },
    {
      id: 3,
      name: "Garden Fresh",
      theme: "Natural",
      colors: ["#F0FFF0", "#98FB98", "#32CD32", "#228B22", "#006400"],
      description: "Fresh greens inspired by nature and gardens"
    },
    {
      id: 4,
      name: "Sunset Glow",
      theme: "Warm",
      colors: ["#FFF8DC", "#FFE4B5", "#FFA500", "#FF4500", "#B22222"],
      description: "Warm oranges and golds like a beautiful sunset"
    },
    {
      id: 5,
      name: "Ocean Breeze",
      theme: "Cool",
      colors: ["#F0F8FF", "#B0E0E6", "#4682B4", "#1E90FF", "#0000CD"],
      description: "Cool blues reminiscent of ocean waves"
    },
    {
      id: 6,
      name: "Vintage Rose",
      theme: "Vintage",
      colors: ["#FDF2E9", "#E8B4CB", "#D4A5A5", "#9A8C98", "#C9ADA7"],
      description: "Muted tones perfect for vintage-themed weddings"
    }
  ];

  const generateRandomPalette = () => {
    const themes = ["Modern", "Boho", "Minimalist", "Rustic", "Glamorous"];
    const randomTheme = themes[Math.floor(Math.random() * themes.length)];
    
    const generateRandomColor = () => {
      return `#${Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')}`;
    };

    const newPalette: ColorPalette = {
      id: Date.now(),
      name: `Custom ${randomTheme}`,
      theme: randomTheme,
      colors: Array.from({ length: 5 }, generateRandomColor),
      description: `A randomly generated ${randomTheme.toLowerCase()} palette`
    };

    setSelectedPalette(newPalette);
    toast.success("New random palette generated!");
  };

  const copyColor = (color: string) => {
    navigator.clipboard.writeText(color);
    toast.success(`Color ${color} copied to clipboard!`);
  };

  const toggleFavorite = (paletteId: number) => {
    setFavorites(prev => 
      prev.includes(paletteId) 
        ? prev.filter(id => id !== paletteId)
        : [...prev, paletteId]
    );
    toast.success("Added to favorites!");
  };

  const downloadPalette = (palette: ColorPalette) => {
    const paletteData = {
      name: palette.name,
      theme: palette.theme,
      colors: palette.colors,
      description: palette.description
    };
    
    console.log("Downloading palette:", paletteData);
    toast.success("Palette saved! (Feature demonstration)");
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-heading font-bold text-wedding-navy mb-2">
          Wedding Color Palette Generator
        </h3>
        <p className="text-gray-600">
          Discover the perfect color combinations for your special day
        </p>
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        <Button 
          onClick={generateRandomPalette}
          className="bg-wedding-pink hover:bg-wedding-pink/90"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Generate Random Palette
        </Button>
      </div>

      {selectedPalette && (
        <Card className="border-2 border-wedding-pink">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center">
                <Palette className="w-5 h-5 mr-2 text-wedding-pink" />
                {selectedPalette.name}
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => toggleFavorite(selectedPalette.id)}
                >
                  <Heart 
                    className={`w-4 h-4 ${favorites.includes(selectedPalette.id) ? 'fill-current text-wedding-pink' : ''}`} 
                  />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => downloadPalette(selectedPalette)}
                >
                  <Download className="w-4 h-4 mr-1" />
                  Save
                </Button>
              </div>
            </CardTitle>
            <Badge variant="outline">{selectedPalette.theme}</Badge>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">{selectedPalette.description}</p>
            <div className="grid grid-cols-5 gap-2 mb-4">
              {selectedPalette.colors.map((color, index) => (
                <div key={index} className="text-center">
                  <div 
                    className="w-full h-20 rounded-lg cursor-pointer hover:scale-105 transition-transform"
                    style={{ backgroundColor: color }}
                    onClick={() => copyColor(color)}
                  />
                  <p className="text-xs mt-2 font-mono">{color}</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyColor(color)}
                    className="text-xs p-1"
                  >
                    <Copy className="w-3 h-3" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {predefinedPalettes.map((palette) => (
          <Card 
            key={palette.id} 
            className={`cursor-pointer transition-all hover:shadow-lg ${
              selectedPalette?.id === palette.id ? 'ring-2 ring-wedding-pink' : ''
            }`}
            onClick={() => setSelectedPalette(palette)}
          >
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{palette.name}</CardTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(palette.id);
                  }}
                >
                  <Heart 
                    className={`w-4 h-4 ${favorites.includes(palette.id) ? 'fill-current text-wedding-pink' : ''}`} 
                  />
                </Button>
              </div>
              <Badge variant="outline" className="w-fit">{palette.theme}</Badge>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-5 gap-1 mb-3">
                {palette.colors.map((color, index) => (
                  <div 
                    key={index}
                    className="h-8 rounded"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-600">{palette.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {favorites.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Heart className="w-5 h-5 mr-2 text-wedding-pink fill-current" />
              Favorite Palettes ({favorites.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {predefinedPalettes
                .filter(palette => favorites.includes(palette.id))
                .map((palette) => (
                  <div key={palette.id} className="p-3 border rounded-lg">
                    <h4 className="font-medium mb-2">{palette.name}</h4>
                    <div className="grid grid-cols-5 gap-1">
                      {palette.colors.map((color, index) => (
                        <div 
                          key={index}
                          className="h-6 rounded"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ColorPaletteGenerator;
