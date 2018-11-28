import { Router } from 'express'
import { Ipad } from '../models/ipad'

const router = Router()

/*
Get all iPads
 */
router.get('/', async (req, res) => {
  try {
    let ipads = await Ipad.findAndCount()
    let prettier = {
      ipads: ipads[0],
      count: ipads[1]
    }
    res.json(prettier)
  } catch (err) {
    res.status(500).json(err)
  }
})

/*
Get a single iPad
 */
router.get('/:id', async (req, res) => {
  try {
    let ipad = await Ipad.findOneOrFail(req.params.id)
    res.json(ipad)
  } catch (err) {
    if (err.name === "EntityNotFound") {
      res.status(404).json({
        error: "EntityNotFound",
        message: `ipad ${req.params.id} not found - oh no!`
      })
    } else {
      res.send(err)
    }
  }
})

/*
Create a new iPad
 */
router.post('/', async (req, res) => {
  try {
    let newIpad = new Ipad()
    newIpad.assetNumber = req.body.assetNumber
    newIpad.ipadModel = req.body.ipadModel
    newIpad.iosVersion = req.body.iosVersion
    await newIpad.save()
    res.send(newIpad)
  } catch (err) {
    res.send(err)
  }
})

/*
Update an iPad
 */
router.put('/:id', async (req, res) => {
  try {
    // first update the entity
    // any keys that are not matched by the entity in the body payload are ignore by typeorm on the update
    await Ipad.update(req.params.id, { ...req.body })
    // next get the updated entity to send back to client
    // this is 2 queries but I do not expect it to happen ofter
    let updatedIpad = await Ipad.findOne(req.params.id)
    res.send(updatedIpad)
  } catch (err) {
    res.send(err)
  }
})

/*
Delete an iPad
 */
router.delete('/:id', async (req, res) => {
  try {
    let ipad = await Ipad.findOne(req.params.id)
    await ipad.remove()
    res.send(ipad)
  } catch (err) {
    res.send(err)
  }
})

export default router
