<template>
    <div class="prose w-full max-w-2xl h-9">
        <h1>
            Log in to {{ title }}
        </h1>

        <button @click="login" class="bg-blue-500 text-white font-bold py-2 px-4 rounded"> 
            Log in with Github
        </button>
    </div>
</template>

<script setup>
const { title } = useCourse()
const supabase = useSupabaseClient()

useHead({
    title: 'Login Page'
})

const login = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
        provider: 'github'
    })

    if(error){
        console.log(error);
    }
}
</script>