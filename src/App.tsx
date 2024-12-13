import React from 'react';
import { Logo } from './components/Logo';
import { Background } from './components/Background';
import { ComingSoon } from './components/ComingSoon';
import { LocationFeature } from './components/LocationFeature';

export function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <Background />
      
      {/* Navigation - Made smaller and less prominent */}
      <nav className="relative z-10 px-4 py-3">
        <div className="container mx-auto">
          <Logo />
        </div>
      </nav>

      {/* Main Content - Adjusted for better vertical centering */}
      <main className="relative z-10 container mx-auto px-6 flex flex-col justify-center min-h-[calc(100vh-80px)]">
        <ComingSoon />
        <LocationFeature />
      </main>
    </div>
  );
}

export default App;