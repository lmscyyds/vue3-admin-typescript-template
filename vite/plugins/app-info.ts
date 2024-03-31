import type { Plugin } from 'vite'

export default function appInfo(): Plugin {
  return {
    name: 'appInfo',
    apply: 'serve',
    async buildStart() {
      // const { bold, green, cyan, bgGreen, underline } = picocolors

      // console.log(
      //   boxen(
      //     `${bold(green(`由 ${bgGreen('Fantastic-admin')} 驱动`))}\n\n${underline('https://fantastic-admin.gitee.io')}\n\n当前使用：${cyan('基础版')}`,
      //     {
      //       padding: 1,
      //       margin: 1,
      //       borderStyle: 'double',
      //       textAlignment: 'center',
      //     },
      //   ),
      // )
    },
  }
}
