const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports ={
    mode:'development',
    entry:path.resolve(__dirname,'../src/main.js'),
    output:{
        path:path.resolve(__dirname,'../dist'),
        filename:'js/[name].[hash:4].js',
        chunkFilename:'js/[name].[hash:4].js',
        publicPath:'/'
    },
    resolve:{
        alias: {
            'vue$': 'vue/dist/vue.runtime.esm.js',
            '@': path.resolve(__dirname, '../src')
          },
        extensions:['.js','.vue']
    },
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader'
                }
            },
            {
                test:/\.(scss|sass)$/,
                use:[
                    {
                        loader:'style-loader'
                    },
                    {
                        loader:'css-loader'
                    },
                    {
                        loader:'sass-loader'
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      // 当文件大于5kb时走file-loader相关的配置
                      limit: 5120,
                      // 这个参数要设置成false,不然生成图片的路径时[object Module]
                      esModule: false,
                      // 当文件大于5kb时走file-loader相关的配置
                      fallback: 'file-loader',
                      // 生成的路径和文件名
                      name: 'images/[name].[hash:4].[ext]'
                    }
                  }
                ]
              },
              {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 5120,
                      esModule: false,
                      fallback: 'file-loader',
                      name: 'media/[name].[hash:4].[ext]'
                    }
                  }
                ]
              },
              {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 5120,
                      esModule: false,
                      fallback: 'file-loader',
                      name: 'fonts/[name].[hash:4].[ext]'
                    }
                  }
                ]
              },
              {
                  test:/\.vue$/,
                  use:{
                      loader:'vue-loader'
                  }
              }

        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'../src/index.html'),
            filename:path.resolve(__dirname,'../dist/index.html')
        }),
        new VueLoaderPlugin()
    ],
    devServer:{
        contentBase:'./dist',
        host:'localhost',
        port:'0922',
        compress:false,
        stats:'errors-only'
    }
}