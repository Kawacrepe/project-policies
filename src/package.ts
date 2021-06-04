import { getFile } from './utils/util'

export async function checkPackageAttributes(configAttributes) {
  const packageFile = await getFile('package.json')
  let errorCount = 0
  const errorMessage = (attrib) => `There is an error at ${attrib} inside package.json`

  for(const attrib of Object.keys(configAttributes)) {
    if(!packageFile[attrib]) {
      console.error(errorMessage(attrib))
      errorCount += 1
    }
  }
  
  if(errorCount > 0) { 
    return true 
  }
  console.log("Everything went well on package.json analysis")
  return false
}