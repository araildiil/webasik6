function makeImage(bg, label) {
  var svg =
    '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">' +
    '<rect width="100%" height="100%" fill="' +
    bg +
    '"/>' +
    '<text x="50%" y="50%" fill="white" font-size="32" font-family="Arial" ' +
    'text-anchor="middle" dominant-baseline="middle">' +
    label +
    "</text></svg>";
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}

// Task 0:
$(document).ready(function () {
  console.log("jQuery is ready!");

  // Highlight the active link in the navbar
  var page = location.pathname.split("/").pop() || "index.html";
  $(".navbar a").each(function () {
    if ($(this).attr("href") === page) {
      $(this).addClass("active");
    }
  });
});
