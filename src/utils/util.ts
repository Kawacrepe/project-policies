import { join } from 'path'
import { readFile } from 'fs/promises'

export async function getFile(FILE): Promise<any> {
  const CWD = process.cwd()
  let userFile = await readFile(join(CWD, FILE));
  let fileJson = Object.create(null)
  try {
    fileJson = JSON.parse(userFile.toString())
  } catch(e) {
    // Throw error onto console
    return e
  }
  return fileJson
}