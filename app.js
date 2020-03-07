//lambda to post messages on to slack channel
const https = require('https');

exports.handler = (event, context, callback) => {
  const payload = JSON.stringify({
    text: `Message sent by ${event.name} :\n ${event.message}`,
  })
  
  const options = {
    hostname: "hooks.slack.com",
    method: "POST",
    path: "/services/TGEKBEPMM/BV1DR8U7J/RMeattqrMFh7PCt4WC00stBS",
  }

  const req = https.request(options,
      (res) => res.on("data", () => callback(null, "OK")))
  req.on("error", (error) => callback(JSON.stringify(error)))
  req.write(payload)
  req.end()
}

/*
const payload = JSON.stringify({text: `BOOM!`})
console.log(payload)
const options = {
  hostname: "hooks.slack.com",
  method: "POST",
  path: "/services/TGEKBEPMM/BV1DR8U7J/RMeattqrMFh7PCt4WC00stBS"
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