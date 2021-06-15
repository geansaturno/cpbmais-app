<template>
    <div class="readingAsset flexColumn">
        <div class="readingAsset__imageContainer">
            <img :src="img" alt="title" class="readingAsset__image">
        </div>
        <div class="center readingAsset__title">
            {{title}}
        </div>
        <div class="center readingAsset__description">
            {{description}}
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  name: 'ReadingAsset'
})
export default class ReadingAsset extends Vue {
    @Prop({
      required: true
    })
    title!: string

    @Prop({
      required: true
    })
    description!: string

    @Prop({
      required: true
    })
    img!: string
}
</script>

<style lang="scss">
@import '@/assets/scss/variables';
@import '@/assets/scss/components/utils/position';

.readingAsset {
    border: 1px solid $g2;
    padding-bottom: 30px;

    &__imageContainer {
        position: relative;

        &::after,
        &::before {
            opacity: .5;
            width: 25%;
            height: 100%;
            content: ' ';
            display: block;
            position: absolute;
            top: 0;
        }

        &::before {
            left: 0;
            background-image: linear-gradient(90deg, $g6, transparent);

        }

        &::after {
            right: 0;
            background-image: linear-gradient(90deg, transparent, $g6);
        }
    }

    &__image {
        width: 100%;
        display: block;
    }

    &__title {
        margin-top: 10px;
        font-size: 18px;
        color: $color-primary;
    }

    &__description {
        margin-top: 22px;
        font-size: 25px;
        color: $g4;
    }
}

</style>
