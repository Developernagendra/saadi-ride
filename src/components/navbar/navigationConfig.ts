
import { useLanguage } from "@/contexts/LanguageContext";

export const useNavigationLinks = () => {
  const { t } = useLanguage();
  
  return [
    { 
      title: t('nav.vendors'), 
      href: "/vendors",
      services: [
        { name: t('categories.venues'), href: "/vendors?category=venues" },
        { name: t('categories.photographers'), href: "/vendors?category=photographers" },
        { name: t('categories.makeup'), href: "/vendors?category=makeup" },
        { name: t('categories.planners'), href: "/vendors?category=planners" },
        { name: t('categories.bridalWear'), href: "/vendors?category=bridal-wear" },
        { name: t('categories.groomWear'), href: "/vendors?category=groom-wear" },
        { name: t('categories.catering'), href: "/vendors?category=catering" },
        { name: t('categories.decorators'), href: "/vendors?category=decorators" },
        { name: "Cab Services", href: "/vendors/cab-services" },
      ]
    },
    { 
      title: t('nav.realWeddings'), 
      href: "/real-weddings",
      services: [
        { name: "Traditional Weddings", href: "/real-weddings?type=traditional" },
        { name: "Destination Weddings", href: "/real-weddings?type=destination" },
        { name: "Themed Weddings", href: "/real-weddings?type=themed" },
        { name: "Celebrity Weddings", href: "/real-weddings?type=celebrity" },
        { name: "Budget Weddings", href: "/real-weddings?type=budget" },
      ]
    },
    { 
      title: t('nav.photos'), 
      href: "/photos",
      services: [
        { name: "Pre-Wedding Shoots", href: "/photos?category=pre-wedding" },
        { name: "Wedding Ceremonies", href: "/photos?category=ceremonies" },
        { name: "Reception Photos", href: "/photos?category=reception" },
        { name: "Bridal Portraits", href: "/photos?category=bridal" },
        { name: "Family Photos", href: "/photos?category=family" },
      ]
    },
    { 
      title: t('nav.ideas'), 
      href: "/ideas",
      services: [
        { name: "Decor Ideas", href: "/ideas?category=decor" },
        { name: "Theme Ideas", href: "/ideas?category=themes" },
        { name: "Wedding Cards", href: "/ideas?category=cards" },
        { name: "Wedding Favors", href: "/ideas?category=favors" },
        { name: "Return Gifts", href: "/ideas?category=gifts" },
      ]
    },
    { 
      title: t('nav.planningTools'), 
      href: "/planning-tools",
      services: [
        { name: "Find Vendors", href: "/vendors" },
        { name: "Wedding Website", href: "/planning-tools" },
        { name: "Wedding Checklist", href: "/planning-tools" },
        { name: "Budget Planner", href: "/planning-tools" },
        { name: "Guest List Manager", href: "/planning-tools" },
        { name: "Online Payment", href: "/planning-tools" },
        { name: "Referral & Earn", href: "/referral-earn" },
        { name: "Location Maps", href: "/" },
      ]
    },
    { 
      title: t('nav.blog'), 
      href: "/blog",
      services: [
        { name: "Wedding Tips", href: "/blog?category=tips" },
        { name: "Wedding Trends", href: "/blog?category=trends" },
        { name: "Vendor Spotlights", href: "/blog?category=spotlights" },
        { name: "Real Wedding Stories", href: "/blog?category=stories" },
        { name: "Expert Advice", href: "/blog?category=advice" },
      ]
    },
  ];
};
