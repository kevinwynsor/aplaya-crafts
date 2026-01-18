'use client'
import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, Music, Phone, Globe, Mail, MapPin } from 'lucide-react';

export default function AplayaCrafts() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sample craft images - replace with your actual images
  const craftImages = [
    { id: 1, url: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800&q=80', alt: 'Craft 1' },
    { id: 2, url: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=800&q=80', alt: 'Craft 2' },
    { id: 3, url: 'https://images.unsplash.com/photo-1535378620166-273708d44e4c?w=800&q=80', alt: 'Craft 3' },
    { id: 4, url: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&q=80', alt: 'Craft 4' },
    { id: 5, url: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80', alt: 'Craft 5' },
    { id: 6, url: 'https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=800&q=80', alt: 'Craft 6' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: '#', color: 'hover:text-blue-500' },
    { name: 'Instagram', icon: Instagram, url: '#', color: 'hover:text-pink-500' },
    { name: 'TikTok', icon: Music, url: '#', color: 'hover:text-purple-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-pink-50">
      {/* Header */}
      <header className="relative overflow-hidden py-20 px-4">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #f59e0b 0, #f59e0b 1px, transparent 1px, transparent 20px)',
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        <h1 
          className={`text-6xl md:text-8xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
          style={{
            fontFamily: 'Georgia, serif',
            textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
          }}
        >
          Aplaya Crafts
        </h1>
        <div className="text-center mt-4">
          <div className="inline-block h-1 w-32 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full animate-pulse" />
        </div>
      </header>

      {/* Image Gallery */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {craftImages.map((image, index) => (
            <div
              key={image.id}
              className={`group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square overflow-hidden bg-white">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </section>

      {/* Footer Links */}
      <section className="mx-auto px-4 py-16 justify-items-center">
        <div 
          className={`bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 transition-all duration-1000 transform mb-4 px-6 py-4 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <a 
              href="#" 
              className={`text-lg md:text-xl font-semibold text-gray-700 hover:text-orange-600 transition-all duration-300 transform hover:scale-110 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              LOOKOUT FOR PROMOS ON INSTAGRAM
          </a>    
        </div>
        <div 
          className={`bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 transition-all duration-1000 transform mb-4 px-6 py-4 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95' 
          }`}
        >
          <a 
              href="#" 
              className={`text-lg md:text-xl font-semibold text-gray-700 hover:text-orange-600 transition-all duration-300 transform hover:scale-110 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              WATCH LIVE ON TIKTOK
          </a>    
        </div>
        <div 
          className={`bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl transition-all duration-1000 transform mb-4 px-6 py-4 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95' 
          }`}
        >
          <a 
              href="#" 
              className={`text-lg md:text-xl font-semibold text-gray-700 hover:text-orange-600 transition-all duration-300 transform hover:scale-110 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              BAZAAR UPDATES ON FACEBOOK
          </a>    
        </div>
        <div 
          className={`bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 transition-all duration-1000 transform mb-4 px-6 py-4 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95' 
          }`}
        >
          <a 
              href="#" 
              className={`text-lg md:text-xl font-semibold text-gray-700 hover:text-orange-600 transition-all duration-300 transform hover:scale-110 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              TUTORIALS ON YOUTUBE
          </a>    
        </div>

        <div 
          className={`bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 transition-all duration-1000 transform mb-4 px-6 py-4 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95' 
          }`}
        >
          <a 
              href="#" 
              className={`text-lg md:text-xl font-semibold text-gray-700 hover:text-orange-600 transition-all duration-300 transform hover:scale-110 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              BAZAAR DIARIES (COMING SOON!)
          </a>    
        </div>
      </section>

        {/* Contact Us Section */}
        <section className="mx-auto justify-items-center">
        <div 
          className={`bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl transition-all duration-1000 transform mb-4 px-6 py-4 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95' 
          }`}
        >
          {/* Header */}
          <div className="">
            <h2 className="text-2xl font-bold text-center mb-2">
              CONTACT US
            </h2>
          </div>
          
          {/* Contact Info */}
          <div className="bg-white">
            <div className="space-y-3">
              {/* Phone */}
              <div 
                className={`flex items-center gap-6 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                <div className="bg-blue-900 rounded-full p-4 flex-shrink-0">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg md:text-xl font-semibold">
                  +123-456-7890
                </span>
              </div>

              {/* Website */}
              <div 
                className={`flex items-center gap-6 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                <div className="bg-blue-900 rounded-full p-4 flex-shrink-0">
                  <Globe className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg md:text-xl font-semibold">
                  www.aplayacrafts.com
                </span>
              </div>

              {/* Email */}
              <div 
                className={`flex items-center gap-6 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: '800ms' }}
              >
                <div className="bg-blue-900 rounded-full p-4 flex-shrink-0">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg md:text-xl font-semibold">
                  hello@aplayacrafts.com
                </span>
              </div>

              {/* Address */}
              <div 
                className={`flex items-center gap-6 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: '1000ms' }}
              >
                <div className="bg-blue-900 rounded-full p-4 flex-shrink-0">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg md:text-xl font-semibold">
                  123 Anywhere St., Any City
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 px-4 text-gray-600">
        <p className="text-sm">© 2026 Aplaya Crafts. Handmade with love.</p>
      </footer>
    </div>
  );
}