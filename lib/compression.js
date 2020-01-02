
const tar = require('tar');
const log = console.log;
const formatDate = require('./formatDate');
const outputImgSpd = require('./outputImgSpd');
const prompt = require('./prompt');
const chalk = require('chalk')


function compressionTar(tarName = "./v" + formatDate(new Date(), "yyyy.MM.dd-hhmmss") + '.tar.gz', getDistPath = ["dist"],clientOption) {
    tar.create(
        {
            noPax: true,
            gzip: true,
            file: tarName
        },
        getDistPath
    ).then(reslut => {
        log(chalk.green("build tar success\n"));

        outputImgSpd().then(reslut => {
            log(chalk.yellow("\n\n" + reslut + "\n\n"));
        })
        prompt(tarName,clientOption);

    }).catch(error => {
        log(chalk.red("build tar error\n"));
        log(error);
    })
}

module.exports = compressionTar;