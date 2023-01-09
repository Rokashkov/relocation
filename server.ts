import express, { Request, Response } from 'express'
import next from 'next'
import { createServer as createHTTPServer } from 'http'
import { createServer as createHTTPSServer } from 'https'
import { resolve } from 'path'
import { readFileSync } from 'fs'

async function start () {
	const app = next({})

	await app.prepare()
	
	const server = express()

	server.use(express.static('public'))

	server.all('*', (req: Request, res: Response) => {
		const handle =  app.getRequestHandler()
		return handle(req, res)
	})

	const redirect = express()

	redirect.get('*', (req, res) => {
		res.redirect(`https://${ req.headers.host + req.originalUrl}`)
	})

	const __certs = resolve(__dirname, '..', '..', 'etc', 'letsencrypt', 'live', 'rokashkov.ru')

	const privateKey  = readFileSync(resolve(__certs, 'privkey.pem'), 'utf8')
	const certificate = readFileSync(resolve(__certs, 'fullchain.pem'), 'utf8')

	const credentials = {
		key: privateKey,
		cert: certificate
	}

	createHTTPSServer(credentials, server).listen(443)
	createHTTPServer(redirect).listen(80)
}

start()