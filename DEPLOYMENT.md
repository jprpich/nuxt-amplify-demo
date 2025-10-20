# AWS Amplify Deployment Guide

This guide will walk you through deploying your Nuxt 3 e-commerce application to AWS Amplify.

## 📋 Prerequisites

- AWS Account ([Create one here](https://aws.amazon.com/))
- GitHub/GitLab/Bitbucket account (for code repository)
- Node.js 18+ installed locally
- Git installed

## 🚀 Deployment Steps

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Initialize Amplify Backend (Local Development)

To test the Amplify backend locally before deploying:

```bash
# Install Amplify CLI globally (if not already installed)
npm install -g @aws-amplify/cli

# Configure Amplify with your AWS credentials
amplify configure

# Initialize Amplify in your project
npx ampx sandbox
```

This will:

- Set up authentication (AWS Cognito)
- Create a GraphQL API for products
- Generate the `amplify_outputs.json` configuration file

### Step 3: Push Your Code to a Git Repository

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Nuxt Amplify e-commerce app"

# Add your remote repository
git remote add origin <your-repo-url>

# Push to main branch
git push -u origin main
```

### Step 4: Deploy to AWS Amplify Console

1. **Go to AWS Amplify Console**

   - Navigate to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
   - Click "New app" → "Host web app"

2. **Connect Your Repository**

   - Choose your Git provider (GitHub, GitLab, Bitbucket, or AWS CodeCommit)
   - Authorize AWS Amplify to access your repository
   - Select your repository and branch (main)

3. **Configure Build Settings**

   - Amplify will auto-detect the `amplify.yml` file
   - Review the build settings (they should match your amplify.yml)
   - The build configuration includes:
     ```yaml
     frontend:
       phases:
         preBuild:
           commands:
             - npm ci
         build:
           commands:
             - npm run build
       artifacts:
         baseDirectory: .output/public
         files:
           - "**/*"
     ```

4. **Deploy Backend**

   - Amplify will prompt you to deploy the backend
   - Click "Deploy backend" to create:
     - Cognito User Pool (Authentication)
     - AppSync GraphQL API (Products data)
     - DynamoDB tables

5. **Review and Deploy**
   - Review all settings
   - Click "Save and deploy"

### Step 5: Wait for Deployment

The deployment process includes:

1. ✅ Provision (Setting up infrastructure)
2. ✅ Build (Running `npm ci` and `npm run build`)
3. ✅ Deploy (Deploying to AWS)
4. ✅ Verify (Health checks)

This typically takes 5-10 minutes.

## 🔧 Post-Deployment Configuration

### Access Your Application

After deployment completes:

- Your app URL: `https://main.xxxxxx.amplifyapp.com`
- Backend API: Automatically configured

### Test Authentication

1. Visit your deployed app
2. Click "Sign Up" to create an account
3. Enter email and password
4. Check your email for verification code
5. Enter the code to verify
6. Log in with your credentials

### Add Sample Products (Optional)

You can add products via the AWS AppSync console:

1. Go to AWS AppSync Console
2. Select your API
3. Go to "Queries" tab
4. Run mutations to add products:

```graphql
mutation CreateProduct {
  createProduct(
    input: {
      name: "Wireless Headphones"
      description: "Premium noise-cancelling headphones"
      price: 299.99
      category: "Electronics"
      badge: "Best Seller"
      icon: "🎧"
      inStock: true
    }
  ) {
    id
    name
    price
  }
}
```

## 🌐 Custom Domain (Optional)

1. In Amplify Console, go to "Domain management"
2. Click "Add domain"
3. Follow the wizard to connect your custom domain
4. AWS will provide DNS records to add to your domain registrar

## 🔄 Continuous Deployment

Every push to your `main` branch will automatically trigger a new deployment!

```bash
git add .
git commit -m "Update homepage"
git push
```

Amplify will automatically:

- Pull the latest code
- Run tests (if configured)
- Build the application
- Deploy to production

## 📊 Monitoring and Logs

### View Logs

1. Go to Amplify Console
2. Click on your app
3. Select a deployment
4. View build logs and deployment details

### Monitor Performance

- Amplify provides metrics for:
  - Page views
  - Data transfer
  - Build duration
  - Error rates

## 🔐 Environment Variables

To add environment variables:

1. In Amplify Console, go to "Environment variables"
2. Click "Manage variables"
3. Add your variables (e.g., API keys, feature flags)

## 🛠️ Backend Management

### Authentication Settings

- Go to AWS Cognito Console
- Select your User Pool
- Customize:
  - Password policies
  - MFA settings
  - Email templates

### API Settings

- Go to AWS AppSync Console
- Select your API
- Customize:
  - Schema
  - Resolvers
  - Authorization rules

## 🚨 Troubleshooting

### Build Fails

- Check build logs in Amplify Console
- Verify `package.json` dependencies
- Ensure Node version is compatible (18+)

### Authentication Not Working

- Check `amplify_outputs.json` is generated
- Verify Cognito User Pool settings
- Check browser console for errors

### API Errors

- Verify AppSync API is deployed
- Check API authorization settings
- Review CloudWatch logs for API errors

## 💰 Cost Estimation

AWS Amplify pricing (as of 2025):

- **Hosting**: $0.15 per GB served
- **Build minutes**: $0.01 per build minute
- **Authentication (Cognito)**: Free for first 50,000 MAUs
- **API (AppSync)**: Pay per request

Estimated monthly cost for low-traffic app: **$5-20/month**

## 📚 Additional Resources

- [AWS Amplify Documentation](https://docs.amplify.aws/)
- [Nuxt 3 Documentation](https://nuxt.com/)
- [AWS Amplify Gen 2 Guide](https://docs.amplify.aws/gen2/)
- [AppSync GraphQL Guide](https://docs.aws.amazon.com/appsync/)

## 🆘 Support

- AWS Support: [AWS Support Center](https://console.aws.amazon.com/support/)
- Amplify Discord: [Join Community](https://discord.gg/amplify)
- Stack Overflow: Tag questions with `aws-amplify`

## ✅ Checklist

- [ ] AWS Account created
- [ ] Code pushed to Git repository
- [ ] Connected repository to Amplify Console
- [ ] Backend deployed successfully
- [ ] Frontend deployed successfully
- [ ] Authentication tested
- [ ] Custom domain configured (optional)
- [ ] Sample products added (optional)

---

**Need help?** Open an issue in your repository or contact AWS Support.
