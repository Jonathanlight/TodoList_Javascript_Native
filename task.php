<!DOCTYPE html>
<html>
<title>TODO</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
<link rel="stylesheet" href="css/style.css">
<body>
  <div id="hit-menu" class="col-xs-hide col-sm-hide"></div>
      <div class="menu-mobile-background "></div>
      <div id="header">
          <div class="header-inner">
              <div class="header-topo">
                  <button class="button-menu-mobile ">
                      <div class="box-stripes">
                          <span class="stripe-top"></span>
                          <span class="stripe-middle"></span>
                          <span class="stripe-bottom"></span>
                      </div>
                  </button>
                  <span class="header-nomeEmpresa header-nomeEmpresa_mobile col-xs-show col-sm-show">MENU</span>
                  <a href="#" class="brand-icon ">TODO</a>
              </div>
          </div>
      </div>
      <div id="menu" class="">
          <div class="menu-header">
              <span class="shape-remove-shadow_green"></span>
              <span class="shape-remove-shadow_white"></span>
              <div class="header-topo">
                  <div class="header-controlMenu  col-sm-hide col-xs-hide">
                      <span class="header-nomeEmpresa">MENU</span>
                      <button class="header-controlMenuButton">---</button>
                      <div class="clear"></div>
                  </div>
              </div>
              <div class="header-menu">
                  <div class="header-search ">
                      <div id="userConnect"></div>
                  </div>
              </div>
          </div>
          <div class="menu-box">
              <div class="menu-wrapper-inner">
                  <div class="menu-wrapper">
                      <div class="menu-slider">
                          <!-- <div class="menu">
                              <ul >
                                  <li>
                                      <div class="menu-item"><a href="#" class="">List task</a></div>
                                  </li>
                                  <li>
                                      <div class="menu-item"><a href="#" class="">Share task</a></div>
                                  </li>
                              </ul>
                          </div>
                          <div class="clear"></div> -->
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div id="conteudo">
          <div class="conteudo-inner">
              <div class="conteudo-wrapper">
                  <div class="conteudo-titleSection">
                      <strong class="conteudo-title">TODO LIST</strong>
                  </div>
                  <div class="conteudo-box">
                    <div class="resp-box col-2">
                      <strong class="conteudo-title">Create a Task</strong>
                        <div class="">
                          <form class="form-signin" id="formLogin">
                            <input type="text" class="form-control" value="" placeholder="New task" required="" id="task" />
                            <input type="color" name="name" value="#00ff00" required id="color" /><br><br>
                            <button class="button" type="submit" id="btnTask" >Create</button>
                          </form>
                        </div>
                    </div>
                    <div class="resp-box col-2" >
                        <strong class="conteudo-title">Task list</strong>
                        <div id="listTask"></div>
                    </div>
                  </div>
              </div>
          </div>
      </div>
<script type="text/javascript" src="js/app.js" defer></script>
<script type="text/javascript" src="js/todo.js" defer></script>
</body>
</html>
