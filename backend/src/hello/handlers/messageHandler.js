import * as messageRepository from '../repository'

export const addMessageHandler = async (req, res) => {
  await messageRepository.add(req.body.message)
  res.send()
}

export const getMessageHandler = async (req, res) => {
  const message = await messageRepository.findById(req.params.id)

  res.json(message)
}
