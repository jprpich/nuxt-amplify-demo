import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

/**
 * Define your data schema
 * @see https://docs.amplify.aws/gen2/build-a-backend/data/
 */
const schema = a.schema({
  Product: a
    .model({
      name: a.string().required(),
      description: a.string(),
      price: a.float().required(),
      category: a.string(),
      badge: a.string(),
      icon: a.string(),
      imageUrl: a.string(),
      inStock: a.boolean().default(true),
    })
    .authorization((allow) => [allow.publicApiKey()]),
  
  Order: a
    .model({
      userId: a.string().required(),
      total: a.float().required(),
      status: a.string().default('pending'),
      orderDate: a.datetime(),
    })
    .authorization((allow) => [allow.owner(), allow.authenticated().to(['read'])]),
  
  OrderItem: a
    .model({
      orderId: a.id().required(),
      productId: a.id().required(),
      quantity: a.integer().required(),
      price: a.float().required(),
    })
    .authorization((allow) => [allow.owner()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey',
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});

