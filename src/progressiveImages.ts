import { ModuleThis } from '@nuxt/types/config/module'
import { VuetifyProgressiveModule } from 'vuetify-loader'

// https://github.com/vuetifyjs/vuetify-loader#progressive-images

export default function setupProgressiveImages (this: ModuleThis) {
  const { vue: vueLoader } = this.options.build!.loaders
  vueLoader.compilerOptions = vueLoader.compilerOptions || {}
  vueLoader.compilerOptions.modules = vueLoader.compilerOptions.modules || []
  vueLoader.compilerOptions.modules.push(VuetifyProgressiveModule)
  console.log(this.options.build!.loaders)

  // this.extendBuild((config) => {
  //   config.plugins!.push(new VuetifyLoaderPlugin(typeof options === 'object' ? options : {}))
  // })
}
