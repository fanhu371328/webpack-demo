//var webpack = require('webpack')
var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
//entry: './app/index.js', //入口文件  只打包一个js文件的时候可以写成字符串的形式，如果要打包成多个就用下面对象的形式
	entry:{  //前面是要打包的文件名字，后面是入口文件的路径,然后下面output中输出的文件名要改成'[name].js' ，这样就会自动分别打包
		bund:'./app/index.js',
		abc:'./app/abc.js'
	},
  output: {           //输出文件
    path: './out',    
    filename: '[name].js' //打包之后的文件名
  },
  module: {           //模块处理器
    loaders: [        //加载器是个数组，里面每一项是个对象
      { test: /\.css$/,   //处理的文件类型
      	loader: 'style-loader!css-loader',  //要用到的加载器
      	exclude:'/node_modules/'     //要排除搜索的文件夹
      }
    ]
  },
  resolve:{     //自动补全后缀，在这里设置了之后前面依赖的文件后缀可以去掉
  	extensions:['','.js','.css','.jsx']
  },
  plugins:[     //可以生成多个html文件，可以分别定义文件名和所依赖的模块
      new htmlWebpackPlugin({
          title:"我是自动生成的index.html文件",
          filename:"index.html",
          chunks:['bund']
      }),
      new htmlWebpackPlugin({
          title:"我是自动生成的class.html文件",
          filename:"class.html",     //这里定义要生成html的文件名
          chunks:['abc']             //这里定义生成该文件依赖的模块
      })
  ]
}