<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="">
  <meta name="author" content="Dashboard">
  <meta name="keyword" content="Dashboard, Bootstrap, Admin, Template, Theme, Responsive, Fluid, Retina">
  <title>@yield('title')</title>

  <!--Header Script-->
    @include('admin.header_script')
  <!--/Header Script-->

  <!-- =======================================================
    Template Name: Dashio
    Template URL: https://templatemag.com/dashio-bootstrap-admin-template/
    Author: TemplateMag.com
    License: https://templatemag.com/license/
  ======================================================= -->
</head>

<body>
  <section id="container">
    <!-- **********************************************************************************************************************************************************
        TOP BAR CONTENT & NOTIFICATIONS
        *********************************************************************************************************************************************************** -->
    <!--header start-->
      @include('admin.header')
    <!--header end-->
    <!-- **********************************************************************************************************************************************************
        MAIN SIDEBAR MENU
        *********************************************************************************************************************************************************** -->
    <!--sidebar start-->
    
      @include('admin.menu')

    <!--sidebar end-->
    <!-- **********************************************************************************************************************************************************
        MAIN CONTENT
        *********************************************************************************************************************************************************** -->
    <!--main content start-->
    <section id="main-content">
<section class="wrapper">
        <div class="row">
          <div class="col-lg-12 main-chart">
            @yield('maincontent')
          </div>
          <!-- /col-lg-9 END SECTION MIDDLE -->
          <!-- **********************************************************************************************************************************************************
              RIGHT SIDEBAR CONTENT
              *********************************************************************************************************************************************************** -->

          {{-- @include('admin.right_sidebar') --}}


          <!-- /col-lg-3 -->
        </div>
        <!-- /row -->
      </section>
    </section>
      
    <!--main content end-->
    <!--footer start-->
    
    @include('admin.footer')

    <!--footer end-->
  </section>
  
  {{-- Footer Script --}}
    @include('admin.footer_script')
  {{-- / Footer Script --}}
 
  @yield('script')
  
</body>

</html>
