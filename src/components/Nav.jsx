function Nav() {
    return (
      <>
          <header>
        <nav class="navbar navbar-dark fixed-top">
          <div class="container-fluid cf-header">
            <a class="navbar-brand" href="./index.html"><img src="fotos/nestorSanzSRL50.png" alt="Logo de nestorSanzSRL50"/></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
              <div class="offcanvas-header">
                <img class="offcanvas-title" id="offcanvasDarkNavbarLabel" src="./Fotos/nestorSanzSRL50.png" alt="Logo de nestorSanzSRL50"/>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Quienes Somos
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark">
                      <li><a class="dropdown-item" href="../../index.html">Historia</a></li>
                      <li><a class="dropdown-item" href="../Quienes somos/politicas.html">Política de Calidad y Medio Ambiente</a></li>
                      <li><a class="dropdown-item" href="../Quienes somos/clientes.html">Nuestros clientes</a></li>
                    </ul>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Servicios
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark">
                      <li><a class="dropdown-item" href="../Servicios/matriceria.html">Matricería</a></li>
                      <li><a class="dropdown-item" href="../Servicios/inyeccion.html">Inyección</a></li>
                      <li><a class="dropdown-item" href="../Servicios/soplado.html">Soplado</a></li>

                    </ul>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Productos
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark">
                      <li><a class="dropdown-item" href="../Productos/Productos.html#Campo">Campo</a></li>
                      <li><a class="dropdown-item" href="../Productos/Productos.html#Oficina">Oficina</a></li>
                      <li><a class="dropdown-item" href="../Productos/Productos.html#Bazar">Bazar</a></li>     
                      <li><a class="dropdown-item" href="../Productos/Productos.html#Farmacia">Farmacia</a></li>
                      <li><a class="dropdown-item" href="../Productos/Productos.html#Accesorios">Accesorios</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
    </header>
      </>
    );
  }
  
  export default Nav;
  