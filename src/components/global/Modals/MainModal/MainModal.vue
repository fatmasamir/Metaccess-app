<script setup lang="ts">
// props
interface Props {
    notFixed?: boolean;
}
const props = defineProps<Props>();
// emit
const emit = defineEmits(["close"]);
</script>
<template>
    <section class="main-modal" :class="{ notFixed }">
        <section class="main-box">
            <header v-if="!notFixed">
                <!-- close -->
                <section class="close">
                    <button @click="emit('close')">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15.708"
                            height="15.708"
                            viewBox="0 0 15.708 15.708"
                        >
                            <path
                                id="Path_7"
                                data-name="Path 7"
                                d="M22.879,8.243a1.829,1.829,0,0,0-2.587,0l-4.731,4.731L10.83,8.243A1.829,1.829,0,1,0,8.243,10.83l4.731,4.731L8.243,20.292a1.829,1.829,0,1,0,2.587,2.587l4.731-4.731,4.731,4.731a1.829,1.829,0,1,0,2.587-2.587l-4.731-4.731,4.731-4.731A1.829,1.829,0,0,0,22.879,8.243Z"
                                transform="translate(-7.707 -7.707)"
                                fill="#858585"
                            />
                        </svg>
                    </button>
                </section>
            </header>
            <form @submit.prevent>
                <!-- header -->
                <header>
                    <!-- icon -->
                    <section class="icon">
                        <slot name="icon"> </slot>
                    </section>
                    <!-- title -->
                    <slot name="info"></slot>
                </header>
                <!-- inputs -->
                <section class="inputs">
                    <slot name="inputs"></slot>
                </section>
                <!-- buttons -->
                <section class="buttons">
                    <slot name="buttons"></slot>
                </section>
            </form>
        </section>
    </section>
</template>
<style lang="scss">
@import "../../../../assets/scss/_variables.scss";

.main-modal {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: var(--overlay);
    z-index: 9999999;
    display: flex;
    justify-content: center;
    align-items: center;
    &.notFixed {
        position: relative;
        background: none;
        padding: 50px 0;
        z-index: 1;
        border: 1px solid var(--gray-border-color);
        border-radius: var(--main-border-radius);
        .main-box {
            width: 100%;
            height: auto;
        }
    }
    .main-box {
        width: 600px;
        max-height: 98%;
        background: var(--white-color);
        border-radius: var(--main-border-radius);
        padding: 20px;
        overflow-y: scroll;
        @media screen and (max-width: map-get($grid, lg)) {
            max-width: 98%;
        }
        &::-webkit-scrollbar {
            width: 5px;
        }
        &::-webkit-scrollbar-track {
            box-shadow: none;
        }
        &::-webkit-scrollbar-thumb {
            background-color: var(--second-color) r;
            outline: 1px solid transparent;
        }
        > header {
            margin: {
                bottom: 20px;
            }
            .close {
                width: 100%;
                display: flex;
                justify-content: flex-start;
                button {
                    all: unset;
                    width: 40px;
                    height: 40px;
                    background: var(--first-button-background);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: var(--main-border-radius);
                    cursor: pointer;
                }
            }
        }
        form {
            display: flex;
            flex-direction: column;
            header {
                display: flex;
                flex-direction: column;
                .icon {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                h4,
                p {
                    text-align: center;
                }
                h4 {
                    color: var(--first-text-color);
                    margin: 20px 0;
                }
                p {
                    color: var(--second-text-color);
                    margin: 0;
                    line-height: 30px;
                }
            }
            .inputs {
                margin: {
                    top: 30px;
                }
            }
            .buttons {
                width: 100%;
                display: flex;
                justify-content: center;
                column-gap: 10px;
                margin: {
                    top: 30px;
                }
                button {
                    width: 30%;
                    padding: 15px 0;
                    border-radius: var(--main-border-radius);
                    background: none;
                    border: none;
                    &.success {
                        color: var(--white-color);
                        background: var(--third-color);
                    }
                    &.cancel {
                        color: var(--second-text-coloe);
                        background: var(--gray-color);
                    }
                }
            }
        }
    }
}
</style>
