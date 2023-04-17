export default ({ env }) => ({
  // Step 1: Configure the redis connection
  // @see https://github.com/strapi-community/strapi-plugin-redis
  redis: {
    config: {
      connections: {
        default: {
          connection: {
            host: 'localhost',
            port: 6379,
            db: 0,
          },
          settings: {
            debug: false,
          },
        },
      },
    },
  },
  // Step 2: Configure the redis cache plugin
  'rest-cache': {
    config: {
      provider: {
        name: 'redis',
        options: {
          max: 32767,
          connection: 'default',
        },
      },
      strategy: {
        enableEtagSupport: true,
        logs: true,
        clearRelatedCache: true,
        maxAge: 3600000,
        contentTypes: [],
      },
    },
  },
  //  Configure graphql plugin
  graphql: {
    enable: true,
    config: {
      playgroundAlways: true,
      apolloServer: {
        introspection: true,
      },
    },
  },
  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'xponld@gmail.com',
      },
    },
  },
});
