module.exports ={
    entry:'./main.js',
    output:{
        path:'./',
        filename: './public/javascripts/index.js'
    },
    devServer:{
        inline: true,
        port: 3335
    },
    module:{
        loaders: [
            {
                test: /\.js?$/, //messed up here
                exclude: /node_modules/,
                loader: 'babel',
                query:{
                    presets: ['react']
                }
            }
        ]
    }
}