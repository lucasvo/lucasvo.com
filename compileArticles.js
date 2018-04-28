var fs = require('fs');


function loadArticles () {
    let content = "";

    let items = fs.readdirSync('content/')
    items.sort().reverse()

    items.forEach(item => {
        if (item == 'LICENSE') {
            return
        }
        let file = 'content/'+item
        content = content + fs.readFileSync(file, 'utf8')
    })

    return content
}
module.exports = loadArticles
