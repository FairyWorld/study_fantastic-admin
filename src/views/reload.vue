<route>
{
    meta: {
        constant: true,
        layout: false
    }
}
</route>

<script setup>
const router = useRouter()

onMounted(() => {
    router.go(-1)
})
</script>

<template>
    <div />
</template>
