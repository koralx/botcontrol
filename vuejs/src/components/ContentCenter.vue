<template>
    <div class="content">
        <form class="form" method="post">
            <div class="form-input">
                <input type="text" class="input"  v-model="form.token" required>
                <label class="label">Токен бота</label>
            </div>
            <input class="form__button-input" type="button" value="ON/OFF" v-on:click="submitForm()">
        </form>
    </div>
</template>

<script>
import axios from 'axios'
import { io } from "socket.io-client";

export default {
    name: 'ContentCenter',
    data() {
        return {
            form: {
                token: '',
            }
        }
    },
    
    methods: {
        submitForm() {
            const socket = io("ws://localhost:3000",  { transports : ['websocket'] });
            axios.post('http://localhost:3000/start', this.form)
            socket.emit("hello from client", 5, "6", { 7: Uint8Array.from([8]) });

            // receive a message from the server
            socket.on("hello from server", () => {
            // ...
            });
        }
    }
}
</script>

<style lang="scss">
.content {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.form {
    display: flex;
    &-input {
        position: relative;
        height: 70px;
        width: 750px;
    }
    .input {
        box-sizing: border-box;
        font-family: 'Montserrat';
        font-size: 16px;
        outline: none;
        padding-top: 12px;
        padding-left: 16px;
        height: 70px;
        width: 750px;
        border: 1.5px solid black;
        border-radius: 8px;
    }

    .label {
        font-family: 'Montserrat';
        font-size: 16px;
        position: absolute;
        pointer-events: none;
        left: 16px;
        top: 0px;
        line-height: 70px;
        transition: .3s;
        color: #767676;
    }

    .input {

        &:focus~.label,
        &:not(:focus):valid~.label {
            top: -20px;
            font-size: 14px;
        }
    }
    &__button-input {
        background: white;
        margin: 0 12px;
        border: 1px solid black;
        height: 70px;
        width: 132px;
        border: 1.5px solid black;
        border-radius: 8px;
    }
}

</style>