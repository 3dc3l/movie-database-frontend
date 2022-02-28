<template>
    <div class="modal_bg">
        <div class="bg"></div>
        <div class="modal">
            <div class="modal_wrapper">
                <div class="title">Are you sure you want to Delete this Item?</div>
                <div class="actions">
                    <div class="buttons">
                        <button type="submit" class="btn pointer" @click="$parent.deleteReview">Delete</button>
                        <div class="btn pointer cancel" @click="$parent.toggleModal">Cancel</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="stylus">
    .modal_bg
        width: 100%
        height: 100%
        position: relative
        .bg
            position: fixed
            top: 0
            left: 0
            right: 0
            bottom: 0
            width: 100%
            height: 100%
            background-color: #000000d1
            z-index: 7
        .modal
            position: fixed
            top: 50%
            left: 50%
            transform: translate(-50%, -50%)
            background-color: white
            border-radius: 25px
            width: 500px
            z-index: 9
            padding: 20px
            text-align: center
            .title
                font-family: 'bebas-regular'
                font-size: 22px
            .actions
                padding-top: 20px
</style>