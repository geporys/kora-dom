# Kora DOM 2.0

A React-based application using Material-UI components and Yandex Maps.

## ⚙️ Environment Setup

This project requires **Node.js v12.x** and **npm v6.x** to ensure compatibility with `react-scripts@3.4.1` and React 16.

### ✅ Installing Node.js via `nvm` (Recommended)

1. **Install nvm (Node Version Manager)**
   Open a terminal and run:

   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
   ```

2. **Load **\`\`** into your current shell session** (for zsh users):

   ```bash
   export NVM_DIR="$HOME/.nvm"
   [ -s "$NVM_DIR/nvm.sh" ] && source "$NVM_DIR/nvm.sh"
   [ -s "$NVM_DIR/bash_completion" ] && source "$NVM_DIR/bash_completion"
   ```

   > **Tip:** Add the above lines to your `~/.zshrc` file to enable `nvm` automatically in every terminal session.

3. **Install and use Node.js v12:**

   ```bash
   nvm install 12
   nvm use 12
   ```

4. **Verify your Node.js and npm versions:**

   ```bash
   node -v   # should be v12.x.x
   npm -v    # should be 6.x.x
   ```

## 📦 Installing Dependencies

After setting up Node.js and npm:

```bash
npm install
```

## 🚀 Running the App

Start the development server:

```bash
npm start
```

The app will be available at `http://localhost:3000`.

## 🛠️ Building for Production

To create an optimized production build:

```bash
npm run build
```

The build output will be in the `build/` folder.

---

For any issues or questions, feel free to open an issue or contribute!
