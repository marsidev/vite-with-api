import type { NextApiRequest, NextApiResponse } from 'next'
// import fs from 'fs' 
// import path from 'path' 
const fs = require('fs')
const path = require('path')

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const filePath = path.join(__dirname, '../src/assets/avatar.jpg')
  const buffer = fs.readFileSync(filePath)
  
  res.setHeader('Content-Type', 'image/jpg')
  res.send(buffer)
}
