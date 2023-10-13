<template>
    <NuxtLayout>
        <div class="flex flex-col">
            <div v-if="error.statusCode === '404'" class="prose">
                <h1>
                    404
                </h1>
                <p>
                    I guess does page not exist
                </p>
            </div>

            <div v-else class="prose">
                <h1>Dang</h1>
                <p>It looks like something gone wrong.</p>

            </div>

            <div class="prose">
                <p>
                    <strong>
                        {{ error.message }}
                    </strong>
                </p>

                Go to the <a class="hover:cursor-pointer" @click="handleError"> first lesson. </a>
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup>

const error = useError()



const handleError = () => {
    clearError({
        redirect: '/course/chapter/1-chapter-1/lesson/1-introduction-to-typescript-with-vue-js-3'
    })
}

useHead({
    title: 'Error'
})


</script>