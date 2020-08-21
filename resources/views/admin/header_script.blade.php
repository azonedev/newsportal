  <!-- Favicons -->
  <link href="{{asset('/assets/admin/img/favicon.png')}}" rel="icon">
  <link href="{{asset('/assets/admin/img/apple-touch-icon.png')}}" rel="apple-touch-icon">

  <!-- Bootstrap core CSS -->
  <link href="{{asset('/assets/admin/lib/bootstrap/css/bootstrap.min.css')}}" rel="stylesheet">
  <!--external css-->
  <link href="{{asset('/assets/admin/lib/font-awesome/css/font-awesome.css')}}" rel="stylesheet" />
  <link rel="stylesheet" type="text/css" href="{{asset('/assets/admin/css/zabuto_calendar.css')}}">
  <link rel="stylesheet" type="text/css" href="{{asset('/assets/admin/lib/gritter/css/jquery.gritter.css')}}" />
  <!-- Custom styles for this template -->
  <link href="{{asset('/assets/admin/lib/advanced-datatable/css/demo_table.css')}}" rel="stylesheet" />
  <link rel="stylesheet" href="{{asset('/assets/admin/lib/advanced-datatable/css/DT_bootstrap.css')}}" />
  <link href="{{asset('/assets/admin/lib/advanced-datatable/css/demo_page.css')}}" rel="stylesheet" />

 <link href="{{asset('/assets/admin/css/style.css')}}" rel="stylesheet">
 <link href="{{asset('/assets/admin/css/style-responsive.css')}}" rel="stylesheet">
 <script src="{{asset('/assets/admin/lib/chart-master/Chart.js')}}"></script>


 <script type="application/javascript">
    $(document).ready(function() {
      $("#date-popover").popover({
        html: true,
        trigger: "manual"
      });
      $("#date-popover").hide();
      $("#date-popover").click(function(e) {
        $(this).hide();
      });

      $("#my-calendar").zabuto_calendar({
        action: function() {
          return myDateFunction(this.id, false);
        },
        action_nav: function() {
          return myNavFunction(this.id);
        },
        ajax: {
          url: "show_data.php?action=1",
          modal: true
        },
        legend: [{
            type: "text",
            label: "Special event",
            badge: "00"
          },
          {
            type: "block",
            label: "Regular event",
          }
        ]
      });
    });

    function myNavFunction(id) {
      $("#date-popover").hide();
      var nav = $("#" + id).data("navigation");
      var to = $("#" + id).data("to");
      console.log('nav ' + nav + ' to: ' + to.month + '/' + to.year);
    }
  </script>