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

2. **Load `nvm` into your current shell session** (for zsh users):

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

## ☁️ Uploading Build to S3

To upload the contents of the `build/` folder to an S3-compatible bucket, use the included Python script:

### Prerequisites

* Python 3
* `boto3` installed:

  ```bash
  pip install boto3
  ```

### Script Location

The script should be created as `upload_build_to_s3.py` in your project directory.

### Script Usage

The script is preconfigured to:

* Use hardcoded AWS credentials and endpoint
* Upload the `../folder/build` directory
* Preserve folder structure

You can modify the following variables in the script:

```python
AWS_ACCESS_KEY_ID = 'your-access-key-id'
AWS_SECRET_ACCESS_KEY = 'your-secret-access-key'
ENDPOINT_URL = 'https://your-endpoint.com'
BUCKET_NAME = 'your-s3-bucket-name'
LOCAL_DIR = '../folder/build'
```

### Running the Script

```bash
python upload_build_to_s3.py
```

Make sure the folder path and credentials are valid before running the script.

---

For any issues or questions, feel free to open an issue or contribute!
