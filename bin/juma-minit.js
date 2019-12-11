#!/usr/bin/env node
// 交互式命令
const inquirer = require('inquirer')
// 下载指定仓库
const download = require('download-git-repo')
// 更改控制台字符串颜色
const chalk = require('chalk')
// 下载样式
const ora = require('ora')
// 读取模版
const tplObj = require(`${__dirname}/../template`)

let tplList = Object.keys(tplObj)

let question = [{
    name: 'tplName',
    type: 'list',
    message:'请选择初始化的模版',
    choices:tplList
},{
    name: 'proName',
    type: 'input',
    message:'请输入你的项目名',
    default:'my-project'
}]

inquirer.prompt(question).then(answers => {
    let {tplName, proName}=answers;
    let url = tplObj[tplName];
    console.log(chalk.white('\n 开始初始化... \n'))
    const spinner = ora("下载中...")
    spinner.start()
    download(url, proName, err=>{
        if(err){
            spinner.fail();
            console.log(chalk.red(`\n 下载失败了…(╯‵□′)╯︵┻━┻ ${err} \n`))
            return
        }
        spinner.succeed();
        console.log(chalk.green('\n 下载完成 (｡･ω･｡)ﾉ \n'))
    })
})