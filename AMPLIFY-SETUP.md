# 🚀 AWS Amplify Setup - What Was Added

This document outlines all the AWS Amplify features and configurations added to your Nuxt 3 e-commerce project.

## 📦 Files Created/Modified

### Core Configuration Files

#### 1. `amplify.yml`

Build configuration for AWS Amplify Hosting

- Defines build commands
- Specifies output directory (`.output/public`)
- Configures cache settings

#### 2. `amplify/backend.ts`

Main backend definition

- Imports and configures all backend resources
- Links authentication and data services

#### 3. `amplify/auth/resource.ts`

Authentication configuration (AWS Cognito)

- Email-based login
- User attributes (email, first name, last name)
- Password requirements

#### 4. `amplify/data/resource.ts`

GraphQL API and data models (AWS AppSync + DynamoDB)

- **Product** model with fields: name, description, price, category, badge, icon
- **Order** model for user orders
- **OrderItem** model for order details
- Authorization rules (public API key + user-based)

#### 5. `amplify/tsconfig.json`

TypeScript configuration for Amplify backend

### Frontend Integration

#### 6. `plugins/amplify.client.ts`

Nuxt plugin to initialize AWS Amplify on the client side

- Configures Amplify with backend outputs
- Runs on client-side only

#### 7. `composables/useAuth.ts`

Vue composable for authentication management

- `checkAuth()` - Check if user is logged in
- `logout()` - Sign out user
- `isAuthenticated` - Reactive authentication state
- `getUserAttributes()` - Get user profile info

#### 8. `pages/login.vue`

Login page with AWS Cognito integration

- Email and password inputs
- Error handling
- Redirects to home after successful login

#### 9. `pages/signup.vue`

Signup page with email verification

- User registration form
- Email confirmation code flow
- Redirects to login after verification

#### 10. `app.vue` (Updated)

Enhanced navigation with authentication

- Login/Signup buttons when not authenticated
- User dropdown menu when authenticated
- Sign out functionality
- Conditional cart button (only for logged-in users)

### Configuration Updates

#### 11. `package.json` (Updated)

Added AWS Amplify dependencies:

```json
"dependencies": {
  "aws-amplify": "^6.0.0",
  "@aws-amplify/ui-vue": "^4.0.0"
},
"devDependencies": {
  "@aws-amplify/backend": "^1.0.0",
  "@aws-amplify/backend-cli": "^1.0.0"
}
```

#### 12. `.gitignore` (Updated)

Added Amplify-specific ignore patterns:

- `amplify/backend/amplify-meta.json`
- `amplify/#current-cloud-backend`
- `amplify_outputs.json`
- Build artifacts

#### 13. `nuxt.config.ts` (Updated)

Enhanced configuration for Amplify:

- SSR enabled
- Nitro preset for Node server
- SEO meta tags
- Vite optimization for AWS SDK

#### 14. `amplify_outputs.json`

Placeholder configuration file

- Will be auto-generated during deployment
- Contains API endpoints, auth config, etc.

### Documentation

#### 15. `README.md` (Updated)

Comprehensive project documentation

- Features overview
- Quick start guide
- Tech stack details
- Data models
- Customization tips

#### 16. `DEPLOYMENT.md`

Step-by-step deployment guide

- AWS account setup
- Repository connection
- Backend deployment
- Post-deployment testing
- Troubleshooting tips

## 🔐 AWS Services Configured

### 1. **AWS Cognito** (Authentication)

- User pools for user management
- Email-based authentication
- Email verification
- JWT token management
- Password policies

### 2. **AWS AppSync** (GraphQL API)

- Real-time GraphQL API
- Automatic schema generation
- Query, mutation, and subscription support
- Multi-authorization (API key + user-based)

### 3. **Amazon DynamoDB** (Database)

- `Product` table
- `Order` table
- `OrderItem` table
- Automatic provisioning
- Serverless scaling

