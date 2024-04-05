<!-- eslint-disable ts/no-require-imports -->
<script setup lang="ts">
import path from 'path-browserify'
import type { AsyncComponentLoader } from 'vue'
import { defineAsyncComponent, onBeforeMount, reactive, ref, useAttrs, watch } from 'vue'

defineOptions({
  name: 'ProFormDialog',
  inheritAttrs: false,
})

const props = withDefaults(defineProps<{
  title?: string
  visible: boolean
  fullscreen?: boolean
  config?: any
  contentHeight?: string
  closeOnClickModal?: boolean
  componentPath: string
}>(), {
  title: '操作',
  visible: false,
  fullscreen: false,
  config: {},
  contentHeight: '60vh',
  closeOnClickModal: false,
  componentPath: '',
})

const emit = defineEmits<{
  'update:visible': [ visible: boolean ]
}>()
watch(props, (val) => {
  console.log(val)
})

let childComponent = reactive({})

function loadComponent(view) {
  const modules = import.meta.glob('@/views/**/*.vue')
  const path = `/src/${view}`
  console.log(modules[path], modules)

  return defineAsyncComponent(modules[path] as AsyncComponentLoader<globalThis.Component>)
}

onBeforeMount(async () => {
  console.log('kaishi')
  childComponent = loadComponent(props.componentPath)
  console.log(props, 'props', childComponent)
})

const attrs = useAttrs()

const proFormDialog = ref()

function handleClose() {
  emit('update:visible', false)
}
console.log(props.visible, '222222')
</script>

<template>
  <el-dialog
    ref="proFormDialog"
    v-bind="attrs"
    :model-value="props.visible"

    append-to-body
    class="yjFormDialog"
    :before-close="handleClose"
    :close-on-click-modal="props.closeOnClickModal"
    :fullscreen="props.fullscreen"
    :modal="props.config.modal"
    :show-close="props.config.showClose"
    :title="props.title"
    :width="props.config.width || '80%'"
  >
    <div
      :style="{ height: props.config.fullscreen ? '100%' : props.contentHeight || '60vh' }"
    >
      <component
        :is="childComponent"
        :config="props.config"
        v-bind="$attrs"
      />
    </div>
  </el-dialog>
</template>
