// Full Menu

const menuElements = document.querySelectorAll("p.ccl-649204f2a8e630fd.ccl-6f43f9bb8ff2d712.ccl-32ec9a3197735a65.ccl-08c109442f3e666d.ccl-40ad99f7b47f3781.ccl-ea9144c387bfb5b8, p.ccl-649204f2a8e630fd.ccl-6f43f9bb8ff2d712.ccl-08c109442f3e666d.ccl-40ad99f7b47f3781");

for (const element of menuElements) {
  element.innerHTML = "";
}

// Mutation Observer

const body = document.querySelector("body");

const config = { attributes: true, subtree: true };

const callback = (mutationList, observer) => {
  for (const mutation of mutationList) {
    if (mutation.type === 'attributes') {
      const addons = document.querySelectorAll("p.ccl-649204f2a8e630fd.ccl-6f43f9bb8ff2d712.ccl-08c109442f3e666d.ccl-40ad99f7b47f3781, p.ccl-649204f2a8e630fd.ccl-6f43f9bb8ff2d712.ccl-32ec9a3197735a65.ccl-08c109442f3e666d.ccl-40ad99f7b47f3781.ccl-ea9144c387bfb5b8");

      for (const element of addons) {
        element.innerHTML = "";
      }

      document.querySelector(".MenuItemModal-64049887e657bc38").remove();

    }
  }
}

const observer = new MutationObserver(callback);

observer.observe(body, config);
