'use client';

import { CheckCircle, Clock } from 'lucide-react';
import type { AdVariation } from '../page';

interface AdCardProps {
  variation: AdVariation;
  index: number;
  isPosting: boolean;
}

export function AdCard({ variation, index, isPosting }: AdCardProps) {
  return (
    <div className="ad-card glass-card rounded-lg overflow-hidden">
      {/* Image Preview */}
      <div className="relative aspect-[3/4] bg-gradient-to-br from-purple-500/20 to-orange-500/20">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white/60">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-2">
              <span className="text-lg font-bold">{index + 1}</span>
            </div>
            <div className="text-xs">Ad Variation</div>
          </div>
        </div>
        
        {/* Status indicator */}
        <div className="absolute top-2 right-2">
          {variation.isPosted ? (
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <CheckCircle className="w-4 h-4 text-white" />
            </div>
          ) : isPosting ? (
            <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center animate-pulse">
              <Clock className="w-4 h-4 text-white" />
            </div>
          ) : null}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-3">
        <h3 className="font-medium text-white text-sm mb-1">
          {variation.variationType}
        </h3>
        <p className="text-xs text-white/60 leading-relaxed">
          {variation.description}
        </p>
        
        {variation.isPosted && (
          <div className="mt-2 text-xs text-green-400 font-medium">
            ✓ Posted to social
          </div>
        )}
      </div>
    </div>
  );
}
