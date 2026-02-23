# The Complete OpenClaw Deployment Guide

**By ZeroSignal**

---

> Deploy your AI. Own your stack. This guide covers everything you need to run OpenClaw on any platform — from macOS to Windows, Docker containers to Kali Linux penetration testing rigs.

---

## Introduction

### What Is OpenClaw?

OpenClaw is a self-hosted AI gateway that puts a persistent, intelligent assistant under your full control. Unlike cloud AI services that read your data, forget context, and lock you into subscriptions, OpenClaw runs on your hardware, your network, and your terms.

At its core, OpenClaw is a Node.js runtime that:

- Routes conversations to AI models (OpenAI, Claude, Kimi, and more via OpenRouter)
- Maintains persistent memory across sessions
- Connects to messaging platforms (Telegram, Signal, WhatsApp, Discord, Slack)
- Executes shell commands, reads files, searches the web, and controls browsers
- Runs autonomous background tasks via a built-in cron scheduler
- Spawns and coordinates specialized sub-agents for complex work

Think of it as your own private AI operations center — one that never sleeps, never forgets (unless you tell it to), and never shares your data.

### What You Can Automate

The use cases are broad. OpenClaw users run it for:

- **DevOps automation** — monitoring services, parsing logs, triggering deployments
- **Security research** — recon automation, report generation, tool orchestration
- **Content pipelines** — fetching news, writing scripts, triggering video generation
- **Personal productivity** — email triage, calendar management, research summaries
- **Software development** — code review, documentation, CI/CD assistance

### Who This Guide Is For

This guide is for anyone who wants to deploy OpenClaw reliably and correctly. Whether you're a:

- Developer who wants an AI assistant that lives in your terminal
- Security researcher using Kali Linux who wants to automate repetitive recon
- DevOps engineer who wants a containerized AI agent in your stack
- Beginner who just wants step-by-step instructions that actually work

...this guide has you covered.

**Prerequisites across all platforms:** Basic comfort with a terminal/command line. You don't need to be an expert — every command is shown explicitly.

---

## Chapter 1: Installing OpenClaw on macOS

### Prerequisites

Before installing OpenClaw, you need Node.js 18 or higher. The easiest way to manage Node.js on macOS is via Homebrew.

**Install Homebrew (if not already installed):**

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

After installation, follow any instructions to add Homebrew to your PATH (usually adding a line to `~/.zprofile`).

**Install Node.js via Homebrew:**

```bash
brew install node
```

Verify installation:

```bash
node --version   # Should show v18.x.x or higher
npm --version    # Should show 9.x.x or higher
```

### Installing OpenClaw

Install OpenClaw globally via npm:

```bash
npm install -g openclaw
```

This installs the `openclaw` CLI command system-wide.

Verify:

```bash
openclaw --version
```

### First Launch and Configuration

Create a workspace directory (OpenClaw stores all config and memory here):

```bash
mkdir -p ~/openclaw-workspace
cd ~/openclaw-workspace
```

Start the interactive setup:

```bash
openclaw setup
```

The setup wizard will ask for:
1. **API keys** — at minimum, an OpenRouter or OpenAI API key
2. **Default model** — recommend starting with a cost-effective model like `openrouter/moonshotai/kimi-k2.5`
3. **Workspace path** — where OpenClaw stores memory, skills, and config files

After setup, start the gateway:

```bash
openclaw gateway start
```

Open the web UI:

```bash
openclaw web
```

This opens a browser to `http://localhost:3000` where you can chat with your agent.

### Connecting Messaging Channels

**Telegram (recommended for mobile access):**

1. Open Telegram and message `@BotFather`
2. Send `/newbot`, follow prompts, copy your bot token
3. In OpenClaw config:

```bash
openclaw config set telegram.botToken YOUR_TOKEN_HERE
openclaw gateway restart
```

4. Message your bot — OpenClaw responds through Telegram.

**Signal:**

Signal integration requires the `signal-cli` bridge. Install it:

```bash
brew install signal-cli
signal-cli -u +1YOURNUMBER register
signal-cli -u +1YOURNUMBER verify VERIFICATIONCODE
```

Then configure OpenClaw:

```bash
openclaw config set signal.phoneNumber +1YOURNUMBER
```

