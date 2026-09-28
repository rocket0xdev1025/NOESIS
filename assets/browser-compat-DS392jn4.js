async function c(t, e, n) {
  const o = new AbortController(),
    r = () => o.abort();
  t?.aborted ? r() : t?.addEventListener("abort", r, { once: !0 });
  const a = setTimeout(r, e);
  try {
    return await n(o.signal);
  } finally {
    clearTimeout(a), t?.removeEventListener("abort", r);
  }
}
function s(t, e) {
  return typeof t.addEventListener == "function"
    ? (t.addEventListener("change", e),
      () => t.removeEventListener("change", e))
    : (t.addListener(e), () => t.removeListener(e));
}
function i() {
  return {
    getItem(t) {
      try {
        return window.localStorage.getItem(t);
      } catch {
        return null;
      }
    },
    setItem(t, e) {
      try {
        window.localStorage.setItem(t, e);
      } catch {}
    },
    removeItem(t) {
      try {
        window.localStorage.removeItem(t);
      } catch {}
    },
  };
}
export { c as a, i as s, s as w };
