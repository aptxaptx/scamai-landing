'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useLocale } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

/**
 * MinimalNav - Ralph Wiggum方法简化导航
 * 
 * 原则：
 * 1. 只有4个菜单项
 * 2. 零下拉菜单
 * 3. 一个主要CTA按钮
 * 4. 移动端汉堡菜单
 */

const menuItems = [
  { label: 'Product', labelZh: '产品', href: '/#product' },
  { label: 'Pricing', labelZh: '定价', href: '/pricing' },
  { label: 'Cases', labelZh: '案例', href: '/case-studies' },
  { label: 'API', labelZh: 'API', href: '/api-docs' },
];

export default function MinimalNav() {
  const locale = useLocale();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 w-full bg-white border-b border-gray-200 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-xl font-bold text-gray-900">ScamAI</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  {locale === 'zh-CN' ? item.labelZh : item.label}
                </Link>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <LanguageSwitcher />
              <Link
                href="https://app.scam.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                {locale === 'zh-CN' ? '登录' : 'Login'}
              </Link>
              <Link
                href="/#try"
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-sm"
              >
                {locale === 'zh-CN' ? '免费试用' : 'Try Free'}
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-gray-900 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                <span className={`w-full h-0.5 bg-gray-900 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`w-full h-0.5 bg-gray-900 transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="lg:hidden fixed inset-0 bg-black/50 z-[998]"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div className="lg:hidden fixed top-16 left-0 right-0 bg-white z-[999] shadow-2xl border-b border-gray-200">
            <div className="px-6 py-6 space-y-4">
              {/* Menu Items */}
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-lg font-semibold text-gray-900 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {locale === 'zh-CN' ? item.labelZh : item.label}
                </Link>
              ))}

              {/* Divider */}
              <div className="border-t border-gray-200 my-4" />

              {/* Actions */}
              <Link
                href="https://app.scam.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 text-lg font-semibold text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {locale === 'zh-CN' ? '登录' : 'Login'}
              </Link>
              <Link
                href="/#try"
                className="block w-full text-center px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors shadow-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                {locale === 'zh-CN' ? '免费试用' : 'Try Free'}
              </Link>

              {/* Language Switcher */}
              <div className="pt-4 flex justify-center">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
