# 🛍️ ShopHub - Nuxt 3 E-Commerce with AWS Amplify

A modern, full-stack e-commerce application built with **Nuxt 3** and **AWS Amplify Gen 2**. Features authentication, a product catalog, and a beautiful UI with responsive design.

![Nuxt 3](https://img.shields.io/badge/Nuxt-3-00DC82?logo=nuxt.js)
![AWS Amplify](https://img.shields.io/badge/AWS-Amplify-FF9900?logo=aws-amplify)
![Vue 3](https://img.shields.io/badge/Vue-3-4FC08D?logo=vue.js)

## ✨ Features

### 🎨 Frontend

- **Modern Landing Page** - Eye-catching hero section with animated floating cards
- **Product Catalog** - Filterable product grid with categories
- **About Page** - Company story, values, team, and timeline
- **Responsive Design** - Mobile-first design that works on all devices
- **Authentication UI** - Beautiful login and signup pages

### 🔐 Backend (AWS Amplify)

- **Authentication** - User signup/login with AWS Cognito
- **GraphQL API** - AppSync API for products and orders
- **Database** - DynamoDB tables for data storage
- **Authorization** - Fine-grained access control per user

### 🚀 Features Showcase

- Product categories: Electronics, Fashion, Home, Sports
- User authentication with email verification
- Shopping cart (UI ready)
- Order management (backend configured)
- Sticky navigation with user dropdown
- Footer with newsletter signup

## 📸 Screenshots

### Home Page

Modern landing page with hero section, features, categories, stats, and CTA.

### Products Page

Filterable product catalog with beautiful gradient cards and animations.

### Authentication

Clean login and signup forms with AWS Cognito integration.

## 🏗️ Tech Stack

- **Framework**: [Nuxt 3](https://nuxt.com/)
- **UI**: Vue 3 with Composition API
- **Styling**: Scoped CSS with modern gradients and animations
- **Backend**: [AWS Amplify Gen 2](https://docs.amplify.aws/)
- **Auth**: AWS Cognito
- **API**: AWS AppSync (GraphQL)
- **Database**: Amazon DynamoDB
- **Hosting**: AWS Amplify Hosting

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn
- AWS Account (for deployment)

### Installation

1. **Clone the repository**

```bash
git clone <your-repo-url>
cd nuxt-amplify-demo
```

2. **Install dependencies**

```bash
npm install
```

3. **Run development server**

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Local Development with Amplify

To test AWS Amplify backend locally:

```bash
# Install Amplify CLI
npm install -g @aws-amplify/cli

# Start local sandbox
npx ampx sandbox
```

This will create a local backend with authentication and API.

## 📦 Project Structure

```
nuxt-amplify-demo/
├── amplify/                  # AWS Amplify backend configuration
│   ├── auth/                # Authentication resources
│   ├── data/                # Data/API resources (GraphQL)
│   └── backend.ts           # Backend definition
├── pages/                   # Nuxt pages (routes)
│   ├── index.vue           # Home/landing page
│   ├── products/           # Products page
│   ├── about.vue           # About page
│   ├── login.vue           # Login page
│   └── signup.vue          # Signup page
├── composables/            # Vue composables
│   └── useAuth.ts          # Authentication composable
├── plugins/                # Nuxt plugins
│   └── amplify.client.ts   # Amplify configuration
├── app.vue                 # Root layout with nav and footer
├── amplify.yml             # Amplify build configuration
└── package.json            # Dependencies and scripts
```

## 🔧 Configuration Files

- **`amplify.yml`** - Amplify build and deployment settings
- **`amplify/backend.ts`** - Backend resource definitions
- **`amplify/auth/resource.ts`** - Authentication configuration
- **`amplify/data/resource.ts`** - GraphQL API schema
- **`plugins/amplify.client.ts`** - Amplify client initialization

## 🌐 Deployment

### Deploy to AWS Amplify

See the detailed [DEPLOYMENT.md](./DEPLOYMENT.md) guide for step-by-step instructions.

**Quick Summary:**

1. Push code to GitHub/GitLab/Bitbucket
2. Connect repository to AWS Amplify Console
3. Amplify automatically detects `amplify.yml` and deploys
4. Backend (Auth + API) is provisioned automatically
5. Your app is live! 🎉

### Manual Build

```bash
npm run build
```

The output will be in `.output/` directory.

## 📊 AWS Services Used

| Service             | Purpose                                |
| ------------------- | -------------------------------------- |
| **Amplify Hosting** | Frontend hosting and CI/CD             |
| **Cognito**         | User authentication and management     |
| **AppSync**         | GraphQL API                            |
| **DynamoDB**        | NoSQL database for products and orders |
| **CloudFormation**  | Infrastructure as Code                 |

## 🎯 Data Models

### Product

```typescript
{
  id: ID;
  name: String!;
  description: String;
  price: Float!;
  category: String;
  badge: String;
  icon: String;
  imageUrl: String;
  inStock: Boolean;
}
```

### Order

```typescript
{
  id: ID;
  userId: String!;
  total: Float!;
  status: String;
  orderDate: DateTime;
}
```

### OrderItem

```typescript
{
  id: ID;
  orderId: ID!;
  productId: ID!;
  quantity: Int!;
  price: Float!;
}
```

## 🔐 Authentication Flow

1. User signs up with email and password
2. Verification code sent to email
3. User confirms email with code
4. User can log in
5. JWT tokens managed automatically by Amplify
6. Protected routes check authentication status

## 🛠️ Development

### Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Generate static site
npm run generate

# Amplify sandbox (local backend)
npx ampx sandbox
```

### Adding New Features

1. **Add a new page**: Create a `.vue` file in `pages/`
2. **Add API endpoint**: Update `amplify/data/resource.ts`
3. **Add authentication**: Use `useAuth()` composable
4. **Style components**: Use scoped CSS in `.vue` files

## 🎨 Customization

### Colors

The app uses a purple gradient theme. To change:

- Primary: `#667eea`
- Secondary: `#764ba2`

Update these in the CSS gradient definitions.

### Branding

- Logo: Update emoji in `app.vue` (🛍️)
- Name: Change "ShopHub" in `app.vue`
- Favicon: Replace `public/favicon.ico`

## 📚 Documentation

- [Nuxt 3 Docs](https://nuxt.com/docs)
- [AWS Amplify Gen 2 Docs](https://docs.amplify.aws/gen2/)
- [Vue 3 Docs](https://vuejs.org/)
- [AWS AppSync Docs](https://docs.aws.amazon.com/appsync/)

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Report bugs
- Suggest features
- Submit pull requests

## 📝 License

This project is open source and available under the MIT License.

## 🆘 Support

- **AWS Amplify Discord**: [Join Community](https://discord.gg/amplify)
- **Stack Overflow**: Tag `aws-amplify` and `nuxt3`
- **AWS Support**: [AWS Console](https://console.aws.amazon.com/support/)

## 🙏 Acknowledgments

- Built with [Nuxt 3](https://nuxt.com/)
- Powered by [AWS Amplify](https://aws.amazon.com/amplify/)
- Inspired by modern e-commerce design patterns

---

**Ready to deploy?** Check out [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions!

Made with ❤️ and ☕
