# Bento Cards v4 - Crypto Theme Components

这个目录包含从 **Bento Cards v4 - Crypto** 模板导入的加密货币主题卡片组件。

## 📂 目录结构

```
src/components/bento-crypto/
├── Bento/              # 可重用的 Bento 组件
│   ├── index.tsx
│   └── Bento.module.sass
├── cryptoCards.ts      # 30 个加密货币卡片配置数据
├── index.ts            # 导出索引文件
└── README.md           # 本文件
```

## 🎨 特点

- ✨ **30 个加密货币主题**：涵盖区块链和加密货币的核心概念
- 🎭 **数据驱动设计**：一个可重用组件 + 配置数据
- 📱 **响应式设计**：适配各种屏幕尺寸
- 🖼️ **专业插图**：30 张高质量的加密货币主题图片
- 🔧 **易于扩展**：只需添加数据即可创建新卡片

## 🎯 组件架构

### 核心组件：BentoCrypto

这是一个可重用的组件，接受以下 props：

```tsx
interface BentoProps {
  title: string;        // 卡片标题
  content: string;      // 描述内容
  image: string;        // 图片路径
  titleButton: string;  // 按钮文本
}
```

### 数据配置：cryptoCards

包含 30 个预定义的加密货币卡片配置：

```tsx
export interface CryptoCard {
  id: string;
  title: string;
  content: string;
  image: string;
  titleButton: string;
}

export const cryptoCards: CryptoCard[] = [
  // 30 个卡片配置...
];
```

## 📦 使用方法

### 方法 1：使用单个卡片数据

```tsx
import { BentoCrypto, cryptoCards } from '@/components/bento-crypto';

export default function CryptoPage() {
  const privateKeyCard = cryptoCards.find(card => card.id === 'private-key');
  
  return (
    <BentoCrypto
      title={privateKeyCard.title}
      content={privateKeyCard.content}
      image={privateKeyCard.image}
      titleButton={privateKeyCard.titleButton}
    />
  );
}
```

### 方法 2：渲染所有卡片

```tsx
import { BentoCrypto, cryptoCards } from '@/components/bento-crypto';

export default function CryptoGallery() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {cryptoCards.map((card) => (
        <BentoCrypto
          key={card.id}
          title={card.title}
          content={card.content}
          image={card.image}
          titleButton={card.titleButton}
        />
      ))}
    </div>
  );
}
```

### 方法 3：自定义新卡片

```tsx
import { BentoCrypto } from '@/components/bento-crypto';

export default function CustomCard() {
  return (
    <BentoCrypto
      title="NFT Marketplace"
      content="Trade unique digital assets on blockchain."
      image="/custom-images/nft-marketplace.png"
      titleButton="Browse NFTs"
    />
  );
}
```

## 🎯 30 个加密货币主题

### 基础概念
1. **Private Key** - 加密钱包密钥管理
2. **Blockchain Basics** - 区块链基础可视化
3. **Smart Contracts** - 智能合约自动化
4. **Decentralized Network** - 去中心化网络

### 交易与钱包
5. **Crypto Exchange** - 加密货币交易所
6. **Multi-Coin Wallet** - 多币种钱包
7. **Crypto Payment** - 加密货币支付
8. **Hardware Wallet** - 硬件钱包
9. **Token Swap** - 代币交换

### 挖矿与质押
10. **Crypto Mining** - 加密货币挖矿
11. **Proof of Stake** - 权益证明
12. **Crypto Staking** - 加密货币质押

### DeFi 生态
13. **DeFi Dashboard** - DeFi 仪表板
14. **Liquidity Pool** - 流动性池
15. **Crypto Yield** - 加密收益
16. **Cross-Chain Bridge** - 跨链桥

### 市场与分析
17. **Market Volatility** - 市场波动性
18. **Market Analysis** - 市场分析
19. **Governance Token** - 治理代币

### 安全与存储
20. **Crypto Security** - 加密安全
21. **Cold Storage** - 冷存储

### 代币经济
22. **Token Fractioning** - 代币分割
23. **Token Minting** - 代币铸造
24. **Initial Coin Offering** - 首次代币发行
25. **Crypto Airdrop** - 加密空投

### 其他服务
26. **Crypto ATM** - 加密货币 ATM
27. **Crypto Card** - 加密货币卡
28. **Crypto Rewards** - 加密奖励
29. **Blockchain Explorer** - 区块链浏览器
30. **Network Latency** - 网络延迟监控

## 🖼️ 图片资源

所有图片资源存储在：`/public/crypto-images/`

包括 31 个文件：
- 30 张主题插图（PNG 格式）
- 1 张背景图（JPEG 格式）

## 🎨 样式定制

组件使用 SASS 模块化样式，可以通过修改以下文件来定制：

- `/src/styles/bento/bento-variables.sass` - 全局变量和颜色
- `/src/components/bento-crypto/Bento/Bento.module.sass` - 组件样式

### 主要样式特性

- ✨ 悬停时的平滑过渡效果
- 🎭 图片淡入加载动画
- 🔘 交互式按钮设计
- 📐 固定宽度 368px，灵活高度

## 🚀 展示页面

访问 `/en/bento-showcase` 查看所有 90 个 Bento 卡片组件（v2 + v1 + v4）的实时演示。

在展示页面中，所有 30 个加密货币卡片都会自动渲染并按主题分组显示。

## 📄 技术细节

- **框架**: Next.js 15+ / React 18+
- **样式**: SASS Modules
- **TypeScript**: 完全类型支持
- **图片优化**: Next.js Image 组件
- **状态管理**: React Hooks (useState)
- **类名工具**: classnames (cn)

## 🔧 扩展指南

### 添加新的加密货币卡片

1. 在 `/public/crypto-images/` 添加新图片
2. 在 `cryptoCards.ts` 中添加新配置：

```tsx
{
  id: "my-new-card",
  title: "My New Crypto Feature",
  content: "Description of the feature.",
  image: "/crypto-images/my-new-feature.png",
  titleButton: "Try it now",
}
```

3. 自动在展示页面显示！

### 自定义样式

修改 `Bento.module.sass` 中的样式变量：

```sass
.bento
  width: 368px  // 修改卡片宽度
  // 添加自定义样式...
```

## 🔗 相关文件

- 组件源码: `/src/components/bento-crypto/`
- 图片资源: `/public/crypto-images/`
- 样式文件: `/src/styles/bento/`
- 展示页面: `/src/app/[locale]/bento-showcase/page.tsx`

---

**注意**: 这些组件使用数据驱动方法，非常适合需要大量相似卡片但内容不同的场景。可以轻松扩展到更多主题！
