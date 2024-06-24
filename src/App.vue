<script setup lang="ts">
import Cell from './components/Cell.vue';
import Button from './components/Button.vue';
import { Result, setCorrect, setDoing, setWrong } from './models/Result'
import { reactive } from 'vue';
import { hasRepeteadValues, resolveMagicSquare, setArray } from './functions/magicSquare';

const result = reactive<Result>({
  status: 'doing',
  message: 'Insira seu quadrado!'
})


const handleSubmit = () => {
  event?.preventDefault()

  const data = setArray()

  if (hasRepeteadValues(data)) {
    return setWrong(result)
  }

  const response = resolveMagicSquare(data)

  if(response){
    return setCorrect(result)
  }

  setWrong(result)
}

</script>

<template>
  <div>
    <h1 class="text-4xl text-center pb-8"> {{ result.message }} </h1>
  </div>

  <form class="grid grid-cols-3 grid-rows-3 gap-2.5 w-full h-full p-10" @submit="handleSubmit">
    <Cell id="cell-0"/>
    <Cell id="cell-1"/>
    <Cell id="cell-2"/>
    <Cell id="cell-3"/>
    <Cell id="cell-4"/>
    <Cell id="cell-5"/>
    <Cell id="cell-6"/>
    <Cell id="cell-7"/>
    <Cell id="cell-8"/>
    <div class="col-span-full pt-6 flex justify-around">
      <Button class="bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 border-b-4 border-purple-700 hover:border-purple-500 rounded">
        Verificar
      </Button>
      <Button 
        type="reset" 
        class="bg-gray-500 hover:bg-gray-400 border-gray-600 hover:border-gray-500 text-white font-bold py-2 px-4 border-b-4 rounded outline-none"
        @click="setDoing(result)"      
      >
        Limpar
      </Button>
    </div>
  </form>
</template>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
