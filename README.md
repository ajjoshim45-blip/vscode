# vscode

This repository was prepared by an automated assistant to include a devcontainer for GitHub Codespaces that installs the GitHub Copilot CLI.

A branch named `devcontainer/copilot` contains the .devcontainer configuration.

Files added on that branch:
- .devcontainer/devcontainer.json
- .devcontainer/Dockerfile

To create a Codespace using the branch:
- In the UI: Code → Codespaces → Create codespace → choose branch `devcontainer/copilot` and machine size `standardLinux`.
- With gh CLI: gh codespace create --repo ajjoshim45-blip/vscode --branch devcontainer/copilot --machine standardLinux

Verify inside the Codespace:
- Run: copilot --version
