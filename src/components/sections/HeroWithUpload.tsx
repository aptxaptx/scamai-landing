'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';

/**
 * HeroWithUpload - Ralph Wiggum方法的Hero区
 * 
 * 原则：
 * 1. 用问题吸引注意力
 * 2. 一个大大的上传区
 * 3. 一个明显的CTA
 * 4. 显示社会证明（免费、无需注册）
 */

export default function HeroWithUpload() {
  const locale = useLocale();
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // Handle file upload
      console.log('File dropped:', e.dataTransfer.files[0]);
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white py-12 sm:py-16 md:py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Question Hook */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
          {locale === 'zh-CN' ? (
            <>AI生成的？<span className="block mt-2 text-blue-600">我们1秒告诉你 🎯</span></>
          ) : (
            <>Is This AI?<span className="block mt-2 text-blue-600">We'll Tell You in 1 Second 🎯</span></>
          )}
        </h1>

        {/* Simple Value Prop */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto px-4">
          {locale === 'zh-CN' 
            ? '上传图片、音频或视频。免费检测，无需注册。'
            : "Upload image, audio, or video. Free detection. No signup."
          }
        </p>

        {/* Upload Zone */}
        <div
          className={`
            relative border-4 border-dashed rounded-xl sm:rounded-2xl p-8 sm:p-12 md:p-16 lg:p-20 mb-6 sm:mb-8 transition-all
            ${dragActive 
              ? 'border-blue-600 bg-blue-50' 
              : 'border-gray-300 bg-white hover:border-blue-400 hover:bg-blue-50'
            }
          `}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            type="file"
            id="file-upload"
            className="hidden"
            accept="image/*,audio/*,video/*"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                console.log('File selected:', e.target.files[0]);
              }
            }}
          />
          
          <label 
            htmlFor="file-upload" 
            className="cursor-pointer flex flex-col items-center"
          >
            {/* Upload Icon */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-blue-100 rounded-full flex items-center justify-center mb-4 sm:mb-6">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>

            {/* Upload Text */}
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-2 px-4">
              {locale === 'zh-CN' 
                ? '点击或拖拽文件'
                : 'Click or Drop File'
              }
            </p>
            <p className="text-sm sm:text-base text-gray-500 px-4">
              {locale === 'zh-CN'
                ? 'JPG, PNG, MP3, MP4 (最大25MB)'
                : 'JPG, PNG, MP3, MP4 (max 25MB)'
              }
            </p>
          </label>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm md:text-base text-gray-600 px-4">
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium whitespace-nowrap">
              {locale === 'zh-CN' ? '每天5次免费' : '5 Free Daily'}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium whitespace-nowrap">
              {locale === 'zh-CN' ? '无需注册' : 'No Signup'}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium whitespace-nowrap">
              {locale === 'zh-CN' ? '1秒结果' : '1 Second'}
            </span>
          </div>
        </div>

        {/* Social Proof */}
        <p className="mt-6 sm:mt-8 text-xs sm:text-sm text-gray-500 px-4">
          {locale === 'zh-CN'
            ? '10,000+ 用户信赖'
            : '10,000+ Users Trust ScamAI'
          }
        </p>
      </div>
    </section>
  );
}
