// const { Telegraf, Telegram } = require('telegraf')

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1/telegram', () => {
// 	Bot.updateMany({
// 		status_launch: true
// 	}, {
// 		status_launch: false
// 	}, (err, data) => {
// 		if (err != null) {
// 			console.log('\x1b[31m', err, "\x1b[0m")
// 		}
// 	})
// })

// const Bot = require('../models/bot');

// const Router = require('koa-router');
// const router = new Router()
// const safeCompare = require('safe-compare')

// const url = 'https://78c0-31-162-1-225.ngrok.io'



// router
// 	//crate bot
// 	.post('/create', (ctx, next) => {
// 		const token = ctx.request.body.token
// 		if (token === undefined) {
// 			throw new Error('BOT_TOKEN must be provided!')
// 		}
// 		new Telegram(token).getMe().then(data => {
// 			Bot.findOneAndUpdate({
// 				token: token
// 			}, {
// 				token: token,
// 				bot_id: data.id
// 			}, {
// 				upsert: true
// 			}, () => {
// 				console.log('Created')
// 			});
// 			ctx.response.body = 'created'
// 		})
// 	})

// 	//start bot
// 	.post('/start', (ctx, next) => {
// 		const token = ctx.request.body.token
// 		if (token === undefined) {
// 			throw new Error('BOT_TOKEN must be provided!')
// 		}

// 		Bot.findOneAndUpdate({
// 			token: token,
// 			status_launch: false
// 		}, {
// 			status_launch: true
// 		});

// 		const bot = new Telegraf(token)
// 		const secretPath = `/telegraf/${token}`
// 		bot.telegram.setWebhook(`${url + secretPath}`)

// 		console.log('[ ✅ ] Run')
// 		ctx.response.body = 'Started'
// 	})

// 	//set start command message
// 	.post('/startmessage', (ctx, next) => {
// 		const token = ctx.request.body.token;
// 		if (token === undefined) {
// 			throw new Error('BOT_TOKEN must be provided!')
// 		}
// 		Bot.findOneAndUpdate({
// 			token: token
// 		}, {
// 			start_message: ctx.request.body.message
// 		});
// 		ctx.response.body = 'created'
// 	})

// 	.post('/addcommand', (ctx, next) => {
// 		const body = ctx.request.body
// 		const token = body.token;
// 		if (token === undefined) {
// 			throw new Error('BOT_TOKEN must be provided!')
// 		}
// 		Bot.findOneAndUpdate({ token: token }, { $push: { commands: [{ command: body.command, msg_type: body.type, data: body.data }] }}, {overwrite: false, upsert: false }, (err, data) => {
// 			console.log('Created')
// 		});

// 		ctx.response.body = 'Created'
// 	})

// 	.post('/stop', (ctx, next) => {
// 		console.log(ctx.request.body)
// 	})

// 	.post('/delete', (ctx, next) => {
// 		console.log(ctx.request.body)
// 	})

// 	//get update
// 	.post('/telegraf/:token', async (ctx, next) => {
// 		console.log("\x1b[31m", ctx.params.token, "\x1b[0m")
// 		let token = ctx.params.token
// 		const secretPath = `/telegraf/${token}`

// 		if (safeCompare(secretPath, ctx.url)) {
// 			let bot = new Telegraf(token)
// 			bot.webhookCallback(`${url + secretPath}`)

// 			Bot.findOne({
// 				token: token
// 			}, (err, data) => {

// 				data.commands.forEach(element => {
// 					bot.command(element.command, (ctx) => {
// 						if (element.msg_type			==			 'image') {
// 							console.log(element.data)
// 							ctx.replyWithPhoto({url: element.data})
// 						}
// 					})
// 				});

// 				bot.start((ctx) => ctx.reply(data.start_message))
// 				console.log(data.commands)
// 			})
// 			bot.handleUpdate(ctx.request.body)
// 			ctx.status = 200
// 			return
// 		}
// 		return next()
// 	})

// module.exports = router