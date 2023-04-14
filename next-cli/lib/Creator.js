const inquirer = require('inquirer')
const { defaults } = require('./util/preset')

class Creator {
    constructor(name,context){
        // //构造函数,初始化
        // this.name = name
        // this.context = process.env.VUE_CLI_CONTEXT = context
        // //package.json数据
        // this.pkg = {}
        // //包管理工具
        // this.pm = null
        this.presetPrompt = this.resolvePresetPrompts()
        inquirer.prompt(this.resolveFinalPrompts()).then(res=>{
            console.log('选择的选项:')
            console.log(res)
        })
    }
    resolveFinalPrompts(){
        const prompts = [
            this.presetPrompt
        ]
        return prompts
    }
    //获得提示选项
    resolvePresetPrompts(){
        const presetChoices = Object.entries(defaults.presets).map(([name,preset])=>{
            return {
                name:`${name}( ${Object.keys(preset.plugins).join(',')})`,
                value:name
            }
        })
        return {
            name:'preset', //记录用户选择的选项值
            type:'list', //list表单选项
            message:'Please pick a preset:',
            choices: [
                ...presetChoices, //默认配置
                {
                    name:'Manually select features',//手动配置
                    value:'__manual__'
                }
            ]
        }
    }
    // async create(cliOptions={},preset = null){
    //     //处理用户输入
    //     const preset = await this.promptAndResolvePreset();
    //     //初始化安装环境
    //     await this.initPackageManagerEnv(preset);
    //     //生成项目文件，生成配置文件
    //     const generator = await this.generate(preset);
    //     //生成readme文件
    //     await this.generateReadme(generator)
    //     this.finished()
    // }
}
module.exports = Creator;