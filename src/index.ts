import { checkPackageAttributes } from './package'

async function main() {
  console.log(await checkPackageAttributes())
}

main()

export { checkPackageAttributes }