**WhatsApp:**

WhatsApp integration uses a QR code pairing flow. Start the gateway and run:

```bash
openclaw channels whatsapp pair
```

Scan the displayed QR code with your WhatsApp mobile app (Linked Devices > Link a Device).

### Running as a macOS Background Service (launchd)

To have OpenClaw start automatically on login:

Create a plist file:

```bash
nano ~/Library/LaunchAgents/ai.openclaw.gateway.plist
```

Contents:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN"
  "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key>
  <string>ai.openclaw.gateway</string>
  <key>ProgramArguments</key>
  <array>
    <string>/usr/local/bin/node</string>
    <string>/usr/local/lib/node_modules/openclaw/bin/openclaw.js</string>
    <string>gateway</string>
    <string>start</string>
    <string>--foreground</string>
  </array>
  <key>RunAtLoad</key>
  <true/>
  <key>KeepAlive</key>
  <true/>
  <key>StandardOutPath</key>
  <string>/tmp/openclaw.log</string>
  <key>StandardErrorPath</key>
  <string>/tmp/openclaw.error.log</string>
</dict>
</plist>
```

Load the service:

```bash
launchctl load ~/Library/LaunchAgents/ai.openclaw.gateway.plist
launchctl start ai.openclaw.gateway
```

Check it's running:

```bash
launchctl list | grep openclaw
tail -f /tmp/openclaw.log
```

### Common macOS Issues

**Port 3000 already in use:**
```bash
lsof -i :3000
kill -9 PID_NUMBER
openclaw gateway start
```

**Permission denied on npm install -g:**
```bash
sudo npm install -g openclaw
# Or fix npm permissions permanently:
mkdir -p ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.zprofile
source ~/.zprofile
npm install -g openclaw
```

**Node version too old:**
```bash
brew upgrade node
# Or use nvm for version management:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
nvm install 20
nvm use 20
```

---

## Chapter 2: Installing OpenClaw on Windows

### Prerequisites

Windows has two installation paths: the native approach and the WSL2 approach. **WSL2 is strongly recommended** for serious use — it gives you a full Linux environment, better performance, and access to the full OpenClaw feature set including shell integrations.

### Path A: WSL2 (Recommended)

**Step 1: Enable WSL2**

Open PowerShell as Administrator and run:

```powershell
wsl --install
```

This installs WSL2 with Ubuntu by default. Restart your computer when prompted.

**Step 2: Set up Ubuntu in WSL2**

Open "Ubuntu" from the Start menu. On first launch, create a username and password.

Update packages:

```bash
sudo apt update && sudo apt upgrade -y
```

**Step 3: Install Node.js in WSL2**

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
node --version
npm --version
```

**Step 4: Install OpenClaw**

```bash
npm install -g openclaw
openclaw setup
openclaw gateway start
```

Access the web UI from Windows by opening a browser to `http://localhost:3000` — WSL2 automatically bridges ports to Windows.

### Path B: Native Windows (PowerShell)

**Step 1: Install Node.js**

Download from https://nodejs.org (LTS version). Run the installer. Check "Add to PATH" during install.

Open a new PowerShell window and verify:

```powershell
node --version
npm --version
```

**Step 2: Install OpenClaw**

```powershell
npm install -g openclaw
```

If you get execution policy errors:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

**Step 3: Run Setup**

```powershell
openclaw setup
openclaw gateway start
```

### Running OpenClaw as a Windows Service (NSSM)

NSSM (Non-Sucking Service Manager) lets you run OpenClaw as a proper Windows Service that starts automatically.

**Download NSSM:**
From https://nssm.cc/download — extract `nssm.exe` to `C:\nssm\`

**Open an elevated PowerShell (Run as Administrator):**

```powershell
C:\nssm\nssm.exe install OpenClaw
```

In the GUI that appears:
- **Path:** `C:\Program Files\nodejs\node.exe`
- **Startup directory:** your openclaw workspace folder
- **Arguments:** `C:\Users\YourName\AppData\Roaming\npm\node_modules\openclaw\bin\openclaw.js gateway start --foreground`

Click Install Service, then:

```powershell
Start-Service OpenClaw
Get-Service OpenClaw
```

### Windows Firewall Considerations

If you want to access OpenClaw from other devices on your network:

