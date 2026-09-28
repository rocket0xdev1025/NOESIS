(() => {
  const href =
    "https://robinhoodchain.blockscout.com/token/0xD25eFCEB9D690E2A75a8b75E52A7C63cb9A214e0?tab=holders";
  const linkBurnAddress = () => {
    const address = document.querySelector(
      '.nh-burn small abbr[title="0x000000000000000000000000000000000000dEaD"]'
    );
    if (!address) return;
    const link = document.createElement("a");
    link.href = href;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.title = address.title;
    link.setAttribute(
      "aria-label",
      "View burn address " + address.title + " on Blockscout holders"
    );
    link.textContent = address.textContent;
    link.style.cssText =
      "color:#c8c0b3;text-decoration:underline;text-underline-offset:2px";
    address.replaceWith(link);
  };
  document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    if (!root) return;
    new MutationObserver(linkBurnAddress).observe(root, {
      childList: true,
      subtree: true,
    });
    linkBurnAddress();
  });
})();
