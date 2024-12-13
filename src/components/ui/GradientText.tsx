interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  gradient?: 'primary' | 'secondary';
}

export function GradientText({ 
  children, 
  className = '', 
  gradient = 'primary' 
}: GradientTextProps) {
  const gradientClasses = {
    primary: 'from-purple-400 via-pink-400 to-indigo-400',
    secondary: 'from-purple-400 to-indigo-400'
  };

  return (
    <span className={`bg-clip-text text-transparent bg-gradient-to-r ${gradientClasses[gradient]} ${className}`}>
      {children}
    </span>
  );
}