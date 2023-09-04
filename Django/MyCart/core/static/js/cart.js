var updateBtns = document.getElementsByClassName("update-cart");

function getToken(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}
var csrftoken = getToken("csrftoken");

function getRadioSelected(name) {
  var ele = document.getElementsByName(name);
  for (let i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      return ele[i].dataset.value;
    }
  }
  return "not available";
}

for (let i = 0; i < updateBtns.length; i++) {
  updateBtns[i].addEventListener("click", function (e) {
    var productID = this.dataset.product;
    var action = this.dataset.action;
    var cart = this.dataset.cart;
    var quantity = this.dataset.quantity;
    var orderItemId = this.dataset.orderItemId;
    var has_color = this.dataset.color;
    var has_size = this.dataset.size;
    var color = "Default";
    var size = "Default";
    if (user === "AnonymousUser") {
    } else {
      if (cart) {
        if (has_color) {
          color = getRadioSelected("color");
        }
        if (has_size) {
          size = getRadioSelected("size");
        }
      }
      updateUserOrder(productID, action, quantity, color, size, orderItemId);
    }
  });
}
function updateUserOrder(productId, action, quantity, color, size, orderItemId) {
  var url = "/update_item/";
  if (quantity) {
    quantity = document.getElementById("add_cart_quantity").value;
    var param =
      "productID=" +
      productId +
      "&action=" +
      action +
      "&quantity=" +
      quantity +
      "&color=" +
      color +
      "&size=" +
      size +
      "&order_item_id=" +
      orderItemId;
  } else {
    quantity = 1;
    var param =
      "productID=" +
      productId +
      "&action=" +
      action +
      "&quantity=" +
      quantity +
      "&color=" +
      color +
      "&size=" +
      size +
      "&order_item_id=" +
      orderItemId;
  }

  let xhr = new XMLHttpRequest();
  xhr.open("post", url, true);
  xhr.onload = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var data = JSON.parse(xhr.response);
        if (Number(data["total_items"]) <= 0) {
          location.reload();
        }
        var row = document.getElementById("product_row_number_" + data["id"]);
        var product_total = document.getElementById("item_total_" + data["id"]);
        var subtotal = document.getElementById("subtotal");
        var total = document.getElementById("total");
        var cart = document.querySelectorAll(".cart-icon");

        if (subtotal && total) {
          subtotal.innerHTML = "$" + data["subtotal"];
          total.innerHTML = "$" + data["total"];
          product_total.innerHTML = "$" + data["total_price"];
        }
        if (Number(data["quantity"]) <= 0) {
          row.remove();
        }
        for (let i = 0; i < cart.length; i++) {
          cart[i].innerText = data["total_items"];
        }
        if(document.querySelector(
          ".add_cart_div"
        )){
          document.querySelector(
            ".add_cart_div"
          ).innerHTML = `<button class="btn btn-primary px-3 cart_add"
                  style="background:grey;cursor:default;border:none;pointer-events: none;"
                  data-product="{{product.id}}"
                  data-action="add">
                    <i class="fa fa-shopping-cart mr-1"></i> Added To Cart
                  </button>`;
          document.querySelector(".size_div").remove();
          document.querySelector(".color_div").remove();
        }
        
      }
    }
  };
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.setRequestHeader("X-CSRFToken", csrftoken);
  xhr.send(param);
}

function order_item_delete(ele) {
  product_id = ele.dataset.id;
  var url = "/order_item_delete/" + product_id;

  let xhr = new XMLHttpRequest();
  xhr.open("get", url, true);
  xhr.onload = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.readyState == 4 && xhr.status == 200) {
        location.reload();
      }
    }
  };
  xhr.send();
}

function addTrailingZeros(num, totalLength) {
  return String(num).padEnd(totalLength, "0");
}
