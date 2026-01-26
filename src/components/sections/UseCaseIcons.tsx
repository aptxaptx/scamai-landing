'use client';

import { useLocale } from 'next-intl';

/**
 * UseCaseIcons - Ralph Wiggum方法的使用场景展示
 * 
 * 原则：
 * 1. 简单的图标
 * 2. 清晰的标题
 * 3. 一句话说明用途
 */

const useCases = [
  {
    icon: '💼',
    title: 'Business',
    titleZh: '企业',
    description: 'Stop fraud',
    descriptionZh: '阻止欺诈',
  },
  {
    icon: '👥',
    title: 'Dating',
    titleZh: '约会',
    description: 'Catch fakes',
    descriptionZh: '抓假号',
  },
  {
    icon: '📰',
    title: 'News',
    titleZh: '新闻',
    description: 'Verify truth',
    descriptionZh: '验真假',
  },
  {
    icon: '🏦',
    title: 'Banking',
    titleZh: '银行',
    description: 'KYC check',
    descriptionZh: 'KYC检查',
  },
  {
    icon: '⚖️',
    title: 'Legal',
    titleZh: '法律',
    description: 'Proof check',
    descriptionZh: '证据检查',
  },
  {
    icon: '🛡️',
    title: 'Security',
    titleZh: '安全',
    description: 'Stay safe',
    descriptionZh: '保安全',
  },
];

export default function UseCaseIcons() {
  const locale = useLocale();

  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            {locale === 'zh-CN' ? '谁在用？' : 'Who Uses It?'}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            {locale === 'zh-CN'
              ? '从创业公司到大企业'
              : 'Startups to Enterprises'
            }
          </p>
        </div>

        {/* Use Case Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                {useCase.icon}
              </div>

              {/* Title */}
              <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1 sm:mb-2">
                {locale === 'zh-CN' ? useCase.titleZh : useCase.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-gray-600">
                {locale === 'zh-CN' ? useCase.descriptionZh : useCase.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
          <div className="bg-white rounded-lg sm:rounded-xl p-6 sm:p-8">
            <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">10K+</div>
            <div className="text-sm sm:text-base text-gray-600">
              {locale === 'zh-CN' ? '用户' : 'Users'}
            </div>
          </div>
          <div className="bg-white rounded-lg sm:rounded-xl p-6 sm:p-8">
            <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">1M+</div>
            <div className="text-sm sm:text-base text-gray-600">
              {locale === 'zh-CN' ? '检测' : 'Checks'}
            </div>
          </div>
          <div className="bg-white rounded-lg sm:rounded-xl p-6 sm:p-8">
            <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">99%</div>
            <div className="text-sm sm:text-base text-gray-600">
              {locale === 'zh-CN' ? '准确' : 'Accurate'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
