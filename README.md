# project-policies

The main goal of this project is to help people ensure they're codebase followed some rules which can be customized.

# Expected functionnalities

- Quickly setup constituents elements needed for a project based on custom rules
- Check package.json attributes
- Reinforce git hooks ? especially pre-push ?
- Use tool such as nsecure or others and expose the result ?
- Check a bunch of project, typically every repository inside a specific github organization ?
- Help developers to create custom based rules to check differents things in they're codebase

# Check package.json attributes

Check package.json attributes, such as:
- engines
- husky => prepush
- author
- description

# Config file 

To customize this project, you need to setup a **.pspconfig.json** file.

There is an example 
```json
{
  "package.json": {
    "author": true,
    "engines": true,
    "license": [true, ['MIT']]
  }
}
```