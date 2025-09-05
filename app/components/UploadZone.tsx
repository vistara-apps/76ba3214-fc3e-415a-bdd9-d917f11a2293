'use client';

import { useState, useRef } from 'react';
import { Upload, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';

interface UploadZoneProps {
  onImageUpload: (imageUrl: string) => void;
  uploadedImage: string;
}

export function UploadZone({ onImageUpload, uploadedImage }: UploadZoneProps) {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const handleFileUpload = (file: File) => {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        onImageUpload(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  if (uploadedImage) {
    return (
      <div className="glass-card rounded-lg p-4">
        <div className="relative aspect-square rounded-lg overflow-hidden">
          <Image
            src={uploadedImage}
            alt="Uploaded product"
            fill
            className="object-cover"
          />
          <button
            onClick={openFileDialog}
            className="absolute top-2 right-2 w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
          >
            <Upload className="w-4 h-4" />
          </button>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
        />
      </div>
    );
  }

  return (
    <div
      className={`upload-zone glass-card rounded-lg p-8 text-center cursor-pointer ${
        isDragging ? 'drag-over' : ''
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={openFileDialog}
    >
      <div className="flex flex-col items-center space-y-4">
        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
          <ImageIcon className="w-8 h-8 text-white/60" />
        </div>
        
        <div>
          <h3 className="text-lg font-medium text-white mb-2">
            Drag & drop your product image
          </h3>
          <p className="text-white/60 text-sm">
            Or click to browse files
          </p>
        </div>
        
        <div className="text-xs text-white/40">
          Supports JPG, PNG, GIF up to 10MB
        </div>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
      />
    </div>
  );
}
