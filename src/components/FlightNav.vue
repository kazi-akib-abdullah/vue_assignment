<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <div class="col-8 float-start">
          <a class="navbar-brand" href="#">Flight For You</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div
          class="collapse navbar-collapse col-4 float-end"
          id="navbarNavAltMarkup"
        >
          <div class="navbar-nav float-end">
            <a class="nav-link active" aria-current="page" href="#">Offers</a>
            <a class="nav-link" href="#">Manage</a>
            <a class="nav-link" href="#">Experience</a>
            <a class="nav-link">Marco Polo Club</a>
            <a class="nav-link">Business</a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "Kazi Akib Abdullah",
    };
  },
};
</script>