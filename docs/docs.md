# CSSLibs - Thư viện CSS thay thế Tailwind + Bootstrap

## Mục tiêu:

Tạo CSS utility framework kết hợp ưu điểm của Tailwind và Bootstrap
Hỗ trợ responsive design, dark mode, theming
Kích thước nhẹ, hiệu suất cao

### Công nghệ:

Core: Sass (SCSS) với PostCSS
Build system: Gulp hoặc Vite
Optimization: PurgeCSS, cssnano
Cấu trúc chính:

```bash
csslibs/
├── src/
│   ├── core/
│   │   ├── _variables.scss   # Biến toàn cục
│   │   ├── _mixins.scss      # Mixins tái sử dụng
│   │   └── _functions.scss   # Hàm tiện ích
│   ├── utilities/
│   │   ├── _spacing.scss     # Margin, padding
│   │   ├── _flexbox.scss     # Flex utilities
│   │   ├── _grid.scss        # Grid system
│   │   └── ...               # Các utilities khác
│   ├── components/
│   │   ├── _buttons.scss     # Button styles
│   │   ├── _cards.scss       # Card components
│   │   └── ...               # Components khác
│   ├── themes/
│   │   ├── _dark.scss        # Dark theme
│   │   └── _light.scss       # Light theme
│   └── csslibs.scss          # File chính import tất cả
├── dist/
│   ├── csslibs.css           # Full version
│   ├── csslibs.min.css       # Minified version
│   └── themes/               # Các theme riêng biệt
└── docs/                     # Tài liệu sử dụng
```
