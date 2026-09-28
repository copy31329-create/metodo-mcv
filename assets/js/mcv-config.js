window.MCV_CONFIG = {
  checkoutUrl: "",
  contactUrl: ""
};

document.addEventListener("DOMContentLoaded", function () {
  var config = window.MCV_CONFIG || {};

  document.querySelectorAll("[data-mcv-checkout]").forEach(function (link) {
    if (config.checkoutUrl) {
      link.href = config.checkoutUrl;
      link.target = "_blank";
      link.rel = "noopener";
    } else {
      link.href = "#oferta";
    }
  });

  document.querySelectorAll("[data-mcv-contact]").forEach(function (link) {
    if (config.contactUrl) {
      link.href = config.contactUrl;
      link.target = "_blank";
      link.rel = "noopener";
    } else {
      link.href = "contato.html";
    }
  });
});
