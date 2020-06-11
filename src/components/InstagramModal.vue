<template>
  <div>
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
              <slot name="header"></slot>
              <p class="header-text">Share to Instagram</p>
            </div>

            <div class="modal-body">
              <slot name="body"></slot>
              <ol class="steps">
                <li class="step-item">Download your customized banner</li>
                <li class="step-item">Upload to Instagram</li>
                <li class="step-item">Tag @gomoneyng and your friends</li>
              </ol>
            </div>

            <div class="modal-footer">
              <slot name="footer">
                <button class="button" @click="$emit('close')">Done</button>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 90%;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;

  @media screen and (min-width: 768px) {
    width: 50%;
  }

  @media screen and (min-width: 1024px) {
    width: 40%;
  }

  @media screen and (min-width: 1440px) {
    width: 30%;
  }
}

.modal-header {
  margin-top: 0;
  color: #42b983;
  font-size: 24px;
  font-weight: bold;
}

.modal-body {
  margin: 20px 0;
  font-size: 14px;

  .steps {
    line-height: 2.5;
    padding: 0.5rem 1.5rem;
  }
}

.modal-footer {
  text-align: right;
  padding: 1rem;

  .button {
    background: #f47079;
    color: #fff;
    padding: 1rem;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    font-weight: 500;
    font-size: 14px;
    outline-color: transparent;

    :active {
      -webkit-transform: translateY(1px);
      transform: translateY(1px);
    }
  }
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>