```powershell
New-NetFirewallRule -DisplayName "OpenClaw Web UI" -Direction Inbound -Protocol TCP -LocalPort 3000 -Action Allow
```

For tighter security, restrict to your local subnet:

```powershell
New-NetFirewallRule -DisplayName "OpenClaw Web UI Local" -Direction Inbound -Protocol TCP -LocalPort 3000 -RemoteAddress 192.168.1.0/24 -Action Allow
```

### Troubleshooting Windows

**`openclaw` command not found after install:**
Close and reopen PowerShell. If still not found, check npm global bin path:
```powershell
npm config get prefix
# Add that path + \bin to your system PATH
```

**WSL2 networking issues (can't reach localhost from Windows):**
In WSL2, run:
```bash
ip addr show eth0 | grep inet
```
Use the IP shown instead of `localhost` in your Windows browser.

**Long startup times:**
Disable Windows Defender real-time scanning on the OpenClaw workspace folder (Settings > Windows Security > Virus & threat protection > Manage settings > Exclusions).

---

## Chapter 3: Installing OpenClaw with Docker

### Prerequisites

- **Docker Desktop** (Windows/macOS): https://www.docker.com/products/docker-desktop
- **Docker Engine** (Linux): `curl -fsSL https://get.docker.com | sh`
- **Docker Compose** (usually bundled with Desktop)

Verify:

```bash
docker --version
docker compose version
```

### Quick Start (Single Container)

```bash
docker run -d \
  --name openclaw \
  --restart unless-stopped \
  -p 3000:3000 \
  -v openclaw-workspace:/workspace \
  -e OPENROUTER_API_KEY=your_key_here \
  openclaw/openclaw:latest
```

Access at http://localhost:3000.

### Full docker-compose.yml (Recommended)

Create a directory for your stack:

```bash
mkdir openclaw-stack && cd openclaw-stack
```

Create `docker-compose.yml`:

```yaml
version: '3.8'

services:
  openclaw:
    image: openclaw/openclaw:latest
    container_name: openclaw
    restart: unless-stopped
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - OPENROUTER_API_KEY=${OPENROUTER_API_KEY}
      - OPENAI_API_KEY=${OPENAI_API_KEY:-}
      - TELEGRAM_BOT_TOKEN=${TELEGRAM_BOT_TOKEN:-}
      - WORKSPACE_PATH=/workspace
      - GATEWAY_PORT=3000
    volumes:
      - openclaw-workspace:/workspace
      - ./config:/config:ro
    depends_on:
      - redis
    networks:
      - openclaw-net
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/health"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s

  redis:
    image: redis:7-alpine
    container_name: openclaw-redis
    restart: unless-stopped
    volumes:
      - redis-data:/data
    networks:
      - openclaw-net
    command: redis-server --appendonly yes

  nginx:
    image: nginx:alpine
    container_name: openclaw-nginx
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx/conf.d:/etc/nginx/conf.d:ro
      - ./nginx/ssl:/etc/nginx/ssl:ro
      - certbot-data:/var/www/certbot:ro
    depends_on:
      - openclaw
    networks:
      - openclaw-net

volumes:
  openclaw-workspace:
  redis-data:
  certbot-data:

networks:
  openclaw-net:
    driver: bridge
```

Create `.env` file (never commit this):

```bash
OPENROUTER_API_KEY=sk-or-your-key-here
OPENAI_API_KEY=sk-your-openai-key-here
TELEGRAM_BOT_TOKEN=your-telegram-token-here
```

Create `.env.example` (safe to commit):

```bash
OPENROUTER_API_KEY=
OPENAI_API_KEY=
TELEGRAM_BOT_TOKEN=
```

**Start the stack:**

```bash
docker compose up -d
```

**Check status:**

```bash
docker compose ps
docker compose logs openclaw -f
```

### Volume Mounts for Persistence

OpenClaw stores everything important in `/workspace`:
- `/workspace/SOUL.md` — agent personality
- `/workspace/MEMORY.md` — long-term memory
- `/workspace/memory/` — daily logs
- `/workspace/skills/` — installed skills

To back up your workspace:

```bash
docker run --rm \
  -v openclaw-workspace:/workspace \
  -v $(pwd):/backup \
  alpine tar czf /backup/openclaw-backup-$(date +%Y%m%d).tar.gz /workspace
```

To restore:

```bash
docker run --rm \
  -v openclaw-workspace:/workspace \
  -v $(pwd):/backup \
  alpine tar xzf /backup/openclaw-backup-20240101.tar.gz -C /
```

### Updating the Container

```bash
docker compose pull
docker compose up -d
```

OpenClaw is stateless per container (all data in volumes), so updates are safe.

### Health Checks and Monitoring

Add to your monitoring stack:

```bash
# Simple health check
curl -f http://localhost:3000/health && echo "OK" || echo "DOWN"

# Check container stats
docker stats openclaw --no-stream

# Tail logs
docker compose logs openclaw --tail=100 -f
```

For production, integrate with Uptime Kuma, Grafana, or a simple cron:

```bash
# /etc/cron.d/openclaw-healthcheck
*/5 * * * * root curl -sf http://localhost:3000/health || systemctl restart openclaw
```

---

## Chapter 4: Kali Linux — The Hacking Edition

### Why Kali + OpenClaw Is Powerful

Kali Linux is built for offensive security. OpenClaw is built for AI-driven automation. Combined, you get an AI agent that can:

- Orchestrate multi-stage recon workflows with natural language
- Parse and summarize nmap, nikto, gobuster, and sqlmap output
- Generate reports from raw scan data
- Chain tools together (nmap → organize results → run targeted nikto scans → summarize findings)
- Run 24/7 on a VPS, collecting intel while you sleep
- Interface with Metasploit via shell for semi-automated exploitation assistance

This is not a replacement for skill — it's a force multiplier.

### Installing OpenClaw on Kali

Kali ships with Python and some Node.js but often at older versions. Let's do this right.

**Step 1: Update Kali and install Node.js 20**

```bash
sudo apt update && sudo apt upgrade -y
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
node --version  # Should be v20.x.x
```

**Step 2: Install OpenClaw**

```bash
sudo npm install -g openclaw
```

On Kali, sudo is often needed for global npm installs. Alternatively, use nvm to avoid permission issues:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm install 20
npm install -g openclaw
```

**Step 3: Initial configuration**

```bash
mkdir -p ~/openclaw-workspace
openclaw setup
```

When setting up, consider using a model with strong reasoning for security research:
- `openrouter/anthropic/claude-sonnet-4-5` — excellent for analysis and report writing
- `openrouter/moonshotai/kimi-k2.5` — fast and capable for scripting tasks

**Step 4: Start the gateway**

```bash
openclaw gateway start
```

For VPS/headless use:

```bash
nohup openclaw gateway start > /var/log/openclaw.log 2>&1 &
echo $! > /var/run/openclaw.pid
```

### Configuring for Recon Automation

OpenClaw can execute shell commands. Configure it to understand your security toolkit by customizing `SOUL.md`:

```bash
nano ~/openclaw-workspace/SOUL.md
```

Add a section like:

```markdown
## Security Research Context

Available tools on this system:
- nmap (network scanning)
- nikto (web vulnerability scanning)
- gobuster (directory/subdomain enumeration)
- sqlmap (SQL injection testing)
- hydra (credential attacks)
- metasploit (exploitation framework, via msfconsole)
- burpsuite (web proxy, if GUI available)

When given a target (with explicit authorization), follow this workflow:
1. Passive recon (OSINT, DNS, whois)
2. Active recon (nmap port scan)
3. Service enumeration
4. Vulnerability assessment
5. Generate structured report

IMPORTANT: Always confirm authorization before scanning any target.
```

### Shell Integration with Security Tools

OpenClaw's `exec` tool lets it run any shell command. Here are example prompts and what OpenClaw does behind the scenes:

**Automated nmap scan + summary:**
```
You: "Run a full port scan on 192.168.1.0/24 and summarize what's running"
OpenClaw: Runs nmap -sV -sC 192.168.1.0/24, parses output, returns structured summary
```

**Gobuster enumeration:**
```
You: "Enumerate directories on http://target.local using the common wordlist"
OpenClaw: Runs gobuster dir -u http://target.local -w /usr/share/wordlists/dirb/common.txt
```

**sqlmap automation:**
```
You: "Test this URL for SQL injection: http://target.local/page.php?id=1"
OpenClaw: Runs sqlmap -u "http://target.local/page.php?id=1" --batch --level=2
```

**Metasploit via shell:**

OpenClaw can interface with msfconsole via resource scripts:

```bash
# OpenClaw writes this file, then executes it
cat > /tmp/recon.rc << EOF
use auxiliary/scanner/portscan/tcp
set RHOSTS 192.168.1.0/24
set PORTS 22,80,443,8080,8443
run
exit
EOF

msfconsole -r /tmp/recon.rc -q
```

### Running Headless on a VPS

For persistent 24/7 operation, deploy to a VPS (DigitalOcean, Linode, Vultr — a $6/mo droplet works fine).

**On your VPS (Ubuntu/Debian):**

```bash
# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Install OpenClaw
sudo npm install -g openclaw

# Create workspace
mkdir -p /opt/openclaw-workspace

# Setup
openclaw setup

# Create systemd service
sudo nano /etc/systemd/system/openclaw.service
```

`/etc/systemd/system/openclaw.service`:

```ini
[Unit]
Description=OpenClaw AI Gateway
After=network.target

[Service]
Type=simple
User=openclaw
WorkingDirectory=/opt/openclaw-workspace
ExecStart=/usr/bin/openclaw gateway start --foreground
Restart=always
RestartSec=10
StandardOutput=journal
StandardError=journal
SyslogIdentifier=openclaw

[Install]
WantedBy=multi-user.target
```

```bash
# Create dedicated user
sudo useradd -m -s /bin/bash openclaw
sudo chown -R openclaw:openclaw /opt/openclaw-workspace

# Enable and start
sudo systemctl daemon-reload
sudo systemctl enable openclaw
sudo systemctl start openclaw
sudo systemctl status openclaw
```

### Nginx Reverse Proxy Configuration

Don't expose OpenClaw directly on port 3000. Use Nginx with SSL.

**Install Nginx and Certbot:**

```bash
sudo apt install -y nginx certbot python3-certbot-nginx
```

**Nginx config (`/etc/nginx/sites-available/openclaw`):**

```nginx
server {
    listen 80;
    server_name your-domain.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name your-domain.com;

    ssl_certificate /etc/letsencrypt/live/your-domain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/your-domain.com/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;

    # Security headers
    add_header X-Frame-Options DENY;
    add_header X-Content-Type-Options nosniff;
    add_header X-XSS-Protection "1; mode=block";
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains";

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        proxy_read_timeout 86400;
    }
}
```

```bash
sudo ln -s /etc/nginx/sites-available/openclaw /etc/nginx/sites-enabled/
sudo certbot --nginx -d your-domain.com
sudo nginx -t && sudo systemctl restart nginx
```

### SSH Hardening

Lock down your VPS SSH:

```bash
sudo nano /etc/ssh/sshd_config
```

Set these values:

```
PermitRootLogin no
PasswordAuthentication no
PubkeyAuthentication yes
AllowUsers your-username
MaxAuthTries 3
ClientAliveInterval 300
ClientAliveCountMax 2
Protocol 2
```

```bash
sudo systemctl restart sshd
```

**Generate SSH keys (on your local machine):**

```bash
ssh-keygen -t ed25519 -C "openclaw-vps"
ssh-copy-id -i ~/.ssh/id_ed25519.pub your-username@your-vps-ip
```

### Firewall Rules (UFW)

```bash
sudo apt install -y ufw

