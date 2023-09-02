const sale = [
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https:fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: "4 habitaciones",
    costo: 5000,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Apartamento acogedor en la montaña",
    src: "https:cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcion:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    ubicacion: "789 Mountain Road, Summit Peaks, CA 234568",
    habitaciones: "2 habitaciones",
    costo: 1200,
    smoke: true,
    pets: true,
  },
  {
    nombre: " Penthouse de lujo con terraza panorámica",
    src: "https:img.freepik.com/foto-gratis/disparo-angulo-fachada-edificio-moderno-blanco-cielo-azul-claro_181624-48219.jpg?w=740&t=st=1693587340~exp=1693587940~hmac=fc545f4f77b42a294a0eabbd20583cb50f9afab474c479e6db1091f44a1a173b",
    descripcion:
      " Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: "3 habitaciones",
    costo: 4500,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Villa Serenidad",
    src: "https:img.freepik.com/foto-gratis/arquitectura-moderna-apartamentos_1268-14696.jpg?w=740&t=st=1693587427~exp=1693588027~hmac=e4e3286148aca89cba9775556bf71af0110761cf69a5069c284bcaeae30f6d7b",
    descripcion: "Una villa espaciosa con vistas panorámicas al mar",
    ubicacion: "Costa tropical",
    habitaciones: "5 habitaciones",
    costo: 5000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Apartamento Urbano",
    src: "https:img.freepik.com/foto-gratis/sala-estar-lujo-loft-representacion-3d-estante-cerca-mesa-comedor_105762-2052.jpg?w=740&t=st=1693587451~exp=1693588051~hmac=12f3ff2ad8e2dd3137e33e17589cf6f82fe8374a8a722d54eee7bd1d1fe27183",
    decripcion: "Moderno apartamento en el corazón de la ciudad",
    ubicacion: "Centro urbano",
    habitaciones: "2 habitaciones",
    costo: 2500,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Refugio Natural",
    src: "https:img.freepik.com/foto-gratis/elegante-moderna-casa-madera-campo-generada-ia_24640-99875.jpg?w=826&t=st=1693587480~exp=1693588080~hmac=61696b7272e205ba7363fe731d78c6c054e63b8244ccbf6ad2abbf761c3d7921",
    decripcion: "Cabaña acogedora en medio del bosque",
    ubicacion: "Bosque tranquilo",
    habitaciones: "1 habitacion",
    costo: 1200,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Residencia Elegante",
    src: "https:img.freepik.com/foto-gratis/villa-lujo-piscina-espectacular-diseno-contemporaneo-arte-digital-bienes-raices-hogar-casa-propiedad-ge_1258-150749.jpg?w=740&t=st=1693587494~exp=1693588094~hmac=53143dc469178dd3795e38b755d10cb9cfdc4d3148c5095bb18dca5908097f2b",
    decripcion: "Una residencia de lujo con todas las comodidades",
    ubicacion: "Barrio exclusivo",
    habitaciones: "8 habitaciones",
    costo: 1200,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Casa Familiar",
    src: "https:img.freepik.com/fotos-premium/paneles-energia-solar-techo-casa-tarde-al-atardecer_993599-7064.jpg?w=826",
    decripcion: "Casa espaciosa perfecta para una familia",
    ubicacion: "Vecindario amigable",
    habitaciones: "4 habitaciones",
    costo: 3200,
    smoke: true,
    pets: true,
  },
];

