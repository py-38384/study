const auto_resize_textarea = document.querySelector('.textarea-wrapper textarea')
auto_resize_textarea.addEventListener("input", (e) => {
    auto_resize_textarea.style.height = `59px`
    let scHight = e.target.scrollHeight;
    auto_resize_textarea.style.height = `${scHight}px`
})