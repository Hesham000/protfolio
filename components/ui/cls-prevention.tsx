"use client";

import { ReactNode } from "react";

interface CLSPreventionWrapperProps {
  children: ReactNode;
  reservedHeight?: string;
  className?: string;
}

// Component to prevent CLS by reserving space
export const CLSPreventionWrapper = ({ 
  children, 
  reservedHeight = "auto", 
  className = "" 
}: CLSPreventionWrapperProps) => {
  return (
    <div 
      className={`min-h-[${reservedHeight}] ${className}`}
      style={{ contentVisibility: "auto" }}
    >
      {children}
    </div>
  );
};

// Specific layout preservation for images
interface ImageContainerProps {
  width: number;
  height: number;
  children: ReactNode;
  className?: string;
}

export const ImageContainer = ({ 
  width, 
  height, 
  children, 
  className = "" 
}: ImageContainerProps) => {
  const aspectRatio = (height / width) * 100;
  
  return (
    <div 
      className={`relative w-full ${className}`}
      style={{ paddingBottom: `${aspectRatio}%` }}
    >
      <div className="absolute inset-0">
        {children}
      </div>
    </div>
  );
};

// Loading state that maintains layout
interface LoadingPlaceholderProps {
  width?: string;
  height?: string;
  className?: string;
  shape?: "rectangle" | "circle" | "text";
}

export const LoadingPlaceholder = ({ 
  width = "100%", 
  height = "200px", 
  className = "",
  shape = "rectangle"
}: LoadingPlaceholderProps) => {
  const shapeClasses = {
    rectangle: "rounded-lg",
    circle: "rounded-full",
    text: "rounded-md"
  };

  return (
    <div
      className={`bg-gray-800/30 animate-pulse ${shapeClasses[shape]} ${className}`}
      style={{ width, height }}
      role="presentation"
      aria-hidden="true"
    />
  );
};

// Section wrapper that maintains consistent spacing
interface SectionWrapperProps {
  children: ReactNode;
  minHeight?: string;
  className?: string;
  id?: string;
}

export const SectionWrapper = ({ 
  children, 
  minHeight = "100vh", 
  className = "",
  id 
}: SectionWrapperProps) => {
  return (
    <section 
      id={id}
      className={`relative w-full ${className}`}
      style={{ 
        minHeight,
        contentVisibility: "auto",
        containIntrinsicSize: minHeight
      }}
    >
      {children}
    </section>
  );
};

// Navbar height preservation
export const NavbarSpacer = () => (
  <div className="h-[80px] w-full flex-shrink-0" aria-hidden="true" />
);

// Footer height preservation  
export const FooterSpacer = () => (
  <div className="h-[300px] w-full flex-shrink-0" aria-hidden="true" />
); 