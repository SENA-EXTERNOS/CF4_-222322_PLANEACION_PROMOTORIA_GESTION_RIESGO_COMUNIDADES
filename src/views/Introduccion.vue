<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.mb-5
      .col-md-9.mb-4.mb-md-0
        p Apreciado aprendiz, bienvenido a este componente formativo, donde se profundiza sobre la importancia vital de la participación ciudadana en la sociedad, en los procesos de creación y promoción de los planes de gestión del riesgo de desastres; los individuos son los actores centrales y principales dentro de los escenarios de riesgo y, por ende, deben capacitarse y actuar de manera oportuna, para asegurar una correcta prevención y respuesta a las actividades que puedan afectar la salud humana, el entorno, y los bienes de las comunidades.
 
        p Las temáticas que se trabajarán a continuación, permitirán profundizar tópicos que van desde los grupos focales, hasta los mecanismos de participación constitucionales y desde la clasificación de las comunidades, hasta las técnicas educativas. En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo:

      .col-lg-3
        img.img-a(src='@/assets/curso/temas/tema_1/img_1.png', alt='Texto que describa la imagen')


    figure.mb-5(data-aos="zoom-in-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/8mz7N9AP3BE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
