import react from "@vitejs/plugin-react";
import { defineConfig, lazyPlugins } from "vite-plus";

// https://vite.dev/config/
export default defineConfig({
  fmt: {},
  lint: {
    plugins: ["react", "typescript", "oxc"],
    rules: {
      "react/rules-of-hooks": "error",
      "react/only-export-components": [
        "warn",
        {
          allowConstantExport: true,
        },
      ],
    },
    // 注意：不要在这里加 `jsPlugins`。Vite+ 0.3.x / 1.x 的 JS 插件桥接在加载
    // 任意 jsPlugin 时都会在 oxc_allocator 的固定大小内存池里 panic
    // （crates/oxc_allocator/src/pool/fixed_size.rs:112），导致 `vp lint`
    // 直接以 134 退出。依赖它的 `vite-plus/prefer-vite-plus-imports` 规则
    // 因此暂时停用；等上游修复后再启用。
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
  plugins: lazyPlugins(() => [react()]),
});