# Default: deny all incoming
sudo ufw default deny incoming
sudo ufw default allow outgoing

# Allow SSH (change port if you've hardened it)
sudo ufw allow 22/tcp

# Allow HTTPS (for Nginx)
sudo ufw allow 443/tcp
sudo ufw allow 80/tcp

# Deny direct access to OpenClaw port (goes through Nginx only)
sudo ufw deny 3000/tcp

sudo ufw enable
sudo ufw status verbose
```

---

## Chapter 5: Configuration Deep Dive

### SOUL.md — The Agent's Personality

`SOUL.md` is the most important config file. It defines how your agent thinks, speaks, and makes decisions. It lives in your workspace root.

Key sections to customize:

- **Core identity** — name, role, personality, tone
- **Operating mode** — how it handles uncertainty, ambiguity, or risky tasks
- **Domain focus** — what domains it specializes in (security, DevOps, coding, etc.)
- **Autonomy boundaries** — what it can do without asking vs. what requires approval
- **Voice** — how it communicates

Example snippet:

```markdown
## Voice
Be direct and concise. No filler phrases. When in doubt, show the command.
When security is involved: explicit risk + explicit mitigation. No vibes-based security.
```

### MODEL_POLICY.md — Model Routing

Define which models handle which tasks:

```markdown
## Model Assignment

