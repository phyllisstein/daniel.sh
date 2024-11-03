/**
  * @type {import('next').NextConfig}
  */
export default {
  compiler: {
    styledComponents: {
      displayName: true,
      fileName: true,
      minify: false,
      ssr: true,
    },
  },
  serverRuntimeConfig: {
    host: '0.0.0.0',
  },
}
