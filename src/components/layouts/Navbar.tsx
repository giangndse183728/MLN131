"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Define routes
const ROUTES = {
    NOIDUNG: "/noidung",
    VIDEO: "/video",
    GAME: "/game",
    MUSIC:"/music"
};


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMasthead, setShowMasthead] = useState(true);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    setShowMasthead(isHomePage && window.scrollY === 0);
  }, [pathname, isHomePage]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowMasthead(isHomePage && currentScrollY === 0);
    };

    const throttledHandleScroll = () => {
      window.requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [isHomePage]);


  return (
    <motion.nav 
      className="w-full fixed z-50 bg-white/80 backdrop-blur-md border-b-2 border-black"
      initial={false}
    >
      <div className="h-1 w-full bg-red-900/80"></div>
    
      <div className="absolute top-12 left-16 w-32 h-32 bg-red-900/10 rounded-full blur-2xl"></div>
      <div className="absolute top-8 right-16 w-24 h-24 bg-black/5 rounded-full blur-xl"></div>
      
      <motion.div
        className="overflow-hidden"
        animate={{ 
          height: showMasthead ? "auto" : 0,
          opacity: showMasthead ? 1 : 0,
          marginBottom: showMasthead ? 0 : 0
        }} 
        transition={{
          height: {
            duration: 0.35,
            ease: [0.1, 0.9, 0.2, 1]
          },
          opacity: { 
            duration: showMasthead ? 0.3 : 0.15
          }
        }}
      >
        <div className="container mx-auto py-6 px-50 border-b border-black/40 relative">
          <div className="flex items-center justify-between text-center relative z-10">
            <p className="text-xs uppercase tracking-widest mb-3 font-sub">Dân Chủ và Phát Triển</p>

            {/* Centered Title */}
            <Link href="/" className="absolute left-1/2 transform -translate-x-1/2 group">
              <h1 className="font-primary text-4xl sm:text-5xl tracking-wider uppercase text-center inline-block relative">
                <span className="text-black">VIET</span>
                <span className="text-red-900">NAM</span>
                <span className="absolute -top-2 -right-2 text-red-900 text-xs">®</span>
              </h1>
            </Link>

            <p className="text-xs uppercase tracking-widest mt-3 font-serif italic">THÀNH LẬP MCMXLV - 1945</p>
          </div>
        </div>
      </motion.div>

      {/* Main navbar content */}
      <motion.div 
        className="container mx-auto px-4 lg:px-6 relative z-10"
        animate={{ 
          y: showMasthead ? 0 : 5,
          transition: {
            duration: 0.35,
            ease: [0.1, 0.9, 0.2, 1]
          }
        }}
      >
        <div className="flex justify-between items-center h-16 border-b border-black/20">
          {/* Black line decoration and brand name */}
          <div className="hidden md:flex items-center">
            <div className="w-16 h-[1px] bg-black/60"></div>
            <motion.div
              className="ml-4"
              animate={{
                opacity: showMasthead ? 0 : 1,
                x: showMasthead ? -20 : 0,
              }}
              transition={{
                duration: 0.3,
                ease: [0.1, 0.9, 0.2, 1]
              }}
            >
              <Link href="/" className="group">
                <h1 className="font-primary text-xl tracking-wider uppercase inline-block relative">
                  <span className="text-black">VIỆT</span>
                  <span className="text-red-900">NAM</span>
                  <span className="absolute -top-1 -right-1 text-red-900 text-[8px]">®</span>
                </h1>
              </Link>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center space-x-8 mx-auto">
            {[
              { name: "Nội Dung", path: ROUTES.NOIDUNG},
              { name: "Video", path: ROUTES.VIDEO },
              { name: "Game", path: ROUTES.GAME },
              { name: "Music", path: ROUTES.MUSIC }
            ].map((item, index) => (
              <Link
                key={item.name}
                href={item.path}
                className="group relative px-2 py-1 text-black hover:text-red-900 transition-colors font-sub tracking-widest text-xs"
              >
                <span className="relative">
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-red-900 group-hover:w-full transition-all duration-300"></span>
                </span>
                {index < 3 && (
                  <span className="absolute -right-4 top-1/2 transform -translate-y-1/2 text-black/40">/</span>
                )}
              </Link>
            ))}
          </div>

          {/* Right side elements */}
          <div className="hidden md:flex items-center space-x-4">
             {/* Group 4 Text */}
            <div className="flex items-center">
              <span className="text-xs font-sub text-black/70 tracking-widest uppercase">
                Presented by Group 4
              </span>
            </div>
            {/* Vietnamese Logo */}
            <div className="flex items-center">
              <img 
                src="/vn.png" 
                alt="Vietnam Logo" 
                className="h-8 w-8 object-contain"
              />
            </div>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center justify-center p-2 text-black/80 hover:text-red-900"
            aria-label={isMenuOpen ? "Đóng menu" : "Mở menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </motion.div>

      {/* Mobile Navigation with Glassmorphism */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/90 backdrop-blur-md border-t border-black/10 shadow-lg"
          >
            <div className="container mx-auto px-4 py-6">
              {/* Mobile menu items */}
              <div className="space-y-0">
                {[
                  {name: "Nội Dung", path: ROUTES.NOIDUNG },
                  {name: "Video", path: ROUTES.VIDEO },
                  {name: "Game", path: ROUTES.GAME },
                  {name: "Music", path: ROUTES.MUSIC }
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className="flex items-center py-3 text-black hover:text-red-900 border-b border-black/10 font-sub"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="mr-3 text-red-900">—</span>
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
              
              {/* Mobile right side elements */}
              <div className="flex items-center justify-center space-x-4 mt-6 pt-4 border-t border-black/10">
                {/* Vietnamese Logo */}
                <div className="flex items-center">
                  <img 
                    src="/vn.png" 
                    alt="Vietnam Logo" 
                    className="h-6 w-6 object-contain"
                  />
                </div>
                
                {/* Group 4 Text */}
                <div className="flex items-center">
                  <span className="text-xs font-sub text-black/70 tracking-widest uppercase">
                    Presented by Group 4
                  </span>
                </div>
              </div>
          
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;