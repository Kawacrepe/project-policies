import { checkPackageAttributes } from './package'
import { getFile } from './utils/util'

function handlerConfig(item, attributes) {
  // TODO update this switch statement to add differents features such as check
  // specific files etc...
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
    //TODO add default configuration when there is no .pspconfig.json file
    throw new Error('Missing configuration file')
  } else {
    for(const item of Object.keys(pspConfig)) {
      handlerConfig(item, pspConfig[item])
    }
  }
}

main()
