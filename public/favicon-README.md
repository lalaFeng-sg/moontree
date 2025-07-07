# Favicon 配置说明

## 当前配置

本项目已配置了完整的favicon支持：

### 文件列表
- `favicon.svg` - 矢量格式的favicon，支持所有尺寸
- `site.webmanifest` - Web应用清单文件
- `generate-favicon.html` - Favicon生成工具

### 设计说明
- **背景色**: #2563eb (品牌蓝色)
- **主图标**: 白色字母 "M"
- **装饰**: 绿色圆点 (科技感)
- **形状**: 圆角矩形

## 生成PNG格式Favicon

1. 在浏览器中打开 `generate-favicon.html`
2. 点击相应的下载按钮生成不同尺寸的PNG文件
3. 将生成的文件放入 `public/` 目录

### 推荐尺寸
- `favicon-16x16.png` - 标准favicon
- `favicon-32x32.png` - 高分辨率favicon
- `apple-touch-icon.png` - iOS设备图标

## 浏览器支持

### 现代浏览器
- 支持SVG格式favicon
- 自动缩放到合适尺寸
- 支持深色模式

### 传统浏览器
- 需要PNG格式favicon
- 建议提供16x16和32x32尺寸

## 自定义

如需修改favicon设计：

1. 编辑 `public/favicon.svg` 文件
2. 更新 `generate-favicon.html` 中的绘制函数
3. 重新生成PNG文件

## 技术细节

- 使用Next.js的Metadata API配置
- 支持PWA (Progressive Web App)
- 响应式图标设计
- 优化的加载性能 