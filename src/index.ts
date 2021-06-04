import { checkPackageAttributes } from './package'
import { getFile } from './utils/util'

function handlerConfig(item, attributes) {
  switch(item) {
    case 'package.json':
      return checkPackageAttributes(attributes)
    case 'default':
      return
  }
}

async function main() {
  const pspConfig = await getFile('.pspconfig.json')

  if (!pspConfig) {
    throw new Error('Missing configuration file')
  } else {
    for(const item of Object.keys(pspConfig)) {
      handlerConfig(item, pspConfig[item])
    }
  }
}

main()
