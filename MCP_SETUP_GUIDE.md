# Cursor MCP 配置指南 🚀

## ✅ 已完成的工作

1. **已安装 MCP 服务器包**：
   - ✅ `@modelcontextprotocol/server-memory` - 项目记忆功能
   - ✅ `@modelcontextprotocol/server-filesystem` - 增强文件系统访问
   - ✅ `@modelcontextprotocol/server-github` - GitHub 集成（已弃用，未配置）

2. **已创建配置文件**：
   - ✅ `cursor-mcp-config.json` - 新的 MCP 配置
   - ✅ `setup-mcp.sh` - 自动配置脚本

---

## 🔧 配置步骤

### 方法 1: 使用自动脚本（推荐）⭐

在终端中运行：

```bash
cd /Users/dennisng/scamai-landing
./setup-mcp.sh
```

脚本会：
1. 自动备份现有配置到 `~/.cursor/mcp.json.backup`
2. 更新 MCP 配置
3. 提示你重启 Cursor

### 方法 2: 手动配置

1. **打开 Cursor 的 MCP 配置文件**：
   ```bash
   open ~/.cursor/mcp.json
   ```

2. **复制配置内容**：
   打开项目中的 `cursor-mcp-config.json` 文件，复制其内容

3. **替换配置**：
   将复制的内容粘贴到 `~/.cursor/mcp.json`

4. **保存并重启 Cursor**

---

## 🎯 新增的 MCP 服务器

### 1. Memory Server 🧠
**提供项目记忆功能**

- ✅ 跨会话保持项目上下文
- ✅ 记住项目偏好和决策
- ✅ 自动保存重要信息
- ✅ 长期记忆存储

**使用示例**：
```
你: "记住这个项目使用 Next.js 14 和 Tailwind CSS v4"
AI: ✅ 已记住

下次对话：
AI: (自动应用 Next.js 14 和 Tailwind CSS v4 的最佳实践)
```

### 2. Filesystem Server 📁
**增强文件系统访问**

- ✅ 更好的文件操作
- ✅ 目录浏览
- ✅ 批量文件处理
- ✅ 高级搜索

**配置路径**：
```json
"filesystem": {
  "command": "npx",
  "args": [
    "-y",
    "@modelcontextprotocol/server-filesystem",
    "/Users/dennisng/scamai-landing"
  ]
}
```

### 3. Magic UI MCP (保留)
**UI 组件库集成**

- ✅ 访问 Magic UI 组件
- ✅ 动画效果
- ✅ 特殊效果

---

## 📋 完整配置文件

```json
{
  "mcpServers": {
    "@magicuidesign/mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@magicuidesign/mcp@latest"
      ]
    },
    "memory": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-memory"
      ]
    },
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/Users/dennisng/scamai-landing"
      ]
    }
  }
}
```

---

## 🧪 验证配置

配置完成并重启 Cursor 后，你可以测试：

### 测试 Memory Server：
```
你: "记住我喜欢使用苹果风格的间距"
AI: ✅ 已记住偏好

稍后：
你: "添加一个新的 section"
AI: (自动应用苹果风格的间距)
```

### 测试 Filesystem Server：
```
你: "列出所有 .tsx 文件"
AI: (使用增强的文件系统工具快速列出)
```

---

## 🔍 故障排除

### MCP 服务器未启动？

1. **检查 Cursor 输出**：
   - 打开 Cursor
   - 查看 Developer Tools (Help > Toggle Developer Tools)
   - 查找 MCP 相关的错误

2. **检查包安装**：
   ```bash
   npm list -g | grep modelcontextprotocol
   ```

3. **手动测试 MCP 命令**：
   ```bash
   npx -y @modelcontextprotocol/server-memory
   ```

### 权限问题？

如果遇到权限错误：

```bash
# 修改文件所有权
sudo chown $USER ~/.cursor/mcp.json

# 或者使用 sudo 运行脚本
sudo ./setup-mcp.sh
```

---

## 🎨 配置文件位置

- **全局配置**：`~/.cursor/mcp.json`
- **项目配置**（本项目）：`./cursor-mcp-config.json`
- **备份文件**：`~/.cursor/mcp.json.backup`（脚本创建）

---

## 📚 相关资源

- [MCP 官方文档](https://modelcontextprotocol.io)
- [Cursor MCP 指南](https://docs.cursor.com/mcp)
- [Memory Server 文档](https://github.com/modelcontextprotocol/servers/tree/main/src/memory)
- [Filesystem Server 文档](https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem)

---

## ⚠️ 重要提示

1. **必须重启 Cursor** 才能激活新的 MCP 服务器
2. **首次使用可能较慢** - MCP 服务器需要下载和启动
3. **Memory Server 数据** 存储在本地，不会上传到云端
4. **Filesystem Server 仅访问** 指定的项目目录

---

## 🎉 完成！

配置完成后，你将获得：

✅ **更好的记忆** - AI 记住你的偏好和项目细节  
✅ **更快的操作** - 增强的文件系统访问  
✅ **更流畅的体验** - 跨会话保持上下文  
✅ **更智能的建议** - 基于项目历史的建议  

享受更智能的 Cursor 体验！🚀