- Kimi K2.5 (Worker): All coding, API integration, file operations
- Codex (Supervisor): Architecture review, code quality guardrails
- Sonnet (Escalation): Complex reasoning, blocked situations only
```

This file lets you encode cost/capability tradeoffs into the agent's behavior permanently.

### MEMORY.md — Long-Term Memory

OpenClaw maintains two memory layers:

**Daily logs** (`memory/YYYY-MM-DD.md`): Raw session notes — what happened, what was built, what was decided.

**Long-term memory** (`MEMORY.md`): Curated, distilled facts the agent should always know.

Example MEMORY.md entries:

```markdown
## Promoted Facts
- HeyGen avatar ID: avtr_abc123
- Video pipeline script input dir: /Users/you/scripts/
- Preferred Stripe test card: 4242 4242 4242 4242
- Model policy: Kimi builds, Codex guards, Sonnet escalates
```

The agent reads this on every session start (in main session only — not shared/group contexts for security reasons).

### Heartbeat System

Heartbeats are periodic wake-up calls to your agent. Configure in `HEARTBEAT.md`:

```markdown
# HEARTBEAT.md

1. Check email for urgent items
2. Check calendar for events in next 2 hours
3. Check if any background jobs failed
4. Update memory/YYYY-MM-DD.md if significant work happened
5. Stay silent (HEARTBEAT_OK) unless action needed
```

The gateway polls your heartbeat prompt on a configurable interval (default: 30 minutes).

### Cron Jobs

Schedule autonomous tasks:

```bash
# Via the agent chat:
"Schedule a daily report of my GitHub PRs every morning at 9am"

