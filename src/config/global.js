export default {
  global: {
    componenteFormativo:
      'Planeación y promotoría para gestión del riesgo en comunidades',
    descripcionCurso:
      'En este componente formativo podrá reconocer las bases para realizar la planeación y promotoría del plan de gestión del riesgo, en el cual se tenga presente la participación ciudadana, los mecanismos y estrategias de capacitación y concientización en educación ambiental para la prevención del riesgo de desastres.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Diagnóstico y planificación participativa',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Identificación de las instituciones y organizaciones comunitarias',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Programas de capacitación y sensibilización',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Instrumentos de capacitación y sensibilización',
            hash: 't_1_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Diagnóstico y planificación participativa',
      referencia:
        'Fundación espacio cívico. (2020).<i> ¿Qué es la participación ciudadana?</i>. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=cF2Mz6JZwc0',
    },
    {
      tema: 'Diagnóstico y planificación participativa',
      referencia:
        'Grupo Motiva. (2017). <i>Método práctico de 4 pasos para capacitar y enseñar</i>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=tEBp4u2kF9g',
    },
    {
      tema: 'Diagnóstico y planificación participativa',
      referencia:
        'Gutiérrez, J. (2020). <i>Cómo hacer una campaña de sensibilización</i>. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=OYlgEGxR19c',
    },
    {
      tema: 'Diagnóstico y planificación participativa',
      referencia:
        'Unidad Nacional para la Gestión del Riesgo de Desastres [UNGRD]. (2013). <i>Guía para formación comunitaria en gestión del riesgo de desastres</i>.',
      tipo: 'Guía',
      descarga: '/downloads/Guia-para-formacion-comunitaria-grd.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Capacitación',
      significado:
        'se define como el conjunto de actividades didácticas, orientadas a ampliar los conocimientos, habilidades y aptitudes de un grupo de personas específico.',
    },
    {
      termino: 'Concienciación',
      significado:
        'acción y efecto de crear conciencia entre la gente acerca de un problema o fenómeno que se juzga importante.',
    },
    {
      termino: 'Grupos focales',
      significado:
        'es una técnica de investigación utilizada para recopilar datos a través de la interacción grupal. El grupo está compuesto por un pequeño número de personas, cuidadosamente seleccionadas en función de un conjunto de criterios predeterminados, como ubicación, edad, nivel socioeconómico o raza, para discutir un tema determinado.',
    },
    {
      termino: 'Grupos poblacionales',
      significado:
        'hace referencia a colectivos que, dentro de la población, comparten unas características similares en razón a la condición étnica, a la edad y al género.',
    },
    {
      termino: 'Organizaciones comunitarias',
      significado:
        'son aquellas organizaciones que están netamente relacionadas con la participación de las comunidades en la toma de decisiones que las competen, en temas sociales, económicos y ambientales.',
    },
    {
      termino: 'Participación comunitaria',
      significado:
        'se entiende como una toma de conciencia colectiva de toda la comunidad, sobre factores que frenan el crecimiento, por medio de la reflexión crítica y la promoción de formas asociativas y organizativas que facilita el bien común.',
    },
    {
      termino: 'Participación política',
      significado:
        'es un proceso que se genera únicamente con grupos de manera legal, legítima y conscientemente organizados, bien sea en partidos o movimientos políticos dentro de los cuales, los ciudadanos participan de las decisiones y gestiones que estén asociadas a la implementación de acciones públicas.',
    },
    {
      termino: 'Participación por incentivos',
      significado:
        'consiste en proveer recursos materiales por trabajo a cambio de alimentos, dinero, entre otros.',
    },
    {
      termino: 'Planificación',
      significado:
        'es la previa definición de los procedimientos y estrategias a seguir para alcanzar ciertas metas.',
    },
    {
      termino: 'Sensibilización',
      significado:
        'es una actividad que forma parte de la cultura inclusiva y promueve la creación de actitudes positivas de respeto, solidaridad, valoración y tolerancia.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ley No. 134. Congreso de la República. <i>Por la cual se dictan normas sobre mecanismos de participación ciudadana</i>. Mayo 31 de 1994.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=330',
    },
    {
      referencia:
        'Delgado, C. & Palacios, P. (s.f.). <i>Técnicas Educativas. Universidad del Azuay</i>.',
      link:
        'https://www.uazuay.edu.ec/sites/default/files/public/TECNICAS-EDUCATIVAS.pdf',
    },

    {
      referencia:
        'López, M. & Campos, A. (2015). La capacitación como instrumento potenciador para la gestión comunitaria. <i>Revista de Ciencias Sociales (RCS), 21</i>(1).',
      link: 'https://www.redalyc.org/pdf/280/28037734015.pdf ',
    },

    {
      referencia:
        'Matamoro, V. (1997). <i>Capacitación productiva y acción comunitaria un enfoque integrador</i>. CINTEFOR – OIT.',
      link:
        'https://www.oitcinterfor.org/sites/default/files/file_publicacion/pubmata.pdf',
    },

    {
      referencia:
        'Ministerio del Medio Ambiente de Chile. (2022). <i>Educación ambiental y participación ciudadana</i>.',
      link:
        'https://archivo.minambiente.gov.co/index.php/ordenamiento-ambiental-territorial-y-coordinacion-del-sina/educacion-y-participacion/programa-nacional-de-promotoria-ambiental-comunitaria',
    },

    {
      referencia:
        'Ministerio del Medio Ambiente de Colombia (2020). <i>Programa Nacional de Promotoría Ambiental Comunitaria</i>.',
      link:
        'https://archivo.minambiente.gov.co/index.php/ordenamiento-ambiental-territorial-y-coordinacion-del-sina/educacion-y-participacion/programa-nacional-de-promotoria-ambiental-comunitaria',
    },

    {
      referencia:
        'Naciones Unidas [ONU]. (1972). <i>Conferencia de las Naciones Unidas sobre el Medio Humano</i>, 5 a 16 de junio de 1972, Estocolmo.',
      link: 'https://www.un.org/es/conferences/environment/stockholm1972',
    },

    {
      referencia:
        'UNESCO – PNUMA. (1977). <i>La Carta de Belgrado: un marco general para la educación ambiental</i>. Universidad de Belgrado.',
      link: 'https://unesdoc.unesco.org/ark:/48223/pf0000017772_spa',
    },

    {
      referencia:
        'Unidad Nacional para la Gestión del Riesgo de Desastres [UNGRD]. (2013). <i>Guía para formación comunitaria en gestión del riesgo de desastres.</i>',
      link:
        'http://www.gestiondelriesgo.gov.co/sigpad/archivos/Guia-para-formacion-comunitaria-grd.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
