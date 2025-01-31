
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';
import { useScrollTo } from '../hooks/useScrollTo';
import { useTheme } from '../contexts/ThemeContext';
import video from '../assets/video_final1.mp4'
// import video from '../assets/earth.mp4'
// import video from '../assets/bg_1_n.mp4';
// import video from '../assets/bg_2_n.mp4';
// import video from '../assets/bg_3_n.mp4';
// import video from '../assets/bg_black1.mp4';
export function Hero() {
  const { t } = useLanguage();
  const scrollTo = useScrollTo();
  const{isDarkMode} =useTheme();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
      {/* <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] 
        opacity-65 bg-cover bg-center"
      /> */}
      
      <div>
        {isDarkMode?(<video
  className="absolute inset-0 w-full h-full object-cover md:object-contain lg:object-cover"
  src={video}
  autoPlay
  loop
  muted
  playsInline
></video>):(<video
  className="absolute inset-0 w-full h-full object-cover md:object-contain lg:object-cover"
  src="https://res.cloudinary.com/ddguf7pkw/video/upload/EZTech/adc7bnasuhcvhmbcwcxn"
  autoPlay
  loop
  muted
  playsInline
></video>)
        }
      </div>
      
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-600 opacity-15"
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl font-semibold  text-white mb-8 animate-fade-in
          leading-normal max-w-5xl mx-auto whitespace-normal">
          {/* <span className="highlight-word"></span>Revolutionizing Businesses with{' '} 
          <span className="highlight-word"></span>Cutting-Edge Technology */}
          {t('hero.title')}
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-10  max-w-3xl mx-auto font-light">
          {t('hero.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={() => scrollTo('services')}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            {t('hero.exploreServices')}
          </button>
          <button 
            onClick={() => scrollTo('contact')}
            className="px-8 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            {t('hero.contactUs')}
          </button>
        </div>
      </div>

      <button 
        onClick={() => scrollTo('services')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
      >
        <ChevronDown className="h-8 w-8 text-white" />
      </button>
    </section>
  );
}
