<script lang="ts" setup>
import { computed, defineOptions, onMounted, ref, withDefaults } from 'vue'
import { useRect } from '../composables/useRect';

defineOptions({
    name: 'Signature'
})

const stopPropagation = (event: Event) => event.stopPropagation();
function preventDefault(event: Event, isStopPropagation?: boolean) {
  /* istanbul ignore else */
  if (typeof event.cancelable !== 'boolean' || event.cancelable) {
    event.preventDefault();
  }

  if (isStopPropagation) {
    stopPropagation(event);
  }
}

const props = withDefaults(defineProps<{
  lineWidth?: number
  type?: string,
  penColor?: string,
  backgroundColor?: '',
}>(), {
    lineWidth: 3,
    type: 'png',
    penColor: '#000',
})
const emit = defineEmits<{
    start: [TouchEvent]
    signing: [TouchEvent]
    clear: []
    end: [TouchEvent]
    submit: [{
      image: string
      canvas: HTMLCanvasElement
    }]
}>()

const canvasRef = ref<HTMLCanvasElement>();
const wrapRef = ref<HTMLElement>();
let canvasRect: DOMRect;
let canvasWidth = 0;
let canvasHeight = 0;
const ctx = computed(() => {
    if (!canvasRef.value) return null;
    return canvasRef.value.getContext('2d');
});

const touchStart = (e: TouchEvent) => {
    if (!ctx.value) {
    return false;
    }

    ctx.value.beginPath();
    ctx.value.lineWidth = props.lineWidth;
    ctx.value.strokeStyle = props.penColor;
    canvasRect = useRect(canvasRef);

    emit('start', e);
};

const touchMove = (event: TouchEvent) => {
      if (!ctx.value) {
        return false;
      }

      preventDefault(event);

      const touch = event.touches[0];
      const mouseX = touch.clientX - (canvasRect?.left || 0);
      const mouseY = touch.clientY - (canvasRect?.top || 0);

      ctx.value.lineCap = 'round';
      ctx.value.lineJoin = 'round';
      ctx.value.lineTo(mouseX, mouseY);
      ctx.value.stroke();

      emit('signing', event);
};

const touchEnd = (event: TouchEvent) => {
      preventDefault(event);
      emit('end', event);
    };

const setCanvasBgColor = (
      ctx: CanvasRenderingContext2D | null | undefined,
    ) => {
      if (ctx && props.backgroundColor) {
        ctx.fillStyle = props.backgroundColor;
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
      }
};

const initialize = () => {
    if (canvasRef.value) {
        const canvas = canvasRef.value;
        const dpr = window.devicePixelRatio;

        canvasWidth = canvas.width = (wrapRef.value?.offsetWidth || 0) * dpr;
        canvasHeight = canvas.height = (wrapRef.value?.offsetHeight || 0) * dpr;
        ctx.value?.scale(dpr, dpr);
        setCanvasBgColor(ctx.value);
    }
};

const clear = () => {
      if (ctx.value) {
        ctx.value.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.value.closePath();
        setCanvasBgColor(ctx.value);
      }
      emit('clear');
};

const isCanvasEmpty = (canvas: HTMLCanvasElement) => {
      const empty = document.createElement('canvas');
      empty.width = canvas.width;
      empty.height = canvas.height;
      if (props.backgroundColor) {
        const emptyCtx = empty.getContext('2d');
        setCanvasBgColor(emptyCtx);
      }
      return canvas.toDataURL() === empty.toDataURL();
    };

const submit = () => {
      const canvas = canvasRef.value;
      if (!canvas) {
        return;
      }

      const isEmpty = isCanvasEmpty(canvas);

      const image: string = isEmpty
        ? ''
        : (
            {
              jpg: (): string => canvas.toDataURL('image/jpeg', 0.8),
              jpeg: (): string => canvas.toDataURL('image/jpeg', 0.8),
            }[props.type] as () => string
          )?.() || canvas.toDataURL(`image/${props.type}`);

      emit('submit', {
        image,
        canvas,
      });
    };
    
defineExpose({
  submit,
  clear
})


onMounted(initialize)
</script>

<template>
  <div  class="signature">
      <div ref="wrapRef" class="signature__content">
          <canvas
            ref="canvasRef"
            @touchstart="touchStart"
            @touchmove="touchMove"
            @touchend="touchEnd"
          />
      </div>

      <div class="signature__bg">
        <span class="text">手写板</span>
      </div>
  </div>
</template>

<style lang="less">
:root,
:host {
  --signature-content-height: 200px;
  --signature-content-border: 1px dotted #dadada;
}

.signature {
  position: relative;

  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--signature-content-height);
    border: var(--signature-content-border);
    overflow: hidden;

    canvas {
      width: 100%;
      height: 100%;
    }
  }

  &__bg {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;

    .text {
      font-family: PingFangSC-Medium, sans-serif;
      font-size: 24px;
      font-weight: 500;
      color: rgba(0, 0, 0, .2);
      text-align: center;
      pointer-events: none;
    }
  }
}
</style>