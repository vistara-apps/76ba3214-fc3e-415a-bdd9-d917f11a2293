'use client';

import { useState } from 'react';
import { Header } from './components/Header';
import { UploadZone } from './components/UploadZone';
import { AdVariations } from './components/AdVariations';
import { BottomActions } from './components/BottomActions';
import { LoadingSpinner } from './components/LoadingSpinner';

export interface AdVariation {
  id: string;
  imageUrl: string;
  variationType: string;
  description: string;
  isPosted?: boolean;
}

export default function Home() {
  const [uploadedImage, setUploadedImage] = useState<string>('');
  const [adVariations, setAdVariations] = useState<AdVariation[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isPosting, setIsPosting] = useState(false);

  const handleImageUpload = (imageUrl: string) => {
    setUploadedImage(imageUrl);
    setAdVariations([]); // Clear previous variations
  };

  const generateAdVariations = async () => {
    if (!uploadedImage) return;
    
    setIsGenerating(true);
    
    // Simulate AI generation with mock variations
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const mockVariations: AdVariation[] = [
      {
        id: '1',
        imageUrl: '/api/placeholder/300/400',
        variationType: 'Lifestyle Focus',
        description: 'Product shown in real-life context with lifestyle elements'
      },
      {
        id: '2', 
        imageUrl: '/api/placeholder/300/400',
        variationType: 'Text Overlay',
        description: 'Bold text overlay with promotional message'
      },
      {
        id: '3',
        imageUrl: '/api/placeholder/300/400', 
        variationType: 'Color Pop',
        description: 'Enhanced colors with gradient background'
      },
      {
        id: '4',
        imageUrl: '/api/placeholder/300/400',
        variationType: 'Split Screen',
        description: 'Before/after or comparison layout'
      },
      {
        id: '5',
        imageUrl: '/api/placeholder/300/400',
        variationType: 'Minimalist',
        description: 'Clean, minimal design with white space'
      }
    ];
    
    setAdVariations(mockVariations);
    setIsGenerating(false);
  };

  const postToSocial = async () => {
    setIsPosting(true);
    
    // Simulate posting process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mark all variations as posted
    setAdVariations(prev => prev.map(ad => ({ ...ad, isPosted: true })));
    setIsPosting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Gradient background */}
      <div className="fixed inset-0 gradient-bg opacity-90" />
      <div className="fixed inset-0 bg-background/50" />
      
      {/* Content */}
      <div className="relative z-10">
        <Header />
        
        <main className="max-w-xl mx-auto px-4 py-8">
          {/* Upload Section */}
          <div className="mb-8">
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold tracking-tight text-white mb-4">
                Upload mark Ad
              </h1>
              <p className="text-base leading-7 text-white/80 mb-6">
                Upload a single product to generate 3-5 visual ads optimized for engagement.
              </p>
              
              {/* Feature list */}
              <div className="text-left space-y-2 text-white/90">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span className="text-sm">Upload an product image</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span className="text-sm">Prompts love from ($1 AI)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span className="text-sm">5.5 morphed one variation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span className="text-sm">Generated the AI as generate SWEET NEED</span>
                </div>
              </div>
            </div>
            
            <UploadZone 
              onImageUpload={handleImageUpload}
              uploadedImage={uploadedImage}
            />
            
            {uploadedImage && !isGenerating && adVariations.length === 0 && (
              <div className="mt-6 text-center">
                <button
                  onClick={generateAdVariations}
                  className="button-primary text-white px-8 py-3 rounded-lg font-medium"
                >
                  Generate Ad Variations
                </button>
              </div>
            )}
          </div>

          {/* Loading State */}
          {isGenerating && (
            <div className="text-center py-12">
              <LoadingSpinner />
              <p className="text-white/80 mt-4">Generating your ad variations...</p>
            </div>
          )}

          {/* Ad Variations */}
          {adVariations.length > 0 && (
            <AdVariations 
              variations={adVariations}
              isPosting={isPosting}
            />
          )}
        </main>

        {/* Bottom Actions */}
        {adVariations.length > 0 && (
          <BottomActions 
            onPostToSocial={postToSocial}
            isPosting={isPosting}
            hasPosted={adVariations.some(ad => ad.isPosted)}
          />
        )}
      </div>
    </div>
  );
}
