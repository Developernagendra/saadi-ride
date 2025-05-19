
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Languages } from 'lucide-react';
import { Language, useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

interface LanguageSwitcherProps {
  className?: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className }) => {
  const { language, setLanguage, t } = useLanguage();

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };
  
  const getLanguageLabel = (lang: Language) => {
    switch (lang) {
      case 'en': return 'English';
      case 'hi': return 'हिन्दी';
      default: return lang;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className={cn(
            "hover:bg-wedding-pink/10 hover:text-wedding-pink transition-colors rounded-full gap-1 px-2.5",
            className
          )}
        >
          <Languages className="h-4 w-4" />
          <span className="text-xs font-medium hidden sm:inline">{getLanguageLabel(language)}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[120px] p-1 rounded-lg border-wedding-pink/20 shadow-lg">
        <DropdownMenuItem 
          onClick={() => handleLanguageChange('en')} 
          className={cn(
            "text-sm px-3 py-2 cursor-pointer rounded-md transition-colors",
            language === 'en' ? "bg-wedding-pink/10 text-wedding-pink font-medium" : ""
          )}
        >
          <span className="flex items-center gap-2">
            {language === 'en' && (
              <span className="h-1.5 w-1.5 rounded-full bg-wedding-pink"></span>
            )}
            English
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => handleLanguageChange('hi')}
          className={cn(
            "text-sm px-3 py-2 cursor-pointer rounded-md transition-colors",
            language === 'hi' ? "bg-wedding-pink/10 text-wedding-pink font-medium" : ""
          )}
        >
          <span className="flex items-center gap-2">
            {language === 'hi' && (
              <span className="h-1.5 w-1.5 rounded-full bg-wedding-pink"></span>
            )}
            हिन्दी
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
