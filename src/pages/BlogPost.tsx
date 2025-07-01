import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, CalendarDays, Clock, Share2, Home, Heart } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // Check if this is coming from Ideas page
  const ideaFromState = location.state?.idea;

  // Data for all blog posts (in a real app, this would come from an API)
  const blogPostsData = [
    {
      id: "featured-1",
      title: "10 Wedding Trends That Will Be Huge in 2025",
      excerpt: "From sustainable celebrations to tech-integrated ceremonies, discover the wedding trends that are set to dominate in 2025.",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1470&auto=format&fit=crop",
      category: "Trends",
      date: "May 10, 2024",
      author: "Priya Sharma",
      authorImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop",
      slug: "10-wedding-trends-2025",
      content: `
        <p class="mb-4">The wedding industry is constantly evolving, with new trends emerging each year. As we look ahead to 2025, several exciting trends are set to transform the wedding landscape. Here's what to expect:</p>
        
        <h2 class="text-2xl font-heading font-bold mt-8 mb-4">1. Sustainable Celebrations</h2>
        <p class="mb-4">Eco-conscious couples are increasingly prioritizing sustainability in their wedding plans. From biodegradable confetti to locally-sourced, seasonal flowers, every aspect of the wedding is being reimagined with the environment in mind.</p>
        <p class="mb-4">Many venues are now offering carbon-neutral packages, while caterers are focusing on zero-waste menus featuring locally sourced ingredients. Even wedding dresses are getting the sustainable treatment, with more designers offering eco-friendly and ethically produced gowns.</p>
        
        <h2 class="text-2xl font-heading font-bold mt-8 mb-4">2. Tech-Integrated Ceremonies</h2>
        <p class="mb-4">Technology is playing an increasingly important role in modern weddings. From holographic displays to drone photography and virtual reality experiences for guests who can't attend in person, tech is enhancing the wedding experience in innovative ways.</p>
        <p class="mb-4">Smart planning tools are also streamlining the wedding planning process, making it easier for couples to coordinate vendors, manage guest lists, and track budgets.</p>
        
        <h2 class="text-2xl font-heading font-bold mt-8 mb-4">3. Intimate Multi-Day Celebrations</h2>
        <p class="mb-4">The trend of multi-day wedding celebrations continues to grow, with couples opting for smaller, more intimate gatherings spread over several days. This approach allows for more meaningful interactions with guests and creates a more relaxed atmosphere.</p>
        <p class="mb-4">Activities might include welcome dinners, group excursions, and farewell brunches, creating a comprehensive experience for guests rather than just a one-day event.</p>
        
        <h2 class="text-2xl font-heading font-bold mt-8 mb-4">4. Personalized Experiences</h2>
        <p class="mb-4">Couples are moving away from traditional, one-size-fits-all weddings and embracing personalization in every aspect of their celebrations. From custom cocktails named after the couple to interactive food stations that reflect their culinary journey together, personalization is key.</p>
        <p class="mb-4">Wedding favors are also becoming more thoughtful and personalized, often reflecting the couple's interests or the wedding's location.</p>
        
        <h2 class="text-2xl font-heading font-bold mt-8 mb-4">5. Bold Color Palettes</h2>
        <p class="mb-4">While neutral color schemes have dominated weddings for years, 2025 is set to see a return to bold, vibrant colors. Think rich jewel tones, metallic accents, and unexpected color combinations that make a statement.</p>
        <p class="mb-4">These bold choices extend beyond just decor to include attire, with colorful wedding dresses and suits gaining popularity.</p>
      `
    },
    {
      id: 1,
      title: "How to Choose the Perfect Wedding Venue for Your Style",
      excerpt: "Finding the right venue can make or break your wedding. Here's our comprehensive guide to selecting the perfect location.",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1469&auto=format&fit=crop",
      category: "Planning",
      date: "May 5, 2024",
      readTime: "7 min read",
      slug: "choose-perfect-wedding-venue",
      author: "Michael Johnson",
      authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop",
      content: `
        <p class="mb-4">Choosing the perfect wedding venue is one of the most important decisions you'll make during the planning process. The right venue sets the tone for your entire event and can make or break your wedding day experience.</p>
        
        <h2 class="text-2xl font-heading font-bold mt-8 mb-4">Know Your Wedding Style</h2>
        <p class="mb-4">Before you start venue hunting, take some time to define your wedding style. Are you dreaming of a rustic barn wedding, an elegant ballroom affair, or perhaps a beachside ceremony? Your venue should complement your vision.</p>
        <p class="mb-4">Make a list of words that describe your ideal wedding atmosphere—romantic, modern, bohemian, classic—and use these as a guide when evaluating potential venues.</p>
        
        <h2 class="text-2xl font-heading font-bold mt-8 mb-4">Set Your Budget</h2>
        <p class="mb-4">Venue costs can vary dramatically, often accounting for 30-50% of your overall wedding budget. Be realistic about what you can afford, and remember to ask about what's included in the rental fee.</p>
        <p class="mb-4">Some venues offer all-inclusive packages that cover catering, tables, chairs, linens, and even decor, while others provide just the space, requiring you to bring in everything else.</p>
        
        <h2 class="text-2xl font-heading font-bold mt-8 mb-4">Consider Your Guest Count</h2>
        <p class="mb-4">Having a rough idea of your guest count is essential before securing a venue. You'll need a space that comfortably accommodates all your guests without feeling too empty or too crowded.</p>
        <p class="mb-4">Ask venues about their maximum capacity and how many guests they recommend for a comfortable experience.</p>
      `
    },
    {
      id: 2,
      title: "Budget-Friendly Wedding Ideas That Don't Look Cheap",
      excerpt: "Save money without sacrificing style with these creative budget-friendly wedding ideas and tips.",
      image: "https://images.unsplash.com/photo-1522673607200-164d1b3ce551?q=80&w=1470&auto=format&fit=crop",
      category: "Budget",
      date: "April 28, 2024",
      readTime: "5 min read",
      slug: "budget-friendly-wedding-ideas",
      author: "Emma Wilson",
      authorImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1471&auto=format&fit=crop",
      content: `
        <p class="mb-4">Having a beautiful wedding doesn't have to break the bank. With some creativity and smart planning, you can have a stylish celebration that stays within your budget.</p>
        
        <h2 class="text-2xl font-heading font-bold mt-8 mb-4">Choose Your Priorities</h2>
        <p class="mb-4">Start by identifying what aspects of your wedding are most important to you. Maybe it's amazing photography, a specific venue, or unforgettable food. Allocate more of your budget to these priorities and look for savings in other areas.</p>
        
        <h2 class="text-2xl font-heading font-bold mt-8 mb-4">Consider Off-Peak Dates</h2>
        <p class="mb-4">Wedding venues and vendors often charge premium rates for Saturday evenings during peak season. Consider a Friday or Sunday wedding, or plan your celebration during the off-season for significant savings.</p>
        
        <h2 class="text-2xl font-heading font-bold mt-8 mb-4">DIY Thoughtfully</h2>
        <p class="mb-4">While DIYing everything can become overwhelming, selectively choosing a few projects can save money while adding personal touches. Consider making your own centerpieces, favors, or signage.</p>
      `
    },
    {
      id: 3,
      title: "The Ultimate Wedding Day Emergency Kit Checklist",
      excerpt: "Be prepared for anything on your big day with this comprehensive emergency kit checklist.",
      image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=1470&auto=format&fit=crop",
      category: "Tips",
      date: "April 21, 2024",
      readTime: "4 min read",
      slug: "wedding-day-emergency-kit",
      author: "Jessica Chen",
      authorImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop",
      content: `
        <p class="mb-4">No matter how meticulously you plan your wedding, unexpected situations can arise. A well-prepared emergency kit can save the day when minor mishaps occur.</p>
        
        <h2 class="text-2xl font-heading font-bold mt-8 mb-4">Clothing and Appearance Fixes</h2>
        <ul class="list-disc ml-6 mb-4">
          <li>Safety pins (various sizes)</li>
          <li>Fashion tape</li>
          <li>Sewing kit with white, black, and neutral thread</li>
          <li>Stain remover pen or wipes</li>
          <li>Lint roller</li>
          <li>Extra buttons</li>
          <li>Clear nail polish (for stopping runs in hosiery)</li>
        </ul>
        
        <h2 class="text-2xl font-heading font-bold mt-8 mb-4">Personal Care Items</h2>
        <ul class="list-disc ml-6 mb-4">
          <li>Deodorant</li>
          <li>Breath mints or strips</li>
          <li>Pain relievers</li>
          <li>Bandages (various sizes)</li>
          <li>Antacids</li>
          <li>Tissues</li>
          <li>Eye drops</li>
        </ul>
      `
    },
    {
      id: 4,
      title: "Cultural Wedding Traditions from Around the World",
      excerpt: "Explore beautiful and meaningful wedding traditions from different cultures and how to incorporate them.",
      image: "https://images.unsplash.com/photo-1517263904808-5dc91e3e7044?q=80&w=1476&auto=format&fit=crop",
      category: "Traditions",
      date: "April 15, 2024",
      readTime: "8 min read",
      slug: "cultural-wedding-traditions",
      author: "Amit Patel",
      authorImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1374&auto=format&fit=crop",
      content: `
        <p class="mb-4">Wedding traditions vary widely across different cultures, each with their own beautiful symbolism and meaning. Exploring these traditions can add depth and significance to your own celebration.</p>
        
        <h2 class="text-2xl font-heading font-bold mt-8 mb-4">Indian Wedding Traditions</h2>
        <p class="mb-4">Indian weddings are known for their vibrant colors, elaborate rituals, and multi-day celebrations. The Mehndi ceremony involves applying intricate henna designs to the bride's hands and feet, symbolizing beauty, joy, and spiritual awakening.</p>
        <p class="mb-4">The Sangeet is a pre-wedding celebration filled with music and dance performances by family members, while the Baraat is the groom's wedding procession, traditionally arriving on horseback surrounded by dancing family and friends.</p>
        
        <h2 class="text-2xl font-heading font-bold mt-8 mb-4">Chinese Wedding Traditions</h2>
        <p class="mb-4">In Chinese culture, the color red symbolizes luck, joy, and prosperity, making it prominent in wedding celebrations. Tea ceremonies are an important tradition, where the couple serves tea to their elders as a sign of respect and gratitude.</p>
      `
    },
    {
      id: 5,
      title: "Essential Questions to Ask Your Wedding Photographer",
      excerpt: "Make sure you're hiring the right photographer with these must-ask questions before booking.",
      image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1470&auto=format&fit=crop",
      category: "Vendors",
      date: "April 8, 2024",
      readTime: "6 min read",
      slug: "questions-for-wedding-photographer",
      author: "Sarah Thompson",
      authorImage: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1374&auto=format&fit=crop",
      content: `
        <p class="mb-4">Your wedding photos will be treasured for generations, making your choice of photographer one of the most important wedding decisions. Asking the right questions helps ensure you find the perfect match for your style and needs.</p>
        
        <h2 class="text-2xl font-heading font-bold mt-8 mb-4">Experience and Style</h2>
        <p class="mb-4">Ask about their experience photographing weddings similar to yours in terms of size, venue type, and cultural elements. Request to see full wedding galleries, not just portfolio highlights, to get a comprehensive view of their work.</p>
        <p class="mb-4">Discuss their photography style—whether it's photojournalistic, traditional, artistic, or a blend—and ensure it aligns with your vision.</p>
        
        <h2 class="text-2xl font-heading font-bold mt-8 mb-4">Packages and Pricing</h2>
        <p class="mb-4">Get clear details about what's included in each package: hours of coverage, number of edited photos, albums, engagement sessions, and additional photographers or assistants.</p>
        <p class="mb-4">Ask about overtime fees, travel expenses, and any other potential additional costs.</p>
      `
    },
    {
      id: 6,
      title: "Writing Your Own Wedding Vows: Tips and Examples",
      excerpt: "Create meaningful and personal wedding vows with our helpful guide and inspiring examples.",
      image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=1470&auto=format&fit=crop",
      category: "Ceremony",
      date: "April 1, 2024",
      readTime: "5 min read",
      slug: "writing-wedding-vows",
      author: "David Rodriguez",
      authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop",
      content: `
        <p class="mb-4">Writing your own wedding vows allows you to express your unique feelings and promises to your partner. While it can seem daunting, these tips will help you create meaningful vows that reflect your relationship.</p>
        
        <h2 class="text-2xl font-heading font-bold mt-8 mb-4">Start Early</h2>
        <p class="mb-4">Give yourself plenty of time to write and refine your vows. Starting at least a month before the wedding allows you to reflect, revise, and practice without last-minute pressure.</p>
        
        <h2 class="text-2xl font-heading font-bold mt-8 mb-4">Find a Quiet Space for Reflection</h2>
        <p class="mb-4">Set aside uninterrupted time in a peaceful environment to reflect on your relationship and what you want to promise to your partner.</p>
        <p class="mb-4">Consider journaling about what you love most about your partner, significant moments in your relationship, and your hopes for your future together.</p>
      `
    }
  ];

  // Find the current blog post - first check if it's from Ideas page
  let post = ideaFromState;
  
  // If not from Ideas, look in the regular blog posts
  if (!post) {
    post = blogPostsData.find(post => post.slug === slug);
  }

  // If post not found, show enhanced error
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow page-header page-content">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <div className="mb-8">
              <Heart className="h-12 w-12 sm:h-16 sm:w-16 text-wedding-pink mx-auto mb-4" />
            </div>
            <h1 className="text-responsive-3xl font-heading font-bold text-wedding-navy mb-4">
              Content Not Found
            </h1>
            <p className="text-gray-600 mb-8 text-responsive-base">
              The wedding content you're looking for might have been moved or doesn't exist. 
              Let's get you back to planning your perfect wedding!
            </p>
            <div className="flex-responsive-center mb-8">
              <Button 
                onClick={() => navigate('/blog')}
                className="bg-wedding-pink text-white hover:bg-wedding-pink/90 btn-responsive-lg"
              >
                <ChevronLeft className="mr-2 h-4 w-4" /> Wedding Blog
              </Button>
              <Button 
                onClick={() => navigate('/ideas')}
                variant="outline"
                className="border-wedding-pink text-wedding-pink hover:bg-wedding-pink/10 btn-responsive-lg"
              >
                <ChevronLeft className="mr-2 h-4 w-4" /> Wedding Ideas
              </Button>
              <Button 
                onClick={() => navigate('/')}
                variant="outline"
                className="border-wedding-pink text-wedding-pink hover:bg-wedding-pink/10 btn-responsive-lg"
              >
                <Home className="mr-2 h-4 w-4" /> Home
              </Button>
            </div>
            <div className="border-t border-gray-200 pt-6">
              <p className="text-sm text-gray-500 mb-3">Popular wedding content:</p>
              <div className="flex flex-wrap justify-center gap-2 text-sm">
                <Button variant="link" size="sm" onClick={() => navigate('/vendors')} className="text-wedding-pink">
                  Find Vendors
                </Button>
                <Button variant="link" size="sm" onClick={() => navigate('/real-weddings')} className="text-wedding-pink">
                  Real Weddings
                </Button>
                <Button variant="link" size="sm" onClick={() => navigate('/planning-tools')} className="text-wedding-pink">
                  Planning Tools
                </Button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const isFromIdeas = !!ideaFromState;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow page-header page-content">
        <div className="mb-6 sm:mb-8">
          <Button 
            variant="outline" 
            className="border-wedding-pink text-wedding-pink hover:bg-wedding-pink/10 btn-responsive"
            onClick={() => navigate(isFromIdeas ? '/ideas' : '/blog')}
          >
            <ChevronLeft className="mr-2 h-4 w-4" /> 
            Back to {isFromIdeas ? 'Wedding Ideas' : 'Blog'}
          </Button>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-4 sm:mb-6">
            <Badge className="bg-wedding-pink text-white text-xs sm:text-sm">{post.category}</Badge>
          </div>
          
          <h1 className="text-responsive-3xl font-heading font-bold text-wedding-navy mb-4 sm:mb-6">
            {post.title}
          </h1>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8 gap-3">
            <div className="flex items-center">
              <img 
                src={post.authorImage} 
                alt={post.author} 
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover mr-3" 
              />
              <div>
                <div className="font-medium text-sm sm:text-base">{post.author}</div>
                <div className="text-xs sm:text-sm text-gray-500 flex items-center gap-3">
                  <span className="flex items-center">
                    <CalendarDays className="h-3 w-3 mr-1" /> {post.date}
                  </span>
                  {post.readTime && (
                    <span className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" /> {post.readTime}
                    </span>
                  )}
                </div>
              </div>
            </div>
            
            <Button variant="ghost" size="sm" title="Share this article" className="self-start sm:self-auto">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
          
          <AspectRatio ratio={16/9} className="mb-6 sm:mb-8 rounded-lg overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title} 
              className="object-cover w-full h-full" 
            />
          </AspectRatio>
          
          <div 
            className="prose prose-sm sm:prose-lg max-w-none prose-headings:font-heading prose-headings:text-wedding-navy prose-a:text-wedding-pink" 
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
          
          <div className="border-t border-gray-200 my-8 sm:my-12 pt-6 sm:pt-8">
            <h3 className="text-lg sm:text-xl font-heading font-semibold mb-4">Share this article</h3>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" className="rounded-full text-xs sm:text-sm">Twitter</Button>
              <Button variant="outline" size="sm" className="rounded-full text-xs sm:text-sm">Facebook</Button>
              <Button variant="outline" size="sm" className="rounded-full text-xs sm:text-sm">Pinterest</Button>
              <Button variant="outline" size="sm" className="rounded-full text-xs sm:text-sm">Email</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
