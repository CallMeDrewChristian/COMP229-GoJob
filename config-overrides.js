module.exports = function override(config){
    const fallback = config.resolve.fallback || {};

    Object.assign(fallback, {
        "zlib": require.resolve("browserify-zlib"),
        "querystring": require.resolve("querystring-es3") ,  
        "path": require.resolve("path-browserify"),
        "crypto": require.resolve("crypto-browserify"),
        fs: false,
        stream: require.resolve("stream-browserify"),
        http: require.resolve("stream-http"),
        net: false,

    })
    config.resolve.fallback = fallback;
    return config;
}