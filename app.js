'use strict'
//lambda to post messages on to slack channel
const https = require('https');
exports.handler = (event, context, callback) => {
  const xpath = process.env.XPATH_VALUE
  const payload = JSON.stringify({
    text: `Message sent by ${event.name} :\n ${event.message}`,
  })
  const options = {
    hostname: "hooks.slack.com",
    method: "POST",
    path: `${xpath}`
  }
  const req = https.request(options,
      (res) => res.on("data", () => callback(null, "OK")))
  req.on("error", (error) => callback(JSON.stringify(error)))
  req.write(payload)
  req.end()
}
/*const xpath = process.env.XPATH_VALUE
console.log(xpath)
const payload = JSON.stringify({text: `BOOM!`})
console.log(payload)
const options = {
  hostname: "hooks.slack.com",
  method: "POST",
  path: `${xpath}`
}
const req = https.request(options, (res)=>{
  console.log('statusCode:',res.statusCode)
  res.on('data', (d) => {
    process.stdout.write(d);
  })
})
req.write(payload)
req.end()
*/