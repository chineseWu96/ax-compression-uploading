
const scpClient = require('scp2')
const log = console.log;
var Client = require('scp2').Client;
const ProgressBar = require('ax-progressBar');
const inquirer = require('inquirer');
const createSftpUploadVerificationCode = require('./createSftpUploadVerificationCode');
const chalk = require('chalk')



function prompt(tarName, clientOption = {}) {
    inquirer.prompt([{
        type: 'confirm',
        name: 'value',
        message: '是否确认上传sftp?',
        default: false
    },]).then((answers) => {
        if (answers.value) {

            inquirer.prompt([{
                type: 'password',
                name: 'value',
                message: '请输入验证码',
                default: ""
            },]).then((reslut) => {

                Date.prototype.getSftpUploadVerificationCode = () => {
                    return createSftpUploadVerificationCode()
                }

                if (reslut.value == new Date().getSftpUploadVerificationCode()) {
                    log(chalk.cyan('\n\nin a upload sftp\n'))
                    let progressBar = new ProgressBar('上传进度', 100);
                    let client = new Client();
                    client.on('transfer', (buffer, uploaded, total) => {
                        progressBar.render({ completed: uploaded, total: total });
                    });
                    scpClient.scp(tarName,clientOption, client, function (err, scp) {
                        if (err) {
                            log(chalk.red("\n\nupload sftp error\n"));
                        } else {
                            log(chalk.green("\n\nupload sftp success\n"));
                        }
                    })
                } else {
                    log(chalk.red("\n\nverificationCode error，please contact your administrator\n"));
                }
            })

        } else {
            log(chalk.cyan('cancel upload sftp\n'))
        }
    })
}
module.exports = prompt;