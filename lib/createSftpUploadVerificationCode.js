const formatDate = require('./formatDate');
function createSftpUploadVerificationCode() {
    let verificationCode = new Date(formatDate(new Date(), "yyyy-MM-dd")).getTime() + ""
    let code = verificationCode.replace(/00/g, "")
    return code
}
module.exports = createSftpUploadVerificationCode;