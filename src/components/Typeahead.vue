<template>
  <div>
    <input
      v-model="query"
      @blur="reset"
      type="text"
      class="SearchInput"
      :placeholder="placeholder"
    />
    <transition-group name="fade" tag="ul" class="Results">
      <li v-for="item in filtered" :key="item">
        <span>
          <strong>{{ item.title }}</strong> - <small>{{ item.id }}</small
          ><br />
          <small>{{ item.body }}</small>
        </span>
      </li>
    </transition-group>
    <p v-show="isEmpty">
      Sorry, but we can't find any match for given term &#128524;
    </p>
  </div>
</template>

<script>
export default {
  name: "Typeahead",
  data() {
    return {
      items: [],
      query: "",
    };
  },
  methods: {
    fetchItems() {
      if (typeof this.source === "string") {
        fetch(this.source)
          .then((stream) => stream.json())
          .then((data) => (this.items = data))
          .catch((error) => console.error(error));
      } else {
        this.items = this.source;
      }
    },
    reset() {
      this.query = "";
    },
  },
  mounted() {
    this.fetchItems();
  },
  props: {
    source: {
      type: [String, Array],
      required: true,
    },
    filterKey: {
      type: String,
      required: true,
    },
    startAt: {
      type: Number,
      default: 3,
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
.SearchInput {
  width: 100%;
  padding: 1.5em 1em;
  font-size: 1em;
  outline: 0;
  border: 5px solid #990066;
}
.Results {
  margin: 0;
  padding: 0;
  text-align: left;
  position: relative;
}
.Results li {
  background: rgba(53, 73, 94, 0.3);
  margin: 0;
  padding: 1em;
  list-style: none;
  width: 100%;
  border-bottom: 1px solid #990066;
  transition: ease-in-out 0.5s;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
