<script setup name="MenuEditFormDialog">
import { reactive, ref } from 'vue'
import formJson from './MenuEditFormDialogConfig.json'

/* 注意：formJson是指表单设计器导出的json，此处演示的formJson只是一个空白表单json！！ */
const newFormJson = reactive(formJson)
const formData = reactive({})
const optionData = reactive({})
const vFormRef = ref(null)
</script>

<template>
  <div>
    <v-form-render ref="vFormRef" :form-json="newFormJson" :form-data="formData" :option-data="optionData" />
  </div>
</template>
