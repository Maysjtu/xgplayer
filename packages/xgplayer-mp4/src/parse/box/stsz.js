import Box from '../box'
import Stream from '../stream'

Box.stsz = function () {
  let stream = new Stream(this.data)
  this.version = stream.readUint8()
  this.flag = Stream.readByte(stream.dataview, 3)
  this.sampleSize = stream.readUint32()
  this.count = stream.readUint32()
  let entries = []
  this.entries = entries
  console.log('-----------------')
  console.log('sample size:', this.sampleSize)
  if (this.sampleSize === 0) {
    for (let i = 0, count = this.count; i < count; i++) {
      entries.push(stream.readUint32())
    }
  }
  console.log('entries:', entries)
  delete this.subBox
  delete this.data
  stream = null
}
