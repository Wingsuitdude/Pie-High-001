import { GradientText } from './ui/GradientText';

export function ComingSoon() {
  return (
    <div className="relative z-10 text-center mb-12">
      <div className="inline-block px-4 py-2 border border-purple-400 rounded-full text-purple-400 text-sm tracking-wide mb-8 animate-pulse">
        COMING SOON • EST. 2025
      </div>
      
      <div className="mb-12">
        <h1 className="text-6xl md:text-8xl font-bold mb-4 animate-fade-in">
          <GradientText>Pie High</GradientText>
        </h1>
        <div className="text-xl md:text-2xl text-purple-300 font-light tracking-wide animate-fade-in-delayed">
          artisanal pie company
        </div>
      </div>

      <h2 className="text-3xl md:text-5xl font-bold mb-8 animate-fade-in-delayed-2">
        <GradientText gradient="secondary">
          In the Heart of Humboldt County
        </GradientText>
      </h2>
    </div>
  );
}