# The agent creates a cron job via the gateway cron API
# Runs isolated, delivers results to your configured channel
```

Cron jobs can:
- Run isolated sub-agent sessions with a specific model
- Deliver results to Telegram/Signal/Discord
- Trigger webhooks on completion

### Multi-Channel Setup

Connect multiple messaging platforms simultaneously. Your agent maintains context across all channels.

Example config for a dual Telegram + Discord setup:

```bash
openclaw config set telegram.botToken BOT_TOKEN_1
openclaw config set discord.token DISCORD_BOT_TOKEN
openclaw config set discord.guildId YOUR_SERVER_ID
openclaw gateway restart
```

### API Key Management Best Practices

- Store all keys in environment variables, never hardcoded in `SOUL.md` or scripts
- Use `.env` files with appropriate `.gitignore` entries
- Rotate keys on a schedule (quarterly minimum)
- Use test-mode keys during development
- Audit key permissions — request only the scopes you need
- If a key leaks: rotate immediately, check logs for unauthorized use

---

## Chapter 6: Advanced Usage

### Sub-Agent Delegation

OpenClaw can spawn specialized sub-agents for complex tasks. Each sub-agent runs in an isolated session with its own model and context.

Example delegation pattern:

```
Main agent (Codex) receives task
→ Spawns Worker (Kimi) for coding work
→ Spawns Worker 2 (Kimi) for testing
→ Collects results
→ Merges with verification
→ Reports back to Handler
```

Sub-agents auto-announce on completion. You don't need to poll.

### Skill Installation

Skills are packaged capabilities — runbooks, scripts, and config for specific domains.

Install from ClaWHub:

```bash
openclaw skill install weather
openclaw skill install healthcheck
openclaw skill install openai-image-gen
```

Create a custom skill:

```bash
mkdir -p ~/openclaw-workspace/skills/my-skill
cat > ~/openclaw-workspace/skills/my-skill/SKILL.md << EOF
# My Custom Skill

## When to use
Use when the user asks about X.

