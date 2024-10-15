<template>
    <ul class="question-card">
        <li v-for="(question, index) of questions" :key="question.question" 
        class="question"
        :class="index === active ? 'question-current' : ''"
        >
            <span>{{ question.question.split('a')[0] }}</span>
            <slot name="user-answer" :index="index" :answer="question.answer"></slot>
            <span>{{ question.question.split('a')[1] }}</span>
        </li>
    </ul>
</template>

<script lang="ts" setup>
import { defineOptions } from 'vue'

const props = defineProps<{
    questions: {
        question: string;
      answer: string;
    }[]
}>()

const active = defineModel('active')

defineOptions({
    name: 'Question'
})
</script>

<style lang="less" scoped>
.question-card {
    background-color: aliceblue;
    overflow: hidden;
    width: 80vw;
    height: 160px;
    padding: 32px 0 0;
    border-radius: 8px;

    .question {
        font-size: 28px;
        opacity: 0;
        transform: scale(0.1);
        transition: all 0.5s;
        transform-origin: center;
        font-weight: 600;
        color: #000;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 0;

        &-current {
            height: 80px;
            opacity: 1;
            transform: scale(1);
            margin-bottom: 44px;

            & + .question {
                opacity: 0.4;
                transform: scale(0.6);
            }        
        }
    }
}
</style>