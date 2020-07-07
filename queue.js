const Redis = require('ioredis')
const { Queue, QueueScheduler, Worker } = require('bullmq')

const connection = new Redis({
  port: 6379,
  host: 'localhost'
})

const queueScheduler = new QueueScheduler('test', { connection })
const queue = new Queue('test', { connection })

const worker = new Worker(
  'test',
  async job => {
    if (job.name === 'inventory') {
      console.log(job.data)
    }
  },
  {
    connection,
    limiter: {
      max: 1,
      duration: 1000
    }
  }
)

module.exports = queue
