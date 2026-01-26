'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

/**
 * ProductCardGrid - Ralph Wiggum方法的产品展示
 * 
 * 原则：
 * 1. 三个卡片，清晰的图标
 * 2. 简单的标题和描述
 * 3. 明显的"试一试"按钮
 */

const products = [
  {
    icon: '🖼️',
    title: 'Fake Photos',
    titleZh: '假照片',
    description: 'Catch AI images in 1 second',
    descriptionZh: '1秒识破AI图片',
    href: '/models/ai-generated-media',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: '🎤',
    title: 'Fake Voices',
    titleZh: '假声音',
    description: 'Spot voice clones instantly',
    descriptionZh: '瞬间识破克隆声音',
    href: '/models/voice-clones',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: '📹',
    title: 'Fake Videos',
    titleZh: '假视频',
    description: 'Find deepfakes fast',
    descriptionZh: '快速发现深度伪造',
    href: '/models/deepfakes',
    color: 'from-orange-500 to-red-500',
  },
];

export default function ProductCardGrid() {
  const locale = useLocale();

  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            {locale === 'zh-CN' ? '我们检测什么？' : 'What We Detect'}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            {locale === 'zh-CN'
              ? '图片、声音、视频 - 全部搞定'
              : 'Images, Voices, Videos - All Covered'
            }
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product) => (
            <div
              key={product.href}
              className="group bg-white rounded-xl sm:rounded-2xl border-2 border-gray-200 hover:border-blue-400 p-6 sm:p-8 transition-all hover:shadow-xl hover:-translate-y-1"
            >
              {/* Icon with Gradient Background */}
              <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${product.color} rounded-lg sm:rounded-xl flex items-center justify-center text-3xl sm:text-4xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform`}>
                {product.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                {locale === 'zh-CN' ? product.titleZh : product.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 min-h-[40px] sm:min-h-[48px]">
                {locale === 'zh-CN' ? product.descriptionZh : product.description}
              </p>

              {/* CTA Button */}
              <Link
                href={product.href}
                className="inline-flex items-center justify-center w-full px-5 sm:px-6 py-2.5 sm:py-3 bg-gray-900 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors text-sm sm:text-base"
              >
                {locale === 'zh-CN' ? '试试' : 'Try It'}
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-16 text-center px-4">
          <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
            {locale === 'zh-CN'
              ? '需要更多？'
              : 'Need More?'
            }
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors shadow-lg text-sm sm:text-base"
          >
            {locale === 'zh-CN' ? '查看定价' : 'View Pricing'}
            <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
