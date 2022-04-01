<template>
  <footer class="bg-dark text-center text-white" style="position: relative; bottom: 0; left: 0; width: 100%; margin-top: 50px">
  <!-- Grid container -->
  <div class="container p-4">
    <!-- Section: Iframe -->
    <section class="">
      <div class="row d-flex justify-content-center">
        <div class="col-lg-6">
          <div class="ratio ratio-16x9">
            <iframe
              width="445px"
              height="250px"
              class="shadow-1-strong rounded"
              src="https://www.youtube.com/embed/46oK1g0yfw8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
    <!-- Section: Iframe -->
  </div>
  <!-- Grid container -->

  <!-- Copyright -->
  <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
    <img src="../assets/logom.png" width="32" height="30" class="d-inline-block align-top" alt="Logo_Typo_Magnus">
    © 2022 Copyright:
    <a class="text-white" href="https://github.com/alexis-fondard/">Alexis FONDARD MARTIN</a>
  </div>
  <!-- Copyright -->
</footer>
</template>

<script>
  export default {
    data: () => ({
      links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us',
      ],
    }),
  }
</script>