const data = [
    { type: "Estudiante", descuento: 80 },
    { type: "Trainee", descuento: 50 },
    { type: "Junior", descuento: 20 },
  ];
  
  const divCard = document.getElementById("div-card");
  
  data.forEach((jobs) => {
    const div = document.createElement("div");
    div.classList.add("col-md-4");
    div.innerHTML = `
      <div class="card">
          <div class="card-body myCards">
              <h4 class="card-title">${jobs.type}</h4>
              <p class="card-text">Tienen un descuento</p>
              <p class="card-text">${jobs.descuento}%</p>
              <p class="text-muted text-small">*Presentar documentación</p>
          </div>
      </div>`;
    divCard.appendChild(div);
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
    div.style.width = "240px";
    div.style.height = "240px";
    div.style.margin = "1px";
  
    if (jobs.type === "Estudiante") {
      div.style.border = "1px Blue solid";
    }
    if (jobs.type === "Trainee") {
      div.style.border = "1px Green solid";
    }
    if (jobs.type === "Junior") {
      div.style.border = "1px red solid";
    }
  });
  const createModal = document.getElementById("btnTotal");
  let firstname = document.getElementById("firstName");
  let lastname = document.getElementById("lastName");
  let email = document.getElementById("email");
  let total = document.getElementById("total");
  let type = document.getElementById("type");
  let cantidad = document.getElementById("cantidad");
  let myModal = document.getElementById("myModal");
  
  //Calcular total de los tickets
  type.addEventListener("click", mostrar);
  
  function mostrar() {
    const cant = cantidad.value;
  
    console.log(cant, type.value);
  
    const estudiantePaga = cant * (200 - 200 * 0.8);
    const traineePaga = cant * (200 - 200 * 0.5);
    const juniorPaga = cant * (200 - 200 * 0.2);
    console.log("aca se suma");
  
    if (type.value === "elegir") {
      total.innerText = `Total a pagar: `;
    }
    if (type.value === "estudiante") {
      total.innerText = `Total a pagar: $ ${estudiantePaga}`;
    }
    if (type.value === "trainee") {
      total.innerText = `Total a pagar: $${traineePaga}`;
    }
    if (type.value === "junior") {
      total.innerText = `Total a pagar: $${juniorPaga}`;
    }
  }
  
  //limpiar las entradas del form
  const borrar = () => {
    firstname.value = "";
    lastname.value = "";
    email.value = "";
    cantidad.value = "";
    type.value = "elegir";
    total.value = " ";
  };
  
  //mostrar el resumen de eleccion
  let modalCreado = false;
  createModal.addEventListener("click", ()=>{
      if (!modalCreado) {
          crearModal();
          myModal.style.display = "block";
          modalCreado = true;
      }else{
          myModal.style.display = "block";
      }
  });
  
  function crearModal() {
    const cant = cantidad.value;
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="modal-body">
              <p>Nombre: ${firstname.value} ${lastname.value}</p>
              <p>Cantidad de entradas: ${cant}  </p>
              <p>Tipo de entrada: ${type.value} </p>
          </div>`;
    myModal.appendChild(div);
  }
  
  const button = document.getElementById("btnRefresh");
  const close = document.getElementById("btnclose");
  
  
  
  button.addEventListener("click", () => {
    window.location.close;
  });
  close.addEventListener("click", () => {
      window.location.close
  })
  
  