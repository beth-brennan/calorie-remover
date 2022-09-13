// Full Menu

const menuElements = document.querySelectorAll("p.ccl-649204f2a8e630fd.ccl-6f43f9bb8ff2d712.ccl-32ec9a3197735a65.ccl-08c109442f3e666d.ccl-40ad99f7b47f3781.ccl-ea9144c387bfb5b8, p.ccl-649204f2a8e630fd.ccl-6f43f9bb8ff2d712.ccl-08c109442f3e666d.ccl-40ad99f7b47f3781");

for (const element of menuElements) {
  element.innerHTML = "";
}

// Individual Item Modal

const itemNode = document.querySelector("body");

const itemConfig = { childList: true, attributes: true, characterData: true, subtree: true };

const itemCallback = (mutationList, observer) => {
  for (const mutation of mutationList) {
    document.querySelector(".MenuItemModal-64049887e657bc38").remove();

    const addons = document.querySelectorAll("p.ccl-649204f2a8e630fd.ccl-6f43f9bb8ff2d712.ccl-08c109442f3e666d.ccl-40ad99f7b47f3781, p.ccl-649204f2a8e630fd.ccl-6f43f9bb8ff2d712.ccl-32ec9a3197735a65.ccl-08c109442f3e666d.ccl-40ad99f7b47f3781.ccl-ea9144c387bfb5b8");

    for (const element of addons) {
      element.innerHTML = "";
    }
  }
}

const itemObserver = new MutationObserver(itemCallback);

itemObserver.observe(itemNode, itemConfig);

// Cart Section

const cartNode = document.querySelector(".Carousel-7ebf786c2374ca6b");

const cartConfig = { childList: true, attributes: true };

const cartCallback = (mutationList, observer) => {
  for (const mutation of mutationList) {
    if (mutation.type === 'childList' || mutation.type === 'attributes') {
      const addons = document.querySelectorAll("p.ccl-649204f2a8e630fd.ccl-6f43f9bb8ff2d712.ccl-08c109442f3e666d.ccl-40ad99f7b47f3781, p.ccl-649204f2a8e630fd.ccl-6f43f9bb8ff2d712.ccl-32ec9a3197735a65.ccl-08c109442f3e666d.ccl-40ad99f7b47f3781.ccl-ea9144c387bfb5b8");

      for (const element of addons) {
        element.innerHTML = "";
      }
    }
  }
}

const cartObserver = new MutationObserver(cartCallback);

cartObserver.observe(cartNode, cartConfig);

// Modal Changes

const modalNode = document.querySelector(".ccl-9237ff225b0d2789.ccl-e770a464a394226e.ccl-bae50209245d2304");

const modalConfig = { childList: true, attributes: true };

const modalCallback = (mutationList, observer) => {
  for (const mutation of mutationList) {
    if (mutation.type === 'childList' || mutation.type === 'attributes') {
      const addons = document.querySelectorAll("p.ccl-649204f2a8e630fd.ccl-6f43f9bb8ff2d712.ccl-08c109442f3e666d.ccl-40ad99f7b47f3781, p.ccl-649204f2a8e630fd.ccl-6f43f9bb8ff2d712.ccl-32ec9a3197735a65.ccl-08c109442f3e666d.ccl-40ad99f7b47f3781.ccl-ea9144c387bfb5b8");

      for (const element of addons) {
        element.innerHTML = "";
      }
    }
  }
}

const modalObserver = new MutationObserver(modalCallback);

modalObserver.observe(modalNode, modalConfig);