### 4. **AWS Amplify Hosting**

- CI/CD pipeline
- Auto-deployments on git push
- Custom domains support
- SSL certificates
- Global CDN

## 🎯 Features You Can Now Use

### Authentication Features ✅

- ✅ User signup with email
- ✅ Email verification codes
- ✅ User login
- ✅ Logout
- ✅ Session management
- ✅ Protected routes (ready to implement)
- ✅ User profile access

### API Features ✅

- ✅ GraphQL API for products
- ✅ CRUD operations on products
- ✅ Order management backend
- ✅ Public and authenticated queries
- ✅ Real-time subscriptions (AppSync)

### Deployment Features ✅

- ✅ One-click deployment
- ✅ Automatic builds on push
- ✅ Environment management
- ✅ Preview deployments
- ✅ Rollback capability

## 🧪 Testing Locally

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Amplify Sandbox (Local Backend)

```bash
npx ampx sandbox
```

This creates a temporary backend in the cloud for testing.

### 3. Start Dev Server

```bash
npm run dev
```

Visit `http://localhost:3000`

### 4. Test Features

1. Click "Sign Up" and create an account
2. Check your email for verification code
3. Verify your email
4. Log in with credentials
5. See user dropdown in navbar
6. Click sign out

## 📊 Next Steps

### 1. Add Products to Database

Use AWS AppSync console or create an admin page to add products.

### 2. Implement Shopping Cart

The cart button is ready - implement cart state management.

### 3. Add Product Images

Configure AWS S3 storage for product images.

### 4. Implement Checkout

Add payment processing (Stripe, PayPal, etc.).

### 5. Add User Profile Page

Show user info and order history.

### 6. Deploy to Production

Follow `DEPLOYMENT.md` to deploy to AWS Amplify.

## 🔧 Customization Guide

### Change Authentication Requirements

Edit `amplify/auth/resource.ts`:

```typescript
export const auth = defineAuth({
  loginWith: {
    email: true,
    // Add phone: true for SMS
  },
  // Customize password requirements
  passwordPolicy: {
    requireLowercase: true,
    requireUppercase: true,
    requireNumbers: true,
    requireSymbols: true,
    minLength: 8,
  },
});
```

### Modify Data Schema

Edit `amplify/data/resource.ts`:

```typescript
const schema = a.schema({
  Product: a.model({
    name: a.string().required(),
    // Add new fields here
    rating: a.float(),
    reviewCount: a.integer(),
  }),
});
```

### Add New API

Create new models in `amplify/data/resource.ts`:

```typescript
Category: a.model({
  name: a.string().required(),
  description: a.string(),
});
```

## 💡 Pro Tips

1. **Development**: Use `npx ampx sandbox` for rapid testing
2. **Security**: Never commit `amplify_outputs.json` with real credentials
3. **Cost**: Amplify Gen 2 sandbox is temporary and auto-deletes
4. **Monitoring**: Check CloudWatch logs for backend issues
5. **Performance**: Use AppSync caching for frequently accessed data

## 🆘 Common Issues

### "Module not found: aws-amplify"

```bash
rm -rf node_modules package-lock.json
npm install
```

### "User pool not found"

Run `npx ampx sandbox` to create backend resources.

### Build fails on Amplify

Check `amplify.yml` matches your project structure.

### Authentication not working

Verify `amplify_outputs.json` is generated and plugin is loaded.

## 📚 Additional Resources

- [Amplify Gen 2 Docs](https://docs.amplify.aws/gen2/)
- [AppSync Tutorial](https://docs.aws.amazon.com/appsync/latest/devguide/)
- [Cognito User Pools](https://docs.aws.amazon.com/cognito/latest/developerguide/)
- [Nuxt 3 Plugins](https://nuxt.com/docs/guide/directory-structure/plugins)

---

**Ready to deploy?** See [DEPLOYMENT.md](./DEPLOYMENT.md) for the full guide!
