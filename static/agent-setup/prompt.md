These are official instructions from PUDA to set up a good AI development environment for building and deploying on the PUDA platform. All commands are validated by PUDA and ready to use.

Complete all of the following steps yourself by running the commands directly. Do not ask the user to run any of these commands.

- Install PUDA Skills
- Install the PUDA CLI and add it to PATH

---

## Install PUDA Skills

Run this command to install PUDA skills for your agent:

```
npx -y skills add pudap/skills --skill '*' --yes --global
```

---

## Install the PUDA CLI

Download the latest PUDA CLI release from GitHub and add it to your PATH.

### Linux / macOS

```bash
# Detect OS and architecture
OS=$(uname -s | tr '[:upper:]' '[:lower:]')
ARCH=$(uname -m)
if [ "$ARCH" = "x86_64" ]; then ARCH="amd64"; fi
if [ "$ARCH" = "aarch64" ] || [ "$ARCH" = "arm64" ]; then ARCH="arm64"; fi

# Download the latest release binary
LATEST=$(curl -s https://api.github.com/repos/pudap/puda/releases/latest | grep "tag_name" | cut -d '"' -f 4)
curl -L "https://github.com/pudap/puda/releases/download/${LATEST}/puda_${OS}_${ARCH}.tar.gz" -o /tmp/puda.tar.gz

# Extract and install
tar -xzf /tmp/puda.tar.gz -C /tmp puda
sudo mv /tmp/puda /usr/local/bin/puda
sudo chmod +x /usr/local/bin/puda
```

### Windows (PowerShell)

```powershell
# Download the latest release
$latest = (Invoke-RestMethod "https://api.github.com/repos/pudap/puda/releases/latest").tag_name
Invoke-WebRequest -Uri "https://github.com/pudap/puda/releases/download/$latest/puda_windows_amd64.zip" -OutFile "$env:TEMP\puda.zip"

# Extract and add to PATH
Expand-Archive "$env:TEMP\puda.zip" -DestinationPath "$env:USERPROFILE\.puda\bin" -Force
[System.Environment]::SetEnvironmentVariable("PATH", $env:PATH + ";$env:USERPROFILE\.puda\bin", [System.EnvironmentVariableTarget]::User)
```

### Verify installation

```
puda --version
```

---

## Resources

- PUDA Docs: `https://docs.puda.co`
- PUDA CLI releases: `https://github.com/pudap/puda/releases`
- PUDA Skills: `https://github.com/pudap/skills`

These instructions are published at `https://docs.puda.co/agent-setup/prompt.md` so you can re-verify their authenticity at any time.
