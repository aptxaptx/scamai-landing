#!/bin/bash

# MCP 配置脚本
# 此脚本将配置 Cursor 的 MCP 服务器以启用记忆和文件系统功能

echo "🚀 开始配置 Cursor MCP 服务器..."
echo ""

# 检查配置文件是否存在
if [ ! -f ~/.cursor/mcp.json ]; then
    echo "❌ 未找到 ~/.cursor/mcp.json"
    echo "请先启动 Cursor 或手动创建该文件"
    exit 1
fi

# 备份现有配置
echo "📦 备份现有配置..."
cp ~/.cursor/mcp.json ~/.cursor/mcp.json.backup
echo "✅ 备份已保存到 ~/.cursor/mcp.json.backup"
echo ""

# 复制新配置
echo "📝 更新 MCP 配置..."
sudo cp cursor-mcp-config.json ~/.cursor/mcp.json
sudo chown $USER ~/.cursor/mcp.json

echo ""
echo "✅ MCP 配置已更新！"
echo ""
echo "已添加的 MCP 服务器："
echo "  1. @magicuidesign/mcp - Magic UI 组件"
echo "  2. memory - 项目记忆功能 🧠"
echo "  3. filesystem - 增强文件系统访问 📁"
echo ""
echo "⚠️  请重启 Cursor 以激活新的 MCP 服务器"
echo ""
echo "🎉 配置完成！"
