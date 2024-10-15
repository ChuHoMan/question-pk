<template>
  <div class="page">
    <Question
     :questions="question"
     v-model:active="activeQuestion" 
    >
      <template #user-answer="{ index, answer }">
        <span 
          class="input" 
        >
          <span>{{ userAnswer[index] }}</span>
          <Error  v-if="userAnswer[index] && userAnswer[index] !== answer"  />
          <Success v-else-if="userAnswer[index] && userAnswer[index] === answer"/>
        </span>
      </template>
    </Question>
    <Signature
     @submit="onSubmit"
      ref="signatureRef"
      @start="startSign"
      @signing="signing"
      @end="endSign"
    />
  </div>
</template>

<script setup lang="ts">
import { ComponentInstance, onBeforeMount, ref } from 'vue';
import Signature from './components/Signature.vue';
import { generateComparisonQuestions } from './data/match'
import Question from './components/Question.vue';
import Error from './components/Error.vue';
import Success from './components/Success.vue';

const signatureRef = ref<ComponentInstance<typeof Signature>>(null!);
const activeQuestion = ref(0);

const onClear = () => {
  signatureRef.value!.clear();
}

const touchInfo: Array<{
  x: number
  y: number
}> = []

const startSign = (e: TouchEvent) => {
  touchInfo.push({
    x: e.touches[0].clientX,
    y: e.touches[0].clientY
  })
}

const signing = (e: TouchEvent) => {
  touchInfo.push({
    x: e.touches[0].clientX,
    y: e.touches[0].clientY
  })
}

const endSign = () => {
  if (touchInfo.length < 3) {
    // 至少需要三个点来判断
    return;
  }

  const firstPoint = touchInfo[0];
  const lastPoint = touchInfo[touchInfo.length - 1];
  
  // 初始化最右边的点为第一个点
  let rightmostPoint = touchInfo[0];

  // 遍历所有触摸点，找到 x 最右的那一点
  for (let i = 1; i < touchInfo.length; i++) {
    if (touchInfo[i].x > rightmostPoint.x) {
      rightmostPoint = touchInfo[i];
    }
  }

  // 初始化最右边的点为第一个点
  let leftmostPoint = touchInfo[0];

  // 遍历所有触摸点，找到 x 最右的那一点
  for (let i = 1; i < touchInfo.length; i++) {
    if (touchInfo[i].x < leftmostPoint.x) {
      leftmostPoint = touchInfo[i];
    }
  }

  let answer = ''
  if (rightmostPoint.x > firstPoint.x && rightmostPoint.x > lastPoint.x) {
    answer = '>'
    console.log('用户输入的是大于号 (>)');
  } else if(leftmostPoint.x < firstPoint.x && leftmostPoint.x < lastPoint.x){
    console.log('用户输入的是小于号 (<)');
    answer = '<'
  } else {
    console.log('用户输入的是其他')
  }

  // 实现方案1： 找到距离第一个点最近的点
  // const closest = touchInfo.reduce((function(pre, current) {
  //       return Math.abs(pre.x - touchInfo[0].x) < Math.abs(current.x - touchInfo[0].x) ? current : pre
  // }
  // ), {
  //     x: touchInfo[0].x,
  //     y: touchInfo[0].y
  // });
  // if(closest.x > touchInfo[0].x) {
  //   answer = '>'
  //   console.log('用户输入的是大于号 (>)');
  // } else if (closest.x < touchInfo[0].x) {
  //   console.log('用户输入的是小于号 (<)');
  //   answer = '<'
  // }
  touchInfo.length = 0
  
  submitAnswer(answer)
}

const userAnswer = ref<string[]>([])
function submitAnswer(answer: string) {
  if(!answer) {
    setTimeout(() => {
      userAnswer.value[activeQuestion.value] = '';
      onClear();
    }, 1000)
  }

  userAnswer.value[activeQuestion.value] = answer;
  if(question.value[activeQuestion.value].answer === answer) {
    activeQuestion.value++;
    onClear();
  } else {
    setTimeout(() => {
      userAnswer.value[activeQuestion.value] = '';
      onClear();  
    }, 1000)
  }
}
const onSubmit = async (data: any) => {
  // 实现方案2： OCR 识别文字
  //   console.time('submit');
  //   image.value = data.image;
  //   const worker = await createWorker('eng');
  //   await worker.setParameters({
  //     tessedit_pageseg_mode: PSM.SINGLE_CHAR,
  //   tessedit_char_whitelist: '><',
  // });
  //   const ret = await worker.recognize(image.value);
  //   console.log('识别的文字：',ret.data.text);
  //   console.timeEnd('submit');
  //   await worker.terminate();
};

const question = ref<Array<{
  question: string
  answer: string
}>>([])

onBeforeMount(async () => {
  question.value = generateComparisonQuestions(10)
})

</script>

<style lang="less" scoped>
.page {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.input {
    position: relative;
    margin: 0 16px;
    background-color: #fff;
    border-radius: 50%;
    height: 80px;
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      width: 100%;
      height: 100%;
      transform: translate(-50%);
      display: block;
      background-size: contain;
      background-position: 50%;
      background-repeat: no-repeat;
    }

    svg {
      position: absolute;
      top: 0;
      left: 50%;
      width: 100%;
      height: 100%;
      transform: translate(-50%);
      display: block;
      background-size: contain;
      background-position: 50%;
      background-repeat: no-repeat;
    }
}
</style>
