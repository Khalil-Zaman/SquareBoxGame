function set_cookies_php(arc, level, deaths, stars){
  $.ajax({
    url: 'cookies.php',
    method: 'POST',
    data: {'arc': arc, 'level': level, 'deaths': deaths, 'stars': stars},
    success: function(data){
      alert(data);
    }
  });
}
