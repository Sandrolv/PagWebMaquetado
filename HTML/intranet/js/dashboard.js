const capHeaderContainer = document.querySelector(".headerContainer");
const capIcon = document.querySelector(".menu");
const capNavArea = document.querySelector(".navbarArea");
const body = document.querySelector("body");

const navbar = `<div class="nav-options"><ul><li><a href="#"><div><i class="fas fa-chart-area"></i><p>Dashboard</p></div></a></li><li><a href="#"><div><i class="fas fa-hand-holding-seedling"></i><p>Plantas</p></div></a></li><li><a href="#"><div><i class="fas fa-hand-holding-magic"></i><p>Categorias</p></div></a></li><li><a href="#"><div><i class="fas fa-hand-holding-usd"></i><p>Ventas</p></div></a></li><li><a href="#"><div><i class="fas fa-hand-holding-box"></i><p>Proveedores</p></div></a></li><li><a href="#"><div><i class="fas fa-hands-usd"></i><p>Ingresos</p></div></a></li><li><a href="#"><div><i class="fas fa-handshake"></i><p>Clientes</p></div></a></li></ul></div><div class="acceso">Accesos</div><div class="nav-options"><ul><li><a href="#"><div><i class="fas fa-users"></i><p>Vendedores</p></div></a></li><li><a href="#"><div><i class="fas fa-person-carry"></i><p>Distribuidores</p></div></a></li><li><a href="#"><div><i class="fas fa-flower-tulip"></i><p>Floricultores</p></div></a></li></ul></div><div class="nav-user"><div><div class="user-left"><img src="https://avatars.dicebear.com/api/miniavs/Violeta.svg" alt=""><p>Amanda Brand</p></div><div class="user-right"><a href="#">Cerrar Sesión</a></div></div></div>`;

var time;
// 465px
const infoMenu = (status) => {
  status ? (capNavArea.innerHTML = navbar) : (capNavArea.innerHTML = " ");
};
const menuOpen = (status) => {
  status
    ? ((capHeaderContainer.style.height = "465px"),
      infoMenu(true),
      clearTimeout(time),
      (body.style.overflow = "hidden"))
    : (capHeaderContainer.removeAttribute("style"),
      (time = setTimeout(() => infoMenu(false), 1000)),
      (body.style.overflow = "auto"));
};

capIcon.onclick = () => {
  capIcon.classList[1] == "fa-bars"
    ? (capIcon.classList.replace("fa-bars", "fa-times"), menuOpen(true))
    : (capIcon.classList.replace("fa-times", "fa-bars"), menuOpen(false));
};
