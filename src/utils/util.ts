import { join } from 'path'
import { readFile } from 'fs/promises'

export async function getFile(FILE): Promise<any> {
  const CWD = process.cwd()
  let userFile = await readFile(join(CWD, FILE));
  const fileJson = JSON.parse(userFile.toString())

  return {
    fileJson
  }
}