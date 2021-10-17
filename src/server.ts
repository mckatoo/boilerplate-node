import http from 'http'
import { somethingFunction } from '@services/delete/this/folder'

// create simple server with http module, route / and listen on port 3000
http.createServer((_req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end(`Hello World - ${somethingFunction()}`)
}
).listen(3000)
