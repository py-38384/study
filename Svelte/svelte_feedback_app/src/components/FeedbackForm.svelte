<script>
    import { createEventDispatcher } from "svelte";
    import { FeedbackStore } from "../stores";
    import RatingSelect from "./RatingSelect.svelte";
    import { v4 } from "uuid";
    const dispatch = createEventDispatcher()
    let btnDisable = true
    let message
    let rating = 10
    let value = ''
    let min = 10
    const handle_input = (e) => {
        value = e.target.value
        if (value.length < min){
            btnDisable = true
            message = `Write a long feedback you lazy fuck..`
        }else{
            message = undefined
            btnDisable = false
        }
    }
    const handle_submit = (e) => {
        if(value.length>9){
            const newFeedback = {
                id: v4(),
                text : value,
                rating: Number(rating)
            }
            $FeedbackStore = [newFeedback,...$FeedbackStore]
            document.querySelector('#inputBox').value = ''
        }
    }
    const handle_select = e => rating = e.detail
</script>
<form action="" on:submit|preventDefault={handle_submit}>
    <h1>Rate Us you slow shit</h1>
    <RatingSelect on:rating-select={handle_select}/>
    <div class="input-group">
        <input on:input={handle_input} id="inputBox" type="text" placeholder="Tell us about our fu**king service for your worthless life..">
        <button disabled={btnDisable} type="submit">Submit</button>
    </div>
    {#if message}
        <div class="message">{message}</div>
    {/if}
</form>

<style>
    h1{
        text-align: center;
        color: #202142;
    }
    form{
        border: 1px solid rgb(122, 122, 122);
        padding: 10px;
        border-radius: 10px;
        background-color: white;
        margin-bottom: 20px;
    }
    button{
        border: 0;
        outline: 0;
        /* border-radius: 0 15px 15px 0; */
        height: 100%;
        height: 40px;
        padding: 5px;
        background-color: #ff6a95;
        color: white;
        border-radius: 5px;
        cursor: pointer;
    }
    button:hover{
        background-color: #f3668e;
    }
    button:active{
        background-color: transparent;
        border: 1px solid white;
    }
    button:disabled:active{
        border: none;
    }
    button:disabled{
        background-color: rgb(207, 207, 207);
        color: gray;
    }
    header {
    max-width: 400px;
    margin: auto;
  }

  header h2 {
    font-size: 22px;
    font-weight: 600;
    text-align: center;
  }

  .input-group {
    display: flex;
    flex-direction: row;
    border: 1px solid #ccc;
    padding: 3px 4px;
    border-radius: 8px;
    margin-top: 15px;
  }

  input {
    flex-grow: 2;
    border: none;
    font-size: 16px;
    padding: 10px;
    background-color: transparent;
    color: #202142;
  }

  input:focus {
    outline: none;
  }

  .message{
    padding-top: 10px;
    text-align: center;
    color: rebeccapurple;
  }
</style>