"use client";

interface SkeletonProps {
  className?: string;
}

const Skeleton = ({ className = "" }: SkeletonProps) => (
  <div className={`animate-pulse bg-gray-700/30 rounded ${className}`} />
);

export const HeroSkeleton = () => (
  <section className="relative flex flex-col h-screen w-full items-center justify-center min-h-[100vh]">
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
        {/* Left side - text content */}
        <div className="space-y-6">
          <div className="space-y-4">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-12 w-4/5" />
            <Skeleton className="h-6 w-3/4" />
          </div>
          
          {/* CTA buttons skeleton */}
          <div className="flex gap-4 mt-8">
            <Skeleton className="h-12 w-36" />
            <Skeleton className="h-12 w-32" />
          </div>
        </div>
        
        {/* Right side - hero image skeleton */}
        <div className="flex justify-center items-center">
          <div className="relative w-[650px] h-[650px] max-w-full max-h-full">
            <Skeleton className="w-full h-full rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const AboutSkeleton = () => (
  <section className="flex flex-col items-center justify-center px-4 py-20">
    <div className="w-full max-w-4xl mx-auto">
      {/* Section title */}
      <div className="text-center mb-12">
        <Skeleton className="h-12 w-64 mx-auto mb-4" />
        <Skeleton className="h-4 w-96 mx-auto" />
      </div>
      
      {/* Content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Text content */}
        <div className="space-y-4">
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-5/6" />
          <Skeleton className="h-6 w-4/5" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-3/4" />
        </div>
        
        {/* Image placeholder */}
        <div className="flex justify-center">
          <Skeleton className="w-80 h-80 rounded-lg" />
        </div>
      </div>
    </div>
  </section>
);

export const SkillsSkeleton = () => (
  <section className="flex flex-col items-center justify-center px-4 py-20">
    <div className="w-full max-w-6xl mx-auto">
      {/* Section title */}
      <div className="text-center mb-12">
        <Skeleton className="h-12 w-64 mx-auto mb-4" />
        <Skeleton className="h-4 w-96 mx-auto" />
      </div>
      
      {/* Skills grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="flex flex-col items-center p-6">
            <Skeleton className="w-16 h-16 rounded-lg mb-4" />
            <Skeleton className="h-4 w-20" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const ProjectsSkeleton = () => (
  <section className="flex flex-col items-center justify-center px-4 py-20">
    <div className="w-full max-w-6xl mx-auto">
      {/* Section title */}
      <div className="text-center mb-12">
        <Skeleton className="h-12 w-64 mx-auto mb-4" />
        <Skeleton className="h-4 w-96 mx-auto" />
      </div>
      
      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="space-y-4">
            <Skeleton className="w-full h-48 rounded-lg" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <div className="flex gap-2 pt-2">
              <Skeleton className="h-8 w-16" />
              <Skeleton className="h-8 w-16" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const ContactSkeleton = () => (
  <section className="flex flex-col items-center justify-center px-4 py-20">
    <div className="w-full max-w-2xl mx-auto">
      {/* Section title */}
      <div className="text-center mb-12">
        <Skeleton className="h-12 w-64 mx-auto mb-4" />
        <Skeleton className="h-4 w-96 mx-auto" />
      </div>
      
      {/* Contact form */}
      <div className="space-y-6">
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-32 w-full" />
        <Skeleton className="h-12 w-32" />
      </div>
    </div>
  </section>
);

export const EncryptionSkeleton = () => (
  <section className="flex flex-col items-center justify-center px-4 py-20">
    <div className="w-full max-w-4xl mx-auto">
      {/* Section title */}
      <div className="text-center mb-12">
        <Skeleton className="h-12 w-64 mx-auto mb-4" />
        <Skeleton className="h-4 w-96 mx-auto" />
      </div>
      
      {/* Encryption demo */}
      <div className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <Skeleton className="h-8 w-32" />
            <Skeleton className="h-32 w-full" />
          </div>
          <div className="space-y-4">
            <Skeleton className="h-8 w-32" />
            <Skeleton className="h-32 w-full" />
          </div>
        </div>
        <div className="flex justify-center">
          <Skeleton className="h-12 w-40" />
        </div>
      </div>
    </div>
  </section>
); 