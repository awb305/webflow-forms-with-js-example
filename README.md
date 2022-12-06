# Handling Webflow Forms with JavaScript and Typescript

The companion repo for a tutorial series on using JavaScript and TypeScript to handle Webflow forms. 

Youtube playlist 👉 https://www.youtube.com/playlist?list=PLRVjQBYy10oRTe2ORzIyvb5fU1o6CYAxB

## Webflow Cloneable 

https://webflow.com/made-in-webflow/website/forms-with-js-example


## Developing JS/TS in Webflow

I'm using a basic Webpack setup to serve my files locally so I can develop in Webflow. If you want to learn more about developing in Webflow I've made another video here 👉 https://www.youtube.com/watch?v=VWx5pHtlgNw.

### Setup

1. [Clone the repo](https://github.com/awb305/webflow-forms-with-js-example)


2. Install packages

```npm install```

### Local Development

1. Place this script tag in your Webflow Site.

```<script src="http://localhost:8080/bundle.js" type="text/javascript" crossorigin="anonymous"></script>``` 

2. Run the webpack dev server

```npm run serve```

### Production

1. Build the production JavaScript

```npm run build```


## Vercel Setup

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/awb305/webflow-forms-with-js-example)

You will need the [Vercel CLI](https://vercel.com/docs/cli) if you want to serve the "api/do-something.ts" locally. If you wish to serve your file in another way, or hit a different endpoint, then don't bother with Vercel!