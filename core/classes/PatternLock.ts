let nodes: Node[] = []
let currentPattern: number[] = []
let correctPattern: number[] = [5, 1, 2, 4, 6, 7, 3]
let checkTimer = 0
let cursor = { x: 0, y: 0 }

export class Node {
  x: number = 0
  y: number = 0
  id: number
  r: number
  connected: boolean
  proxR: number = 0
  nodeNum: number = 0
  connect: Function
  // proxCheck: Function
  constructor(x: number, y: number) {
    this.id = this.nodeNum++
    this.x = x
    this.y = y
    this.r = 10
    this.proxR = 25
    this.connected = false
    this.connect = function () {
      if (!currentPattern.includes(this.id)) {
        this.connected = true
        currentPattern.push(this.id)
      }
    }
    // this.proxCheck = function () {
    //   let dx = this.x - cursor.x,
    //     dy = this.y - cursor.y,
    //     dist = Math.sqrt(dx * dx + dy * dy)
    //   return dist < this.proxR
    // }
  }
}
