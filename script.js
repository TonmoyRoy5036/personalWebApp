$(document).ready(function() {
  function animateSkillsProg() {
    $(".skills-prog li").each(function() {
      var percent = $(this).data("percent");
      var percentValue = parseFloat(percent);
      $(this)
        .find(".bar")
        .animate(
          {
            width: percentValue + "%"
          },
          1000,
          "linear",
          function() {
            return $(this).css({
              "transition-duration": ".5s"
            });
          }
        );
    });
  }

  function animateSkillsSoft() {
    $(".skills-soft li").each(function() {
      var circle = $(this).find("svg .cbar");
      var r = circle.attr("r");
      var c = Math.PI * (r * 2);
      var percent = $(this).data("percent");
      var percentValue = parseFloat(percent);
      var cbar = (100 - percentValue) / 100 * c;
      circle.css({
        "stroke-dashoffset": c,
        "stroke-dasharray": c
      });
      circle.animate(
        {
          strokeDashoffset: cbar
        },
        1000,
        "linear",
        function() {
          return circle.css({
            "transition-duration": ".3s"
          });
        }
      );

      $(this)
        .find("small")
        .prop("Counter", 0)
        .animate(
          {
            Counter: percentValue
          },
          {
            duration: 1000,
            step: function(now) {
              return $(this).text(Math.ceil(now) + "%");
            }
          }
        );
    });
  }

  animateSkillsProg();
  animateSkillsSoft();
});
