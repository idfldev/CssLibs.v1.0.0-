…or create a new repository on the command line

```bash
echo "# CssLibs.v1.0.0-" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M master
git remote add origin https://github.com/idfldev/CssLibs.v1.0.0-.git
git push -u origin master
```

…or push an existing repository from the command line


```bash
git remote add origin https://github.com/idfldev/CssLibs.v1.0.0-.git
git branch -M master
git push -u origin master
```

### 1/. Cấu Trúc Thư Viện 

```bash
my-ui-library/
├── dist/                # Files đã build (sẽ host lên CDN)
│   ├── my-lib.min.css
│   ├── my-lib.min.js
│   └── themes/
├── src/
│   ├── scss/            # Viết bằng Sass
│   │   ├── _variables.scss
│   │   ├── _mixins.scss
│   │   ├── components/
│   │   └── main.scss
│   └── js/              # JavaScript/jQuery
│       ├── core.js
│       └── plugins/
├── package.json
└── webpack.config.js    # Hoặc Gulpfile
```
