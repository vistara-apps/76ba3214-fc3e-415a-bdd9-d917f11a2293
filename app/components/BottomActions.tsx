'use client';

import { Share, BarChart3, Settings } from 'lucide-react';
import { LoadingSpinner } from './LoadingSpinner';

interface BottomActionsProps {
  onPostToSocial: () => void;
  isPosting: boolean;
  hasPosted: boolean;
}

export function BottomActions({ onPostToSocial, isPosting, hasPosted }: BottomActionsProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-20">
      <div className="glass-card border-t border-white/10 p-4">
        <div className="max-w-xl mx-auto">
          <div className="flex items-center justify-between">
            {/* Left Actions */}
            <div className="flex items-center space-x-4">
              <button className="flex flex-col items-center space-y-1 text-white/60 hover:text-white transition-colors">
                <BarChart3 className="w-5 h-5" />
                <span className="text-xs">Analytics</span>
              </button>
              
              <button className="flex flex-col items-center space-y-1 text-white/60 hover:text-white transition-colors">
                <Share className="w-5 h-5" />
                <span className="text-xs">SharePost</span>
              </button>
              
              <button className="flex flex-col items-center space-y-1 text-white/60 hover:text-white transition-colors">
                <Settings className="w-5 h-5" />
                <span className="text-xs">Settings</span>
              </button>
            </div>

            {/* Main Action Button */}
            <button
              onClick={onPostToSocial}
              disabled={isPosting || hasPosted}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                hasPosted
                  ? 'bg-green-600 text-white cursor-not-allowed'
                  : isPosting
                  ? 'bg-purple-600/50 text-white cursor-not-allowed'
                  : 'button-primary text-white hover:shadow-lg'
              }`}
            >
              {isPosting ? (
                <div className="flex items-center space-x-2">
                  <LoadingSpinner size="sm" />
                  <span>Posting...</span>
                </div>
              ) : hasPosted ? (
                'Posted Successfully'
              ) : (
                'Post to Test Page'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
