<script setup lang="ts">
import { onBeforeUnmount, onMounted } from "@vue/runtime-core";

const emit = defineEmits(["close"]);
// close modal

onMounted(() => {
    document.body.style.overflowY = "hidden";
});
onBeforeUnmount(() => {
    document.body.style.overflowY = "scroll";
});
</script>
<template>
    <section class="nice-modal">
        <section class="box">
            <!-- header -->
            <header>
                <!-- title -->
                <section class="title">
                    <slot name="title"></slot>
                </section>
                <!-- close -->
                <button @click="emit('close')">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="#000000"
                    >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path
                            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
                        />
                    </svg>
                </button>
            </header>
            <!-- message -->
            <section class="message">
                <slot name="message"></slot>
            </section>
            <!-- buttons -->
            <section class="buttons">
                <slot name="buttons"></slot>
            </section>
        </section>
    </section>
</template>
<style lang="scss">
@import "../../../../assets/scss/_variables.scss";

.nice-modal {
    background: var(--overlay);
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99999;
    .box {
        width: 450px;
        background: var(--white-color);
        color: var(--first-text-color);
        padding: 20px 0;
        border-radius: var(--main-border-radius);

        header {
            display: flex;
            padding: 0 20px;
            .title {
                width: calc(100% - 50px);
                display: flex;
                align-items: center;
                h4 {
                    font: {
                        size: 24px;
                    }
                    margin: 0;
                }
            }
            button {
                all: unset;
                width: 50px;
                height: 50px;
                cursor: pointer;
                svg {
                    width: 40px;
                    height: 40px;
                }
            }
        }
        .message {
            display: flex;
            justify-content: center;
            border-top: 1px solid var(--button-border);
            border-bottom: 1px solid var(--button-border);
            margin: 20px 0;
            padding: 20px;
            p {
                margin: 0;
            }
            input {
                width: 100%;
                padding: 15px 10px;
                border-radius: var(--main-border-radius);
            }
        }
        .buttons {
            width: 100%;
            display: flex;
            justify-content: center;
            button {
                color: var(--first-text-color);
                margin: 0 10px;
                padding: 8px 34px;
                border-radius: var(--main-border-radius);
                border: none;
                outline: none;
                &.danger {
                    color: var(--white-color);
                    background: var(--danger-background);
                }
                &.success {
                    color: var(--white-color);
                    background: var(--success-background);
                }
            }
        }
    }
}
</style>
