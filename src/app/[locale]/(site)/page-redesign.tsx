'use client';

import Link from 'next/link';
import HeroWithUpload from '@/components/sections/HeroWithUpload';
import ProductCardGrid from '@/components/sections/ProductCardGrid';
import UseCaseIcons from '@/components/sections/UseCaseIcons';

/**
 * 新首页 - Ralph Wiggum方法
 * 
 * 设计原则：
 * 1. 一屏一个重点
 * 2. 从上到下的自然流程
 * 3. 每个区域都有清晰的CTA
 * 
 * 流程：
 * Hero → 立即试用（上传）
 * Products → 了解三种检测
 * Use Cases → 看看谁在用
 * Pricing → 选择方案
 * CTA → 开始使用
 */

export default function HomePageRedesign() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Upload */}
      <HeroWithUpload />

      {/* Product Cards - What we detect */}
      <ProductCardGrid />

      {/* Use Cases - Who uses it */}
      <UseCaseIcons />

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            准备开始了吗？
          </h2>
          <p className="text-xl md:text-2xl mb-10 opacity-90">
            免费试用，无需信用卡，随时可以取消
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/#try"
              className="px-10 py-5 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-xl text-lg w-full sm:w-auto"
            >
              立即免费试用
            </Link>
            <Link
              href="https://cal.com/scamai/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors text-lg w-full sm:w-auto"
            >
              预约演示
            </Link>
          </div>

          <p className="mt-8 text-sm opacity-75">
            加入 10,000+ 用户，一起对抗AI欺诈
          </p>
        </div>
      </section>
    </main>
  );
}
