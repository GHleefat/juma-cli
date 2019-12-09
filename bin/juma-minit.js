#!/usr/bin/env node

const download = require('download-git-repo')

// 默认github
url = 'GHleefat/jest-demo'
download(url, 'jest-demo', err=>{})

// 下载gitlab
// url = 'gitlab:http://10.101.0.161:H5/vue-project-basic-framework'
// download(url, 'vue-project-basic-framework',{headers:{'PRIVATE-TOKEN':'你的Access Token'}}, err=>{
//     console.log(err);
// })