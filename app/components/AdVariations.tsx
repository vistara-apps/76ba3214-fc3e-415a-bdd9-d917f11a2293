'use client';

import { AdCard } from './AdCard';
import type { AdVariation } from '../page';

interface AdVariationsProps {
  variations: AdVariation[];
  isPosting: boolean;
}

export function AdVariations({ variations, isPosting }: AdVariationsProps) {
  return (
    <div className="mb-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">
          Your AI Generated Ad Variations
        </h2>
        <p className="text-white/80">
          {variations.length} variations ready for posting
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {variations.map((variation, index) => (
          <AdCard
            key={variation.id}
            variation={variation}
            index={index}
            isPosting={isPosting}
          />
        ))}
      </div>
    </div>
  );
}
