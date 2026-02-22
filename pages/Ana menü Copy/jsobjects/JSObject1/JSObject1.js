export default {
  setTheme(theme) {
    if (!theme) return;

    if (theme === "dark" || theme === "light" || theme === "neon") {
      storeValue("appTheme", theme);
      showAlert("Tema değiştirildi: " + theme, "success");
    } else {
      showAlert("Geçersiz tema!", "error");
    }
  },

  initTheme() {
    if (!appsmith.store.appTheme) {
      storeValue("appTheme", "dark");
    }
  }
}
