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
