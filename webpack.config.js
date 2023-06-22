module.exports = env => {
    let environment = (env.prod ? 'prod' : 'dev');
    console.log(`Running ${environment} Mode using ./webpack/webpack.${environment}.js`);
    return require(`./webpack/webpack.${environment}.js`);
};