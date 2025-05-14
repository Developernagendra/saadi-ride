
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Download, Heart } from "lucide-react";

const Photos = () => {
  const photoCategories = [
    {
      id: "pre-wedding",
      name: "Pre-Wedding",
      photos: [
        {
          id: "pre1",
          url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1470&auto=format&fit=crop",
          alt: "Couple on beach"
        },
        {
          id: "pre2",
          url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1470&auto=format&fit=crop",
          alt: "Couple in garden"
        },
        {
          id: "pre3",
          url: "https://images.unsplash.com/photo-1494955870715-979ca4f13bf0?q=80&w=1470&auto=format&fit=crop",
          alt: "Couple in mountains"
        },
        {
          id: "pre4",
          url: "https://images.unsplash.com/photo-1529636798458-92ea9fc94f9b?q=80&w=1469&auto=format&fit=crop",
          alt: "Couple in city"
        },
        {
          id: "pre5",
          url: "https://images.unsplash.com/photo-1475698066764-3fedbcc66d38?q=80&w=1470&auto=format&fit=crop",
          alt: "Couple in forest"
        },
        {
          id: "pre6",
          url: "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?q=80&w=1470&auto=format&fit=crop",
          alt: "Couple with flowers"
        }
      ]
    },
    {
      id: "ceremonies",
      name: "Ceremonies",
      photos: [
        {
          id: "cer1",
          url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1470&auto=format&fit=crop",
          alt: "Wedding ceremony"
        },
        {
          id: "cer2",
          url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1470&auto=format&fit=crop",
          alt: "Exchanging vows"
        },
        {
          id: "cer3",
          url: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=1471&auto=format&fit=crop",
          alt: "Bride entrance"
        },
        {
          id: "cer4",
          url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1469&auto=format&fit=crop",
          alt: "Ritual ceremony"
        },
        {
          id: "cer5",
          url: "https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?q=80&w=1470&auto=format&fit=crop",
          alt: "Wedding decorations"
        },
        {
          id: "cer6",
          url: "https://images.unsplash.com/photo-1544173311-4b3289851755?q=80&w=1471&auto=format&fit=crop",
          alt: "Family celebration"
        }
      ]
    },
    {
      id: "reception",
      name: "Reception",
      photos: [
        {
          id: "rec1",
          url: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1470&auto=format&fit=crop",
          alt: "Reception hall"
        },
        {
          id: "rec2",
          url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1470&auto=format&fit=crop",
          alt: "First dance"
        },
        {
          id: "rec3",
          url: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?q=80&w=1471&auto=format&fit=crop",
          alt: "Reception decorations"
        },
        {
          id: "rec4",
          url: "https://images.unsplash.com/photo-1533050487297-09b450131914?q=80&w=1470&auto=format&fit=crop",
          alt: "Cake cutting"
        },
        {
          id: "rec5",
          url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1470&auto=format&fit=crop",
          alt: "Wedding party"
        },
        {
          id: "rec6",
          url: "https://images.unsplash.com/photo-1470596914251-afb0c40259d9?q=80&w=1470&auto=format&fit=crop",
          alt: "Evening celebrations"
        }
      ]
    },
    {
      id: "bridal",
      name: "Bridal Portraits",
      photos: [
        {
          id: "br1",
          url: "https://images.unsplash.com/photo-1595730297649-fb47b7a02767?q=80&w=1470&auto=format&fit=crop",
          alt: "Bride portrait"
        },
        {
          id: "br2",
          url: "https://images.unsplash.com/photo-1509927083803-4bd519298ac4?q=80&w=1470&auto=format&fit=crop",
          alt: "Bride getting ready"
        },
        {
          id: "br3",
          url: "https://images.unsplash.com/photo-1550083985-19992f5c6e51?q=80&w=1470&auto=format&fit=crop",
          alt: "Bride with bouquet"
        },
        {
          id: "br4",
          url: "https://images.unsplash.com/photo-1595730297649-fb47b7a02767?q=80&w=1470&auto=format&fit=crop",
          alt: "Bride with veil"
        },
        {
          id: "br5",
          url: "https://images.unsplash.com/photo-1595730297649-fb47b7a02767?q=80&w=1470&auto=format&fit=crop",
          alt: "Bride accessories"
        },
        {
          id: "br6",
          url: "https://images.unsplash.com/photo-1547839918-5fb957a442fb?q=80&w=1470&auto=format&fit=crop",
          alt: "Bride close-up"
        }
      ]
    },
    {
      id: "family",
      name: "Family Photos",
      photos: [
        {
          id: "fam1",
          url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1469&auto=format&fit=crop",
          alt: "Family photo"
        },
        {
          id: "fam2",
          url: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=1471&auto=format&fit=crop",
          alt: "Parents with couple"
        },
        {
          id: "fam3",
          url: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1470&auto=format&fit=crop",
          alt: "Extended family"
        },
        {
          id: "fam4",
          url: "https://images.unsplash.com/photo-1545231027-637d2f6210f8?q=80&w=1470&auto=format&fit=crop",
          alt: "Siblings"
        },
        {
          id: "fam5",
          url: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=1471&auto=format&fit=crop",
          alt: "Family traditions"
        },
        {
          id: "fam6",
          url: "https://images.unsplash.com/photo-1544173311-4b3289851755?q=80&w=1471&auto=format&fit=crop",
          alt: "Multi-generation"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-wedding-navy mb-4">
            Wedding <span className="text-wedding-pink">Photo Gallery</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse through our collection of stunning wedding photos to get inspiration for your own celebration. 
            From pre-wedding shoots to reception highlights, find ideas for every part of your wedding journey.
          </p>
        </div>

        <Tabs defaultValue="pre-wedding" className="mb-16">
          <div className="overflow-auto pb-2">
            <TabsList className="mb-6 h-auto p-1 flex">
              {photoCategories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="data-[state=active]:bg-wedding-pink data-[state=active]:text-white px-4 py-2"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {photoCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {category.photos.map((photo) => (
                  <div key={photo.id} className="group relative rounded-lg overflow-hidden border shadow-sm">
                    <AspectRatio ratio={3/4}>
                      <img 
                        src={photo.url} 
                        alt={photo.alt} 
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
                      />
                    </AspectRatio>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <div className="flex justify-between items-center">
                        <Button variant="secondary" size="sm" className="bg-white/80 hover:bg-white">
                          <Heart className="h-4 w-4 mr-1 text-wedding-pink" />
                          <span className="text-wedding-navy">Save</span>
                        </Button>
                        <Button variant="secondary" size="sm" className="bg-white/80 hover:bg-white">
                          <Download className="h-4 w-4 mr-1 text-wedding-navy" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center mb-16">
          <Button className="bg-wedding-pink text-white hover:bg-wedding-pink/90">
            Browse More Photos
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Photos;
