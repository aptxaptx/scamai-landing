'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';

/**
 * PricingSimple - Ralph Wiggum方法的定价表
 * 
 * 原则：
 * 1. 三栏对比
 * 2. 清晰的功能列表
 * 3. 明显的推荐方案
 */

const plans = [
  {
    name: 'Free',
    nameZh: '免费版',
    price: 0,
    period: 'forever',
    periodZh: '永久免费',
    description: 'Perfect for trying out',
    descriptionZh: '适合试用体验',
    features: [
      { text: '5 checks per day', textZh: '每天5次检测', included: true },
      { text: 'Image detection', textZh: '图片检测', included: true },
      { text: 'Basic support', textZh: '基础支持', included: true },
      { text: 'Audio detection', textZh: '音频检测', included: false },
      { text: 'Video detection', textZh: '视频检测', included: false },
      { text: 'API access', textZh: 'API访问', included: false },
    ],
    cta: 'Start Free',
    ctaZh: '开始使用',
    href: '/#try',
    highlighted: false,
  },
  {
    name: 'Pro',
    nameZh: '专业版',
    price: 99,
    period: 'per month',
    periodZh: '每月',
    description: 'For professionals',
    descriptionZh: '适合专业用户',
    features: [
      { text: '1,000 checks per day', textZh: '每天1000次检测', included: true },
      { text: 'All detection types', textZh: '所有检测类型', included: true },
      { text: 'Priority support', textZh: '优先支持', included: true },
      { text: 'API access', textZh: 'API访问', included: true },
      { text: 'Batch processing', textZh: '批量处理', included: true },
      { text: 'Custom integration', textZh: '定制集成', included: false },
    ],
    cta: 'Start 14-day Trial',
    ctaZh: '开始14天试用',
    href: 'https://app.scam.ai',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    nameZh: '企业版',
    price: null,
    period: 'custom',
    periodZh: '定制',
    description: 'For large organizations',
    descriptionZh: '适合大型企业',
    features: [
      { text: 'Unlimited checks', textZh: '无限次检测', included: true },
      { text: 'All detection types', textZh: '所有检测类型', included: true },
      { text: 'Dedicated support', textZh: '专属支持', included: true },
      { text: 'API access', textZh: 'API访问', included: true },
      { text: 'Custom integration', textZh: '定制集成', included: true },
      { text: 'SLA guarantee', textZh: 'SLA保障', included: true },
    ],
    cta: 'Contact Sales',
    ctaZh: '联系销售',
    href: 'https://cal.com/scamai/15min',
    highlighted: false,
  },
];

export default function PricingSimple() {
  const locale = useLocale();

  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            {locale === 'zh-CN' ? '选方案' : 'Pick a Plan'}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            {locale === 'zh-CN'
              ? '免费开始，随时升级'
              : 'Start Free, Upgrade Anytime'
            }
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`
                relative bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-all
                ${plan.highlighted 
                  ? 'border-4 border-blue-600 shadow-2xl md:scale-105' 
                  : 'border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg'
                }
              `}
            >
              {/* Recommended Badge */}
              {plan.highlighted && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-1 bg-blue-600 text-white text-xs sm:text-sm font-bold rounded-full whitespace-nowrap">
                  {locale === 'zh-CN' ? '推荐' : 'BEST'}
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                {locale === 'zh-CN' ? plan.nameZh : plan.name}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                {locale === 'zh-CN' ? plan.descriptionZh : plan.description}
              </p>

              {/* Price */}
              <div className="mb-4 sm:mb-6">
                {plan.price !== null ? (
                  <>
                    <span className="text-4xl sm:text-5xl font-bold text-gray-900">${plan.price}</span>
                    <span className="text-sm sm:text-base text-gray-600 ml-2">
                      / {locale === 'zh-CN' ? plan.periodZh : plan.period}
                    </span>
                  </>
                ) : (
                  <span className="text-2xl sm:text-3xl font-bold text-gray-900">
                    {locale === 'zh-CN' ? '定制' : 'Custom'}
                  </span>
                )}
              </div>

              {/* CTA Button */}
              <Link
                href={plan.href}
                target={plan.href.startsWith('http') ? '_blank' : undefined}
                rel={plan.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`
                  block w-full text-center px-5 sm:px-6 py-3 sm:py-4 font-bold rounded-lg transition-colors mb-6 sm:mb-8 text-sm sm:text-base
                  ${plan.highlighted
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg'
                    : 'bg-gray-900 hover:bg-gray-800 text-white'
                  }
                `}
              >
                {locale === 'zh-CN' ? plan.ctaZh : plan.cta}
              </Link>

              {/* Features List */}
              <div className="space-y-3 sm:space-y-4">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-2 sm:space-x-3">
                    {feature.included ? (
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    )}
                    <span className={`text-sm sm:text-base ${feature.included ? 'text-gray-900' : 'text-gray-400'}`}>
                      {locale === 'zh-CN' ? feature.textZh : feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Teaser */}
        <div className="mt-12 sm:mt-16 text-center px-4">
          <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
            {locale === 'zh-CN' ? '疑问？' : 'Questions?'}
          </p>
          <a
            href="#faq"
            className="text-sm sm:text-base text-blue-600 hover:text-blue-700 font-semibold"
          >
            {locale === 'zh-CN' ? '查看FAQ' : 'View FAQ'} →
          </a>
        </div>
      </div>
    </section>
  );
}
