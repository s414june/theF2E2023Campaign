<template>
  <teleport to="body">
    <!-- Modal -->
    <div
      class="modal fade"
      :id="modalName"
      tabindex="-1"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl modal-dialog-centered">
        <div class="modal-content">
          <slot></slot>
        </div>
      </div>
    </div>
  </teleport>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
const props = defineProps({
  modalName: String,
});
</script>