## Steps
1. Do this
2. Then this
3. Report result
EOF
```

### External API Integrations

**Stripe:**
```bash
# In .env or via openclaw config
STRIPE_SECRET_KEY=sk_test_...
```
The agent can create products, prices, checkout sessions, and read payment data.

**HeyGen (Video Generation):**
```bash
HEYGEN_API_KEY=your-heygen-key
HEYGEN_AVATAR_ID=your-digital-twin-id
HEYGEN_VOICE_ID=your-voice-clone-id
```
Full video generation pipeline: script → HeyGen API → rendered video with your avatar and voice.

**Google Drive:**
Use service account credentials to read/write documents:
```bash
GOOGLE_SERVICE_ACCOUNT_PATH=/path/to/credentials.json
GOOGLE_DRIVE_FOLDER_ID=your-folder-id
```

### Scheduling Automated Tasks

Batch similar periodic tasks into `HEARTBEAT.md` to minimize API calls:

```markdown
# HEARTBEAT.md
Check every heartbeat:
1. New emails (urgent only)
2. Calendar (events in next 2 hours)
3. Background job failures
```

Use cron for exact-time tasks:

```
"Remind me every Monday at 9am to review the pipeline"
"Run a security scan report every Friday at 6pm and send it to Telegram"
"Check my GitHub issues daily at 8am and summarize any new critical ones"
```

### Logging and Monitoring

OpenClaw writes structured logs to the gateway. View them:

```bash
openclaw gateway logs
openclaw gateway logs --tail 100
```

For Docker deployments:

```bash
docker compose logs openclaw -f --tail=100
```

Forward logs to a monitoring system:

```bash
# With promtail/Loki
openclaw gateway logs | promtail --config.file=promtail.yaml

# With a simple log aggregator
openclaw gateway logs >> /var/log/openclaw/app.log
```

Key events to alert on:
- Gateway crashes (systemd/launchd will restart, but alert on repeated failures)
- API key authentication failures (possible leak or misconfiguration)
- Sub-agent timeouts (tasks that never complete)
- Memory file corruption (detect via parse errors in logs)

---

## Appendix

### Quick Command Reference

| Command | Description |
|---|---|
| `openclaw gateway start` | Start the AI gateway |
| `openclaw gateway stop` | Stop the gateway |
| `openclaw gateway restart` | Restart the gateway |
| `openclaw gateway status` | Check if running |
| `openclaw gateway logs` | View logs |
| `openclaw setup` | Run interactive setup |
| `openclaw config get` | Show current config |
| `openclaw config set KEY VALUE` | Update a config value |
| `openclaw skill install NAME` | Install a skill |
| `openclaw web` | Open web UI in browser |
| `openclaw --version` | Show version |

### Recommended Versions

| Component | Minimum | Recommended |
|---|---|---|
| Node.js | 18.x | 20.x LTS |
| npm | 9.x | 10.x |
| Docker | 24.x | Latest stable |
| Docker Compose | 2.x | Latest stable |
| Ubuntu/Kali | 22.04 LTS | 24.04 LTS |
| macOS | Ventura (13) | Sonoma (14) |

### Troubleshooting Checklist

1. **Gateway won't start:** Check Node.js version (`node --version`), check port conflicts (`lsof -i :3000`), check logs (`openclaw gateway logs`)
2. **API calls failing:** Verify API key is set, check key has required permissions, verify network connectivity
3. **Memory not persisting:** Confirm workspace path is set correctly and writable
4. **Telegram not responding:** Verify bot token, ensure gateway is running, check `@BotFather` for bot status
5. **Docker container restarting:** Check logs (`docker logs openclaw`), verify env vars are set, check volume mounts
6. **Sub-agents not completing:** Check model API key limits, verify agent IDs are allowed in config
7. **High memory usage:** Check for runaway sub-agents, reduce context window if needed, restart gateway

### Community and Support

- **Documentation:** https://docs.openclaw.ai
- **GitHub:** https://github.com/openclaw/openclaw
- **Community Discord:** https://discord.com/invite/clawd
- **Skill marketplace:** https://clawhub.com
- **Issues:** https://github.com/openclaw/openclaw/issues

---

*Built by ZeroSignal. Deployed by you.*

*Version 1.0 — The Complete OpenClaw Deployment Guide*
