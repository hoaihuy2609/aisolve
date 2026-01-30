# 🚀 Deployment Guide

This guide will help you deploy the LaTeX Math Solver AI to GitHub and Vercel.

---

## 📋 Prerequisites

- Git installed on your computer
- GitHub account
- Vercel account (free tier is sufficient)
- Google Gemini API key

---

## 📦 Part 1: Push to GitHub

### Step 1: Initialize Git Repository

```bash
# Navigate to your project directory
cd c:\Users\Acer\Downloads\latex-math-solver-ai

# Initialize git (if not already initialized)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Optimized LaTeX Math Solver AI"
```

### Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click the **"+"** icon in the top right
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name**: `latex-math-solver-ai` (or your preferred name)
   - **Description**: "AI-powered mathematical problem solver that converts images to LaTeX code"
   - **Visibility**: Choose Public or Private
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click **"Create repository"**

### Step 3: Connect and Push to GitHub

```bash
# Add remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/latex-math-solver-ai.git

# Verify remote
git remote -v

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Verify Upload

1. Go to your GitHub repository URL
2. Verify all files are uploaded
3. Check that README.md displays correctly

---

## 🌐 Part 2: Deploy to Vercel

### Method 1: Deploy via Vercel Dashboard (Recommended)

#### Step 1: Connect GitHub to Vercel

1. Go to [Vercel](https://vercel.com)
2. Click **"Sign Up"** or **"Log In"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub account

#### Step 2: Import Project

1. Click **"Add New..."** → **"Project"**
2. Find your `latex-math-solver-ai` repository
3. Click **"Import"**

#### Step 3: Configure Project

1. **Framework Preset**: Vite
2. **Root Directory**: `./` (leave as default)
3. **Build Command**: `npm run build` (auto-detected)
4. **Output Directory**: `dist` (auto-detected)
5. **Install Command**: `npm install` (auto-detected)

#### Step 4: Add Environment Variables

1. Click **"Environment Variables"**
2. Add the following:
   - **Name**: `API_KEY`
   - **Value**: Your Google Gemini API key
   - **Environment**: Production, Preview, Development (select all)
3. Click **"Add"**

#### Step 5: Deploy

1. Click **"Deploy"**
2. Wait for the build to complete (usually 1-2 minutes)
3. Once complete, you'll see a success message with your deployment URL

#### Step 6: Access Your App

1. Click on the deployment URL (e.g., `https://your-project.vercel.app`)
2. Test the application
3. Verify it works correctly

---

### Method 2: Deploy via Vercel CLI

#### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

#### Step 2: Login to Vercel

```bash
vercel login
```

#### Step 3: Deploy

```bash
# Navigate to project directory
cd c:\Users\Acer\Downloads\latex-math-solver-ai

# Deploy to Vercel
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Select your account
# - Link to existing project? No
# - Project name? latex-math-solver-ai (or press Enter for default)
# - Directory? ./ (press Enter)
# - Override settings? No
```

#### Step 4: Add Environment Variables

```bash
# Add API key
vercel env add API_KEY

# When prompted:
# - Enter value: [Your Gemini API Key]
# - Expose to: Production, Preview, Development (select all)
```

#### Step 5: Deploy to Production

```bash
vercel --prod
```

---

## 🔧 Post-Deployment Configuration

### Custom Domain (Optional)

1. Go to your Vercel project dashboard
2. Click **"Settings"** → **"Domains"**
3. Add your custom domain
4. Follow Vercel's instructions to configure DNS

### Environment Variables Management

To update environment variables:

1. Go to Vercel dashboard
2. Select your project
3. Go to **"Settings"** → **"Environment Variables"**
4. Edit or add new variables
5. Redeploy for changes to take effect

### Automatic Deployments

Vercel automatically deploys when you push to GitHub:

- **Push to `main` branch** → Production deployment
- **Push to other branches** → Preview deployment
- **Pull requests** → Preview deployment with unique URL

---

## 🔍 Troubleshooting

### Build Fails

**Problem**: Build fails on Vercel

**Solutions**:
1. Check build logs in Vercel dashboard
2. Verify `package.json` has correct dependencies
3. Ensure `vite.config.ts` is properly configured
4. Check for TypeScript errors locally: `npm run build`

### Environment Variables Not Working

**Problem**: API key not accessible

**Solutions**:
1. Verify environment variable name is exactly `API_KEY`
2. Ensure it's added to all environments (Production, Preview, Development)
3. Redeploy after adding environment variables
4. Check Vercel logs for environment variable errors

### 404 Errors on Refresh

**Problem**: Page not found when refreshing on routes

**Solution**: Vercel handles this automatically for Vite projects. If issues persist:
1. Check `vercel.json` configuration
2. Ensure SPA routing is enabled

### API Errors

**Problem**: Gemini API returns errors

**Solutions**:
1. Verify API key is valid
2. Check API quota limits
3. Ensure API key has proper permissions
4. Check network/CORS issues in browser console

---

## 📊 Monitoring & Analytics

### Vercel Analytics

1. Go to your project dashboard
2. Click **"Analytics"**
3. Enable Vercel Analytics (free for hobby plan)
4. View real-time performance metrics

### Performance Monitoring

Monitor your deployment:
- **Build time**: Check deployment logs
- **Bundle size**: Review build output
- **Load time**: Use Vercel Analytics
- **Error rate**: Check function logs

---

## 🔄 Updating Your Deployment

### Update Code

```bash
# Make your changes
git add .
git commit -m "Description of changes"
git push origin main
```

Vercel will automatically detect the push and redeploy.

### Manual Redeploy

1. Go to Vercel dashboard
2. Select your project
3. Go to **"Deployments"**
4. Click **"..."** on any deployment
5. Select **"Redeploy"**

---

## 🎉 Success Checklist

- [ ] Code pushed to GitHub
- [ ] Repository is public/private as desired
- [ ] README.md displays correctly on GitHub
- [ ] Vercel project created and connected
- [ ] Environment variables configured
- [ ] Successful deployment
- [ ] Application accessible via Vercel URL
- [ ] Image upload works
- [ ] AI solving works
- [ ] LaTeX output displays correctly
- [ ] Copy to clipboard works

---

## 📞 Support

If you encounter issues:

1. **Vercel Documentation**: https://vercel.com/docs
2. **GitHub Documentation**: https://docs.github.com
3. **Vite Documentation**: https://vitejs.dev
4. **Gemini API Documentation**: https://ai.google.dev/docs

---

## 🔗 Useful Links

- **Vercel Dashboard**: https://vercel.com/dashboard
- **GitHub Repository**: https://github.com/YOUR_USERNAME/latex-math-solver-ai
- **Gemini API Console**: https://makersuite.google.com/app/apikey
- **Deployment URL**: https://your-project.vercel.app

---

**Happy Deploying! 🚀**
