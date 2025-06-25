<template>
  <q>
    <slot></slot>
  </q>
</template>
<style lang="scss" scoped>
q {
  quotes: none; /* 禁用默认引号 */
  font-weight: 500;
  color: var(--vp-c-brand-1);
  text-decoration: underline;
  text-underline-offset: 2px;
  transition: color var(--vp-t-color), opacity var(--vp-t-color),
    text-underline-offset var(--vp-t-color);
  touch-action: manipulation;
  &:hover {
    color: var(--vp-c-brand-2);
    text-underline-offset: 5px;
  }
}
</style>
