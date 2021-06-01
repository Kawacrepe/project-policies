import { getFile } from './utils/util'

export async function checkPackageAttributes() {
  const packageFile = await getFile('package.json')
  return packageFile
}