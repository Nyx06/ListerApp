<template>

    <div>
        <input v-model="inputValue" type="text" @keydown.enter="updateValue" />
        <button :disabled="inputValue.length == 0" @click="updateValue" >{{props.btnLabel}}</button>
    </div>
    
</template>
<script setup>

import { ref } from 'vue';

const props = defineProps({
    btnLabel: {
        type: String,
        default: "Ajouter"
    }
});

const inputValue = ref("");

const emit = defineEmits(['newValue']);

function updateValue (argument) {
    if(inputValue.value.length == 0) return;
    emit("newValue", inputValue.value)
    inputValue.value = "";
}

</script>
<style scoped lang="scss">

div {
    display: flex;

    gap: .5em;

    input {
        flex-basis: 70%;
    }

    button{
        flex-basis: 30%;
    }
}

</style>
