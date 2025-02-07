<script setup name="Editor">
import tinymce from 'tinymce/tinymce'
import TinymceEditor from '@tinymce/tinymce-vue'
import 'tinymce/themes/silver/theme'
import 'tinymce/icons/default/icons'
import 'tinymce/plugins/autolink'
import 'tinymce/plugins/autoresize'
import 'tinymce/plugins/colorpicker'
import 'tinymce/plugins/contextmenu'
import 'tinymce/plugins/fullscreen'
import 'tinymce/plugins/hr'
import 'tinymce/plugins/image'
import 'tinymce/plugins/imagetools'
import 'tinymce/plugins/insertdatetime'
import 'tinymce/plugins/link'
import 'tinymce/plugins/lists'
import 'tinymce/plugins/media'
import 'tinymce/plugins/preview'
import 'tinymce/plugins/table'
import 'tinymce/plugins/textcolor'
import 'tinymce/plugins/wordcount'
import 'tinymce/plugins/code'
import 'tinymce/plugins/searchreplace'

const props = defineProps({
    modelValue: {
        type: String,
        default: ''
    },
    setting: {
        type: Object,
        default: () => {}
    },
    disabled: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['update:modelValue'])

const defaultSetting = ref({
    language_url: 'tinymce/langs/zh_CN.js',
    language: 'zh_CN',
    skin_url: 'tinymce/skins/ui/oxide',
    content_css: 'tinymce/skins/content/default/content.min.css',
    min_height: 250,
    max_height: 600,
    selector: 'textarea',
    plugins: 'autolink autoresize contextmenu fullscreen hr image imagetools insertdatetime link lists media preview table textcolor wordcount code searchreplace',
    toolbar: 'undo redo | formatselect | bold italic strikethrough forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | hr link image media table insertdatetime searchreplace removeformat | preview code fullscreen',
    branding: false,
    menubar: false,
    toolbar_mode: 'sliding',
    insertdatetime_formats: [
        '%Y年%m月%d日',
        '%H点%M分%S秒',
        '%Y-%m-%d',
        '%H:%M:%S'
    ],
    images_upload_handler: (blobInfo, success) => {
        const img = 'data:image/jpeg;base64,' + blobInfo.base64()
        success(img)
    }
})

const myValue = ref(props.modelValue)

const completeSetting = computed(() => {
    return Object.assign(defaultSetting.value, props.setting)
})

watch(() => myValue.value, newValue => {
    emit('update:modelValue', newValue)
})

watch(() => props.modelValue, newValue => {
    myValue.value = newValue
})

onMounted(() => {
    tinymce.init({})
})
</script>

<template>
    <div class="editor">
        <TinymceEditor v-model="myValue" :init="completeSetting" :disabled="disabled" />
    </div>
</template>

<style lang="scss" scoped>
:deep(.tox-tinymce) {
    border: 1px solid #dcdfe6;
    border-radius: 4px;
}
</style>
