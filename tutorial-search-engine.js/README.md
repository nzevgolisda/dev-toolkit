# Dev Notes: GitHub Pages tutorial library

This repository hosts a static tutorial library with searchable categories for programming, Linux, WSL, DevOps, and developer tools.

Files

- `index.html` — responsive homepage with search and category filtering.
- `content.json` — the single source of truth. Add items here to show them on the site.
- `styles.css` — responsive visual system for the homepage and tutorial pages.
- (Optional) `posts/` — add HTML or other assets and reference them via `url` in `content.json`.

Design goals

- Minimal: edit one JSON file to add a tutorial
- Simple publishing workflow: add or edit `content.json` (and add static files if needed), commit, push
- Easy to extend: add items in one place (JSON) and push to GitHub

How to add content

1. Open `content.json`.
2. Pick a category under `categories`.
3. Add an object to `items` with the shape:

```json
{ "title": "Short title", "url": "posts/my-post.html", "excerpt": "One-line summary." }
```

4. If `url` points to an HTML or other static file, add that file in the repo (for example, `posts/my-post.html`).
5. Commit and push; GitHub Pages will serve the updated site.

Preview locally

1. Run a local server from the repo root:

```bash
python -m http.server 8000
# open http://localhost:8000
```

Notes & next steps

- If you prefer writing posts in Markdown, consider converting to Jekyll (then posts live in `_posts/` and you get templates).
- This approach keeps the site static and simple; everything is visible and editable directly in the repo.

If you'd like, I can:

- convert this structure to use Markdown posts and Jekyll
- add a tiny admin page that appends new items to `content.json` (commits still require git)

---

Created for easy, minimal publishing on GitHub Pages.

```
# Update package lists
sudo apt update

# Upgrade installed packages
sudo apt upgrade

# Install a package
sudo apt install [package_name]

# Remove a package (keeping configs)
sudo apt remove [package_name]

# Remove a package (including configs)
sudo apt purge [package_name]

# Search for packages
apt search [keyword]

# View package information
apt show [package_name]

# List installed packages
apt list --installed

# Autoremove unnecessary packages
sudo apt autoremove
```

### 2. **DPKG (Debian Package Manager)**

 **Primary Use** : Low-level package management for .deb files

```
# Install a .deb package
sudo dpkg -i [package_file.deb]

# Remove a package (keeping configs)
sudo dpkg -r [package_name]

# Remove a package (including configs)
sudo dpkg -P [package_name]

# List installed packages
dpkg -l

# List files installed by a package
dpkg -L [package_name]

# Check if a package is installed
dpkg -s [package_name]

# Fix broken dependencies
sudo apt --fix-broken install
```

### 3. **Git (Version Control System)**

 **Primary Use** : Source code management and collaboration

```
# Clone a repository
git clone [repository_url]

# Initialize a new repository
git init

# Check repository status
git status

# Add files to staging area
git add [file_name]
git add .  # Add all files

# Commit changes
git commit -m "Commit message"

# Push changes to remote repository
git push origin [branch_name]

# Pull latest changes
git pull origin [branch_name]

# Create a new branch
git branch [branch_name]

# Switch branches
git checkout [branch_name]

# View commit history
git log
```

### 4. **Python PIP (Package Installer for Python)**

```
# Install a Python package
pip install [package_name]

# Install specific version
pip install [package_name]==[version]

# Upgrade a package
pip install --upgrade [package_name]

# Uninstall a package
pip uninstall [package_name]

# List installed packages
pip list

# Generate requirements file
pip freeze > requirements.txt

# Install from requirements file
pip install -r requirements.txt

# Show package information
pip show [package_name]

# Search for packages
pip search [keyword]
```

## 🎯 Practical Applications

1. **Tool Installation** : Quickly install security tools and dependencies
2. **Environment Setup** : Create reproducible development environments
3. **Dependency Management** : Handle software dependencies efficiently
4. **Version Control** : Manage code changes and collaborate effectively

### **Common Workflows**

1. **Setting Up a New Tool** :

```
   sudo apt update
   sudo apt install [tool_name]
   # or
   git clone [tool_repository]
   cd [tool_directory]
   pip install -r requirements.txt
```

1. **Managing Python Projects** :

```
   # Create virtual environment
   python -m venv venv
   source venv/bin/activate

   # Install dependencies
   pip install -r requirements.txt

   # Freeze current state
   pip freeze > requirements.txt
```

1. **Handling .deb Packages** :

```
   # Download and install
   wget [package_url.deb]
   sudo dpkg -i [package.deb]
   sudo apt --fix-broken install  # Fix dependencies if needed
```

## ⚠️ Best Practices & Tips

1. **Always update** package lists before installation: `sudo apt update`
2. **Use virtual environments** for Python projects to avoid conflicts
3. **Read package information** before installation: `apt show` or `pip show`
4. **Keep a requirements.txt** for Python projects for reproducibility
5. **Use version control** for all code projects, even personal ones
6. **Be cautious with sudo** - only use when necessary
7. **Regularly clean up** unused packages: `sudo apt autoremove`

## 🔧 Troubleshooting

### **Common Issues & Solutions**

* **Dependency errors** : Use `sudo apt --fix-broken install`
* **Permission denied** : Ensure you have sudo privileges or correct file permissions
* **Command not found** : Check if package is installed or PATH is set correctly
* **Version conflicts** : Use virtual environments or containerization

### **Useful Diagnostic Commands**

**bash**

```
# Check disk space
df -h

# Check memory usage
free -h

# View running processes
top
htop

# Check network connectivity
ping [host]
```
