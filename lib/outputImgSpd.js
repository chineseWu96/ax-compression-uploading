function outputImgSpd(imgSpd = () => {
    /*
                                  .__           
__  _  _______ _______  ____ |__| ____    ____  
\ \/ \/ /\__  \\_  __ \/    \|  |/    \  / ___\ 
 \     /  / __ \|  | \/   |  \  |   |  \/ /_/  >
  \/\_/  (____  /__|  |___|  /__|___|  /\___  / 
              \/           \/        \//_____/  */
}) {
    return new Promise((resolve, reject)=>{
        let imgStr = imgSpd.toString().substring(
            imgSpd.toString().indexOf("/*") + 3,
            imgSpd.toString().lastIndexOf("*/")
        )
        resolve(imgStr)
    })

}
module.exports = outputImgSpd;