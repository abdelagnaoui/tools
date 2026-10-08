<img width="1912" height="958" alt="image" src="https://github.com/user-attachments/assets/16fb1e83-1e1c-410b-a074-28175b5eee46" />

# 📧 Email Marketing Tools

A web-based toolbox created mainly for **email marketing, email infrastructure, deliverability, domain management, server workflows, and campaign-related tasks**.

The project provides a central dashboard where different tools can be accessed from one place.

Some tools are specifically designed for email marketing, while others are **general-purpose utilities** that can also be useful for other applications and workflows.

---

## 🌐 Online Application

You can use the tools directly online without installing anything:

👉 **https://abdelagnaoui.github.io/tools/index.html**

Simply open the link in your browser and choose the tool you need.

---

## 🎯 Main Purpose

The application is mainly designed to simplify common tasks related to:

- 📧 Email marketing
- 📨 Email infrastructure
- 🌐 Domains and DNS
- 🔐 SPF / DKIM
- 🖥️ Server management
- 📋 Email lists and data processing
- ⚙️ Campaign-related utilities
- 🤖 Browser automation helpers
- 🛠️ General-purpose utilities

The dashboard is the central interface, but many individual tools can also work independently.

---

## 🧰 Tools

### 📧 Email Tools

Tools primarily related to email marketing and email workflows:

- **Return Paths Maker**
- **Total Send Calculator**
- **Remove RPS Bounce**
- **Base64 Encode/Decode**

---

### 💻 Server Tools

Tools related mainly to email infrastructure, domains, and servers:

- **SPF & DKIM**
- **Server Manager**
- **Server Splitter**
- **CNAM Checker**
- **Domains Checker**

---

### 👾 Utilities

General utilities that can be useful during email marketing workflows or other projects:

- **Subs Generator**
- **Boit Gmail for Test Auto**
- **List Splitter**
- **Link Opener**
- **Offer Manager**

These tools are not necessarily limited to email marketing and may be useful independently.

---

### 📟 Console Scripts

Browser-based helpers and automation utilities:

- **Auto Clean (PMTA Manager)**
- **Copy Subject & IPs from Mail**
- **Auto Schedule (PMTA Manager)**
- **Auto Pause RPS (PMTA Manager)**
- **Test Auto/Mail**
- **Auto VMTA**
- **Auto Send Drop**
- **Auto Validate DKIM**
- **Auto Validate SPF**
- **RDNS Checker**

These scripts are intended to simplify repetitive tasks within supported workflows.

---

## 🖥️ Dashboard

The application is organized into several categories:

```text
                    EMAIL MARKETING TOOLS
                             │
        ┌────────────────────┼────────────────────┐
        │                    │                    │
   Email Tools          Server Tools          Utilities
        │                    │                    │
  Return Paths          SPF / DKIM          List Splitter
  Send Calculator       Server Manager      Link Opener
  RPS Bounce            Domain Checker      Offer Manager
  Base64                CNAM Checker        ...
        │
        └──────────────────────┐
                               │
                        Console Scripts
                               │
                  PMTA / VMTA / Validation
                  Automation / Mail Helpers
```

---

## ✨ Features

- 🌐 Online web application
- 🗂️ Tools organized by category
- 🔎 Tool search
- ⚡ Quick access to frequently used tools
- 📱 Responsive interface
- 🌓 Theme support
- 🧩 Independent tool pages
- ⚙️ Browser-based utilities
- 🔧 Tools that can be reused outside the main dashboard

---

## 🏗️ Project Structure

The project is mainly composed of HTML, CSS, and JavaScript files.

A simplified structure:

```text
tools/
│
├── index.html
│
├── Email Tools/
│   ├── Return Paths Maker
│   ├── Total Send Calculator
│   ├── Remove RPS Bounce
│   └── Base64 Encode/Decode
│
├── Server Tools/
│   ├── SPF & DKIM
│   ├── Server Manager
│   ├── Server Splitter
│   ├── CNAM Checker
│   └── Domains Checker
│
├── Utilities/
│   ├── Subs Generator
│   ├── Boit Gmail for Test Auto
│   ├── List Splitter
│   ├── Link Opener
│   └── Offer Manager
│
└── Console Scripts/
    └── Browser automation and helper scripts
```

The exact file structure may change as the project grows.

---

## 🔗 Individual Tools

The dashboard is the main entry point, but tools are designed to be relatively independent.

Depending on the tool, it may be possible to:

- Open it directly
- Use it independently from the dashboard
- Integrate it into another workflow
- Adapt it for another project
- Reuse it outside email marketing

Not every tool requires the rest of the application to function.

---

## ⚙️ Technologies

The project mainly uses:

- **HTML5**
- **CSS3**
- **JavaScript**
- **Bootstrap**
- **Font Awesome**
- Browser APIs
- External APIs/services where required by individual tools

---

## 💻 Run Locally

If you want to run the project locally, clone the repository:

```bash
git clone https://github.com/abdelagnaoui/tools.git
cd tools
```

Then you can open:

```text
index.html
```

Or start a local web server:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

---

## 🚀 GitHub Pages

The project is currently available online through GitHub Pages:

**https://abdelagnaoui.github.io/tools/index.html**

The dashboard can therefore be used directly from a browser without installing the project locally.

---

## 🔐 Security & Responsible Use

Some tools interact with email infrastructure, domains, servers, browser sessions, or other systems.

Use the tools only with systems, accounts, domains, and infrastructure that you are authorized to manage.

Always respect:

- Applicable laws and regulations
- Email provider policies
- Hosting and server policies
- Third-party service terms
- Anti-spam requirements
- Data privacy requirements

---

## 🛠️ Adding a New Tool

To add a new tool:

1. Create the new tool page.
2. Add it to the appropriate category.
3. Add a button/link from the dashboard.
4. Give it a clear name.
5. Add an appropriate icon.
6. Test it independently.
7. Test it from the main dashboard.
8. Update this README when necessary.

Example:

```html
<a href="my-tool.html" target="_blank">
    🛠️ My New Tool
</a>
```

---

## 📌 Project Philosophy

The goal is to provide a **simple, centralized toolbox** rather than one large application where every feature is tightly connected.

The application is primarily focused on **email marketing and email infrastructure**, but the dashboard can contain general utilities when they are useful for the overall workflow.

Therefore:

> **The project is email-marketing focused, but not every individual tool is exclusively for email marketing.**

---

## 🔮 Future Improvements

Possible future additions include:

- More email validation tools
- More DNS utilities
- Additional server tools
- Better search and filtering
- Tool favorites
- Improved mobile support
- More automation helpers
- API integrations
- Better documentation
- Additional campaign utilities

---

## 👤 Author

**Abdelagnaoui**

Email Marketing & Web Tools

---

## ⭐ Links

🌐 **Online Tools:**  
https://abdelagnaoui.github.io/tools/index.html

💻 **GitHub Repository:**  
https://github.com/abdelagnaoui/tools