const rent = [
  {
    nombre: " Apartamento en el centro de la ciudad",
    src: "https:images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: "3 habitaciones",
    costo: 2000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Apartamento luminoso con vista al mar",
    src: "https:images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar",
    ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789 ",
    habitaciones: "3 habitaciones",
    costo: 2500,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Condominio moderno en zona residencial",
    src: "https:images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    descripcion:
      "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    ubicacion: "123 Main Street,  Anytown, CA 91234",
    habitaciones: "2 habitaciones",
    costo: 2200,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Estudio Moderno",
    src: "https:img.freepik.com/foto-gratis/empleada-relajada-trabajando-oficina_23-2147601420.jpg?w=740&t=st=1693587623~exp=1693588223~hmac=b6b7bdf70514502a2337400274a0b5511f3a31387763737316f9da37f9969fe7",
    decripcion: "Un estudio con diseño contemporáneo",
    ubicacion: "Área artística",
    habitaciones: "1 habitacion",
    costo: 1500,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Rancho Rústico",
    src: "https:img.freepik.com/psd-gratis/granja-moderna-colina-pradera-ia-generativa_587448-2199.jpg?w=826&t=st=1693587658~exp=1693588258~hmac=95666438ab059cfe179e7fceee4b4e44c76e34889ce9d0f2039016a972e55a1e",
    decripcion: "Rancho con encanto en las colinas",
    ubicacion: "Campo sereno",
    habitaciones: "6 habitacion",
    costo: 3800,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Piso Moderno",
    src: "https:img.freepik.com/foto-gratis/cocina-domestica-lujo-elegante-diseno-madera-generada-ia_188544-15357.jpg?w=826&t=st=1693587679~exp=1693588279~hmac=143a5aa06e052b54761e0d1714317cf96db2d0da56fad87b36c36150576528cc",
    decripcion: "Piso elegante con vistas a la ciudad",
    ubicacion: "Centro urbano",
    habitaciones: "3 habitaciones",
    costo: 2800,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Casa Playa",
    src: "https:img.freepik.com/fotos-premium/golden-treehouse-in-lush-beach-generative-ai_918715-64.jpg",
    decripcion: "Casa a pasos de la playa para los amantes del mar",
    ubicacion: "Costa soleada",
    habitaciones: "3 habitaciones",
    costo: 4200,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Refugio Montañés",
    src: "https:img.freepik.com/foto-gratis/pequena-cabana-campo_181624-1002.jpg?w=740&t=st=1693587743~exp=1693588343~hmac=f6cfa1402b68bf3b4daa7519a05a2a7eb34df927f6470e7ed293ec217ebd55eeimagen10.jpg",
    decripcion: "Refugio en la montaña con vistas panorámicas",
    ubicacion: "Montañas majestuosas",
    habitaciones: "2 habitaciones",
    costo: 1800,
    smoke: false,
    pets: true,
  },
];


function generateCardHTML(card) {
    const fumar = card.smoke
      ? `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`
      : `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`;
  
    const mascotas = card.pets
      ? `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>`
      : `<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>`;
  
    return `
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="${card.src}" class="card-img-top" alt="Imagen del departamento" />
          <div class="card-body">
            <h5 class="card-title">${card.nombre}</h5>
            <p class="card-text">${card.descripcion}</p>
            <p>${card.ubicacion}</p>
            <p><i class="fas fa-bed"></i> ${card.habitaciones} | <i class="fas fa-bath"></i> 4 Baños</p>
            <p><i class="fas fa-dollar-sign"></i> ${card.costo}</p>
            ${fumar} 
            ${mascotas}
          </div>
        </div>
      </div>`;
  }
  
  const salesContent = document.querySelector("#salesRow");
  const rentContent = document.getElementById("alquilerrow");
  
  const indexPage = document.getElementById("indexpage");
  
  if (indexPage) {
    let limiteSale = 0;
    let limiteRent = 0;
  
    for (const card of sale) {
      limiteSale++;
      salesContent.innerHTML += generateCardHTML(card);
  
      if (limiteSale === 3) {
        break;
      }
    }
  
    for (const card of rent) {
      limiteRent++;
      rentContent.innerHTML += generateCardHTML(card);
  
      if (limiteRent === 3) {
        break;
      }
    }
  }
  
  if (salesContent && !indexPage) {
    for (const card of sale) {
      salesContent.innerHTML += generateCardHTML(card);
    }
  }
  
  if (rentContent && !indexPage) {
    for (const card of rent) {
      rentContent.innerHTML += generateCardHTML(card);
    }
  }
  