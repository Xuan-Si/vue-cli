// const { program } = require('commander')
// const chalk = require('chalk')
// //名称，描述，版本号，用法提示

// program
//     .name('cli')
//     .description('这是一个脚手架')
//     .version('0.0.1')
//     .usage('<command> [options]')

// // createPage命令
// program.command('createPage')
//     .description('生成一个页面')
//     .argument('<name>','文件名字')
//     .action(name => {
//         console.log(`${chalk.blue('新建了一个文件')} ${chalk.red(':')}  ${chalk.underline(name)}`)
//     })

// program.parse();

const inquirer = require('inquirer')
const arr = [
    {
        type:'input',
        name : 'projectName',
        message:'项目名称',
        default:'vue-demo'
    },
    {
        type:'list',
        name:'projectType',
        message:'项目类型',
        default:'vue2',
        choices:[
            {
                name:'vue2',value:'vue2'
            },{
                name:'vue3',value:'vue3'
            },{
                name:'react',value:'react'
            }
        ]
    },{
        type:'checkbox',
        name:'plugins',
        message:'插件选择',
        choices:[
            {
                name:'babel',value:'babel'
            },{
                name:'eslint',value:'eslint'
            },
            {
                name:'vue-router',value:'vue-router'
            }
        ]
    },{
        type:'confirm',
        name:'confirm',
        message:'confirm'
    }
]

inquirer.prompt(arr).then(ans => {
    console.log('=========')
    console.log(ans)
}).catch(err => {
    console.log('------')
    console.log(err)
})