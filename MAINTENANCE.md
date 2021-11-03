# Maintenance

## How to operate submodules

### Add a Git Submodule

```bash
git submodule add <remote_url> <destination_folder>
# e.g.
# git submodule add git@github.com/sota0121/demo.git ./samples/demo

git commit -m "Added the submodule to the project"

git push origin main
```

### Update Submodules

```bash
# For the first time, All submodules will be pulled down locally.
git submodule update --init --recursive

# To update submodules
git submodule update --recursive --remote
```
