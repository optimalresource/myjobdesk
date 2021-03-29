<template>
  <div id="App">
    <i>
      Hint: Try to use the
      <code>tab</code> key to move around too
    </i>
    <ul>
      <li>
        <div>
          <h4>Dropd with default placeholder and list</h4>
        </div>
        <dropd :list="toppings"></dropd>
      </li>

      <li>
        <div>
          <h4>Dropd with closeOnBlur set to false</h4>
          <small>I will never close as long as you don't click me :)</small>
        </div>
        <dropd
          :closeOnBlur="false"
          placeholder="Choose"
          :list="toppings"
        ></dropd>
      </li>

      <li>
        <div>
          <h4>Dropd with value prop set</h4>
        </div>
        <dropd
          :value="toppings[2]"
          placeholder="Choose"
          :list="toppings"
        ></dropd>
      </li>

      <li>
        <div>
          <h4>Dropd with "item-change" event listener</h4>
          <small>{{ currentItem || "Choose to begin" }}</small>
        </div>
        <dropd
          placeholder="Choose"
          :list="toppings"
          @item-change="currentItem => (this.currentItem = currentItem + ' ❤️')"
        ></dropd>
      </li>

      <li>
        <div>
          <h4>Dropd with defaultOpen set to true</h4>
          <small>I'll only close when you click on something else</small>
        </div>
        <dropd defaultOpen placeholder="Choose" :list="toppings"></dropd>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    currentItem: null,
    toppings: ["Caramel", "Peanut butter", "Sundae", "Oreos"]
  }),
  name: "DependencyDropdown"
};
</script>

<style lang="scss">
// Do not mind these styles, they're just for demo.

html {
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Segoe UI",
    "Oxygen", "Ubuntu", "Cantarell", "Open Sans", sans-serif;
}

body {
  margin: 0;
  background: #f4f6fa;
}

#app {
  h4 {
    margin: 0;
  }

  > ul {
    margin: 0;
    display: flex;
    flex-direction: column;
    padding: 0 30px;

    > li {
      width: 100%;
      margin: 20px 0;
      display: flex;
      text-align: left;
      align-items: center;
      justify-content: space-between;

      > div:first-of-type {
        width: 50%;
        margin-right: 30px;
      }

      small {
        display: flex;
        font-size: 0.8em;
        color: #999999;
        margin-top: 5px;
      }
    }
  }
}

.dropd {
  flex-grow: 1;
  max-width: 400px;
}
</style>
