<script setup lang="ts">
// props
const props = defineProps<{
    target: {
        title: string;
        name: string;
    };
    icon?: {
        name: string;
        reverse: boolean;
    };
}>();

// target link
const target_link = {
    name:
        props.target.name &&
        props.target.name != "#" &&
        props.target.name != "more"
            ? props.target.name
            : "Home",
};
</script>
<template>
    <section class="main-button">
        <router-link
            :to="target_link"
            v-if="icon"
            :class="{ reverse: icon.reverse }"
        >
            <section class="icon">
                <InlineSvg
                    :src="`/images/global/icons/global/${props.icon!.name}.svg`"
                />
            </section>

            {{ target.title }}
        </router-link>
        <router-link :to="target_link" v-else>
            {{ target.title }}
        </router-link>
    </section>
</template>
<style lang="scss">
.main-button {
    display: flex;
    justify-content: center;
    > a {
        background: var(--first-color);
        color: var(--white-color);
        padding: 12px 30px;
        text-decoration: none;
        border-radius: var(--main-border-radius);
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover {
            color: var(--white-color);
        }
        &.reverse {
            flex-direction: row-reverse;
            svg {
                margin: {
                    right: 0;
                    left: 10px;
                }
            }
        }
        .icon {
            height: 100%;
            display: grid;
            justify-content: flex-start;
            align-items: center;
            svg {
                margin: {
                    right: 10px;
                }
                path {
                    fill: var(--white-color);
                }
            }
        }
    }
}
[lang="ar"] {
    .main-button a {
        .icon {
            svg {
                margin: {
                    left: 10px;
                    right: 0;
                }
            }
        }

        &.reverse {
            .icon {
                transform: rotateY(0.5turn);

                svg {
                    transform: translateX(180deg);
                }
            }
        }
    }
}
</style>
